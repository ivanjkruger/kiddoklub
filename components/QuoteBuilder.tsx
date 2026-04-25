// Salvaged + ported from legacy index.html.
// 3-step picker: Theme → Size → Add-ons → builds a WhatsApp pre-filled message AND
// posts the lead to /api/inquiry so James + Telegram capture it server-side too.
// Council 2026-04-25 conversion lever #3 (Coco's Soft Play clone).

"use client";
import { useEffect, useMemo, useState } from "react";

type ThemeId = "neutral_nest" | "white_wonderland" | "color_pop" | "boho" | "arabic_heritage" | "eid_family";
type SizeId = "mini" | "small" | "classic" | "signature";

const THEMES: { id: ThemeId; label: string; sub: string }[] = [
  { id: "neutral_nest",     label: "Neutral Nest",     sub: "Bone & sage · matches every villa" },
  { id: "white_wonderland", label: "White Wonderland", sub: "All-white · timeless on camera" },
  { id: "color_pop",        label: "Color Pop",        sub: "Pastel rainbow · kids' favourite" },
  { id: "boho",             label: "Boho",             sub: "Terracotta & dried palm" },
  { id: "arabic_heritage",  label: "Arabic Heritage",  sub: "For majlis-style hosting" },
  { id: "eid_family",       label: "Eid Family Klub",  sub: "Seasonal · pre-sell only" },
];

const SIZES: { id: SizeId; label: string; capacity: string; size: string; basePrice: number; tier: "mini" | "classic" | "signature" }[] = [
  { id: "mini",      label: "Klub Mini",      capacity: "Up to 6 kids",  size: "3 × 3m", basePrice: 1400, tier: "mini" },
  { id: "small",     label: "Klub Small",     capacity: "Up to 8 kids",  size: "4 × 4m", basePrice: 1800, tier: "mini" },
  { id: "classic",   label: "Klub Classic",   capacity: "Up to 10 kids", size: "4 × 5m", basePrice: 2200, tier: "classic" },
  { id: "signature", label: "Klub Signature", capacity: "15+ kids",      size: "5 × 6m", basePrice: 3800, tier: "signature" },
];

