# packages.yaml changelog

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
