import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const metadata = {
  title: "Contact — KiddoKlub",
  description: "WhatsApp Nadine. Or email hello@kiddoklub.com. We reply within 30 minutes during the day.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 pb-20 max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          Talk to Nadine
        </p>
        <h1 className="text-4xl md:text-5xl mb-6">
          The fastest way is <span className="italic-display text-[var(--color-terracotta)]">WhatsApp</span>
        </h1>
        <p className="text-[var(--color-muted)] max-w-xl mx-auto mb-10">
          We reply within 30 minutes during the day, slower in the evening once the kids are down.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-14">
          <a
            href="https://wa.me/97450318434"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-terracotta)] text-white px-7 py-3 font-medium"
          >
            WhatsApp +974 5031 8434
          </a>
          <a
            href="mailto:hello@kiddoklub.com"
            className="rounded-full border border-[var(--color-ink)]/15 px-7 py-3 font-medium hover:bg-[var(--color-sand)]/40 transition-colors"
          >
            hello@kiddoklub.com
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl bg-white p-6 border border-black/5">
            <p className="font-medium mb-1">Service area</p>
            <p className="text-[var(--color-muted)]">
              The Pearl · Lusail · West Bay · Al Waab · Abu Hamour · Education City. Other Doha areas on request.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-black/5">
            <p className="font-medium mb-1">Response time</p>
            <p className="text-[var(--color-muted)]">
              Within 30 min in working hours. By 9am next day if you message late.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-black/5">
            <p className="font-medium mb-1">Lead time</p>
            <p className="text-[var(--color-muted)]">
              7+ days preferred. Inside 7 days = a 15% rush surcharge plus inventory check.
            </p>
          </div>
        </div>
      </section>
      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}
