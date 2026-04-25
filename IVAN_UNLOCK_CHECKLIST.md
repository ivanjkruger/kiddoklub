# Ivan's Unlock Checklist — Phase 0 + Phase 1

**Time-box:** ~3 hours of human work, spread across 1-3 days.
**Goal:** unblock the automation stack so KiddoKlub can take its first paid weekend booking via the new pipeline.

While Claude / James / Session B handle build, scaffold, content, and Drive — Ivan + Nadine do these. Each item lists who, what, time estimate, and what it unblocks downstream.

---

## P0 · This week (do first)

### 0.1 — Confirm domain
- **Who:** Ivan
- **What:** Verify the domain receipt. AskUserQuestion answer text said "KirillClub.com" which is almost certainly voice-to-text drift. Open the registrar receipt; confirm the actual registered domain spells `kiddoklub.com` (the brand we're building). Forward the receipt to `hello@kiddoklub.com` once that mailbox lands.
- **Time:** 5 minutes
- **Unblocks:** every DNS, Vercel, Workspace, Cal.com, Skipcash redirect URL.

### 0.2 — Mohammed conversation (Nadine's CR)
- **Who:** Ivan + Mohammed
- **What:** Explain that KiddoKlub is Nadine's separate trading entity (not Equipt). Ask Mohammed for the fastest legal route in Qatar: (a) Qatar Freelancer Permit via QFC (if available for service activities), (b) MOCI sole-proprietorship CR in Nadine's name with a Qatari local-partner setup, or (c) operate under "Nadine Kruger trading as KiddoKlub" informally for the first 10 paid bookings then file. Mohammed has done this before for Equipt — he'll know.
- **Time:** 30 min conversation + Mohammed action
- **Unblocks:** Skipcash merchant onboarding (needs CR), Wati WhatsApp Business API (needs CR), public liability insurance in Nadine's name (insurer prefers a registered entity), Meta + Snap verification when triggered.

### 0.3 — Public liability insurance (Nadine's name)
- **Who:** Ivan
- **What:** Get a quote from QIC, Qatar General Insurance, or Doha Insurance for QAR 1M public liability cover. Annual premium typically QAR 2-5K. Issued in Nadine's name. Pearl + Lusail compounds REQUIRE the COI before letting setup teams enter — non-negotiable.
- **Time:** 1 hour, plus 1-2 day insurer turnaround
- **Unblocks:** any Pearl/Lusail bookings; site footer trust signal; founder-story page credibility.

### 0.4 — Skipcash merchant account (Nadine's name)
- **Who:** Ivan
- **What:** Sign up at skipcash.app/signup. Use Nadine's CR (or freelance permit) once 0.2 lands. Bank account = Wio Personal QA or QNB Personal in Nadine's name. Onboarding 5-10 days. Plan B: MyFatoorah (cleaner docs per Council 2026-04-25, mappable HMAC pattern).
- **Time:** 30 min signup + 5-10 day approval
- **Unblocks:** deposit collection on every booking, payment links in WhatsApp, Phase 1 booking-intake skill end-to-end test.

### 0.5 — IG handle confirmation
- **Who:** Ivan / Nadine
- **What:** Confirm KiddoKlub's IG handle. Options: `@kiddoklub`, `@kiddoklubqa`, `@kiddoklub.qa`, `@kiddo.klub`. If none claimed, register the cleanest one Nadine can defend. If one is already Nadine's, share the login.
- **Time:** 10 minutes
- **Unblocks:** Session B IG audit + reel upload, paid Meta Reels ad campaign targeting (every ad needs a verified IG handle).

### 0.6 — Past-client list extraction (30-min Nadine session)
- **Who:** Nadine + Ivan (paired)
- **What:** Sit down for 30 minutes, scroll WhatsApp + camera roll Oct 2024 to today. List every parent who paid for a KiddoKlub setup. Capture: name, phone (E.164 with +974), kid's first name, package they had, approximate event date, compound. Save to Google Sheet "KiddoKlub past clients seed" in Drive `Business/KiddoKlub/Ops/`. Likely 8-10 entries.
- **Time:** 30 minutes
- **Unblocks:** Wednesday reactivation cron — the highest-leverage outreach hour. Without this list, no zero-CAC bookings.

---

## P1 · Days 7-14

### 1.1 — Free WhatsApp Business App on +974 5031 8434
- **Who:** Ivan or Nadine
- **What:** Install WA Business App on Nadine's phone for the +974 5031 8434 number. Configure: business name "KiddoKlub", category "Event planning", Doha address (use Waseef warehouse for now). Enable greeting message + away message. Add the 10 ready-to-send messages from `content/ready-to-send-messages.md` as Quick Replies.
- **Time:** 30 minutes
- **Unblocks:** Phase 1 inbound + reactivation. Free tier handles up to 256 contacts. Wati API migration is Day 30 (after CR).

### 1.2 — Cal.com event types (3 separate)
- **Who:** Ivan
- **What:** In existing Cal.com account create three event types: `kiddoklub-mini`, `kiddoklub-classic`, `kiddoklub-signature`. Per Council 2026-04-25: separate event types (NOT one with package as field) — better URLs for paid social, cleaner availability, separate buffers. 4-hour duration each. Custom fields: venue_address (long text required), kid_count (number), kid_age_range (select), addons (multiselect), parking_notes. Buffer-before 60min (setup), buffer-after 45min (teardown). Min booking notice 72h. Booking limit 1/day. Date range today + 90d.
- **Time:** 30 minutes
- **Unblocks:** webhook target for `kiddoklub-booking-intake` skill, the entire booking funnel.

### 1.3 — Supabase project + secrets
- **Who:** Ivan (Claude Code can drive this)
- **What:** Create Supabase project `kiddoklub-prod` in EU-Central (Frankfurt) — same region as ivan-os. Plan: free tier through Phase 1. Run migrations 0001-0008 from `supabase/migrations/`. Save URL + ANON + SERVICE keys to Keychain (per `supabase/README.md` checklist).
- **Time:** 30 minutes
- **Unblocks:** every cron job, the whole CRM, the dashboard, all skill data reads/writes.

### 1.4 — Vercel + DNS for kiddoklub.com
- **Who:** Ivan
- **What:** Connect kiddoklub.com domain to Vercel project once Next.js scaffold pushes (Session A delivers it). Configure A + CNAME records at registrar. SSL via Let's Encrypt automatic. Subdomain `dashboard.kiddoklub.com` for the revenue dashboard (basic-auth Ivan-only).
- **Time:** 30 minutes (mostly DNS propagation wait)
- **Unblocks:** site goes live, Cal.com webhook callbacks have a real URL, Skipcash callbacks have a real URL.

### 1.5 — Founding-family soft launch (Nadine voice notes)
- **Who:** Nadine, after 0.6 is done and James drafts the 8-10 reactivation scripts via `kiddoklub-reactivation` skill (post Tier B approval)
- **What:** Record one 30-second WhatsApp voice note per past client, send manually from her phone. NOT a typed message. Voice notes get 4-5x reply rate in Doha.
- **Time:** ~1 hour total across 8-10 clients
- **Unblocks:** first paid weekend bookings inside 7 days. Goal: 3-5 bookings.

---

## P2 · Days 15-30

### 2.1 — Wati WhatsApp Business API migration
- **Who:** Ivan
- **What:** After Nadine's CR lands (0.2), sign up for Wati at wati.io (~QAR 200-400/month). Submit utility templates for approval (Meta typically 1-4h for utility): `deposit_received_v2`, `balance_due_v2`, `party_reminder_v1`, `review_request_v1`. Verbatim wording in `docs/COUNCIL_2026_04_25.md`.
- **Time:** 1 hour signup + 1-4h template approval per template
- **Unblocks:** automated booking confirms, T-48h reminders, T-24h balance asks, T+24h testimonial chases. Migration retires the WA Business App for outbound automation.

### 2.2 — Photographer retainer
- **Who:** Ivan or Nadine
- **What:** Lock photographer + videographer for next 4 Saturdays at QAR ~300-400/shoot (~QAR 1,200/month for 4 shoots). Reciprocity offer: free portfolio access + mutual tagging + KiddoKlub-branded photo credits in IG bio. Try @ohmyphotographyqa, @snehaljatale_photography, @littlestarspd first.
- **Time:** 2-3 hours of outreach + scheduling
- **Unblocks:** content engine. Per Council 2026-04-25 Agent 1: "the actual product is content, not parties; parties are the delivery vehicle for content."

### 2.3 — Meta Business Manager + Snap Ads Manager
- **Who:** Ivan
- **What:** Register Nadine's Meta Business Manager (uses Nadine's IG + personal Wio card with her billing address; under $500/mo spend until verification triggered, by which time CR is filed). Register Snap Ads Manager (lenient at QAR 70-100/day spend). Connect both to KiddoKlub IG.
- **Time:** 1 hour
- **Unblocks:** Week 2 Meta retargeting + Snap Story Ads launch.

