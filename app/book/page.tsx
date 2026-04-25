import Link from "next/link";

export const metadata = {
  title: "Book — KiddoKlub",
  description:
    "Pick your date. Pay 30% deposit. We confirm by WhatsApp within 30 minutes.",
};

export default function BookPage({
  searchParams,
}: {
  searchParams: { package?: string };
}) {
  const pkg = searchParams.package ?? "classic";

  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
        Step 1 of 3 · Pick a date
      </p>
      <h1 className="text-4xl md:text-5xl mb-3">
        Let&apos;s find your perfect <span className="italic-display text-[var(--color-terracotta)]">Saturday</span>
      </h1>
      <p className="text-[var(--color-muted)] mb-10 max-w-xl">
        Pick a date below. We&apos;ll lock the slot with a 30% deposit. Balance is due the day before. Reschedule anytime up to 14 days before for free.
      </p>

      {/* Cal.com embed placeholder — wire up after Phase 0.4 + 1.2 */}
      <div className="rounded-2xl bg-white border border-black/5 p-10 text-center">
        <p className="text-[var(--color-muted)] italic mb-6">
          (Cal.com embed for <code>kiddoklub-{pkg}</code> · activates after Phase 1.2 lands)
        </p>
        <Link
          href="https://wa.me/97450318434"
          className="inline-block rounded-full bg-[var(--color-terracotta)] text-white px-7 py-3 font-medium"
        >
          For now, WhatsApp Nadine
        </Link>
      </div>

      {/* Trust line */}
      <p className="mt-8 text-sm text-[var(--color-muted)] text-center">
        QAR 1M public liability cover · Skipcash deposit · we ask before we post any photos.
      </p>
    </main>
  );
}
