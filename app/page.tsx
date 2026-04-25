import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { FoundingFamilyBar } from "@/components/FoundingFamilyBar";

export default function Home() {
  return (
    <>
      <FoundingFamilyBar />
      <Hero />
      <Packages />

      {/* Founder card — non-negotiable per Council 2026-04-25 */}
      <section
        id="founder"
        className="px-6 py-20 md:py-28 max-w-3xl mx-auto text-center"
      >
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          A note from our founder
        </p>
        <h2 className="text-3xl md:text-4xl mb-4 italic-display">
          I started KiddoKlub when I couldn't find what I wanted for my own kids' parties.
        </h2>
        <p className="text-[var(--color-muted)]">
          (Founder photo + 80-word story · Nadine, Doha · placeholder until styled-shoot lands)
        </p>
      </section>

      {/* Recent parties strip — gallery teaser */}
      <section
        id="recent"
        className="px-6 py-16 bg-[var(--color-sand)]/40"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6">Recently in The Pearl, Lusail and Al Waab</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/photos/setups/setup-02.jpeg", label: "Klub Classic · Boho" },
              { src: "/photos/setups/setup-05.jpeg", label: "Klub Signature · Jungle" },
              { src: "/photos/setups/setup-04.jpeg", label: "Klub Classic · Arabic Heritage" },
              { src: "/photos/setups/setup-07.jpeg", label: "Klub Mini · Pastel Rainbow" },
              { src: "/photos/setups/setup-09.jpeg", label: "Klub Signature · Eid Family" },
              { src: "/photos/setups/setup-06.jpeg", label: "Klub Classic · Princess" },
            ].map((p, i) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent flex items-end p-4 text-sm text-white">
                  <div className="font-medium">{p.label}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="text-[var(--color-terracotta)] font-medium underline-offset-4 hover:underline"
            >
              See the full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6">Frequently asked</h2>
        <div className="space-y-4">
          {[
            { q: "Where do you deliver?", a: "Cleared for The Pearl, Lusail, West Bay, Al Waab, Abu Hamour, Education City. Other Doha areas on request." },
            { q: "How sanitized is it?", a: "Every set is wiped + UV-treated between parties. Photo evidence on request." },
            { q: "Insurance?", a: "QAR 1M public liability. We can send the COI to your compound office." },
            { q: "Can I see the price for Klub Signature?", a: "Starting from QAR 3,800. WhatsApp Nadine and we'll talk through your day." },
          ].map((f, i) => (
            <details
              key={i}
              className="rounded-xl bg-white border border-black/5 p-5 group"
            >
              <summary className="cursor-pointer font-medium list-none flex justify-between items-center">
                {f.q}
                <span className="text-[var(--color-terracotta)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-[var(--color-muted)]">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-[var(--color-terracotta)] font-medium underline-offset-4 hover:underline"
          >
            All FAQs →
          </Link>
        </div>
      </section>

      <TrustFooter />
      <StickyWhatsApp />
    </>
  );
}
