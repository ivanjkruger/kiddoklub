# KiddoKlub Creative & Ads System

*The machine that turns real parties into content, and content into bookings. Created 2026-06-09.*

## Tooling split (use the right tool for the job)

| Layer | Tool | What it makes | Who renders |
|---|---|---|---|
| **Hero** | Real phone camera | Nadine on camera + seeded-mom UGC at real parties | Nadine / seeded moms |
| **Static / carousel** | Canva | Hotel-vs-home comparison, founding-offer card, package/price cards | Nadine (from my briefs) |
| **Motion / reels** | Higgsfield / Seedance | 5-10s reel clips animating our real setup photos | Ivan (from my prompts) |

**Hard rule:** Higgsfield/Seedance only ANIMATE real assets (our 13 setup photos, real party stills). NEVER generate synthetic kids or a set we did not deliver. Real footage always replaces AI as it arrives.

## Assets on disk (ready to use)

- **Logos:** `public/brand/logo-header.png`, `.webp`, `public/brand/logo.svg`, `content/brand/assets/logo.svg`, `content/proof-pack/logos/KiddoKlub-Logo-current.svg`
- **Real setup photos (13):** `content/brand/assets/setup-01.jpeg` … `setup-13.jpeg`
- **Brand guidelines:** `content/brand/kiddoklub-brand-guidelines-v3-canonical.html`
- **Themes (6):** `content/themes.ts` — Neutral Nest, White Wonderland, Color Pop, Boho, Arabic Heritage, Eid Family Klub

## Brand quick-ref (for every Canva graphic + Seedance prompt)

- **Palette:** bone #F5EFE6, sand #E8DCC4, sage #A8B5A0, terracotta #C97D60, dusty pink #E4B4B4, butter #F0DC9C. NEVER primary red/blue/green.
- **Type:** Fraunces (serif display, italic accents) + Inter (body) + 29LT Bukra (Arabic). NEVER Tajawal.
- **Hero composition:** overhead flatlay BEFORE kids arrive. Action shots go to stories/reels, never the static hero.
- **Voice on copy:** warm parent-to-parent (Nadine), BLUF, semicolons not dashes, no AI tells. EN + AR in parallel, AR native-validated never auto-translated. Route every line through `kiddoklub-voice-audit`.

## The 6 ad concepts (full briefs land in this folder as built)

1. **Hotel-substitute kill** (conversion hero) — your villa, your guest list, your photos; the wow of a hotel party, none of the cover charge. Real photo + slow push-in only.
2. **Transformation reveal** — empty corner to full wonderland. Time-lapse; AI parallax bridge OK.
3. **Stress-off promise** (mum POV) — ten little guests, zero stress for mum. REAL Nadine only.
4. **Photo control** (differentiator) — the photos are yours; we ask before we ever post. Real stills.
5. **Before/after in 2 hours** — empty room to magic in two hours. Real stills, AI parallax OK.
6. **Founding-family urgency** (run to 2026-06-30) — last founding slots, free castle + photographer on Classic. Text-led.

## Render workflow

1. I write the brief (Canva) or prompt (Seedance) + EN/AR copy here.
2. Tier B: Ivan + Nadine approve.
3. Nadine renders statics in Canva / Ivan renders motion in Higgsfield.
4. Real footage swapped in as parties happen (seeding play feeds this).
5. Post via `kiddoklub-content-engine` (Sun cron) / boost via Meta once booking rail is live.

## Related

- Seeding engine that produces the real content: `klub-insiders-seeding-play.md`
- Full strategy: `../growth/ACQUISITION_PLAN_2026-06-09.md`