const ADDONS = [
  { id: "bouncy_castle",   label: "Bouncy castle",          price: 400, founding: true },
  { id: "balloon_arch",    label: "Balloon arch",           price: 350 },
  { id: "soft_serve_cart", label: "Soft-serve / popcorn cart", price: 500 },
  { id: "photographer",    label: "90-min photographer",    price: 600, founding: true },
  { id: "extra_hour",      label: "Extra rental hour",      price: 250 },
];

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export function QuoteBuilder() {
  const [theme, setTheme] = useState<ThemeId | null>(null);
  const [size, setSize] = useState<SizeId | null>(null);
  const [addons, setAddons] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [compound, setCompound] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const sizeRow = SIZES.find((s) => s.id === size);
  const themeRow = THEMES.find((t) => t.id === theme);

  // Signature is enquire-only (Council rule: never publish exact base on top tier)
  const isSignature = sizeRow?.tier === "signature";

  const total = useMemo(() => {
    if (!sizeRow) return 0;
    if (isSignature) return 0; // not shown
    let sum = sizeRow.basePrice;
    addons.forEach((id) => {
      const a = ADDONS.find((x) => x.id === id);
      if (a) sum += a.price;
    });
    return sum;
  }, [sizeRow, addons, isSignature]);

  const ready = !!theme && !!size && name.trim().length > 1 && phone.trim().length > 4;

  const toggleAddon = (id: string) =>
    setAddons((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  async function submit() {
    if (!ready || !themeRow || !sizeRow) return;
    setSubmitting(true);

    const addonLines = addons
      .map((id) => ADDONS.find((a) => a.id === id))
      .filter(Boolean)
      .map((a) => `• ${a!.label}${a!.founding ? " (FOUNDING-FAMILY: included)" : ` (+QAR ${fmt(a!.price)})`}`);

    const lines = [
      "Hi Nadine! I'd like to book a setup.",
      "",
      `Theme: ${themeRow.label}`,
      `Size: ${sizeRow.label} (${sizeRow.capacity}, ${sizeRow.size})`,
    ];
    if (!isSignature) lines.push(`Base: QAR ${fmt(sizeRow.basePrice)}`);
    if (addonLines.length) lines.push("", "Add-ons:", ...addonLines);
    if (!isSignature) lines.push("", `Total: QAR ${fmt(total)}`);
    else lines.push("", "Klub Signature — let's chat about the day.");
    lines.push("", `Name: ${name}`, `Phone: ${phone}`);
    if (email)    lines.push(`Email: ${email}`);
    if (date)     lines.push(`Preferred date: ${date}`);
    if (compound) lines.push(`Compound / area: ${compound}`);

    const message = lines.join("\n");

    // Fire-and-forget: post to /api/inquiry so James captures the lead even if
    // the visitor never lands the WhatsApp tab. Don't block the WA open on it.
    try {
      void fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "quote_builder",
          theme: themeRow.id,
          size: sizeRow.id,
          addons,
          total_qar: isSignature ? null : total,
          name, phone, email, preferred_date: date, compound,
        }),
        keepalive: true,
      });
    } catch { /* never block CTA */ }

    const url = `https://wa.me/97450318434?text=${encodeURIComponent(message)}`;
    setDone(true);
    setSubmitting(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="quote-builder" className="px-6 py-12 md:py-16 max-w-3xl mx-auto">
      <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
        Build your party
      </p>
      <h2 className="text-3xl md:text-4xl mb-2">
        Three steps. <span className="italic-display text-[var(--color-terracotta)]">Instant quote.</span>
      </h2>
      <p className="text-[var(--color-muted)] mb-10">
        Pick a theme, pick a size, add what you want. We&apos;ll WhatsApp you back within 30 minutes.
      </p>

      {/* Step 1 — Theme */}
      <div className="mb-10">
        <p className="font-medium mb-3 text-sm uppercase tracking-wider text-[var(--color-muted)]">
          1 · Pick a theme
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {THEMES.map((t) => {
            const sel = t.id === theme;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTheme(t.id)}
                className={
                  "rounded-2xl border p-4 text-start transition-all " +
                  (sel
                    ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
                    : "bg-white border-black/10 hover:border-[var(--color-terracotta)]")
                }
              >
                <div className="font-medium">{t.label}</div>
                <div className={"text-xs mt-1 " + (sel ? "opacity-80" : "text-[var(--color-muted)]")}>
                  {t.sub}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2 — Size */}
      <div className="mb-10">
        <p className="font-medium mb-3 text-sm uppercase tracking-wider text-[var(--color-muted)]">
          2 · Pick a size
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SIZES.map((s) => {
            const sel = s.id === size;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSize(s.id)}
                className={
                  "rounded-2xl border p-4 text-start transition-all " +
                  (sel
                    ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
                    : "bg-white border-black/10 hover:border-[var(--color-terracotta)]")
                }
              >
                <div className="font-medium">{s.label}</div>
                <div className={"text-xs mt-1 " + (sel ? "opacity-80" : "text-[var(--color-muted)]")}>
                  {s.capacity} · {s.size}
                </div>
                <div className={"text-sm mt-2 font-serif " + (sel ? "" : "text-[var(--color-terracotta)]")}>
                  {s.tier === "signature" ? "from QAR 3,800" : `QAR ${fmt(s.basePrice)}`}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3 — Add-ons */}
      <div className="mb-10">
        <p className="font-medium mb-3 text-sm uppercase tracking-wider text-[var(--color-muted)]">
          3 · Add to your party
        </p>
        <div className="space-y-2">
          {ADDONS.map((a) => {
            const on = addons.includes(a.id);
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => toggleAddon(a.id)}
                className={
                  "w-full flex items-center justify-between rounded-xl border p-4 text-start transition-all " +
                  (on
                    ? "bg-[var(--color-sand)]/60 border-[var(--color-terracotta)]"
                    : "bg-white border-black/10 hover:border-[var(--color-terracotta)]/50")
                }
              >
                <div>
                  <div className="font-medium">{a.label}</div>
                  {a.founding && (
                    <div className="text-xs text-[var(--color-terracotta)] mt-0.5">
                      Founding-family slot: included free
                    </div>
                  )}
                </div>
                <div className="font-serif text-[var(--color-ink)]">
                  {a.founding ? <span className="text-[var(--color-terracotta)]">FREE</span> : `+QAR ${fmt(a.price)}`}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact + total */}
      <div className="rounded-2xl bg-[var(--color-ink)] text-[var(--color-bone)] p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-3 mb-5">
          <input className="rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:border-[var(--color-butter)]" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:border-[var(--color-butter)]" placeholder="WhatsApp number (+974…)" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input className="rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:border-[var(--color-butter)]" placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="date" min={minDate} className="rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:border-[var(--color-butter)] [color-scheme:dark]" value={date} onChange={(e) => setDate(e.target.value)} />
          <input className="md:col-span-2 rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:border-[var(--color-butter)]" placeholder="Compound or area (e.g. The Pearl, Lusail)" value={compound} onChange={(e) => setCompound(e.target.value)} />
        </div>

        <div className="flex items-end justify-between flex-wrap gap-4 pt-2 border-t border-white/10">
          <div>
            <div className="text-xs uppercase tracking-widest opacity-70 mb-1">
              {isSignature ? "Klub Signature" : "Your total"}
            </div>
            <div className="font-serif text-4xl font-semibold">
              {isSignature ? (
                <span className="italic-display text-[var(--color-butter)]">Let&apos;s chat</span>
              ) : total > 0 ? (
                <bdi>QAR {fmt(total)}</bdi>
              ) : (
                <span className="opacity-50">QAR —</span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={submit}
            disabled={!ready || submitting}
            className={
              "rounded-full px-7 py-4 font-medium transition-transform " +
              (ready && !submitting
                ? "bg-[var(--color-terracotta)] text-white hover:scale-[1.02]"
                : "bg-white/15 text-white/50 cursor-not-allowed")
            }
          >
            {done ? "Sent → check WhatsApp" : submitting ? "Sending…" : "Send on WhatsApp"}
          </button>
        </div>

        <p className="text-xs opacity-60 mt-5">
          By sending, you agree to receive WhatsApp confirmations from KiddoKlub. Reply STOP anytime. We ask before we post any photos.
        </p>
      </div>
    </section>
  );
}
