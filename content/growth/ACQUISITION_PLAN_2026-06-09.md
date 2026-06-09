# KiddoKlub Growth & Acquisition Plan (2026-06-09)

*Owners: Nadine (face, sends everything), James-draft (drafts, never sends), Ivan (backend, ~30 min/day). No CR; manual WhatsApp Business App only; no "AI"/"chatbot" client-facing; no dashes; Claude drafts, humans approve and send. Founding-family offer expires 2026-06-30.*

---

## 1. Where it's at (honest current-state read)

The acquisition engine is built in code and switched off in reality. The site is live (kiddoklubdoha.com, 200 OK), bilingual EN/AR with RTL, and Cal.com booking, Skipcash deposit, and Supabase CRM are all coded. The Dream-100 list, EN+AR outreach scripts, and eight kiddoklub-* skills (booking-intake, quote, outreach-draft, reactivation, post-party-followup, content-engine, weekend-prep, voice-audit) exist. Nothing points a single customer at any of it.

Three hard truths set the whole sequence:

1. **The trust layer is fabricated and live.** TrustFooter hardcodes QAR 1M liability and EN71; the homepage shows named reviews and "Featured in Doha Mums"; insurance is not bound, testimonials are placeholders, and zero clients have been served. One screenshot turns this into a fraud claim. This is the single highest-severity blocker, and it also gates Pearl/Lusail delivery (compounds require a real COI) and insurance binding (blocked by no-CR).
2. **Every channel is off and there is no real photography.** IG handle unconfirmed, Meta/Snap unregistered, past-client list not extracted, Doha Mums post not done, gallery is stock. The differentiator is "control YOUR photos"; stock imagery actively undercuts it.
3. **The payment + booking rail is unwired against a burning deadline.** Deposit rail undecided (Skipcash individual vs MyFatoorah vs personal IBAN + Apple Pay); Cal.com event types and Supabase not provisioned; founding urgency sits only on the homepage, absent from the packages decision page.

The consequence: warm and referral channels can fire THIS WEEK because they carry no fabricated claims, need no photos, and tolerate a manual IBAN rail. Everything public or paid stays gated until the trust layer is honest.

---

## 2. The thesis (the ONE acquisition engine)

KiddoKlub wins by owning one frame against one real competitor: the parent who already priced a hotel kids party (Banana Island QAR 180/child, Sheraton QAR 175/child, min-10 cover) and would rather host at home, pick their own guest list, and keep their own photos. The engine is a relationship-led WhatsApp funnel where Nadine, a mum talking to mums, converts in-thread at 3 to 5x web, fuelled first by free warm and referral channels and later by a single Click-to-WhatsApp Meta core. Every delivered party produces a testimonial and ad creative that replaces a fabricated claim with a real one, so the engine repairs its own trust layer as it runs.

---

## 3. The end-to-end funnel

There are two paths and one rule. The rule: **WhatsApp-direct wins whenever a human relationship exists or can be opened in one message. There is no standalone web lead form; the site exists to verify trust mid-conversation, not to capture leads.**

- **COLD path:** Click-to-WhatsApp ad (founding hook) to WhatsApp greeting to human qualify to Cal.com link dropped in-thread to deposit to confirm.
- **WARM/referral path:** Nadine voice-note or referrer intro to WhatsApp reply to Cal.com link to deposit to confirm. No ad, no landing page.

Stage by stage:

