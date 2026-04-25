import { ReferralCard } from "@/components/ReferralCard";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const metadata = {
  title: "Refer a friend, save QAR 200 — KiddoKlub",
  description:
    "Send this page to a Doha mom. They book, you both save QAR 200 on your next setup.",
};

export default function ReferralPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-14 pb-4 max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          Friends save more
        </p>
        <h1 className="text-4xl md:text-5xl leading-[1.05]">
          One share. <span className="italic-display text-[var(--color-terracotta)]">Two parties cheaper.</span>
        </h1>
      </section>

      <ReferralCard />

      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-serif font-semibold mb-4">How it works</h2>
        <ol className="space-y-4 text-[var(--color-muted)] leading-relaxed">
          <li><span className="text-[var(--color-ink)] font-medium me-2">1.</span> Send any Doha mom this page or screenshot of the card above.</li>
          <li><span className="text-[var(--color-ink)] font-medium me-2">2.</span> When she WhatsApps Nadine and books, she mentions you by name.</li>
          <li><span className="text-[var(--color-ink)] font-medium me-2">3.</span> She gets QAR 200 off her booking. We credit your next setup with QAR 200 off too.</li>
        </ol>
        <p className="text-sm text-[var(--color-muted)] mt-8 italic">
          Stackable across friends. No cash equivalent. We log credits in your client record on first booking.
        </p>
      </section>
      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}
