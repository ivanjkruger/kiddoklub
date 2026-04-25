"use client";
import { useState } from "react";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

const ITEMS = [
  { compound: "The Pearl", venue: "villa_garden", pkg: "classic", theme: "pastel_rainbow" },
  { compound: "Lusail Marina", venue: "villa_indoor", pkg: "signature", theme: "boho" },
  { compound: "Al Waab", venue: "villa_garden", pkg: "classic", theme: "jungle" },
  { compound: "West Bay Lagoon", venue: "apartment", pkg: "mini", theme: "pastel_rainbow" },
  { compound: "Education City", venue: "compound_clubhouse", pkg: "classic", theme: "boho" },
  { compound: "Abu Hamour", venue: "villa_indoor", pkg: "classic", theme: "princess" },
  { compound: "The Pearl", venue: "majlis", pkg: "signature", theme: "arabic_heritage" },
  { compound: "Lusail Marina", venue: "villa_garden", pkg: "signature", theme: "eid" },
  { compound: "Al Gharrafa", venue: "villa_indoor", pkg: "mini", theme: "pastel_rainbow" },
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
              No setups match those filters yet — WhatsApp Nadine and we&apos;ll tell you what&apos;s coming up.
            </p>
          )}
          {filtered.map((item, i) => (
            <article
              key={i}
              className="aspect-[4/5] rounded-xl bg-gradient-to-br from-[var(--color-sand)] via-[var(--color-pink)]/30 to-[var(--color-sage)]/30 border border-black/5 flex items-end p-5 text-sm"
            >
              <div>
                <div className="font-medium">{item.compound}</div>
                <div className="text-[var(--color-muted)] capitalize">
                  Klub {item.pkg} · {item.theme.replace(/_/g, " ")}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="text-sm text-[var(--color-muted)] text-center mt-8 italic">
          (live tiles wire to Drive `Photos/Setups/` and `Photos/Past-Events/` once consent is logged per family)
        </p>
      </section>

      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}
