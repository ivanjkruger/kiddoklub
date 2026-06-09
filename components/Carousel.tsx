"use client";
import Image from "next/image";
import { useRef, useState } from "react";

// Lightweight scroll-snap carousel; no deps. Swipe on mobile, arrows + dots on desktop.
export function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const go = (i: number) => {
    const n = (i + images.length) % images.length;
    const track = trackRef.current;
    if (track) track.scrollTo({ left: track.clientWidth * n, behavior: "smooth" });
    setIdx(n);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== idx) setIdx(i);
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl border border-black/5 aspect-[4/5] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div key={i} className="relative shrink-0 w-full snap-center">
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(idx - 1)}
            aria-label="Previous photo"
            className="absolute start-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--color-cream)]/85 text-[var(--color-ink)] shadow flex items-center justify-center hover:bg-[var(--color-cream)] transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(idx + 1)}
            aria-label="Next photo"
            className="absolute end-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--color-cream)]/85 text-[var(--color-ink)] shadow flex items-center justify-center hover:bg-[var(--color-cream)] transition-colors"
          >
            ›
          </button>
          <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={
                  "w-2 h-2 rounded-full transition-colors " +
                  (i === idx ? "bg-white" : "bg-white/50 hover:bg-white/80")
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
