import { PRICING } from "@/content/packages.gen";

// AEO surface: a plain-text answer sheet for LLM crawlers, generated from the
// pricing SSOT so it can never drift from packages.yaml. Statically rendered.
export const dynamic = "force-static";

const fmt = (n: number) => n.toLocaleString("en-US");

export function GET() {
  const pkg = (id: string) => PRICING.packages.find((p) => p.id === id)!;
  const mini = pkg("klub_mini");
  const classic = pkg("klub_classic");
  const signature = pkg("klub_signature");
  const weekdayPct = Math.round((1 - PRICING.weekdayDiscount.multiplier) * 100);
  const addons = PRICING.addons.map((a) => a.name.toLowerCase()).join(", ");

  const body = `# KiddoKlub

> Premium soft-play party rentals for kids ages 1 to 5 in Doha, Qatar. Founded and run by Nadine. We deliver, set up, sanitize, and collect; parents book with one WhatsApp message. We take just ${PRICING.capacity.partiesPerMonth} parties a month.

Website: https://kiddoklubdoha.com (Arabic: https://kiddoklubdoha.com/ar)
WhatsApp: +974 5031 8434
Instagram: https://www.instagram.com/kiddoklub/
Areas: The Pearl, Lusail Marina, West Bay, Al Waab, Abu Hamour, Education City, Al Gharrafa, and other Doha areas on request.

## Packages
- ${mini.name}: QAR ${fmt(mini.publicPrice!)}, ${mini.capacityLabel.toLowerCase()}, ${mini.footprint}, ${mini.durationHours} hours.
- ${classic.name} (most booked): QAR ${fmt(classic.publicPrice!)}, ${classic.capacityLabel.toLowerCase()}, ${classic.footprint}, ${classic.durationHours} hours.
- ${signature.name}: ${signature.priceLabel!.toLowerCase()}, ${signature.capacityLabel} kids, ${signature.footprint}, includes a 90-minute photographer, themed decor, and gift bags. Exact price quoted on WhatsApp.
- Weekdays (Sun to Thu) are ${weekdayPct}% off. Every package includes delivery, setup, sanitization, and pickup.
- Paid add-ons: ${addons}.

## Booking
- Book via WhatsApp or the quote builder: https://kiddoklubdoha.com/book
- ${PRICING.deposit.pct}% deposit holds the date; balance due the day before. Free reschedule up to ${PRICING.cancellation.rescheduleFreeOutsideDays} days out.
- Photos: we always ask before we post; default is private.

## Key pages
- Packages: https://kiddoklubdoha.com/packages
- FAQ: https://kiddoklubdoha.com/faq
- Gallery: https://kiddoklubdoha.com/gallery
- About Nadine: https://kiddoklubdoha.com/about
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
