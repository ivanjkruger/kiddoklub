# Scorecard 01 — After waves 1-4 + loop iteration 1 (2026-08-07)

Surface measured: local production server (`next start`, built from branch `revamp/ten-out-of-ten`) because the Vercel preview (`kiddoklub-d54oxn6hs…vercel.app`, Ready) sits behind deployment protection (302 → SSO). Final perf/AEO verification re-runs on the public URL at promotion.

Overall = MIN of dimensions = **7/10** (performance, externally capped). Baseline was 2/10.

| # | Dimension | 00 → 01 | Evidence |
|---|---|---|---|
| 1 | Offer & conversion | 4 → 9 | 11 of 12 Hormozi checks pass on the rendered surface: fake scarcity dead, only the real 10/month cap remains (EN+AR), photographer charged everywhere with "be in the photos" upsell framing, decoy tiers intact, CTA hierarchy + quote preselect. Open: #10 guarantee wording is staged promise copy ("On time, every time") pending Nadine's yes. |
| 2 | Design & brand | 7 → 9 | Lighthouse a11y **100/100 both locales** (was 94/96). Contrast root-caused: all four `-deep` accent tokens + `--color-muted` + referral WA button failed 4.5:1; replaced with computed compliant same-hue values (ratios in globals.css comments). `<main>` landmark added. Pre-ship checklist run; open: 15-min fresh-eyes pass + robustness poke on the deployed URL. |
| 3 | Performance | 6 → 7* | Structural work done: CSS transform-only hero entrance (no hydration-gated LCP), priority hero images, real Arabic font via next/font, CLS 0, TBT ≤10ms, TTFB 40ms. Local LH perf 85 EN / 82 AR is **image-optimizer-bound (cold cache every rebuild); not representative of Vercel edge**. *Capped by preview protection; measure on public URL at promotion, budget LCP ≤1.8s. |
| 4 | SEO | 5 → 9 | Fabricated aggregateRating (both instances) + invented price ceiling stripped; hreflang/canonical pairs on all 3 EN↔AR pairs; metadataBase set; /ar/faq in sitemap; JSON-LD parses clean on all four schema shapes (LocalBusiness, FAQPage EN+AR, Product). LH SEO 100 both locales. Open: Google Rich Results run on public URL. |
| 5 | AEO | 6 → 10 | Fetch test **10/10** on rendered /faq (was 8/10; cost + photographer answers added, SSOT-wired). AR fetch test 6/6 on new /ar/faq. /llms.txt live and generated from packages.yaml (no drift possible). All copy server-rendered. |
| 6 | Backend & code health | 4 → 10 | packages.yaml v2 = the one pricing home; components/FAQ/llms/schema all read the generated module; phantom "Klub Small" tier gone; referral figure has a yaml home; wati webhook archived; `.vercelignore` bug that broke Vercel builds fixed; build clean, all public routes static. |
| 7 | Bilingual parity | 2 → 9 | Core set per decision #6: /ar, /ar/packages (SSOT-wired), /ar/faq (new, 9 answer-first Qs). **Legal fix: the false "QAR 1M insurance" claim killed in all four AR locations** (FAQ answer, trust row, trust strip, footer); UV claim softened to the true sanitization line. All Arabic-Indic numerals → Western digits per the locked rule. Open: Nadine's native review of AR copy before production. |

## What Ivan must do (the three walls)
1. **Preview protection**: Vercel dashboard → kiddoklub → Settings → Deployment Protection → disable for previews (or just promote after review) so the loop can measure the real edge.
2. **Web Analytics**: Vercel dashboard → kiddoklub → Analytics → Enable (one click; the `/_vercel/insights` script currently 404s, which is also the only Lighthouse best-practices deduction).
3. **Sign-off**: review the preview, Nadine reads the AR pages + the "On time, every time" promise line, then `vercel deploy --prod` (or tell me to).

## Loop state
Iteration 1 complete: 3 fix rounds inside the iteration (accent tokens → muted token → referral button), a11y converged to 100/100. Next iteration is blocked only on wall #1; when the public URL is measurable, re-run Lighthouse + Rich Results + the LLM fetch test there and close the perf gate.
