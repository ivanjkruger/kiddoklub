import Image from "next/image";
import Link from "next/link";

// Wordmark renders crisp at any size and stays accessible.
// The legacy raster-in-SVG brand mark lives at /brand/logo.svg for any
// surface that wants the embedded design treatment (Story Highlights,
// printed referral cards, etc.) but the site itself uses the wordmark.
export function Logo({
  className = "",
  variant = "dark",
  withMark = false,
}: {
  className?: string;
  variant?: "dark" | "light";
  withMark?: boolean;
}) {
  const color =
    variant === "light" ? "var(--color-bone)" : "var(--color-ink)";
  return (
    <Link href="/" aria-label="KiddoKlub home" className={`inline-flex items-center gap-2 ${className}`}>
      {withMark && (
        <Image
          src="/brand/logo.svg"
          alt=""
          width={36}
          height={36}
          className="rounded-md"
          priority
        />
      )}
      <span
        className="font-serif italic-display text-2xl md:text-3xl tracking-tight"
        style={{ color, fontFamily: "var(--font-serif)" }}
      >
        KiddoKlub
      </span>
    </Link>
  );
}
