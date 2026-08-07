import { Suspense } from "react";
import { QuoteBuilder } from "@/components/QuoteBuilder";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const metadata = {
  title: "Build a quote · KiddoKlub",
  description:
    "Pick your theme, pick your size, add what you want. Instant WhatsApp quote with Nadine, reply within 30 minutes during the day.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-14 pb-2 max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          Quote · book · done
        </p>
        <h1 className="text-4xl md:text-6xl leading-[1.05] mb-4">
          Build your party in <span className="italic-display text-[var(--color-terracotta)]">90 seconds</span>.
        </h1>
        <p className="text-[var(--color-muted)] text-lg max-w-xl">
          Three steps. Click send and your quote opens in WhatsApp with Nadine. We reply within 30 minutes during the day.
        </p>
      </section>

      <Suspense fallback={null}>
        <QuoteBuilder />
      </Suspense>

      <section className="px-6 py-12 max-w-3xl mx-auto text-center">
        <p className="text-sm text-[var(--color-muted)]">
          Want to talk first?{" "}
          <a
            href="https://wa.me/97450318434"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-terracotta)] underline-offset-4 hover:underline"
          >
            WhatsApp Nadine directly
          </a>
          .
        </p>
      </section>

      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}