1. **Discovery.** Cold = one CTW Meta ad, hotel-substitute hook, CTA "Send WhatsApp" prefilled "Hi Nadine, tell me about the founding offer." Warm = Nadine 30-sec voice-note (kid by name + last package) or a Dream-100 Tier-1 planner intro.
2. **Profile/bio.** IG bio links to `wa.me/97450318434` with prefilled founding text (NOT Linktree, NOT homepage). Bio states the frame + deadline, bilingual.
3. **Landing (verification, not capture).** The site is the "are these people real" check mid-chat. It must survive one screenshot. Hero = overhead flatlay before kids arrive. **Hard gate: bind insurance or strip every false claim (TrustFooter QAR 1M/EN71, named reviews, "Featured in Doha Mums", CR line) before ANY traffic.**
4. **Lead capture (WhatsApp-direct, human).** WA Business App on +974 5031 8434 with greeting, away message, 10 Quick Replies. Qualify in-thread: kid count, age, date, compound, package lean. Signature ("from QAR 3,800, let's chat") forces the high-conversion conversation here.
5. **Cal.com booking.** Three event types (mini/classic/signature), 4h, 72h min notice, 1/day, buffers 60/45. Link dropped after qualification, never cold.
6. **Deposit.** 30% non-refundable within 14 days. Rail: Skipcash individual invoice in-thread; fallback = Nadine IBAN + Apple Pay as a Tier-B-approved message. No cash, ever.
7. **Confirmation.** `kiddoklub-booking-intake` on the Cal.com webhook: dedupe, write Supabase, deposit invoice, Telegram ping Ivan. Confirmation carries the photo-permission opt-out line.
8. **Delivery.** Equipt Qatar team (Jamsheer + Khaleer, Abdul oversees) deliver/setup/sanitize/pickup. `kiddoklub-weekend-prep` (Fri cron) issues the checklist, escalates Tier B on any safety/deposit/sanitization fail. Every party is content; photographer retained so delivery produces proof.
9. **Testimonial capture.** `kiddoklub-postparty-followup` (T+24h): edited photos via Drive link, review ask, status to review_pending. Capture location-specific ("Sara, The Pearl") and Arabic testimonials in original script. This fuel replaces every fabricated review with a real one.
10. **Referral.** At follow-up, offer QAR 150 credit for a referred mum who books; referred lead re-enters as WARM at Stage 1.
11. **Reactivation.** `kiddoklub-reactivation` (Wed cron): no rebook in 90 days gets a Nadine voice-note (kid by name + last package). Highest QAR/hr lever; re-enters at warm Stage 1.

---

## 4. Channel plan, ranked

| Rank | Channel | Yield | Effort | Owner | Status / Gate |
|---|---|---|---|---|---|
| 1 | **Past-client reactivation** (Nadine WA voice-notes) | Highest QAR/hr | Near-zero | James drafts via `kiddoklub-reactivation`; Tier-B to Ivan; **Nadine records + sends** | FIRE NOW. Gate: past-client list extracted. No photo/insurance/rail dependency |
| 2 | **Dream-100 Tier 1 referrals** (planners + decorators, QAR 150/ref) | High | Low | James drafts via `kiddoklub-outreach-draft` (Mon batch); Tier-B; **Nadine sends** | FIRE NOW, parallel to #1. Opener is relationship-first, carries no claims |
| 3 | **Click-to-WhatsApp Meta ads** | High (compounds 3-5x in-WA) | Medium | Ivan owns acct + budget (one-time); James drafts creative; Nadine closes inbound | HOLD. Gate: (a) insurance bound OR claims stripped, (b) one real shoot, (c) Meta acct + pixel + past-client Custom Audience. Re-time off Jul-Aug trough |
| 4 | **Doha Mums Wed-thread + KidsLoveQatar listing** | Medium-high | Low | James drafts EN+AR; **Nadine posts** under own identity | HOLD. Gate: real party photos exist AND "Featured in Doha Mums" false claim removed |
| 5 | **IG organic** (5 reels + 2 carousels/wk) | Medium (builds slow) | Medium | `kiddoklub-content-engine` (Sun cron); Tier-B Ivan + Nadine; Nadine on-camera + posts | HOLD. Gate: real footage + IG handle confirmed. Feeds #3's pixel/audiences, so light before paid |
| 6 | **Dream-100 Tier 2** (nurseries, 15% group discount) | Medium | Medium | James drafts; **Nadine sends** | LATER. Gate: Tier 1 first referral booked + one real party delivered |
| 7 | **TikTok organic** | Low-medium | Medium | James repurposes; **Nadine posts** | LATER. Gate: real UGC exists + IG running. Pure repurpose |
| 8 | **Snap paid** | Low | — | — | SKIP. Only 2-4% Qatar share, Saudi-dominant. No trigger |

---

## 5. Paid ads + AI-content engine

**Structure (Meta only; Snap skipped). One campaign per stage, ABO so each set is controlled:**

- **Stage 1 Awareness reel** (Engagement/ThruPlay, IG Reels+Stories+Feed, FB Reels, manual placements, no audience network): cheap reach to fill engager + video-viewer pools. Plumbing, not the booking driver.
- **Stage 2 Click-to-WhatsApp (booking core):** Engagement, conversion location = WhatsApp, CTA "Send WhatsApp message," prefilled "Hi Nadine, saw your reel; tell me about a party for [child age]." Lands in the free WA app, opens the 72h zero-fee window. CTW over Lead Forms (Lead Ads trigger CR verification).
- **Stage 3 Retargeting:** same CTW objective; audiences = video viewers 50%+, IG/FB engagers 365d, WA openers who did not book. Creative = hotel-comparison carousel + founding urgency + a real testimonial clip once one exists.

