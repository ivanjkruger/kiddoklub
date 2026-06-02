export function FinalCTA() {
  return (
    <section className="px-6 py-20 md:py-28 bg-[var(--color-ink)] text-[var(--color-cream)] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-4 font-display">
          Ready to book the <span className="accent-butter">best party</span>{" "}
          yet? 🎈
        </h2>
        <p className="opacity-85 mb-8 text-lg">
          WhatsApp us and we&apos;ll help you pick the perfect setup. Reply
          within 30 minutes during the day.
        </p>
        <a
          href="https://wa.me/97450318434?text=Hi!%20I%27d%20like%20to%20book%20a%20KiddoKlub%20setup."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-deep)] text-white px-9 py-4 text-lg font-semibold hover:scale-[1.02] transition-transform"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.413c-.003 6.557-5.337 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z" />
          </svg>
          WhatsApp us
        </a>
        <p className="text-sm opacity-60 mt-6">
          Or build a quote first →{" "}
          <a
            className="underline underline-offset-4 hover:opacity-90"
            href="/book"
          >
            kiddoklubdoha.com/book
          </a>
        </p>
      </div>
    </section>
  );
}
