import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const metadata = {
  title: "FAQ · KiddoKlub",
  description:
    "Delivery zones, deposit policy, sanitization, insurance, ages, and everything else Doha parents ask before booking.",
};

// Salvaged + merged: legacy FAQ (proven copy) + 2026 additions (insurance, photo permissions, ladies-only).
const FAQS: { q: string; a: string }[] = [
  { q: "What ages is the soft play suitable for?",
    a: "Designed for kids ages 1 to 5. All equipment is foam-padded and safe for toddlers. Older siblings are welcome to join in." },
  { q: "How much space do I need?",
    a: "Klub Mini fits a 3 × 3m corner. Classic wants 4 × 5m. Signature needs 5 × 6m+. We measure your space first. Indoors, outdoors, garden, majlis, hotel suite; all fine." },
  { q: "Where do you deliver?",
    a: "Cleared for The Pearl, Lusail Marina, West Bay, Al Waab, Abu Hamour, Education City, Al Gharrafa. Other Doha areas on request." },
  { q: "How clean is the equipment?",
    a: "Every piece is wiped down and sanitised between every single rental; we're happy to send photo evidence on request. Anything that shows wear gets retired, never re-rented." },
  { q: "Are you insured?",
    a: "We're finalising our public liability cover now. If your compound (Pearl, Lusail, and similar) needs paperwork before we enter, message Nadine on WhatsApp and she'll sort it with your gate office ahead of your date." },
  { q: "How far in advance should I book?",
    a: "Minimum 7 days for weekend slots. Last-minute (under 7 days) is sometimes possible at a 15% rush surcharge; message Nadine on WhatsApp." },
  { q: "What if I need to cancel or reschedule?",
    a: "Reschedule for free up to 14 days out, no questions asked. Inside 14 days the deposit is non-refundable but transfers as a 50% credit to a future date. Weather (outdoor only): we always reschedule, never refund." },
  { q: "Can I see the price for Klub Signature?",
    a: "Klub Signature starts from QAR 3,800. The exact number depends on theme, head count, and add-ons; easier to talk it through. WhatsApp Nadine and we'll quote you in chat." },
  { q: "How do I pay?",
    a: "Bank transfer to our IBAN, Apple Pay, or a Skipcash payment link in WhatsApp. No cash. We can split 30% deposit + 70% balance the day before." },
  { q: "Do you have an Arabic-speaking team?",
    a: "Yes. The setup team speaks Arabic and English. Captions, Cal.com confirmations, and WhatsApp templates are bilingual on request." },
  { q: "Can we do an indoor party? It's hot.",
    a: "Absolutely. Mini and Classic fit most majlis or living-room footprints, so indoors is easy. In the hottest months (Jun to Aug) we recommend keeping it inside; if you need a venue, message Nadine and she'll point you to a few options." },
  { q: "Do you do ladies-only setups?",
    a: "Yes. Tell us at booking and we'll arrange a female-only setup team where logistically possible." },
  { q: "Can you do a theme not on your list?",
    a: "Probably yes for Klub Signature; DM Nadine the inspiration photo and we'll cost it." },
  { q: "What about photos and posting?",
    a: "We ask before we post. Default is opt-out; your party stays private unless you say it's OK to share. If you do say yes, we send the edited photos to you first and tag you when we post." },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 pb-12 max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
          Common questions
        </p>
        <h1 className="text-4xl md:text-5xl mb-3 text-center">
          Everything you need <span className="italic-display text-[var(--color-terracotta)]">to know first</span>
        </h1>
        <p className="text-center text-[var(--color-muted)] mb-12">
          Anything missing? WhatsApp Nadine; she&apos;ll add it here.
        </p>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="rounded-xl bg-white border border-black/5 p-5 group open:shadow-sm"
            >
              <summary className="cursor-pointer font-medium list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <span className="text-[var(--color-terracotta)] flex-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* JSON-LD: FAQPage schema for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}
