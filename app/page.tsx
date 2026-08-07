import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Packages } from "@/components/Packages";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";
import { ReferralCard } from "@/components/ReferralCard";
import { FinalCTA } from "@/components/FinalCTA";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { CapacityBar } from "@/components/CapacityBar";
import { ArchBackdrop } from "@/components/ArchBackdrop";
import { THEMES } from "@/content/themes";

export const metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/ar" },
  },
};

const SETUP_TILES = [
  { src: "/photos/setups/setup-09-enhanced.jpg", label: "Neutral Nest · Klub Signature" },
  { src: "/photos/setups/setup-03-enhanced.jpg", label: "White Wonderland · Klub Classic" },
  { src: "/photos/setups/setup-01-enhanced.jpg", label: "Color Pop · Klub Classic" },
  { src: "/photos/setups/setup-11-enhanced.jpg", label: "Neutral Nest · Klub Signature" },
  { src: "/photos/setups/setup-10-enhanced.jpg", label: "White Wonderland · Klub Signature" },
  { src: "/photos/setups/setup-07-enhanced.jpg", label: "Color Pop · Klub Classic" },
];

export default function Home() {
  return (
    <>
      <CapacityBar />
      <Hero />
      <TrustStrip />

      {/* Recently in your compound */}
      <section className="px-6 py-20 bg-[var(--color-soft)]">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 font-semibold">
            Recent setups
          </p>
          <h2 className="text-3xl md:text-4xl mb-8 font-display">
            Real parties, <span className="accent-mint">across Doha</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SETUP_TILES.map((p, i) => (
              <article
                key={i}
                className="aspect-[4/5] rounded-xl border border-black/5 relative overflow-hidden group"
              >
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent flex items-end p-4 text-sm text-white">
                  <div className="font-medium">{p.label}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="text-[var(--color-mint-deep)] font-semibold underline-offset-4 hover:underline"
            >
              Browse the full gallery →
            </Link>
          </div>
        </div>
      </section>

      <Packages />

      {/* Theme catalog teaser */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center font-semibold">
          Themes
        </p>
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-display">
          Three themes, <span className="accent-pink">one perfect day</span> 🤍
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {THEMES.map((t) => (
            <Link
              key={t.slug}
              href={`/packages/${t.slug}` as never}
              className="aspect-[4/5] rounded-2xl overflow-hidden border border-black/5 relative group"
            >
              <Image
                src={t.imageHero}
                alt={t.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="text-xs uppercase tracking-widest opacity-80 mb-1">{t.palette}</div>
                <h3 className="text-xl font-serif font-semibold">{t.name}</h3>
                <p className="text-sm opacity-90">{t.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Comparison />
      <Testimonials />

      {/* Founder card */}
      <section
        id="founder"
        className="px-6 py-20 md:py-28 relative overflow-hidden"
      >
        <ArchBackdrop corner="bottom-right" opacity={0.12} />
        <div className="max-w-3xl mx-auto text-center relative">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          A note from our founder
        </p>
        <h2 className="text-3xl md:text-4xl mb-6 font-display">
          I started KiddoKlub when I couldn&apos;t find what I wanted for my own kids&apos; parties. 🤍
        </h2>
        <p className="text-[var(--color-ink-soft)] mb-6 leading-relaxed">
          Every set is sanitised between events. Every party is private. We arrive 90 minutes early, leave 30 minutes after the last guest, and ask before we post any photos.
          <br /><br />
          <span className="font-semibold">Nadine 🤍</span>
        </p>
        <Link
          href="/about"
          className="inline-block rounded-full border border-[var(--color-ink)]/15 px-6 py-3 font-semibold hover:bg-[var(--color-soft)] transition-colors"
        >
          Meet Nadine
        </Link>
        </div>
      </section>

      <ReferralCard />
      <FinalCTA />

      <TrustFooter />
      <StickyWhatsApp />
    </>
  );
}
