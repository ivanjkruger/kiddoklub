# KiddoKlub Weekend Setup Runbook

For Equipt Qatar setup team (Jamsheer + Khaleer). Abdul approves variations.

## T-7 days
- Booking confirmed in Supabase + deposit cleared (auto via Cal.com → Skipcash webhook chain)
- James fires Telegram alert "Booking locked: {date} {package} {address}"
- Equipt Qatar team gets internal Discuss thread auto-created (TBD: Phase 2 integration)

## T-2 days (Friday 16:00 cron)
- `kiddoklub-weekend-prep` skill fires per upcoming event
- Output: per-event Telegram card with
  - Event time + address
  - Package + add-ons
  - Head count + age range
  - Inventory pull list
  - Route + drive time from Waseef
  - Parent phone + WA link
  - Deposit status (must be CLEARED before T-2; else escalate)
  - Sanitization status (must be GREEN; else swap set)

## T-1 day (Wati template `weekend_reminder`)
- Auto-WA to parent: "Hi {name}, all set for tomorrow. We arrive at {time}. WhatsApp this number if anything changes."
- Confirm balance payment received

## Day-of
- Arrive 90 min before guests (industry standard, parent should not see setup chaos)
- Setup time: Mini ~30 min, Classic ~45 min, Signature ~60 min
- Photo: empty-setup hero shot (overhead flatlay, 4K) — uploaded to `content/proof-pack/{date}/hero.jpg`
- Photographer briefed (if Signature or add-on): see `ops/photographer-shotlist.md`
- Pack-down 30 min after end-time
- All equipment back at Waseef same evening; sanitization next morning

## T+1 hour post-pack-down
- Setup team WAs Ivan: "Done. Photos coming."
- Photographer delivers raw within 24h to `content/proof-pack/{date}/raw/`

## T+24 hours
- `kiddoklub-postparty-followup` skill fires
- Edited photos delivered to parent (20+ via Drive link)
- Testimonial ask + Google review link via Wati template `post_event_review`
- Parent asked: "Did your guests want our number? Send them this."
- Booking row in Supabase updated to `status=delivered`

## Failure modes + escalations
- Set damaged on transit → swap to spare; James pings Ivan; Abdul approves
- Parent complaint → Nadine handles (NOT Ivan, NOT setup team); Tier B confirm-before-write on any reply
- Weather (outdoor only) → reschedule free, never refund
- Equipt Qatar team unavailable → no event (don't subcontract until vetted helper SOP exists, Phase 3)