### 2.4 — Photography styled-shoot at Nadine's villa
- **Who:** Ivan + Nadine + photographer
- **What:** Per Council 2026-04-25 Agent 2: "commission a real shoot before launch, don't ship on stock." Stage one Klub Classic + one Klub Signature setup at Nadine's home (or a sympathetic friend's villa). Shoot overhead flatlay hero stills + setup time-lapse + reveal. Budget: 1 photographer + 1 hour styling. Output: 30-50 brand-grade stills + 1-2 reels of source material.
- **Time:** Half a Saturday
- **Unblocks:** website hero, package pages, IG grid seed, ad creative.

### 2.5 — Doha Mums recommendations thread
- **Who:** Nadine
- **What:** Post in Doha Mums Wednesday recommendations thread with one stunning party reel + offer to "answer party-planning questions." Authority play. NEVER self-promote in main feed. Has to be Nadine's account, not Ivan's.
- **Time:** 30 minutes prep + Wednesday post + 2-3 days reply tending
- **Unblocks:** the highest-trust referral channel for expat moms in Doha.

---

## P3 · Day 30+ (resume after Phase 2 lessons learned)

- Theme catalog launch (Boho, Jungle, Princess, Pastel Rainbow, Arabic Heritage, Eid)
- Theme-as-landing-page architecture (`/packages/[slug]`) for IG link-in-bio
- AR Lens production for Snap (~QAR 8-15K)
- Hire part-time setup helper (QAR 100/setup) when utilization >75%
- Skipcash payment plans (Tabby/Tamara if Qatar coverage clears)
- Indoor venue partnerships for Jun-Aug summer dip (Aspire, Doha Festival City, Mall of Qatar)
- Eid Al Fitr 2026 burst pre-sell (~Mar 2026 — pre-sell packages 4 weeks ahead via WA broadcast to founding-family list)

---

## Status board

Tick as each lands:

- [ ] 0.1 Domain confirmed
- [ ] 0.2 Mohammed conversation done · CR route picked
- [ ] 0.3 Public liability insurance bound
- [ ] 0.4 Skipcash account opened in Nadine's name
- [ ] 0.5 IG handle confirmed
- [ ] 0.6 Past-client list seeded (10 contacts)
- [ ] 1.1 WA Business App live on +974 5031 8434
- [ ] 1.2 Cal.com 3 event types created
- [ ] 1.3 Supabase project + migrations applied + secrets seeded
- [ ] 1.4 Vercel + DNS pointing kiddoklub.com
- [ ] 1.5 Nadine voice-note reactivation soft launch
- [ ] 2.1 Wati signup + 4 utility templates approved
- [ ] 2.2 Photographer retainer locked
- [ ] 2.3 Meta + Snap business accounts registered
- [ ] 2.4 Styled-shoot complete, hero stills delivered
- [ ] 2.5 Doha Mums Wed thread post live

When all 16 are checked, KiddoKlub is fully operational on the new stack.
