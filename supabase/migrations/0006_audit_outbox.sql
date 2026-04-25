-- Audit log + idempotent outbox for the booking automation chain
-- Every webhook fire and every outbound (Wati / Resend / Telegram) lands here for retry + reconciliation

create type outbox_kind as enum (
  'wati_template',
  'resend_email',
  'telegram_card',
  'skipcash_invoice',
  'cal_action',
  'other'
);

create type outbox_status as enum ('queued', 'sent', 'failed', 'skipped');

create table public.outbox (
  id              uuid primary key default uuid_generate_v4(),
  idempotency_key text unique not null,                -- e.g. "booking:{id}:t48_reminder"
  kind            outbox_kind not null,
  payload         jsonb not null,
  recipient       text,
  related_booking uuid references public.bookings(id) on delete set null,
  related_client  uuid references public.clients(id) on delete set null,
  status          outbox_status not null default 'queued',
  attempts        smallint default 0,
  last_error      text,
  sent_at         timestamptz,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

create index outbox_status_idx on public.outbox (status, created_at);
create index outbox_kind_idx on public.outbox (kind);

create trigger outbox_updated_at before update on public.outbox
  for each row execute function public.set_updated_at();


-- Webhook event audit (raw inbound from Cal.com / Skipcash / Wati)
create table public.webhook_events (
  id              uuid primary key default uuid_generate_v4(),
  source          text not null,                       -- 'cal' | 'skipcash' | 'wati'
  event_type      text not null,
  external_id     text,                                -- the source's event id for dedup
  signature_ok    boolean,
  payload         jsonb not null,
  processed_at    timestamptz,
  processing_error text,
  created_at      timestamptz default now()
);

create unique index webhook_external_unique on public.webhook_events (source, external_id) where external_id is not null;
create index webhook_source_idx on public.webhook_events (source, created_at desc);
create index webhook_processed_idx on public.webhook_events (processed_at) where processed_at is null;

alter table public.outbox enable row level security;
alter table public.webhook_events enable row level security;
