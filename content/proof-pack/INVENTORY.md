# KiddoKlub Asset Inventory

Last audited: 2026-04-25 (after Session B Drive reorg).

## Brand assets (Drive: `Business/KiddoKlub/Brand/`)
| Asset | Status | Use |
|---|---|---|
| KiddoKlub-Logo.svg (current) | 🟢 active | Primary brand mark — copied to `content/proof-pack/logos/KiddoKlub-Logo-current.svg` for the Next.js site. |
| KiddoKlub-Logo-OLD-historical.svg | ⚫ archive | Reference only. Don't use. |
| BUBBLE-HOUSE-1300-DHS.jpg | reference | Bubble-house concept reference photo. |
| `_REJECTED-rebrand-concept-2026-04-25` | ❌ rejected | Session B explored a rebrand 2026-04-25; Ivan rejected. **Do not reopen this concept.** |

## Past-event photos (we own, customer permission TBD case-by-case)

### Oct 2024 event(s) — `Photos/Past-Events/2024-10/`
5 HEIC stills, ~1 MB each (also mirrored at `~/Pictures/KiddoKlub/`):
- IMG_6709, IMG_6711, IMG_6722, IMG_6728, IMG_6770

### Nov 2024 event(s) — `Photos/Past-Events/2024-11/`
6 HEIC stills, 1-2.3 MB each:
- IMG_7884, IMG_7889, IMG_7892, IMG_7893, IMG_7894, IMG_7895

### Misfiled duplicates — `Ops/Misfiled/`
"IMG_xxxx 2.HEIC" copies of all 11 past-event files. Session B isolated them for cleanup. Safe to delete after Ivan confirms the canonical Photos/ versions are intact.

### Photo permissions status
- Default: **OPT-OUT for IG repost** (per Council 2026-04-25 Qatar mum context).
- Action needed: Nadine confirms which past clients said yes-to-share when she does the past-client extraction session. Until that pass, treat all 11 as **internal use only** (site gallery placeholder OK with kid faces blurred / cropped, NOT for IG posts naming the family).

## Current setup photos (own, no customer in frame)

### Mar 30, 2026 inventory shots — `Photos/Setups/`
13 WhatsApp-image JPEGs of empty / pre-event setups:
- WhatsApp Image 2026-03-30 at 12.55.19 PM (×3)
- WhatsApp Image 2026-03-30 at 12.56.03 PM (×9)

These are **the highest-leverage stills** — empty hero shots, no customer faces, full content rights, can be used freely. **Use these as the site's primary hero candidates and the Seedance amplification source for Week 17-20 reels.**

## Screenshots — `Ops/`
- 6 `Screenshot 2024-10-22 at 10.0X.XX AM.PNG` files. Likely competitive-research or early-design references. Low priority for content engine.

## Logos in repo
- `content/proof-pack/logos/KiddoKlub-Logo-current.svg` (just pulled from Drive)
- `content/proof-pack/logos/logo.svg` + `logo-old.svg` — older legacy versions from the GitHub Pages site era

## Total content-ready asset count

| Bucket | Count | Use right now? |
|---|---|---|
| Empty-setup stills (no faces, full rights) | **13** | ✅ Hero, packages, ad creative, Seedance amplification |
| Past-event stills (faces present, perm TBD) | 11 | ⏳ Internal use OK; IG only after explicit consent per family |
| Brand logo | 1 SVG | ✅ Site, IG bio image, ad chrome |
| Reference / rejected | 3 files | reference only |

## What this changes for the build

The previous "styled-shoot pending" placeholder in `app/page.tsx` and `app/about/page.tsx` is wrong — we have **12 empty-setup stills with full content rights**. The styled-shoot is a *Phase 3 polish* now, not a Phase 1 blocker.

**Next moves (this session):**
1. Wire `KiddoKlub-Logo-current.svg` into the Next.js site (`<Image>` in header + footer)
2. Replace "styled-shoot pending" italic placeholders with actual hero stills from `Photos/Setups/`
3. Build `AI_CONTENT_PIPELINE.md` mapping each empty-setup still → 5+ Seedance derivative pieces
4. Generate 30-reel backlog using these 12 stills as source material
5. Coordinate with Session B (they own Drive `Content/Captions/14-day-bank-v1/` and `Content/Reels-Drafts/` — repo writes to `content/weekly/` instead)
