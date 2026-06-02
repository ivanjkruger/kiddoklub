"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(80% 60% at 80% 0%, rgba(168,213,186,.18), transparent 70%), radial-gradient(60% 50% at 0% 100%, rgba(232,180,184,.18), transparent 70%), var(--color-cream)",
      }}
    >
      <div className="px-6 pt-12 pb-16 md:pt-20 md:pb-24 max-w-6xl mx-auto md:grid md:grid-cols-12 md:gap-10 md:items-center">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-soft)] mb-3 font-semibold"
          >
            Doha&apos;s friendliest soft-play parties
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Creating <span className="accent-mint">smiles</span>
            <br />
            with <span className="accent-pink">play</span> and{" "}
            <span className="accent-butter">party</span>{" "}
            <span className="accent-sage">magic</span>. 🌈
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-[var(--color-ink-soft)] max-w-xl mb-7"
          >
            Bespoke soft-play, ball pits, balloon arches, and themed styling;
            delivered, set up, sanitised, and collected. We bring the play, you
            take the photos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://wa.me/97450318434"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-deep)] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition-transform"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.413c-.003 6.557-5.337 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886a9.86 9.86 0 0 0 1.51 5.26l.66 1.052-.967 3.503 3.286-.916z" />
              </svg>
              WhatsApp us
            </a>
            <Link
              href="/packages"
              className="inline-flex items-center rounded-full border border-[var(--color-ink)]/15 px-6 py-3 font-semibold hover:bg-[var(--color-soft)] transition-colors"
            >
              Browse packages
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-ink-soft)]"
          >
            <span>🌈 Trusted by Doha families</span>
            <span aria-hidden>·</span>
            <span>QAR 1M public liability</span>
            <span aria-hidden>·</span>
            <span>Same-day setup</span>
          </motion.div>
        </div>

        <div className="md:col-span-5 mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[4/5] rounded-2xl border border-black/5 relative overflow-hidden bg-[var(--color-soft)]"
            aria-label="A KiddoKlub setup, bright and ready"
          >
            <motion.div
              style={{ y: heroY, scale: heroScale }}
              className="absolute inset-0"
            >
              <Image
                src="/photos/setups/setup-04.jpeg"
                alt="A KiddoKlub setup, bright and ready"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
