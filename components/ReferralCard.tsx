// Salvaged + reframed from legacy referral-card.html.
// Discount for both referrer and referee, sourced from packages.yaml. Screenshot-shareable design.
import { PRICING } from "@/content/packages.gen";

const REF = `QAR ${PRICING.referral.discountQar}`;

export function ReferralCard() {
  return (
    <section id="referral" className="px-6 py-20 md:py-28 bg-[var(--color-soft)]">
      <div className="max-w-xl mx-auto">
        <div className="rounded-3xl bg-[var(--color-cream)] border border-[var(--color-mint)]/30 p-8 md:p-10 text-center relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-12 -end-12 w-48 h-48 rounded-full bg-[var(--color-pink)]/40 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-12 -start-12 w-48 h-48 rounded-full bg-[var(--color-mint)]/40 blur-2xl"
          />
          <div className="relative">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 font-semibold">
              Refer a friend
            </p>
            <h2 className="text-3xl md:text-4xl mb-3 leading-tight font-display">
              Share the fun, <span className="accent-mint">save {REF}</span> 🤍
            </h2>
            <p className="text-[var(--color-ink-soft)] mb-6">
              Know a Doha mom planning a birthday or playdate?<br />
              Send them this page. You both save.
            </p>
            <div className="rounded-2xl border-2 border-dashed border-[var(--color-mint)] py-6 mb-6 bg-white/60">
              <div className="font-display text-5xl font-bold text-[var(--color-mint-deep)] leading-none">
                <bdi>{REF} OFF</bdi>
              </div>
              <div className="text-sm text-[var(--color-ink-soft)] mt-2">for you AND your friend</div>
            </div>
            <ol className="grid grid-cols-3 gap-4 mb-6 text-xs">
              {["Send this page to a friend", "They book and mention your name", `You both get ${REF} off`].map((s, i) => (
                <li key={i}>
                  <div className="w-8 h-8 rounded-full bg-[var(--color-mint-deep)] text-white inline-flex items-center justify-center font-bold mb-2 text-sm">
                    {i + 1}
                  </div>
                  <p className="text-[var(--color-ink-soft)] leading-relaxed">{s}</p>
                </li>
              ))}
            </ol>
            <a
              href="https://wa.me/97450318434?text=Hi%20Nadine!%20I%20was%20referred%20by%20a%20friend%20and%20I%27d%20like%20to%20book%20a%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-[var(--color-ink)] px-7 py-3 font-semibold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.413c-.003 6.557-5.337 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z" />
              </svg>
              Book on WhatsApp
            </a>
            <p className="text-xs text-[var(--color-ink-soft)] mt-4">
              Bookings only. Discount applied to next setup, no cash equivalent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
