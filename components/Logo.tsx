import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="KiddoKlub home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/brand/logo-header.png"
        alt="KiddoKlub"
        width={400}
        height={216}
        className="h-10 w-auto md:h-14"
        priority
      />
    </Link>
  );
}
