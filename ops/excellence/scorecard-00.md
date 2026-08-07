# Scorecard 00 — Baseline (live production, 2026-08-07)

Surface measured: https://kiddoklubdoha.com (production deploy was 58 days old; branch `feat/canonical-brand-v3` never shipped).
Overall = MIN of dimensions = **2/10** (bilingual parity).

| # | Dimension | Score | Evidence |
|---|---|---|---|
| 1 | Offer & conversion | 4/10 | Fake scarcity live on hero ("10 of 10 slots · ends 30 Jun", hardcoded, rendered in August). Photographer FREE via founding perk. No guarantee block. Referral buried. Tiers + decoy architecture correct. WhatsApp CTA path solid. |
| 2 | Design & brand | 7/10 | On-palette, real photos, founder note. Lighthouse a11y 94 (EN) / 96 (AR). Full design-standards checklist not yet run. |
| 3 | Performance | 6/10 | Lighthouse mobile: EN perf 92, LCP 3.0s; AR perf 87, LCP 4.0s (gate: ≥95, ≤1.8s). CLS 0, TBT ≤20ms, TTFB 40ms all pass. ~53-70 KiB unused JS. Files: `lh-baseline-en.json`, `lh-baseline-ar.json`. |
| 4 | SEO | 5/10 | Lighthouse SEO 100, robots + sitemap fine, LocalBusiness/FAQPage schema present. BUT: fabricated aggregateRating (5.0, 12 reviews; only 4 permissioned testimonials exist), invented QAR 5,500 price ceiling in schema, no hreflang anywhere, AR nearly absent from sitemap. |
| 5 | AEO | 6/10 | Fetch test 8/10 on /faq (missed: cheapest package price, photographer). No llms.txt (404). Copy is server-rendered (good). |
| 6 | Backend & code health | 4/10 | Prices/inclusions hardcoded in QuoteBuilder + Packages + ReferralCard (SSOT violation; caused June drift). Phantom "Klub Small" tier sold in QuoteBuilder but absent from packages.yaml. Dead wati webhook. packages.yaml protocol referenced a script that never existed. Build itself clean; all public routes static. |
| 7 | Bilingual parity | 2/10 | `app/ar/` = 2 routes vs ~10 EN. AR page uses Arabic-Indic numerals against the locked Western-digits rule. AR founding bar carried the same fake scarcity + free photographer. |

## Fix order (worst first)
1. Bilingual parity (2) — wave 4, scope per decision #6 (core set: home, packages, FAQ).
2. Offer truth + SSOT (4/4) — wave 1. **DONE in commit `15259f5`**: founding offer + free photographer dead everywhere (EN, AR, bio, OG image, FAQ), CapacityBar states only the real 10/month cap, packages.gen.ts SSOT wired, fabricated rating + price ceiling stripped, wati archived.
3. SEO (5) — wave 3: hreflang, AR sitemap, llms.txt, Product/FAQ schema pass.
4. AEO (6) — wave 2/3: FAQ answer-first + photographer/cheapest-price answers.
5. Performance (6) — wave 3: LCP image priority/size work, trim unused JS.

## Notes for Ivan
- Production being 58 days stale means the branch already contains ~18 unshipped commits; the preview deploy will bundle those with this revamp. Sign-off therefore covers the whole branch, not just the revamp diff.
- Vercel Web Analytics may need one dashboard toggle (Project → Analytics → Enable) if the injected script 404s on preview; flagged again in the loop scorecards if so.
