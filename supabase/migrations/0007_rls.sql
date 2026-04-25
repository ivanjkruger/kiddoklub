-- Row Level Security policies
-- 3 roles in scope:
--   anon          → public booking site (read availability summary only)
--   authenticated → Ivan's dashboard (full read on his own data)
--   service_role  → webhook handlers + skill scripts (full read/write, bypasses RLS by default)
--
-- The service_role key MUST stay server-side. Anon key is fine in browser.

-- Clients: no anon access
create policy clients_authenticated_select on public.clients
  for select to authenticated using (true);

-- Bookings: anon can see counts per date (for slot scarcity), nothing else
create policy bookings_authenticated_select on public.bookings
  for select to authenticated using (true);

-- Public availability view (anon-friendly aggregate)
create or replace view public.availability_v1 as
select
  event_date,
  count(*) filter (where status not in ('cancelled_refunded', 'cancelled_forfeit')) as booked_count
from public.bookings
where event_date >= current_date
  and event_date <= current_date + interval '120 days'
group by event_date;

grant select on public.availability_v1 to anon;

-- Dream100 / partners / content_log / outbox / webhook_events: authenticated only
create policy dream100_authenticated_select on public.dream100
  for select to authenticated using (true);

create policy partners_authenticated_select on public.partners
  for select to authenticated using (true);

create policy content_authenticated_select on public.content_log
  for select to authenticated using (true);

create policy outbox_authenticated_select on public.outbox
  for select to authenticated using (true);

create policy webhook_authenticated_select on public.webhook_events
  for select to authenticated using (true);

-- All writes happen via service_role (bypasses RLS), or explicit RPC functions in later migrations.
