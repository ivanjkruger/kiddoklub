import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const metadata = {
  title: "FAQ — KiddoKlub",
  description:
    "Delivery zones, deposit policy, sanitization, insurance, and everything else Doha parents ask before booking.",
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Where do you deliver?",
    a: "Cleared for The Pearl, Lusail Marina, West Bay, Al Waab, Abu Hamour, Education City, Al Gharrafa. Other Doha areas on request — just WhatsApp us your address.",
  },
  {
    q: "How sanitized is the equipment?",
    a: "Every set is wiped down + UV-treated between parties. We can send photo evidence on request. Quarterly steam clean. Equipment retired and replaced every 18 months.",
  },
  {
    q: "Are you insured?",
    a: "Yes. QAR 1M public liability cover. Most premium compounds (Pearl, Lusail) ask for the certificate before we enter — we send it directly to your compound office.",
  },
  {
    q: "What ages do your sets work for?",
    a: "Designed for kids 1-5. Younger toddlers love the soft slides and ball pits; older kids do best with the bouncy-castle add-on.",
  },
  {
    q: "Can I see the price for Klub Signature?",
    a: "Starting from QAR 3,800. The exact number depends on theme, head count, and add-ons — easier to talk it through. WhatsApp Nadine and we'll quote you in the chat.",
  },
  {
    q: "How does the deposit work?",
    a: "30% on booking holds your date. The balance is due the day before. Reschedule for free up to 14 days out, no questions asked. Inside 14 days the deposit is non-refundable but transferable as a 50% credit to a future date.",
  },
  {
    q: "Do you have an Arabic-speaking team?",
    a: "Yes. Our setup team speaks Arabic and English. Captions, Cal.com confirmations, and WhatsApp templates are bilingual on request.",
  },
  {
    q: "Can we do an indoor party? It's hot.",
    a: "Absolutely. The Mini and Classic packages fit most majlis or living room footprints. We avoid outdoor setups Jun-Aug — for those months we partner with indoor venues.",
  },
  {
    q: "Do you do ladies-only setups?",
    a: "Yes. Tell us at booking and we'll arrange a female-only setup team where logistically possible.",
  },
  {
    q: "Can you do a theme not on your list?",
    a: "Probably yes for Klub Signature — DM Nadine the inspiration photo and we'll cost it. Boho, Jungle, Princess, Pastel Rainbow, Arabic Heritage, and Eid are our standing themes.",
  },
  {
    q: "What about photos and posting?",
    a: "We ask before we post. Default is opt-out — your party stays private unless you say it's OK to share. If you do say yes, we'll send the edited photos to you first and tag you when we post.",
  },
  {
    q: "How do I pay?",
    a: "Bank transfer to our IBAN, Apple Pay, or Skipcash payment link in WhatsApp. No cash. We can split the payment 30% deposit + 70% balance the day before.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 pb-12 max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
          Frequently asked
        </p>
        <h1 className="text-4xl md:text-5xl mb-3 text-center">
          What every Doha mom <span className="italic-display text-[var(--color-terracotta)]">asks first</span>
        </h1>
        <p className="text-center text-[var(--color-muted)] mb-12">
          Anything missing here? WhatsApp Nadine and we&apos;ll add it.
        </p>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="rounded-xl bg-white border border-black/5 p-5 group open:shadow-sm"
            >
              <summary className="cursor-pointer font-medium list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <span className="text-[var(--color-terracotta)] flex-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}
