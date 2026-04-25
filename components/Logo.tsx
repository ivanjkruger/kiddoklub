import Link from "next/link";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const color =
    variant === "light" ? "var(--color-bone)" : "var(--color-ink)";
  return (
    <Link href="/" className={`inline-flex items-baseline ${className}`}>
      <span
        className="font-serif italic-display text-2xl md:text-3xl tracking-tight"
        style={{ color, fontFamily: "var(--font-serif)" }}
      >
        KiddoKlub
      </span>
    </Link>
  );
}
