# KiddoKlub

Premium soft-play party rentals in Doha, for kids 1-5. Trades under Nadine's name. NOT Equipt.

## Quick links
- **Master plan:** `~/.claude/plans/eventual-growing-hopcroft.md`
- **Council brief:** [docs/COUNCIL_2026_04_25.md](./docs/COUNCIL_2026_04_25.md)
- **Spec:** [SPEC.md](./SPEC.md)
- **Project memory:** [CLAUDE.md](./CLAUDE.md)
- **Voice rules:** [content/voice.md](./content/voice.md)
- **Pricing source-of-truth:** [content/packages.yaml](./content/packages.yaml)
- **Ivan's checklist:** [IVAN_UNLOCK_CHECKLIST.md](./IVAN_UNLOCK_CHECKLIST.md)

## Stack
- **Site:** Next 16 + Tailwind v4 + Framer Motion 12 + next/font (Fraunces + Inter)
- **CRM:** Supabase Postgres, EU-Central
- **Booking:** Cal.com (3 separate event types: mini · classic · signature)
- **Payments:** Skipcash (Nadine's name + Nadine's IBAN); MyFatoorah Plan B
- **Messaging:** WhatsApp Business App (Phase 1) → Wati API (Day 30+ after CR)
- **Email:** Resend → hello@kiddoklubdoha.com (Google Workspace)
- **Notifications:** Telegram @Ivan_james_bot (KiddoKlub triggers in James world)
- **Content:** Higgs Field Seedance 2.0 (15 skills installed) + CapCut Pro

## Layout
```
~/Projects/kiddoklub/
├── SPEC.md, CLAUDE.md, README.md, IVAN_UNLOCK_CHECKLIST.md
├── app/                  Next.js booking site (page · packages · book · api/webhooks)
├── components/           Hero, Packages, StickyWhatsApp, FoundingFamilyBar, TrustFooter
├── content/              voice.md, packages.yaml, dream-100.md, scripts, captions, proof-pack/
├── ops/                  pricing.md (private), inventory.md, runbook.md, partners.md, blackout-dates.md, ramadan-strategy.md
├── supabase/migrations/  0001-0008 (clients · bookings · dream100 · partners + content_log · audit_outbox · RLS · payments + idempotency + audit_log + advisory locks)
├── automations/          launchd/ (6 plists) + scripts/ (6 shell + _lib.sh)
├── dashboard/revenue.html
├── docs/                 council briefs, ADRs
└── legacy/               current GitHub Pages site preserved
```

## 8 specialist Claude Code skills (in `~/.claude/skills/`)
- `kiddoklub-voice-audit` — outbound copy gate
- `kiddoklub-booking-intake` — Cal.com webhook handler (auto)
- `kiddoklub-quote` — quote generator (Tier B)
- `kiddoklub-outreach-draft` — Monday Dream-100 batch (Tier B)
- `kiddoklub-reactivation` — Wednesday voice-note scripts (Tier B)
- `kiddoklub-postparty-followup` — T+24h testimonial chase (auto)
- `kiddoklub-content-engine` — Sunday weekly content brief (Tier B)
- `kiddoklub-weekend-prep` — Friday T-48h checklist (auto)

## 6 launchd jobs
| Cron | Job | Skill |
|---|---|---|
| Daily 06:00 | `daily-pipeline` | composite digest |
| Sunday 09:00 | `sunday-content` | content-engine |
| Monday 08:30 | `monday-dream100` | outreach-draft |
| Tuesday 10:00 | `tuesday-postparty` | postparty-followup |
| Wednesday 11:00 | `wednesday-reactivation` | reactivation |
| Friday 16:00 | `friday-weekendprep` | weekend-prep |

Install via `automations/README.md`.

## Develop locally
```sh
pnpm install   # or npm / yarn
cp .env.example .env.local
# fill .env.local from macOS Keychain values once secrets are seeded
pnpm dev
```

## Voice + brand rules (the short version)
- Banned: em dash, en dash, "elevate", "transform", "unleash", "delighted to", "we're excited to"
- Never publish Klub Signature exact base price (forces WhatsApp; conversion 3-5x)
- Bilingual EN+AR written in parallel by a native Arabic speaker; never auto-translated
- Tailwind logical properties (`ms-`, `me-`); `dir="rtl"` via Next.js i18n routing per locale (NOT class-toggle)
- 29LT Bukra for Arabic, NEVER Tajawal (default tell)
- Photo permissions default OPT-OUT for IG repost
- No Equipt branding anywhere; no Equipt invoicing; no UAE stock claims

## What's NOT in this repo
- Secrets (`.env.local` gitignored; values live in macOS Keychain)
- Payment flows for production (Phase 1 lands once Skipcash + Wati are live)
- Real photography (styled-shoot pending)
- Theme-as-landing-page subroutes (Phase 3)

## Owner
Brand: **Nadine Kruger**.
Operations: Ivan (AI/automation stack) + James (drafts, Telegram alerts) + Equipt Qatar setup team (arms-length per-event service).
