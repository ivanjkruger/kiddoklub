import Image from "next/image";
import Link from "next/link";

// Canonical mark: rainbow arc + "kiddoklub" rounded script wordmark
// from Drive/Business/KiddoKlub/Brand/KiddoKlub-Logo.svg.
// One file, one variant, one source of truth.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="KiddoKlub home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/brand/logo.svg"
        alt="KiddoKlub"
        width={170}
        height={62}
        className="h-10 w-auto md:h-12"
        priority
      />
    </Link>
  );
}
