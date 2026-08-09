# packages.yaml changelog

## v4 — 2026-08-07
- Balloon arch: QAR 350 → 450 (market vet: DIY kits ~205, pro installs 500+; ours installs with the setup crew).
- Soft-serve/popcorn cart: QAR 500 → 650 (market vet: machine-only rents at 500/day, +150 with supplies and operation).
  Assumes the cart runs staffed with supplies; if Nadine runs it unstaffed, drop back to 500.

## v3 — 2026-08-07
- 90-min photographer add-on: QAR 600 → 1,000 (Ivan's call; never free, now priced to its signal value).
  FAQ, quote builder, and llms.txt update automatically via the generated module.

## v2 — 2026-08-07
- Founding-family offer removed everywhere (expired 30 Jun; Ivan's call 2026-08-07: the photographer is never free).
  Killed: `modifiers.founding_family`, the FREE bouncy line in Klub Classic inclusions, FREE notes on bouncy/photographer add-ons.
- Photographer stays a charged add-on at its existing price; still bundled inside Klub Signature (paid tier).
- New `referral` block: the QAR referral discount now lives here (was hardcoded in ReferralCard/referral page).
- New `capacity` block: `parties_per_month: 10`, the only scarcity claim the site may make.
- New `capacity_label` per package (display strings previously hardcoded in components).
- New `per_kid: true` flag on themed gift bags.
- Update protocol corrected: `scripts/sync_pricing.py` never existed; the real step is `node scripts/gen-packages.mjs`,
  which emits `content/packages.gen.ts` (public-safe fields only) and runs automatically via the `prebuild` hook.
- Klub Signature decor line now names the three real themes (Neutral Nest, White Wonderland, Color Pop) instead of the
  stale April list (Boho, Jungle, Princess, Pastel Rainbow, Arabic Heritage, Eid).

## v1 — 2026-04-25
- Initial canon.
