# KiddoKlub AI Content Amplification Pipeline

**Premise (Ivan, 2026-04-25):** "We have content, and we can generate more content using AI based on what we already have."

This doc maps existing assets → AI tools → derivative outputs. Goal: ship 5+ pieces of social content per source still without ever needing a new shoot to maintain pace.

## The amplification stack (already in Ivan's possession)

| Tool | Purpose | Where |
|---|---|---|
| **Higgs Field Seedance 2.0** | image → 4-8 sec cinematic video clip | 15 skills installed at `~/.claude/skills/seedance-*` |
| **CapCut Pro** | edit, splice, captions, music sync, vertical format | macOS app, Ivan licensed |
| **ElevenLabs** (Phase 3 contingency) | voice-over generation | API token, optional |
| **Veo 3** (when accessible) | aspirational dream-shots we couldn't capture | optional |

## Source-still taxonomy (from `INVENTORY.md`)

| Type | Source | Count | Faces? |
|---|---|---|---|
| Empty-setup hero (overhead / wide) | Drive `Photos/Setups/` Mar 2026 | ~6 of 12 | no |
| Detail close-up (ball pit, slide, balloon arch) | Drive `Photos/Setups/` Mar 2026 | ~6 of 12 | no |
| Past-event candid (kid jumping, mom reaction) | Drive `Photos/Past-Events/` 2024 | 11 | yes (perm TBD) |

## Amplification recipes

### Recipe A — Empty-setup hero → 5 derivatives
Source: 1 wide overhead still of an empty pastel setup.

1. **`seedance-cinematic` slow push (6 sec).** "Cinematic slow push from doorway into pastel villa setup, golden hour, neutral palette." → Reel #1 hero opener (Week 17 #1).
2. **`seedance-product-360` orbit (8 sec).** "Slow orbit around the centerpiece soft-play unit, low-angle, depth of field." → Reel for `/packages/[slug]` theme page.
3. **`seedance-social-hook` POV (4 sec).** "First-person POV walking into the room, camera tilts up to reveal full setup." → Reel hook for "POV: it's your daughter's 2nd birthday."
4. **CapCut split-screen** Setup vs. event vs. pack-down. Use empty still as left panel, paired with archive past-event still + pack-down time-lapse. Highest-share format in this niche per Council 2026-04-25.
5. **Carousel cards** 5-slide Pinterest-style: empty hero → detail crop 1 → detail crop 2 → caption card → CTA card. Just composing in Figma / CapCut, no AI generation needed.

### Recipe B — Detail close-up → 3 derivatives
Source: 1 close-up of a ball pit or balloon arch.

1. **`seedance-cinematic` shallow-DOF rack focus.** "Shallow DOF rack focus across pastel ball-pit balls, soft natural light." → Story background.
2. **`seedance-cartoon` overlay.** Light cartoon-flat treatment for "5 things every Doha birthday is missing" carousel covers.
3. **Static brand chrome** for IG Story Highlights covers (Setups · Themes · Process · Reviews · FAQ · Book).

### Recipe C — Past-event candid → 2 derivatives (consent gating)
Source: 1 kid-reaction or mom-walks-in still. **Gate: explicit family consent before posting.**

1. **`seedance-social-hook` motion** of a static still. Adds 4 seconds of subtle motion (hair movement, slight head turn). One still becomes a moment.
2. **CapCut crossfade** between "before kids arrive" empty hero + "the first 3 seconds when she walks in" reaction. Sells the emotional outcome.

### Recipe D — Brand-story 60-sec film
Source: 5-7 stills (mix of empty-setup + 1-2 consented past-event candids if available).

1. **`seedance-brand-story` 60-second cut.** "Doha mom POV. Soft warm lighting. Cuts: setup time-lapse → mom prepping → kids arriving → first jump → guests laughing → pack-down → quiet villa." → Pin to IG profile, use as Meta Reels ad creative.

## Per-week production budget

At 5 reels + 2 carousels per week (Council 2026-04-25 cadence), 28 derivatives per month.

**Tool cost:** Higgs Field Seedance pay-per-render — ~$0.30-0.50 per 6-second clip. ~$30-50/month at this volume.
**Time cost:** ~2 hours per week with templates.

## Per-asset workflow (the pattern to copy)

```
1. Pick 1 source still from INVENTORY.md
2. Read the recipe (A / B / C / D) that matches its type
3. For each derivative:
   a. Invoke the named seedance-* skill with the prompt template
   b. Render in Higgs Field
   c. Edit in CapCut (template per format: 9:16 reel / 1:1 carousel)
   d. Caption: pull from content/voice.md rules; pass kiddoklub-voice-audit
4. Save derivative to content/weekly/{ISO_week}/{platform}-{slot}.mp4
5. Schedule via Meta Business Suite + Snap Ads Manager + IG manual
6. Log to Supabase content_log table
```

## Coordination with Session B

Session B is building the Drive `Content/Captions/14-day-bank-v1/` caption bank and `Content/Reels-Drafts/` work-in-progress. **Repo writes to `content/weekly/{ISO_week}.md`** with the brief, hooks, and Seedance prompts. Session B writes to Drive with the actual rendered captions in EN+AR ready to paste. No collision.

When the Sunday cron fires `kiddoklub-content-engine`, it reads:
- This file (recipes + workflow)
- INVENTORY.md (which stills are available + permission status)
- content/voice.md (voice rules)
- Drive `Content/Captions/14-day-bank-v1/` (Session B's caption bank, read-only)
- Drive `Content/Reels-Drafts/` (Session B's WIP, read-only)

And produces `content/weekly/{week}.md` with 5 reels + 2 carousels per Recipe A-D.

## Phase upgrades

- **Phase 2 (Day 30+):** ElevenLabs voice clone of Nadine (with explicit consent) for VO on aspirational reels. Still primarily real Nadine on camera.
- **Phase 3 (Day 60+):** Real styled shoot at Nadine's villa with photographer retainer. Adds a fresh wave of source material; AI amplification pipeline doesn't change.
