---
project: kiddoklub
created: 2026-04-25T22:42:00+04:00
session_count: 1
last_updated: 2026-04-25T22:42:00+04:00
mode: full
risk_tier: high
stack: [typescript, nextjs-16, react-19, tailwind-v4, framer-motion-12, supabase-postgres, cal.com, skipcash, wati]
deploy: vercel
success_criteria: 10 paid Klub Classic bookings on kiddoklub.com inside the founding-family window (expires 2026-06-30) with zero Equipt-brand entanglement and Nadine-name-only money flow.
references:
  - ~/.claude/plans/eventual-growing-hopcroft.md
  - ~/Projects/kiddoklub/docs/COUNCIL_2026_04_25.md
  - ~/Projects/kiddoklub/CLAUDE.md
  - ~/Projects/kiddoklub/SPEC.md
  - ~/Projects/kiddoklub/IVAN_UNLOCK_CHECKLIST.md
  - ~/.claude/projects/-Users-ivankruger/memory/project_kiddoklub_state.md
---

# Discovery — kiddoklub

## What
Premium soft-play party rentals for kids 1-5 in Doha, trading under Nadine's name as a standalone consumer brand. The build is a bilingual (EN/AR, RTL-correct) Next.js 16 booking site at kiddoklub.com that runs three Cal.com event types (Klub Mini decoy / Klub Classic 90% picker / Klub Signature WhatsApp-only), takes Skipcash deposits in Nadine's name, syncs every booking + client + payment into Supabase, and pushes operational triggers (deposit paid, T-48h prep, T+24h testimonial chase, Dream-100 reply) into Telegram via James.

Behind the site sits a parallel automation surface: 8 KiddoKlub Claude Code skills (voice audit, booking intake, quote, outreach draft, reactivation, post-party follow-up, content engine, weekend prep), 6 launchd cron jobs, and a Supabase schema with state-machine booking transitions, advisory slot locks, idempotency keys, and an audit outbox. Goal: Nadine is the customer voice + delivery face, James drafts everything, Ivan caps personal time at ~30 min/day so this never eats the Q2 Dubai pipeline.

## Who
Doha-based parents of kids 1-5 hosting birthday parties at home or villa compounds, willing to pay QAR 1.4-5K for premium soft-play setup. Acquisition channels: Dream-100 warm IG/WhatsApp outreach, Doha Mums community, partner-referral loops with photographers + venues + cake makers, founding-family slot scarcity (10 bookings, expires 2026-06-30), and Nadine's existing past-client list.

## Constraints
- HARD BAN on Equipt entanglement: no Equipt branding, invoicing, bank, or logo on any customer-facing surface. Nadine's name + IBAN only.
- Equipt Qatar warehouse (Waseef 24A) + setup team (Jamsheer + Khaleer, Abdul oversight) are arms-length services billed per event. Yazan NOT involved.
- Pricing locked in `content/packages.yaml`. Klub Signature MUST stay "starting from QAR 3,800" — never publish exact base (forces WhatsApp; 3-5x conversion).
- Bilingual = Next.js i18n routing with `dir="rtl"` per locale. NEVER class-toggle (breaks Framer Motion).
- Fonts: Fraunces (display) + Inter (body) + 29LT Bukra (Arabic). Tajawal banned.
- Cal.com: 3 separate event types, NOT one with package as a field.
- CRM: Supabase only. Odoo is overkill at this scale and re-introduces Equipt entanglement risk.
- Voice: every outbound first-touch is 100% relationship, 0% pitch. No dashes (em/en/spaced hyphen). kiddoklub-voice-audit skill is the gate.
- Ivan time cap: ~30 min/day. Anything more steals from the Dubai pipeline (Q2 #1 priority).

## Out of scope (Phase 0/1)
- ElevenLabs voice clone (Phase 3 contingency only)
- Wati API (Free WA Business App for first 30 days post-CR; Wati lights up Day 30)
- Theme catalog at `/packages/[slug]` (Phase 2)
- Real photography (styled shoot at Nadine's villa pending)
- Any Equipt cross-promotion

## Open questions
- [ ] Confirm domain: kiddoklub.com vs voice-typo "KirillClub.com" (verify receipt)
- [ ] Mohammed conversation re: Nadine's CR / freelance permit status
- [ ] Public liability insurance in Nadine's name (provider + policy #)
- [ ] Skipcash signup in Nadine's name complete? (IBAN + KYC)
- [ ] IG handle confirmation (@kiddoklubdoha vs alternate)
- [ ] 30-min paired session with Nadine to extract 8-10 past-client list

## Research findings (Session 1)
- **cwd Explore:** Project already scaffolded today (2026-04-25). SPEC.md, CLAUDE.md, full `content/` + `ops/` + `supabase/migrations/` (8 SQL incl. state-machine + advisory locks) + `automations/launchd/` (6 plists) + `dashboard/revenue.html` + `legacy/` (preserved GitHub Pages site) + `docs/COUNCIL_2026_04_25.md` + `IVAN_UNLOCK_CHECKLIST.md` (16 items, all unchecked). No Next.js app code yet — scaffold-only tonight.
- **WebSearch:** N/A — stack already locked by 2026-04-25 council session (Next 16 + Tailwind v4 + Framer Motion 12, bilingual via Next i18n + dir="rtl" per locale, Supabase over Odoo at this scale, Skipcash > MyFatoorah for QAR-denominated consumer payments).
- **Reference DESIGN.md:** Defer — design language is owned by Nadine's voice + Fraunces/Inter/29LT Bukra type stack documented in CLAUDE.md. Awesome-design-md library not a fit for warm-parent consumer brand; Nadine's IG aesthetic + UGC clips are the canonical reference.
- **Registry:** Registered in `~/ivan-ops/registry.md` as 🟢 active under personal bucket (Nadine's name, NOT Equipt). Closest prior art: g8ts-frontier-site (Next 16 + Tailwind v4 + Framer Motion stack shipped 2026-04-25 same day) — reuse hero pattern, font loading, and Vercel deploy recipe. ivan-os (Supabase Frankfurt + Vercel + Keychain secrets pattern) — reuse env-var + Keychain naming convention.

## Session history
- Session 1 — 2026-04-25 — initial discovery written from existing master plan + memory snapshot to clear session-gate hook