**Budget (QAR 70/day, ~$500/mo, under the personal-card friction line):**

| Stage | Daily | Monthly | Share |
|---|---|---|---|
| Stage 2 CTW (core) | QAR 42 | ~1,260 | 60% |
| Stage 1 Reels awareness | QAR 18 | ~540 | 25% |
| Stage 3 Retargeting | QAR 10 | ~300 | 15% |
| **Total** | **QAR 70** | **~2,100** | 100% |

Run 2 to 3 weeks, read cost-per-WA-conversation; scale Stage 2 only if it holds under ~QAR 45 and Nadine's close rate proves ~30%. Never scale awareness.

**Audiences:** tight pin-drop radius on premium compounds (Pearl, Lusail, West Bay Lagoon, Al Waab, Abu Hamour, Ain Khaled, Gharrafa); toddler-parent interest layer; past-client Custom Audience (upload the 8-10 list now to seed); 1% Qatar lookalike off it once seeded (the eventual cheapest source, gated on extracting the list this week).

**Measurement (no-CR, manual-WA attribution):** distinct prefilled-message ref tags per ad set as the fingerprint; Meta's "Messaging conversations started" as native CPL; one manual Google Sheet booking log (date, WA name, ad-set ref, child age, package, booked Y/N, deposit Y/N, QAR) Nadine fills at approve-time = source of truth; optional Conversions API later once a deposit rail fires a server-side event. Read weekly; kill any set above ~QAR 45/conversation not closing; double the lowest cost-per-booked-deposit.

**Creative rule:** Higgsfield/Seedance (skills 07/09/15 at `/Users/ivankruger/ivan/_references/higgsfield-seedance2-jineng`) only ANIMATE real assets (set photos, styled stills given parallax/light). NEVER synthetic kids, never an undelivered set. Real Nadine + real UGC client clips stay the hero.

**6 concepts (EN + AR parallel, premium frame, no published Signature price, never against the cheap-castle tier):**
1. **Hotel-substitute kill (conversion hero):** "Your villa. Your guest list. Your photographer. The same wow as a hotel party; none of the cover charge." Real set photo required; AI may add slow push-in only.
2. **Transformation reveal:** "She blinked and the living room became a wonderland." Time-lapse empty corner to full setup; AI parallax bridge acceptable.
3. **Stress-off promise (mum POV):** "Ten little guests; zero stress for mum. We set up, we style, we pack down." REAL Nadine only, not AI-eligible; the trust anchor.
4. **Photo control (differentiator):** "The photos are yours to keep. Always; we ask before we ever post." Real set photos; AI may animate the gallery scroll only. Carries the photo-permission line.
5. **Before/after in 2 hours (operational proof):** "From this empty corner to this in two hours. You make the tea; we make the magic." Real stills; AI parallax eligible.
6. **Founding-family urgency (run to 2026-06-30, pull after):** "Three founding families this month; one spot left. Free castle and photographer on Klub Classic." Text-led, AI-eligible real-still background.

Weekly cadence (content-engine, Sun cron, Tier B): Mon setup time-lapse reel; Tue host-at-home-vs-hotel carousel; Wed Nadine-on-camera reel (also Doha Mums Wed-thread day); Thu UGC client reel (gated on first delivered party); Fri package/founding carousel; Sat detail beauty pass (AI-eligible). Real footage always replaces AI as it arrives.

---

## 6. The personal layer

The mechanism that drives 3 to 5x: **Nadine voice + named-kid personalization + 30-second voice-notes**, stacked. Nadine voice removes the "a business is messaging me" reflex; naming the child ("Layla's almost 4") proves it is not a broadcast; voice-notes carry warmth text cannot fake and get 4-5x the reply rate in Doha, and cannot be screenshot-shamed. The constraint that makes it work: **first touch is 100% relationship, 0% pitch** (no price, no link, no brand name until they reply).

Frames in Nadine voice (EN + AR parallel, semicolons not dashes, sign-off "Nadine x" or "Nadine 🤍," photo-permission line on every repost touch, AR informal-Gulf register native-validated, routed through `kiddoklub-voice-audit` + dash-audit, Tier B, Nadine sends manually):

