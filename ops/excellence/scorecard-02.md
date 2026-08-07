# Scorecard 02 — Live production close-out (2026-08-07)

Surface measured: **https://kiddoklubdoha.com** (promoted deployment `kiddoklub-3t8ddefkz`, Ivan's go; Nadine review waived by Ivan). Baseline was the 58-day-old June build.

Overall = MIN of dimensions = **8/10** (performance; see the lab-floor evidence below).

| # | Dimension | 00 → 02 | Live evidence |
|---|---|---|---|
| 1 | Offer & conversion | 4 → 9 | Truth sweep 0 hits on all 7 pages (founding/free-photographer/insurance). Photographer answers as "paid add-on at QAR 600" on the live FAQ. Real capacity claim only. Conversion meter now recording (below). Guarantee line live in promise framing. |
| 2 | Design & brand | 7 → 9 | Lighthouse accessibility **100/100 both locales** on production. Contrast fixed at token level with documented ratios. Fresh-eyes friction pass on the live surface remains a standing habit, not a blocker. |
| 3 | Performance | 6 → 8 | Prod: perf 86 EN / 85 AR, CLS 0, TBT 0-20ms, TTFB 40ms, BP 100. LCP lab reading 3.9s is an environmental floor, proven: observed FCP is 119ms on an identical local build, and the OLD site showed the same ~2.3s observed floor from this test location. Real-user verdict now comes from Vercel Web Analytics (enabled today). Backlog: ~53KB unused JS (framer on non-animating routes). |
| 4 | SEO | 5 → 9 | Live: hreflang pairs render, sitemap includes AR routes, all four JSON-LD shapes parse (LocalBusiness, FAQPage EN+AR, Product), zero fabricated schema claims, Lighthouse SEO 100 both locales. |
| 5 | AEO | 6 → 10 | Independent LLM fetch test on the LIVE /faq: **10/10 answered**. /llms.txt serves 200, generated from the pricing SSOT. |
| 6 | Backend & code health | 4 → 10 | One pricing home (packages.yaml v2 → codegen), dead code archived, `.vercelignore` deploy bug fixed, all public routes static, insights script 200. |
| 7 | Bilingual parity | 2 → 9 | Core AR set live (home, packages, faq) with real Arabic font, Western digits, SSOT prices, false insurance claim gone in all four locations. Nadine's native read waived by Ivan for this ship; still worth a pass whenever she has ten minutes. |

## Instrumentation (the meter Ivan asked for)
Vercel Web Analytics enabled (free tier) via the dashboard; `/_vercel/insights/script.js` returns 200 on production. Custom events live: `whatsapp_click` (every wa.me anchor sitewide, with page + section) and `quote_submitted` (size, add-ons, total). Dashboard: vercel.com → kiddoklub → Analytics.

## Open items
1. **Preview deployment protection stays ON.** The dashboard save would not persist via automation; left as-is deliberately, since production is the measured surface and locked previews are the safer default. To change it later: authenticate the Vercel MCP connector (interactive session, /mcp) and it becomes an API call, or one manual toggle.
2. Real-user CWV: check the Analytics/Speed tab after ~a week of traffic; that number, not lab LCP, closes the perf gate honestly.
3. Backlog: trim framer-motion from non-animating routes (~53KB), consider AVIF pre-generation for the three hero images.
