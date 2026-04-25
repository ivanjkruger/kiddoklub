"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-bone)]/85 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href as never}
              className={
                "text-sm transition-colors " +
                (pathname === n.href
                  ? "text-[var(--color-terracotta)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]")
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/97450318434"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-[var(--color-terracotta)] text-white px-5 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
          >
            WhatsApp
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2"
          >
            <span className="block w-6 h-[2px] bg-[var(--color-ink)] mb-1.5" />
            <span className="block w-6 h-[2px] bg-[var(--color-ink)] mb-1.5" />
            <span className="block w-6 h-[2px] bg-[var(--color-ink)]" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-black/5 bg-[var(--color-bone)] px-6 py-5">
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href as never}
                  onClick={() => setOpen(false)}
                  className={
                    "block text-base " +
                    (pathname === n.href
                      ? "text-[var(--color-terracotta)] font-medium"
                      : "text-[var(--color-ink)]")
                  }
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/97450318434"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 rounded-full bg-[var(--color-terracotta)] text-white px-5 py-2 text-sm font-medium"
              >
                WhatsApp Nadine
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
