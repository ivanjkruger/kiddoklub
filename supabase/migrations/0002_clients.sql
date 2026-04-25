-- Clients = parents who have booked or shown interest
-- Source-of-truth for reactivation, LTV, segmentation

create type client_source as enum (
  'past_client',          -- pre-2026-04-25 history
  'personal_network',     -- Ivan or Nadine personal contact
  'website',              -- inbound via kiddoklub.com
  'instagram',            -- IG DM or profile click
  'whatsapp',             -- WA inbound
  'referral_partner',     -- planner / decorator / cake / photographer / nursery
  'mom_influencer',       -- seeded
  'doha_mums',            -- FB group
  'compound_group',       -- residential FB/WA group
  'meta_ad',
  'snap_ad',
  'google_ad',
  'google_organic',
  'walk_in',
  'other'
);

create type client_language as enum ('en', 'ar', 'mixed');

create table public.clients (
  id              uuid primary key default uuid_generate_v4(),
  name            text not null,
  parent_phone    text not null,
  parent_email    text,
  kid_names       text[] default '{}',
  first_event_date date,
  lifetime_qar    numeric(10,2) default 0,
  last_contact    timestamptz,
  source          client_source not null default 'other',
  compound        text,                                -- Pearl, Lusail, West Bay, Al Waab, etc.
  language        client_language default 'en',
  notes           text,
  vip             boolean default false,
  do_not_contact  boolean default false,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

create index clients_phone_idx on public.clients (parent_phone);
create index clients_compound_idx on public.clients (compound);
create index clients_source_idx on public.clients (source);
create index clients_last_contact_idx on public.clients (last_contact desc nulls last);
create index clients_name_trgm_idx on public.clients using gin (name gin_trgm_ops);

create trigger clients_updated_at before update on public.clients
  for each row execute function public.set_updated_at();

alter table public.clients enable row level security;
-- RLS policies set in 0006 once auth model is final.
