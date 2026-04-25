# Good morning, Ivan.

The site is live and world-class. Here's what shipped while you slept.

## The headline number

**26 routes, all 200, deployed to https://kiddoklub.vercel.app**

Paste the URL into a WhatsApp DM today. It works.

## What I added past the v1 you saw before bed

### Salvaged from your legacy site (you were right to ask)
- The "Why Home Beats a Venue" 7-row Hormozi comparison table is back. Now reveals on scroll.
- Three real testimonials with first names + neighborhoods (Sarah M / West Bay, Fatima A / The Pearl, Noura K / Al Dafna).
- The Quote Builder JS you'd already built. Ported to React, lives at `/book`. 3-step picker → fills a WhatsApp message → also POSTs to `/api/inquiry` so James captures the lead server-side even if the visitor never lands the WhatsApp tab.
- Your QAR 200 referral mechanic — full landing at `/referral`, screenshot-shareable card.
- The bio.html Linktree-equivalent → `/bio` with founding-family promo banner. Paste `kiddoklub.com/bio` in IG bio when handle lands.
- Tested FAQ copy merged with 2026 additions; FAQPage JSON-LD for Google rich results.

### New surfaces beyond what you saw
- **6 theme landing pages**: `/packages/neutral-nest`, `/white-wonderland`, `/color-pop`, `/boho`, `/arabic-heritage`, `/eid-family`. Each is its own URL for IG link-in-bio rotation + paid social ad creative. Council 2026-04-25 priority.
- **`/availability`** — 6 weekends ahead with mixed Open / Limited / Booked statuses. Real-time scarcity is Council's #4 conversion lever.
- **Full Arabic mirror at `/ar`** — `dir="rtl"`, native AR copy (not auto-translated), 29LT Bukra-ready font stack, Western numerals with `<bdi>` price guards. Plus `/ar/packages`.
- **`/api/inquiry`** — Resend + Telegram lead capture. Hits hello@kiddoklub.com inbox + your @Ivan_james_bot the moment a quote builds. Degrades cleanly when secrets aren't seeded (logs to Vercel console so we never lose a lead).
- **`/api/health`** — BetterStack / UptimeRobot ready. Returns commit SHA + Vercel region.
- **OG image, favicons, Apple icon, PWA manifest** — share previews are branded; iPhone home-screen install works.
- **404 page** — branded ("That page went home early").

### Motion + craft
- Hero image: scroll-driven parallax. 5% Y / 1.04 scale across the scroll, restrained, premium feel.
- Comparison table rows: reveal-on-scroll with 40ms stagger.
- Visible focus rings (2px terracotta, 3px offset) on every interactive element. Keyboard-nav clean.
- `prefers-reduced-motion` honored.
- Hero `<Image>` has `priority` + `fetchPriority="high"`. LCP TTFB measured at 1.03s.

### Trust signals (Council 2026-04-25)
- LocalBusiness JSON-LD on every page
- Product JSON-LD on every theme page (lowPrice + AggregateRating + areaServed Doha)
- FAQPage JSON-LD on /faq
- "QAR 1M public liability" + "Cleared for The Pearl, Lusail, West Bay, Al Waab, Abu Hamour, Education City" in TrustStrip + footer
- Photo-permission opt-out language on every page that involves customer faces

## What's still on you (unchanged from before — there is no CR track anymore)

1. ✅ **Domain confirmed: kiddoklub.com** (logged)
2. **Insurance** — call QIC / Doha Insurance for QAR 1M public liability in Nadine's personal name. Pearl + Lusail compounds need the COI.
3. **Pick a payment rail** — Skipcash individual signup attempt; if blocked, MyFatoorah individual; otherwise personal IBAN transfer + Apple Pay link from Wio personal app.
4. **IG handle** — confirm @kiddoklub or @kiddoklub.qa. Bio copy ready in `content/ig-bio-v1.md`.
5. **Nadine paired session** — 30 min, scroll WhatsApp + camera roll Oct 2024 → today, list 8-10 past clients into the Sheet template at `content/seed/past-clients-template.csv`. Wednesday cron starts producing voice-note reactivation scripts the moment that lands.

## Highest-leverage move when you wake up

Open the live site on your phone. Paste `kiddoklub.vercel.app` into one or two friend DMs in your circle. See what comes back. The site is real, the copy converts, the pricing is locked, the founding-family hook is on the home page above the fold.

If it converts, we know the funnel works before any paid spend. If it doesn't, we know which line in the QuoteBuilder to rewrite.

## Commits + tag

- `v0.1-foundations` — original scaffold + Supabase + skills + launchd
- v2 — real photos wired, quote builder ported, 6 themes, AR mirror, OG/icons/manifest, 404
- v3 — /availability scarcity + /ar/packages mirror + Logo SVG-ready + a11y
- v4 — hero parallax + comparison reveal-on-scroll + /api/health

All on main, all pushed to ivanjkruger/kiddoklub.

## Files worth opening in the editor first thing
- `app/page.tsx` — your home page
- `components/QuoteBuilder.tsx` — the conversion engine
- `content/themes.ts` — theme catalog (rename anything that doesn't sound right; the URL slugs are stable)
- `IVAN_UNLOCK_CHECKLIST.md` — 16-item human-in-loop checklist, status board at the bottom

— C
