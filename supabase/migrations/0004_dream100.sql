-- Dream 100 = the 85+ Doha targets we DM weekly via James
-- Source: content/dream-100.md (manual seed); status updated by kiddoklub-outreach-draft skill

create type dream100_segment as enum (
  'event_planner',
  'decorator',
  'nursery',
  'cake_maker',
  'photographer',
  'mom_influencer',
  'hotel',
  'compound',
  'other'
);

create type dream100_status as enum (
  'not_contacted',
  'following',          -- following them, not yet engaged
  'engaging',           -- liking + commenting their content
  'dm_sent',
  'replied',
  'in_conversation',
  'partner',            -- referral deal active
  'no_response',
  'declined',
  'do_not_contact'
);

create table public.dream100 (
  id              uuid primary key default uuid_generate_v4(),
  handle          text not null,                       -- IG @ handle
  name            text,                                -- business display name
  segment         dream100_segment not null,
  signal          text,                                -- the specific reason they're on the list
  followers       integer,
  notes           text,
  last_touch      timestamptz,
  reply_count     integer default 0,
  status          dream100_status not null default 'not_contacted',
  contact_phone   text,
  contact_email   text,
  city            text default 'Doha',
  language        text default 'en',
  partner_id      uuid,                                -- FK to partners once converted
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

create unique index dream100_handle_unique on public.dream100 (lower(handle));
create index dream100_segment_idx on public.dream100 (segment);
create index dream100_status_idx on public.dream100 (status);
create index dream100_last_touch_idx on public.dream100 (last_touch desc nulls last);

create trigger dream100_updated_at before update on public.dream100
  for each row execute function public.set_updated_at();

alter table public.dream100 enable row level security;
