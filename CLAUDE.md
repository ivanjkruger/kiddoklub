# KiddoKlub — Project Memory

This file is loaded on every Claude Code session in this project. Keep it tight.

## What this is
Premium soft-play party rentals for kids 1-5 in Doha. Nadine is the founder + brand face. Ivan operates the AI/automation stack. James (Ivan's AI Chief of Staff) handles drafts + Telegram alerts.

## Hard rules

### Legal + money
- KiddoKlub is **NOT a registered company**. No CR, no MOCI, no freelance permit. Operates informally as Nadine personally. Do NOT propose registering a company; do NOT propose a Mohammed conversation.
- All payouts route to **Nadine's personal IBAN** (Wio Personal QA or QNB Personal).
- Payment rail: try Skipcash individual-merchant; if blocked, try MyFatoorah individual; fallback = personal IBAN transfer + Apple Pay link from Wio personal.
- WhatsApp: free **WA Business App** on Nadine's phone forever (Wati API needs a CR; not happening). Outbound = James drafts → Tier B → Nadine pastes + sends manually.
- Equipt warehouse + setup team time logged informally; Nadine settles per event. No "ops services agreement" paperwork.
- No Equipt logo. No Equipt bank. No Equipt invoicing. No Equipt branding on any customer surface. Ever.

### Voice (applies to ALL outbound — DM, WhatsApp, email, captions, ads, replies)
- Warm, parent-to-parent. Never corporate. Nadine voice, not Ivan voice.
- Bilingual EN + AR, written in parallel. NEVER auto-translate.
- BLUF (per Ivan's writing rule), short paragraphs, semicolons not dashes.
- **Banned characters:** em dash (—), en dash (–), spaced hyphen ( - ) used as dash.
- **Banned phrases:** "elevate", "transform", "unleash", "level up", "game-changer", "unlock", "next-level", "premium experience", "world-class", "we're excited to", "delighted to". Any of these = AI tell.
- **Banned moves on first touch:** never lead with "Ivan from Equipt; Pulse distributor". Never sign with "— Ivan". Never product-pitch in opener — first message is 100% relationship, 0% pitch.
- Specific observation > generic compliment. Curious question > sales question.

### Pricing (source-of-truth: content/packages.yaml — EVERY figure lives there, never here)
- All package prices, add-ons, weekday discount, rush premium, and deposit terms: read `content/packages.yaml` (it also drives the site, Cal.com, Supabase seed, kiddoklub-quote, Skipcash). Never restate a number in this file — a June restatement here drifted from the yaml and poisoned content docs.
- Strategy (not figures): Mini is the decoy; Classic is the default pick; Signature NEVER publishes its exact price ("starting from — request a quote" forces the WhatsApp conversation).
- Target: lift AOV via one upsell per booking.
- No cash, ever. Skipcash + bank transfer only.

### Inventory + ops
- Stocked at Waseef warehouse, Doha (same site as Equipt Qatar). NEVER claim "stocked in UAE".
- Delivery + setup + sanitization + pickup by Equipt Qatar team (Jamsheer + Khaleer, Abdul oversees).
- Yazan is NOT involved in KiddoKlub ops. Don't CC.
- Cap public availability at 10 setups/month. Constraint = marketing.

### Brand (canonical short ref: `content/brand/BRAND.md`)
- Palette: cream #FFF9F0, soft #FCF1E8, mint #A8D5BA, pink #E8B4B8, butter #F0D78C, sage #C0D080, peach #F0C48C, ink #2A2520. NEVER primary red/blue/green, never pure black. (Matches `app/globals.css`.)
- Typography: Quicksand (rounded display, matches wordmark) + Inter (body) + 29LT Bukra / IBM Plex Sans Arabic (Arabic). NOT Fraunces; NOT a serif display.
- Hero shot is **overhead flatlay BEFORE kids arrive**. Action shots go to stories/reels, never the home page hero.
- IG grid: 3-column rhythm; overhead setup, kid candid, detail close-up.

### Outreach rules (applies to Dream-100 + reactivation + cold DM)
- Tier B confirm-before-write on every send. James drafts, Ivan or Nadine approves, only then send.
- Rate limits: max 10 IG DMs/day per account, max 30/day on WA Business App, no broadcast lists >20 contacts on personal WA.
- "Recommendations Thread" only in Doha Mums (Wed) — never self-promote in main feed.
- Dream-100 cadence: follow → engage 3 days → DM. Never cold-pitch day 1.

### Channel ROI ranking (weeks 1-4)
1. Past-client WA reactivation (Nadine voice notes)
2. Partner referrals (planners + photographers + cake makers)
3. Mom-group infiltration (Doha Mums, compound FB, school groups)
4. IG organic reels (1/day)
5. Dream-100 cold DM
6. Meta retargeting (Week 2+, after 5 reels live)
7. Snap Story Ads (Week 2+, in parallel with Meta retargeting)
8. Meta cold + Google Search (Week 4+)
SKIP: TikTok paid (until 50+ deliveries), bought lists, Google LSA (not in Qatar).

## Stack (source-of-truth)

| Layer | Tool | Notes |
|---|---|---|
| Domain | kiddoklubdoha.com (Ivan-owned, Day 1) | Confirm receipt; sanity-check the brand name on the cert |
| Hosting | Vercel (Next 16 + Tailwind v4 + Framer Motion 12) | Free hobby tier OK for Phase 1 |
| Booking | Cal.com | Reuse Ivan's existing account |
| Payments | Skipcash (Nadine's name + Nadine's IBAN) | 2.49% local cards, WA invoice-link UX |
| Messaging | WhatsApp Business App (free) — Wati re-adoption is a gated FUTURE decision (Ivan's call; dropped per root CLAUDE.md) | 256-contact ceiling on free tier |
| Email | Resend + Google Workspace hello@kiddoklubdoha.com (Nadine-owned) |
| CRM | Supabase (NOT Odoo — overkill at this scale) | Single source for site + dashboard + James |
| Content | Higgs Field Seedance 2.0 (15 skills installed) + CapCut Pro | Existing Ivan stack |
| Voice | Real Nadine + UGC | ElevenLabs voice-clone deferred to Phase 3 contingency |
| Notifications | Telegram @Ivan_james_bot | Existing James bridge; new world file at ~/.claude/skills/james/world/kiddoklub.md |

## Specialist skills

**All 8 archived 2026-07-27** (no CR, Wati never wired, zero invocations). They are retrievable,
not loaded: `~/.claude/skills/_archive/kiddoklub-*-no-cr-unused-2026-07-27/`. Restore by moving a
folder back to `~/.claude/skills/` and stripping the suffix. Rationale + evidence:
`~/.claude/skills/_archive/README.md`.

- `kiddoklub-booking-intake` (was: Auto, on Cal.com webhook)
- `kiddoklub-quote` (was: Tier B, on demand)
- `kiddoklub-outreach-draft` (was: Tier B, Monday cron)
- `kiddoklub-reactivation` (was: Tier B, Wednesday cron)
- `kiddoklub-postparty-followup` (was: Auto, T+24h)
- `kiddoklub-content-engine` (was: Tier B, Sunday cron)
- `kiddoklub-weekend-prep` (was: Auto, Friday cron)
- `kiddoklub-voice-audit` (was: validation gate for all outbound)

## Memory + dependencies (read these too)
- `~/.claude/CLAUDE.md` — Ivan's global rules
- `~/.claude/plans/eventual-growing-hopcroft.md` — KiddoKlub master plan
- `~/.claude/projects/-Users-ivankruger/memory/project_kiddoklub_state.md` — checkpoint state
- `~/.claude/projects/-Users-ivankruger/memory/feedback_writing_style.md` — Ivan voice rules
- `~/.claude/projects/-Users-ivankruger/memory/feedback_outbound_voice_v2.md` — first-message relationship rule
- `~/.claude/projects/-Users-ivankruger/memory/feedback_auto_dash_audit.md` — dash audit gate
- `content/voice.md` — index to the 3-doc Nadine voice (Van Clief Constraint 05): `content/voice-tone.md` (directional) + `content/format-patterns.md` (structure) + `content/constraints.md` (canonical banned lists)

## Qatar trust signals (every page must surface these)
- **Footer:** MOCI CR number ("CR: XXXXXX"), insurance icon ("QAR 1M public liability"), payment provider row (Skipcash · QNB · CBQ · Apple Pay · Google Pay · Visa · Mastercard), compound coverage list ("Cleared for The Pearl · Lusail · West Bay · Al Waab · Abu Hamour · Education City")
- **Reviews:** location-specific ("Sara, The Pearl" not "Sara, Doha"). Arabic testimonials in **original Arabic script** — NEVER translate AR to EN.
- **Founder:** Nadine's face + name + 80-word story on About page (non-negotiable per Council 2026-04-25).
- **Photo permissions:** default OPT-OUT for IG repost. Explicit "we ask before we post" line in T&C and on booking confirmation.
- **Doha Mums:** "as featured in Doha Mums recommendations" if true; never fake.
- **Festivals:** Garangao (mid-Ramadan kids festival), National Day (18 Dec), Eid Al Fitr, Eid Al Adha — themed packages drive bookings; pre-sell 4 weeks ahead.

## Bilingual EN+AR rules (locked from Council 2026-04-25)
- Toggle: text "العربية / EN" — NEVER flag icons
- Toggle position: top-right in EN, top-left in AR
- Fonts: 29LT Bukra (Arabic) + Inter (Latin body) + Fraunces (serif logo / display). NEVER Tajawal (default tell).
- Numerals: Western digits (0-9) in BOTH languages
- Tailwind: logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) — NEVER `ml-`, `mr-`
- `dir="rtl"` via Next.js i18n routing per locale, NEVER class toggle (breaks Framer Motion x-axis)
- Framer Motion x-axis animations: wrap in `useDirection()` hook to flip sign in RTL
- MIRROR: nav, grid, card order, directional icons. DON'T MIRROR: phone numbers, prices, emails, dates, WhatsApp icon, brand marks
- Wrap prices in `<bdi>` to prevent QAR symbol jumping sides
- AR copy: WRITTEN BY a native speaker, never auto-translated. Use حفلة (informal "party") not حفل (formal "event").

## What NOT to do
- Don't add Equipt branding anywhere
- Don't publish Klub Signature pricing
- Don't claim UAE stock or fast UAE lead times (we have NO UAE inventory)
- Don't run Lead Ads on Meta until CR is filed (triggers verification)
- Don't run any cold ads until 5 organic reels are posted
- Don't auto-translate AR
- Don't use em dashes anywhere
- Don't sign messages "— Ivan"
- Don't broadcast to >20 contacts on personal WA
- Don't loop Yazan into KiddoKlub anything
