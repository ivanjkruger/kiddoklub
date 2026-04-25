-- KiddoKlub baseline extensions + helpers
-- Run order: 0001 → 0002 → 0003 → 0004 → 0005

create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";
create extension if not exists "pg_trgm";

-- updated_at trigger helper
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;
