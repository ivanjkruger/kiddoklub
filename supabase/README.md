# Supabase — KiddoKlub

## Project setup
1. Create a new Supabase project named `kiddoklub-prod` in the EU-Central (Frankfurt) region (consistent with `ivan-os` setup; lowest latency from Doha among EU regions, best privacy posture).
2. Plan: Free tier through Phase 1; bump to Pro when bookings cross 100/mo or when nightly backups become required.
3. Save secrets to macOS Keychain:
   ```
   security add-generic-password -A -s KIDDOKLUB_SUPABASE_URL -a ivan -w 'https://...supabase.co'
   security add-generic-password -A -s KIDDOKLUB_SUPABASE_ANON_KEY -a ivan -w '<anon key>'
   security add-generic-password -A -s KIDDOKLUB_SUPABASE_SERVICE_KEY -a ivan -w '<service key>'
   security add-generic-password -A -s KIDDOKLUB_SUPABASE_PROJECT_REF -a ivan -w '<project ref>'
   ```
4. `~/.zshrc` reads them via `security find-generic-password -s NAME -a ivan -w` (per global secret-handling rule).

## Migration order
```
0001_extensions.sql
0002_clients.sql
0003_bookings.sql
0004_dream100.sql
0005_partners_content.sql
0006_audit_outbox.sql
0007_rls.sql
```

Run via Supabase CLI:
```
supabase link --project-ref $KIDDOKLUB_SUPABASE_PROJECT_REF
supabase db push
```

## Seed data
- Past clients (Phase 0 Day 1 task): Nadine + Ivan extract 8-10 contacts from WhatsApp + camera roll → manually populated into `clients` via dashboard or `scripts/seed_clients.py`
- Dream-100: `scripts/dream100_loader.py` parses `content/dream-100.md` and inserts/upserts rows
- Packages: not stored in DB; source-of-truth is `content/packages.yaml` consumed by booking site at build time

## State machine reference
See `0003_bookings.sql` `booking_status` enum. Transitions:
- `draft` → `pending_deposit` (quote sent + Skipcash invoice created)
- `pending_deposit` → `confirmed` (deposit paid)
- `confirmed` → `reminded_t48` (Friday cron T-48h)
- `reminded_t48` → `balance_due` (T-24h Wati template)
- `balance_due` → `paid_in_full` (Skipcash second payment)
- `paid_in_full` → `in_progress` (setup team dispatched, manual flip)
- `in_progress` → `delivered` (event end, manual flip)
- `delivered` → `review_pending` (T+24h cron)
- `review_pending` → `closed` (review captured OR 14-day timeout)
- Any → `cancelled_refunded` / `cancelled_forfeit` / `rescheduled` per cancellation policy in CLAUDE.md

## RLS policy posture
- `anon`: read-only on `availability_v1` view (date + count). Nothing else.
- `authenticated`: read-only on every table (Ivan dashboard).
- `service_role`: full access (webhooks, skills, cron scripts).

Writes always go via service_role from server. Browser never gets a write.
