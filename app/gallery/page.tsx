"use client";
import Image from "next/image";
import { useState } from "react";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

// 12 Mar 2026 setups (full rights, no faces). Compound/venue/pkg/theme are
// internal taxonomy; Session B refines as the real metadata lands.
const ITEMS = [
  { src: "/photos/setups/setup-01.jpeg", compound: "Doha", venue: "villa_indoor",        pkg: "classic",   theme: "color_pop" },
  { src: "/photos/setups/setup-02.jpeg", compound: "Doha", venue: "villa_garden",        pkg: "classic",   theme: "neutral_nest" },
  { src: "/photos/setups/setup-03.jpeg", compound: "Doha", venue: "villa_indoor",        pkg: "mini",      theme: "color_pop" },
  { src: "/photos/setups/setup-04.jpeg", compound: "Doha", venue: "majlis",              pkg: "classic",   theme: "neutral_nest" },
  { src: "/photos/setups/setup-05.jpeg", compound: "Doha", venue: "villa_garden",        pkg: "signature", theme: "color_pop" },
  { src: "/photos/setups/setup-06.jpeg", compound: "Doha", venue: "villa_indoor",        pkg: "classic",   theme: "white_wonderland" },
  { src: "/photos/setups/setup-07.jpeg", compound: "Doha", venue: "apartment",           pkg: "mini",      theme: "color_pop" },
  { src: "/photos/setups/setup-08.jpeg", compound: "Doha", venue: "compound_clubhouse",  pkg: "classic",   theme: "neutral_nest" },
  { src: "/photos/setups/setup-09.jpeg", compound: "Doha", venue: "villa_indoor",        pkg: "signature", theme: "white_wonderland" },
  { src: "/photos/setups/setup-10.jpeg", compound: "Doha", venue: "villa_garden",        pkg: "classic",   theme: "neutral_nest" },
  { src: "/photos/setups/setup-11.jpeg", compound: "Doha", venue: "villa_indoor",        pkg: "mini",      theme: "white_wonderland" },
  { src: "/photos/setups/setup-12.jpeg", compound: "Doha", venue: "majlis",              pkg: "signature", theme: "neutral_nest" },
];

const VENUES = [
  { id: "all", label: "All" },
  { id: "villa_garden", label: "Villa garden" },
  { id: "villa_indoor", label: "Villa indoor" },
  { id: "apartment", label: "Apartment" },
  { id: "majlis", label: "Majlis" },
  { id: "compound_clubhouse", label: "Compound clubhouse" },
];

const PACKAGES = [
  { id: "all", label: "All" },
  { id: "mini", label: "Mini" },
  { id: "classic", label: "Classic" },
  { id: "signature", label: "Signature" },
];

export default function GalleryPage() {
  const [venue, setVenue] = useState("all");
  const [pkg, setPkg] = useState("all");

  const filtered = ITEMS.filter(
    (i) => (venue === "all" || i.venue === venue) && (pkg === "all" || i.pkg === pkg)
  );

  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 pb-8 max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          Gallery
        </p>
        <h1 className="text-4xl md:text-5xl">
          Recently in <span className="italic-display text-[var(--color-terracotta)]">your compound</span>
        </h1>
      </section>

      {/* Filters */}
      <section className="px-6 py-6 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm text-[var(--color-muted)] me-2 self-center">Venue:</span>
          {VENUES.map((v) => (
            <button
              key={v.id}
              onClick={() => setVenue(v.id)}
              className={
                "px-4 py-1.5 rounded-full text-sm border transition-colors " +
                (venue === v.id
                  ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
                  : "border-black/10 hover:bg-[var(--color-sand)]/40")
              }
            >
              {v.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-[var(--color-muted)] me-2 self-center">Package:</span>
          {PACKAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => setPkg(p.id)}
              className={
                "px-4 py-1.5 rounded-full text-sm border transition-colors " +
                (pkg === p.id
                  ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
                  : "border-black/10 hover:bg-[var(--color-sand)]/40")
              }
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.length === 0 && (
            <p className="col-span-full text-[var(--color-muted)] italic">
              No setups match those filters yet; WhatsApp Nadine and we&apos;ll tell you what&apos;s coming up.
            </p>
          )}
          {filtered.map((item, i) => (
            <article
              key={i}
              className="aspect-[4/5] rounded-xl border border-black/5 relative overflow-hidden group"
            >
              <Image
                src={item.src}
                alt={`Klub ${item.pkg}, ${item.theme.replace(/_/g, " ")}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent flex items-end p-4 text-sm text-white">
                <div>
                  <div className="font-medium">Klub {item.pkg}</div>
                  <div className="opacity-80 capitalize">{item.theme.replace(/_/g, " ")}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="text-sm text-[var(--color-muted)] text-center mt-8 italic">
          12 of 12 setups shown · compound + venue tagging refines as Session B catalogs the originals
        </p>
      </section>

      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}
