-- Refinements from Council 2026-04-25 Agent 3:
-- 1. Separate payments table (not amount fields on bookings) — supports deposit + balance + refund as rows
-- 2. idempotency_keys at the front of every webhook handler
-- 3. audit_log with trigger on bookings/payments
-- 4. Security-definer get_available_slots() for anon
-- 5. transition_booking() guard

-- ===========================================================================
-- 1. PAYMENTS (separate from bookings)
-- ===========================================================================
create type payment_kind as enum ('deposit', 'balance', 'addon', 'refund');
create type payment_status as enum ('pending', 'authorized', 'paid', 'failed', 'refunded', 'voided');

create table public.payments (
  id                    uuid primary key default uuid_generate_v4(),
  booking_id            uuid not null references public.bookings(id) on delete restrict,
  kind                  payment_kind not null,
  amount_qar            numeric(10,2) not null,
  status                payment_status not null default 'pending',
  skipcash_invoice_id   text,
  skipcash_payment_id   text,
  skipcash_payment_url  text,
  provider              text default 'skipcash',
  raw_webhook           jsonb,
  paid_at               timestamptz,
  refunded_at           timestamptz,
  created_at            timestamptz default now(),
  updated_at            timestamptz default now()
);

-- Idempotency: only ONE active payment row per (booking, kind)
-- (refunds are tracked but don't conflict with deposit/balance)
create unique index payments_booking_kind_unique
  on public.payments (booking_id, kind)
  where kind in ('deposit', 'balance') and status not in ('failed', 'voided');

create index payments_skipcash_invoice_idx on public.payments (skipcash_invoice_id);
create index payments_status_idx on public.payments (status);
create index payments_paid_at_idx on public.payments (paid_at desc nulls last);

create trigger payments_updated_at before update on public.payments
  for each row execute function public.set_updated_at();

alter table public.payments enable row level security;
create policy payments_authenticated_select on public.payments
  for select to authenticated using (true);

-- Drop the now-redundant payment-tracking columns from bookings
-- (kept as derived view via the payments table)
alter table public.bookings drop column if exists skipcash_invoice_id;
alter table public.bookings drop column if exists skipcash_payment_id;
alter table public.bookings drop column if exists deposit_paid_at;
alter table public.bookings drop column if exists balance_paid_at;

-- Convenience view: bookings with payment summary
create or replace view public.bookings_with_payments as
select
  b.*,
  (select sum(amount_qar) from public.payments p
    where p.booking_id = b.id and p.status = 'paid' and p.kind in ('deposit','balance','addon'))
    - coalesce((select sum(amount_qar) from public.payments p2
        where p2.booking_id = b.id and p2.status = 'refunded'), 0) as net_paid_qar,
  (select max(paid_at) from public.payments p where p.booking_id = b.id and p.kind = 'deposit' and p.status = 'paid') as deposit_paid_at,
  (select max(paid_at) from public.payments p where p.booking_id = b.id and p.kind = 'balance' and p.status = 'paid') as balance_paid_at
from public.bookings b;

grant select on public.bookings_with_payments to authenticated;

-- ===========================================================================
-- 2. IDEMPOTENCY KEYS — every webhook handler hits this first
-- ===========================================================================
create table public.idempotency_keys (
  key             text primary key,                       -- e.g. "cal:evt_abc123" or "skipcash:pay_xyz"
  source          text not null,                          -- 'cal' | 'skipcash' | 'wati'
  payload_hash    text not null,
  result          jsonb,
  created_at      timestamptz default now()
);

create index idempotency_source_idx on public.idempotency_keys (source, created_at desc);

-- Auto-prune older than 30 days (idempotency window beyond which a "replay" is genuinely new)
create or replace function public.prune_idempotency_keys()
returns void language sql as $$
  delete from public.idempotency_keys where created_at < now() - interval '30 days';
$$;

-- ===========================================================================
-- 3. AUDIT LOG — trigger on bookings + payments
-- ===========================================================================
create table public.audit_log (
  id          bigserial primary key,
  ts          timestamptz default now(),
  actor       text,                                       -- 'service_role' | user email
  action      text not null,                              -- 'INSERT' | 'UPDATE' | 'DELETE'
  entity      text not null,                              -- 'bookings' | 'payments' | etc
  entity_id   uuid,
  before      jsonb,
  after       jsonb
);

create index audit_log_entity_idx on public.audit_log (entity, entity_id);
create index audit_log_ts_idx on public.audit_log (ts desc);

create or replace function public.audit_trigger()
returns trigger language plpgsql security definer as $$
declare
  actor_id text;
begin
  begin
    actor_id := coalesce(current_setting('request.jwt.claims', true)::json->>'email', current_user);
  exception when others then
    actor_id := current_user;
  end;
  if (tg_op = 'DELETE') then
    insert into public.audit_log(actor, action, entity, entity_id, before)
      values (actor_id, tg_op, tg_table_name, old.id, to_jsonb(old));
    return old;
  elsif (tg_op = 'UPDATE') then
    insert into public.audit_log(actor, action, entity, entity_id, before, after)
      values (actor_id, tg_op, tg_table_name, new.id, to_jsonb(old), to_jsonb(new));
    return new;
  elsif (tg_op = 'INSERT') then
    insert into public.audit_log(actor, action, entity, entity_id, after)
      values (actor_id, tg_op, tg_table_name, new.id, to_jsonb(new));
    return new;
  end if;
end $$;

create trigger bookings_audit
  after insert or update or delete on public.bookings
  for each row execute function public.audit_trigger();

create trigger payments_audit
  after insert or update or delete on public.payments
  for each row execute function public.audit_trigger();

alter table public.audit_log enable row level security;
create policy audit_authenticated_select on public.audit_log
  for select to authenticated using (true);

-- ===========================================================================
-- 4. SECURITY DEFINER — anon-safe slot availability
-- ===========================================================================
create or replace function public.get_available_slots(
  start_date date,
  end_date   date
)
returns table (event_date date, slots_available int)
language sql security definer set search_path = public as $$
  with day_caps as (
    select gs::date as event_date, 4 as max_slots          -- 4 setups/day cap
    from generate_series(start_date::timestamp, end_date::timestamp, '1 day'::interval) gs
  ),
  booked as (
    select event_date, count(*) as taken
    from public.bookings
    where event_date between start_date and end_date
      and status not in ('cancelled_refunded', 'cancelled_forfeit')
    group by event_date
  )
  select d.event_date, d.max_slots - coalesce(b.taken, 0) as slots_available
  from day_caps d
  left join booked b using (event_date)
  order by d.event_date;
$$;

grant execute on function public.get_available_slots(date, date) to anon, authenticated;

-- ===========================================================================
-- 5. TRANSITION GUARD — only valid status flows
-- ===========================================================================
create or replace function public.is_valid_transition(
  current_status booking_status,
  new_status     booking_status
) returns boolean language sql immutable as $$
  select case
    -- Explicit valid edges
    when current_status = 'draft' and new_status in ('pending_deposit','cancelled_forfeit') then true
    when current_status = 'pending_deposit' and new_status in ('confirmed','cancelled_refunded','cancelled_forfeit') then true
    when current_status = 'confirmed' and new_status in ('reminded_t48','rescheduled','cancelled_refunded','cancelled_forfeit') then true
    when current_status = 'reminded_t48' and new_status in ('balance_due','rescheduled','cancelled_refunded','cancelled_forfeit') then true
    when current_status = 'balance_due' and new_status in ('paid_in_full','cancelled_refunded','cancelled_forfeit') then true
    when current_status = 'paid_in_full' and new_status in ('in_progress','cancelled_refunded') then true
    when current_status = 'in_progress' and new_status in ('delivered') then true
    when current_status = 'delivered' and new_status in ('review_pending') then true
    when current_status = 'review_pending' and new_status in ('closed') then true
    when current_status = 'rescheduled' and new_status in ('confirmed','cancelled_refunded') then true
    -- No transitions out of terminal states
    else false
  end;
$$;

create or replace function public.transition_booking(b_id uuid, new_status booking_status)
returns void language plpgsql as $$
declare
  current_s booking_status;
begin
  select status into current_s from public.bookings where id = b_id for update;
  if current_s is null then
    raise exception 'booking % not found', b_id;
  end if;
  if not public.is_valid_transition(current_s, new_status) then
    raise exception 'invalid transition: % -> %', current_s, new_status;
  end if;
  update public.bookings set status = new_status, updated_at = now() where id = b_id;
end $$;

-- ===========================================================================
-- 6. ADVISORY LOCK HELPER for slot races
-- ===========================================================================
create or replace function public.try_lock_slot(slot_iso text)
returns boolean language sql as $$
  select pg_try_advisory_xact_lock(hashtext('slot:' || slot_iso));
$$;
