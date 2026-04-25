-- Partners = active reciprocal-referral relationships
-- Content log = every post / reel / carousel we publish, with source event + measured reach

create type partner_type as enum (
  'event_planner',
  'decorator',
  'nursery',
  'cake_maker',
  'photographer',
  'mom_influencer',
  'hotel',
  'compound_manager',
  'school',
  'other'
);

create type referral_direction as enum ('we_send_them', 'they_send_us', 'reciprocal');

create table public.partners (
  id                   uuid primary key default uuid_generate_v4(),
  name                 text not null,
  type                 partner_type not null,
  primary_contact      text not null,
  contact_phone        text,
  contact_email        text,
  contact_handle       text,                              -- IG / FB
  direction            referral_direction default 'reciprocal',
  fee_qar              numeric(8,2),                       -- per-booking referral fee paid to them
  reciprocal_terms     text,
  bookings_received    integer default 0,
  bookings_sent        integer default 0,
  last_referral_at     timestamptz,
  active               boolean default true,
  notes                text,
  created_at           timestamptz default now(),
  updated_at           timestamptz default now()
);

create index partners_type_idx on public.partners (type);
create index partners_active_idx on public.partners (active);

create trigger partners_updated_at before update on public.partners
  for each row execute function public.set_updated_at();

-- Add FK from dream100.partner_id once partners exists
alter table public.dream100
  add constraint dream100_partner_fk foreign key (partner_id)
  references public.partners(id) on delete set null;


-- Content log = published posts + measured outcome
create type content_channel as enum (
  'instagram_feed',
  'instagram_reel',
  'instagram_story',
  'tiktok',
  'snapchat_story',
  'facebook',
  'website_blog',
  'whatsapp_status',
  'youtube_short',
  'other'
);

create table public.content_log (
  id                       uuid primary key default uuid_generate_v4(),
  posted_at                timestamptz not null default now(),
  channel                  content_channel not null,
  hook                     text,
  caption_en               text,
  caption_ar               text,
  source_event_id          uuid references public.bookings(id) on delete set null,
  asset_path               text,                            -- relative path under content/proof-pack/ or external CDN url
  reach                    integer default 0,
  saves                    integer default 0,
  shares                   integer default 0,
  comments                 integer default 0,
  bookings_attributed      integer default 0,
  qar_attributed           numeric(10,2) default 0,
  permalink                text,
  notes                    text,
  created_at               timestamptz default now(),
  updated_at               timestamptz default now()
);

create index content_channel_idx on public.content_log (channel);
create index content_posted_idx on public.content_log (posted_at desc);
create index content_source_event_idx on public.content_log (source_event_id);

create trigger content_updated_at before update on public.content_log
  for each row execute function public.set_updated_at();

alter table public.partners enable row level security;
alter table public.content_log enable row level security;
