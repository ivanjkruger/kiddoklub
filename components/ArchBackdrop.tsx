// Faint oversized rainbow-arch backdrop; brand motif as inline SVG.
// Visual spec: content/brand/assets/generated/bg-arch-corner-v1.png (2026-06-09 asset pack).
// Inline SVG over PNG: crisp at any size, ~1KB, palette stays in code.

type Props = {
  /** which corner the arch bleeds off */
  corner?: "bottom-left" | "bottom-right" | "top-right";
  /** overall strength; keep subtle, this sits behind text */
  opacity?: number;
  className?: string;
};

const CORNER_POS: Record<NonNullable<Props["corner"]>, string> = {
  "bottom-left": "left-[-12%] bottom-[-30%]",
  "bottom-right": "right-[-12%] bottom-[-30%] scale-x-[-1]",
  "top-right": "right-[-12%] top-[-30%] scale-y-[-1] scale-x-[-1]",
};

export function ArchBackdrop({ corner = "bottom-left", opacity = 0.16, className = "" }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute w-[34rem] max-w-[80vw] aspect-square ${CORNER_POS[corner]} ${className}`}
      style={{ opacity }}
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* three nested arcs: mint outer, pink middle, butter inner; round caps like the wordmark */}
        <path d="M20 200 A80 80 0 0 1 180 200" stroke="var(--color-mint)" strokeWidth="18" strokeLinecap="round" />
        <path d="M52 200 A48 48 0 0 1 148 200" stroke="var(--color-pink)" strokeWidth="18" strokeLinecap="round" />
        <path d="M84 200 A16 16 0 0 1 116 200" stroke="var(--color-butter)" strokeWidth="18" strokeLinecap="round" />
      </svg>
    </div>
  );
}
