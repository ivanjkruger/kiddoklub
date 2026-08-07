// Server component. The entrance uses CSS-only, transform-only animation (see .rise in
// globals.css) so the LCP text paints immediately instead of waiting for hydration;
// the old framer opacity-0 entrance was costing ~1.5s of LCP on throttled mobile.
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-cream)] overflow-hidden">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:items-stretch md:min-h-[80vh]">
        {/* Text */}
        <div className="px-6 py-14 md:py-20 md:pe-12 flex items-center">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-soft)] mb-3 font-semibold rise"
            >
              Doha&apos;s friendliest soft-play parties
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight mb-5 rise rise-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Creating <span className="accent-mint">smiles</span>
              <br />
              with <span className="accent-pink">play</span> and{" "}
              <span className="accent-butter">party</span>{" "}
              <span className="accent-sage">magic</span>.
            </h1>
            <p className="text-lg text-[var(--color-ink-soft)] max-w-md mb-7 rise"
            >
              Bespoke soft-play, ball pits, balloon arches, and themed styling;
              delivered, set up, sanitised, and collected. We bring the play, you
              take the photos.
            </p>
            <div className="flex flex-wrap gap-3 rise rise-2"
            >
              <a
                href="https://wa.me/97450318434?text=Hi%20Nadine!%20I%27d%20love%20to%20chat%20about%20a%20KiddoKlub%20party%20for%20my%20little%20one."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-deep)] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition-transform"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.413c-.003 6.557-5.337 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886a9.86 9.86 0 0 0 1.51 5.26l.66 1.052-.967 3.503 3.286-.916z" />
                </svg>
                WhatsApp us
              </a>
              <Link
                href="/packages"
                className="inline-flex items-center rounded-full border border-[var(--color-ink)]/20 px-6 py-3 font-semibold hover:bg-[var(--color-soft)] transition-colors"
              >
                Browse packages
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-ink-soft)] rise rise-3"
            >
              <span>Trusted by Doha families</span>
              <span aria-hidden>·</span>
              <span>We ask before we post photos</span>
              <span aria-hidden>·</span>
              <span>Same-day setup</span>
            </div>
          </div>
        </div>

        {/* Real setup, large and clearly visible */}
        <div className="relative h-[54vh] min-h-[360px] md:h-auto md:min-h-[80vh]">
          <Image
            src="/photos/setups/setup-09-enhanced.jpg"
            alt="A real KiddoKlub neutral soft-play setup on a Doha beachfront"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
