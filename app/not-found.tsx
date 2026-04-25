import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[var(--color-muted)] mb-4">404</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
          That page <span className="italic-display text-[var(--color-terracotta)]">went home early</span>.
        </h1>
        <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
          Like our setups when bedtime hits. Try one of these instead.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="rounded-full bg-[var(--color-terracotta)] text-white px-6 py-3 font-medium">
            Home
          </Link>
          <Link href="/packages" className="rounded-full border border-[var(--color-ink)]/15 px-6 py-3 font-medium">
            Packages
          </Link>
          <Link href="/book" className="rounded-full border border-[var(--color-ink)]/15 px-6 py-3 font-medium">
            Build a quote
          </Link>
        </div>
      </div>
    </main>
  );
}