- **Reactivation (voice-note, max 30s):** "Hi Sara, it's Nadine. I cannot believe Layla is almost four; the photos from her rainbow party last year still make me smile. If you're thinking about doing something for her again this year, I'd love to help. No rush at all; just thinking of you both."
- **Cold partner DM (observation then question, stop):** "Hi Reem, that pastel setup you styled last weekend was gorgeous; the balloon-to-cake colour match was so clean. Quick question, do you usually bring in the play area yourselves or do you outsource that part?"
- **Post-party testimonial ask (after photos delivered):** "Sara, I just dropped 24 edited photos from Layla's party in your WhatsApp. If you have a sec, a quick Google review would mean the world to me; here's the link. And as always, we only repost if you say yes."
- **Founding nudge to a warm lead gone quiet:** "Hi Nour, no rush on this at all. We're holding the last couple of founding slots for June, which include the bouncy castle and a photographer on us. I thought of you and Adam first before they're gone. Want me to pencil a date?"

---

## 7. 30 / 60 / 90 day execution plan

**Days 0 to 30 — switch on warm + referral, book before the offer expires (zero ad spend).**
- **Extract the 8-10 past-client list.** Owner: Ivan. Trigger: today. Deadline: 2026-06-11. (Highest-leverage unblock; also seeds the #3 lookalike.)
- **Configure WA Business App on +974 5031 8434** (greeting, away, 10 Quick Replies). Owner: Ivan sets up, Nadine owns the phone. Trigger: list extracted. Deadline: 2026-06-12.
- **Run reactivation voice-notes.** Owner: James drafts, Nadine sends. Trigger: WA configured. Deadline: first batch out 2026-06-13, ongoing.
- **Activate Dream-100 Tier 1 (top 10 by signal).** Owner: James drafts Mon batch, Nadine sends. Trigger: in parallel. Deadline: first 10 openers out 2026-06-15.
- **Decide + wire deposit rail** (Skipcash individual; fallback IBAN + Apple Pay message). Owner: Ivan. Trigger: today. Deadline: 2026-06-16.
- **Create Cal.com 3 event types + provision Supabase + Vercel/DNS.** Owner: Ivan. Trigger: rail decided. Deadline: 2026-06-18.
- **Bind insurance OR strip every false trust claim** (TrustFooter, Testimonials, "Featured in Doha Mums", CR line). Owner: Ivan. Trigger: today (gates all public/paid). Deadline: 2026-06-20.
- **Move founding urgency + slot counter onto the packages page; price add-ons.** Owner: James drafts copy, Ivan ships. Trigger: claims fixed. Deadline: 2026-06-22.
- **Target: 2 to 3 founding bookings before 2026-06-30** from warm + referral alone.

**Days 31 to 60 — fuel the flywheel, light organic (Jul, expat trough; no paid push).**
- **Retain photographer + run styled shoot / shoot first real party.** Owner: Nadine books, Ivan funds. Trigger: first founding booking confirmed. Deadline: 2026-07-10.
- **Confirm IG handle, launch IG content engine** (Sun cron). Owner: Nadine on-camera + posts, James drafts. Trigger: real footage exists. Deadline: 2026-07-12.
- **Doha Mums Wed-thread + KidsLoveQatar listing.** Owner: Nadine posts. Trigger: real photos + false claim removed. Deadline: 2026-07-15.
- **Register Meta Business Manager + pixel; upload past-client Custom Audience.** Owner: Ivan. Trigger: insurance/claims clear. Deadline: 2026-07-20.
- **Transition offer to social-proof-led** (castle becomes paid QAR 400 add-on; keep photographer bundled in Classic as the anti-hotel hook). Owner: James drafts, Ivan ships. Trigger: 2026-07-01. Deadline: 2026-07-02.

**Days 61 to 90 — switch on the scalable paid core (off the trough).**
- **Launch Stage 2 CTW Meta at QAR 70/day** (3 stages). Owner: Ivan sets up, James drafts creative, Nadine closes. Trigger: insurance clear + real shoot + pixel + lookalike seeded. Deadline: 2026-08-15.
- **Stand up the manual booking log sheet; read weekly.** Owner: Nadine fills, Ivan reviews. Trigger: ads live. Deadline: ongoing from launch.
- **Seed Dream-100 Tier 2 nurseries** (Pearl/Lusail). Owner: James drafts, Nadine sends. Trigger: one real party delivered + Tier 1 referral booked. Deadline: 2026-08-25.
- **Target: 8 to 10 bookings/month, QAR 22 to 50K, by Day 90 (2026-09-07).**

---

## 8. Switch-on checklist (operational blockers, mapped to who/trigger/deadline)

| # | Blocker | Owner | Trigger | Deadline | Gates |
|---|---|---|---|---|---|
| 0.3 | Bind insurance OR strip all false trust claims | Ivan | Today | 2026-06-20 | ALL public + paid; Pearl/Lusail delivery |
| 0.4 | Decide + wire deposit rail | Ivan | Today | 2026-06-16 | Every booking |
| 0.5 | Confirm IG handle | Ivan/Nadine | Rail wired | 2026-07-12 | Cold funnel mouth, all Meta ads |
| 0.6 | Extract 8-10 past-client list | Ivan | Today | 2026-06-11 | Reactivation (#1) + lookalike (#3) |
| 1.1 | WA Business App on +974 5031 8434 | Ivan + Nadine | List extracted | 2026-06-12 | Entire capture + delivery channel |
| 1.2 | Cal.com 3 event types | Ivan | Rail decided | 2026-06-18 | Booking step |
| 1.3 | Supabase + migrations | Ivan | Rail decided | 2026-06-18 | Confirm, CRM, slot counter |
| 1.4 | Vercel + DNS | Ivan | Rail decided | 2026-06-18 | Webhook + Skipcash callbacks, trust-check URL |
| 1.5 | Voice-note soft launch | James draft, Nadine send | 1.1 done | 2026-06-13 | First warm revenue |
| 2.2 | Retain photographer | Nadine | First founding booking | 2026-07-10 | Real proof + ad fuel |
| 2.4 | Styled shoot / first real party | Nadine | Photographer retained | 2026-07-10 | IG, Doha Mums, paid creative |
| 2.3 | Meta Business Manager + pixel | Ivan | 0.3 clear | 2026-07-20 | Cold paid core (#3) |
| 2.5 | Doha Mums Wed-thread | Nadine | Real photos + claim removed | 2026-07-15 | Highest-trust seeding |

Repo references: `apps/kiddoklub/IVAN_UNLOCK_CHECKLIST.md` (0.3, 0.4, 0.6, 1.1-1.4, 2.2-2.5), `content/dream-100.md`, `apps/kiddoklub/` (TrustFooter.tsx, Testimonials.tsx, QuoteBuilder.tsx, gallery page.tsx), `apps/kiddoklub/content/packages.yaml`, `apps/kiddoklub/ops/pricing.md`, `apps/kiddoklub/content/{voice-tone,format-patterns,constraints}.md`.

---

## 9. Metrics & targets

- **North star:** 10 weekend bookings/month, QAR 22 to 50K/month, by Day 90 (2026-09-07). Avg ticket ~QAR 2,200, 60-70% gross margin after photographer + helper + sanitization.
- **Day 30 (2026-06-30):** 2 to 3 founding bookings from warm + referral, zero ad spend. Past-client list extracted; WA + Cal.com + Supabase + rail live; trust layer honest.
- **Day 60 (2026-07-31):** first real shoot done; IG engine running; Doha Mums + KidsLoveQatar live; Meta acct + pixel + lookalike seeded; offer transitioned to social-proof-led.
- **Day 90 (2026-09-07):** CTW core live off the trough; 8 to 10 bookings/month at QAR 70/day spend (~$500/mo).

Funnel KPIs (manual booking-log sheet, read weekly):
- **Cost per WA conversation started** (Meta "Messaging conversations started"): target under QAR 45.
- **WA conversation to booking close rate** (Nadine): target 30 to 40%.
- **Cost per booked deposit** by ad-set ref tag: scale the lowest, kill sets over QAR 45/conversation not closing.
- **AOV lift:** QAR 2,200 to ~2,800 via the single photo-framed add-on suggestion (balloon arch first touch, soft-serve cart on confirmation).
- **Warm-channel reply rate:** voice-notes 4-5x text baseline; track replies per batch.
- **Referral partners live:** count of Dream-100 Tier 1 partners who have sent at least one booking; each live planner ~ QAR 300-600/month pipeline.
- **Trust-repair metric:** real testimonials captured (post-party-followup), replacing every placeholder review before any of it is shown publicly.

All numbers above are sourced from the verified ground truth and pricing files; the live founding-spot counter must read from the Supabase booking count, never invented.
