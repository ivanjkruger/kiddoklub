# KiddoKlub — Project Memory

This file is loaded on every Claude Code session in this project. Keep it tight.

## What this is
Premium soft-play party rentals for kids 1-5 in Doha. Nadine is the founder + brand face. Ivan operates the AI/automation stack. James (Ivan's AI Chief of Staff) handles drafts + Telegram alerts.

## Hard rules

### Legal + money
- KiddoKlub trades under **Nadine's** name. NOT Equipt. NOT Ivan personally.
- All payouts route to Nadine's IBAN (Wio Personal QA or QNB Personal in her name).
- Equipt warehouse + setup team are arms-length services — internal "ops services agreement", per-event fee, clean books on both sides.
- No Equipt logo. No Equipt CR. No Equipt bank. No Equipt invoicing. Ever.

### Voice (applies to ALL outbound — DM, WhatsApp, email, captions, ads, replies)
- Warm, parent-to-parent. Never corporate. Nadine voice, not Ivan voice.
- Bilingual EN + AR, written in parallel. NEVER auto-translate.
- BLUF (per Ivan's writing rule), short paragraphs, semicolons not dashes.
- **Banned characters:** em dash (—), en dash (–), spaced hyphen ( - ) used as dash.
- **Banned phrases:** "elevate", "transform", "unleash", "level up", "game-changer", "unlock", "next-level", "premium experience", "world-class", "we're excited to", "delighted to". Any of these = AI tell.
- **Banned moves on first touch:** never lead with "Ivan from Equipt; Pulse distributor". Never sign with "— Ivan". Never product-pitch in opener — first message is 100% relationship, 0% pitch.
- Specific observation > generic compliment. Curious question > sales question.

### Pricing (source-of-truth: content/packages.yaml)
- Klub Mini QAR 1,400 (decoy)
- Klub Classic QAR 2,200 (90% pick this)
- Klub Signature "starting from QAR 3,800 — request a quote" (NEVER publish exact number on top tier; forces WhatsApp conversation; conversion 3-5x)
- Add-ons: bouncy castle 400, balloon arch 350, soft-serve cart 500, photographer 600, extra hour 250
- Target AOV: QAR 2,200 → 2,800 with one upsell
- Weekday discount 20% (Sun-Thu); rush premium +15% inside 7 days
- Deposit: 30% non-refundable inside 14 days, 50% credit toward future booking outside 14 days
- No cash, ever. Skipcash + bank transfer only.

### Inventory + ops
- Stocked at Waseef warehouse, Doha (same site as Equipt Qatar). NEVER claim "stocked in UAE".
- Delivery + setup + sanitization + pickup by Equipt Qatar team (Jamsheer + Khaleer, Abdul oversees).
- Yazan is NOT involved in KiddoKlub ops. Don't CC.
- Cap public availability at 10 setups/month. Constraint = marketing.

### Brand
- Palette: bone #F5EFE6, sand #E8DCC4, sage #A8B5A0, terracotta #C97D60, dusty pink #E4B4B4, butter #F0DC9C. NEVER primary red/blue/green.
- Typography: Fraunces (serif, italic for accents) + Inter (body) + 29LT Bukra (Arabic).
- Hero shot is **overhead flatlay BEFORE kids arrive**. Action shots go to stories/reels, never the home page hero.
- IG grid: 3-column rhythm — overhead setup → kid candid → detail close-up.

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
| Domain | kiddoklub.com (Ivan-owned, Day 1) | Confirm receipt; sanity-check the brand name on the cert |
| Hosting | Vercel (Next 16 + Tailwind v4 + Framer Motion 12) | Free hobby tier OK for Phase 1 |
| Booking | Cal.com | Reuse Ivan's existing account |
| Payments | Skipcash (Nadine's name + Nadine's IBAN) | 2.49% local cards, WA invoice-link UX |
| Messaging | WhatsApp Business App (free) Phase 1 → Wati API at Day 30 (after CR) | 256-contact ceiling on free tier |
| Email | Resend + Google Workspace hello@kiddoklub.com (Nadine-owned) |
| CRM | Supabase (NOT Odoo — overkill at this scale) | Single source for site + dashboard + James |
| Content | Higgs Field Seedance 2.0 (15 skills installed) + CapCut Pro | Existing Ivan stack |
| Voice | Real Nadine + UGC | ElevenLabs voice-clone deferred to Phase 3 contingency |
| Notifications | Telegram @Ivan_james_bot | Existing James bridge; new world file at ~/.claude/skills/james/world/kiddoklub.md |

## Specialist skills

In `~/.claude/skills/kiddoklub-*`:
- `kiddoklub-booking-intake` (Auto, on Cal.com webhook)
- `kiddoklub-quote` (Tier B, on demand)
- `kiddoklub-outreach-draft` (Tier B, Monday cron)
- `kiddoklub-reactivation` (Tier B, Wednesday cron)
- `kiddoklub-postparty-followup` (Auto, T+24h)
- `kiddoklub-content-engine` (Tier B, Sunday cron)
- `kiddoklub-weekend-prep` (Auto, Friday cron)
- `kiddoklub-voice-audit` (validation gate, called by all outbound skills)

## Memory + dependencies (read these too)
- `~/.claude/CLAUDE.md` — Ivan's global rules
- `~/.claude/plans/eventual-growing-hopcroft.md` — KiddoKlub master plan
- `~/.claude/projects/-Users-ivankruger/memory/project_kiddoklub_state.md` — checkpoint state
- `~/.claude/projects/-Users-ivankruger/memory/feedback_writing_style.md` — Ivan voice rules
- `~/.claude/projects/-Users-ivankruger/memory/feedback_outbound_voice_v2.md` — first-message relationship rule
- `~/.claude/projects/-Users-ivankruger/memory/feedback_auto_dash_audit.md` — dash audit gate
- `~/Projects/kiddoklub/content/voice.md` — Nadine voice EN + AR

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
