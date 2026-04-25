-- Bookings = a confirmed (or pending) party rental
-- One row per event. Status state-machine drives the entire automation chain.

create type booking_status as enum (
  'draft',              -- quote drafted, not yet sent
  'pending_deposit',    -- Cal.com slot held, Skipcash invoice issued, awaiting payment
  'confirmed',          -- deposit cleared, slot locked
  'reminded_t48',       -- T-48h Wati reminder sent
  'balance_due',        -- T-24h, balance reminder sent
  'paid_in_full',       -- balance cleared
  'in_progress',        -- setup team dispatched
  'delivered',          -- event done, post-pack-down
  'review_pending',     -- T+24h testimonial chase fired
  'closed',             -- testimonial captured or 14-day timeout
  'cancelled_refunded',
  'cancelled_forfeit',
  'rescheduled'
);

create type package_tier as enum ('mini', 'classic', 'signature');

create type venue_type as enum (
  'villa_garden',
  'villa_indoor',
  'apartment',
  'majlis',
  'hotel_suite',
  'hotel_ballroom',
  'beach',
  'compound_clubhouse',
  'nursery_school',
  'corporate_office',
  'other'
);

create table public.bookings (
  id                    uuid primary key default uuid_generate_v4(),
  client_id             uuid not null references public.clients(id) on delete restrict,
  cal_event_id          text unique,                          -- Cal.com booking reference
  event_date            date not null,
  event_start_time      time not null,
  duration_hours        smallint default 4,
  package               package_tier not null,
  head_count            smallint not null,
  venue_type            venue_type,
  venue_address         text,
  venue_compound        text,
  qar_total             numeric(10,2) not null,
  qar_deposit           numeric(10,2) not null,
  qar_balance           numeric(10,2) not null,
  addons                jsonb default '[]'::jsonb,            -- array of add-on ids from packages.yaml
  skipcash_invoice_id   text unique,
  skipcash_payment_id   text,
  deposit_paid_at       timestamptz,
  balance_paid_at       timestamptz,
  status                booking_status not null default 'draft',
  notes                 text,
  source_event_id       uuid,                                  -- nullable; for reactivation chains
  created_at            timestamptz default now(),
  updated_at            timestamptz default now()
);

-- Idempotency: only one active booking per cal_event_id
create unique index bookings_cal_event_unique on public.bookings (cal_event_id) where cal_event_id is not null;

-- Lookup indices
create index bookings_client_idx on public.bookings (client_id);
create index bookings_event_date_idx on public.bookings (event_date);
create index bookings_status_idx on public.bookings (status);
create index bookings_skipcash_idx on public.bookings (skipcash_invoice_id);
create index bookings_upcoming_idx on public.bookings (event_date) where status not in ('cancelled_refunded', 'cancelled_forfeit', 'closed');

create trigger bookings_updated_at before update on public.bookings
  for each row execute function public.set_updated_at();

-- Lifetime QAR rollup on booking transitions
create or replace function public.recalc_client_lifetime()
returns trigger language plpgsql as $$
begin
  update public.clients c
    set lifetime_qar = coalesce(
      (select sum(qar_total)
         from public.bookings b
         where b.client_id = coalesce(new.client_id, old.client_id)
           and b.status in ('paid_in_full','delivered','review_pending','closed')),
      0
    ),
    last_contact = greatest(coalesce(c.last_contact, '-infinity'::timestamptz), now())
  where c.id = coalesce(new.client_id, old.client_id);
  return null;
end $$;

create trigger bookings_lifetime_recalc
  after insert or update of qar_total, status or delete on public.bookings
  for each row execute function public.recalc_client_lifetime();

alter table public.bookings enable row level security;
