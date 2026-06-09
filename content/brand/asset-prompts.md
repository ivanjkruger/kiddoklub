# Brand asset generation — checklist + ready-to-paste prompts

*Paste these into ChatGPT image / DALL-E / Midjourney / Higgsfield. Created 2026-06-09. Brand spec: `BRAND.md`.*

## Guardrail (read first)
AI generates ONLY: abstract brand assets (patterns, backgrounds, templates, moodboards) and internal styling references. AI NEVER generates: real-looking children, faces, or a party/setup we did not actually deliver, for any customer-facing surface. Customer-facing party imagery = real photos (our 13 setup stills) or a real styled shoot. When in doubt, abstract.

## Assets needed (and how each is sourced)

| Asset | Used for | Source |
|---|---|---|
| Brand moodboard | internal alignment, Canva kit cover | AI (prompt 1) |
| Seamless rainbow-arc pattern | section backgrounds, story frames, gift bags, packaging | AI (prompt 2) |
| Soft cream textures / gradients | site section dividers, ad backgrounds | AI (prompt 3) |
| IG post + story template frames | Canva content templates | AI starter (prompt 4) then Canva |
| 6 theme style boards | internal build reference for real setups | AI (prompt 5), labelled internal |
| Polished hero flat-lay | site hero, top-of-funnel | REAL: enhance setup-0X.jpeg (prompt 6, image-to-image) |
| Real party reels / UGC | reels, retargeting | REAL: seeded-mom footage (see `../ads/klub-insiders-seeding-play.md`) |

## Master style string (prepend to any prompt)
> Soft premium pastel brand for a Doha kids soft-play party company. Palette strictly: cream #FFF9F0 background, mint #A8D5BA, soft pink #E8B4B8, butter #F0D78C, sage #C0D080, peach #F0C48C, warm ink #2A2520 for any text. Rounded geometry, concentric rainbow-arch motif, generous negative space, calm and clean, never loud, never primary colours, never pure black, no clip-art, no childish clutter. Quicksand-style rounded typography if any type appears.

## Prompts

**1 — Brand moodboard (internal):**
> [Master style string] Create a 3x3 brand moodboard: pastel rainbow arches, cream paper texture, a styled overhead soft-play corner (no people), rounded lowercase wordmark feel, butter and mint accents, soft daylight, flat-lay styling props (neutral cushions, wooden toys). Cohesive, editorial, calm. No text, no children.

**2 — Seamless rainbow-arc pattern (tileable):**
> [Master style string] Design a seamless, tileable repeating pattern of small concentric rainbow arches in mint, pink, butter, sage, peach on a cream background. Even spacing, vector-flat, subtle, suitable as a soft wallpaper behind text. Fully seamless edges. No text.

**3 — Soft cream textures / gradients (set of 3):**
> [Master style string] Three minimal background textures on cream: (a) barely-there paper grain, (b) a soft mint-to-cream gradient, (c) a single oversized faint rainbow arch bleeding off one corner. Each clean enough to lay headline text over. No text, no objects.

**4 — IG post + story template frames:**
> [Master style string] Two empty social media template frames, cream background: one square 1080x1080 post frame and one 1080x1920 story frame. Each has a thin rounded pastel arch motif in a corner, a clear central area left blank for a photo, and a small footer bar for a logo. Soft, premium, minimal. No text, no people. Leave the centre open.

**5 — Six theme style boards (internal build reference, label as internal):**
> [Master style string] Create one styling moodboard for a kids party soft-play setup in this theme: "[THEME]". Show colour swatches, decor textures, balloon palette, and prop styling for an overhead home setup with NO children and NO faces. Themes to run one at a time: Neutral Nest (oatmeal, cream, wood), White Wonderland (all-white, soft texture), Color Pop (bright pastel rainbow), Boho (terracotta-free warm neutrals, pampas), Arabic Heritage (sadu-pattern accents, gold, deep teal kept soft), Eid Family Klub (crescent + lantern motifs, soft gold + sage). Internal reference for building the real setup.

**6 — Hero flat-lay (image-to-image, REAL photo as input):**
> Use one of our real photos `content/brand/assets/setup-02.jpeg` or `setup-10.jpeg` as the input. Instruction: clean and colour-grade toward the brand palette (warm cream tones, lift shadows, soft daylight), straighten to a true overhead flat-lay crop, remove any clutter or distracting background, keep the real soft-play set exactly as it is. Do NOT add objects or people. Output a calm premium hero image.

## After you generate
1. Drop outputs into `content/brand/assets/generated/` (create it).
2. Tell me which you kept; I wire the patterns/backgrounds/hero into the site upgrade and the Canva briefs reference the templates.
