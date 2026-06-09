// Theme catalog — source of truth for /packages/[slug] routes + IG link-in-bio pages.
// Council 2026-04-25 priority: each theme gets its own URL for paid social + IG bio rotation.
// Only the three real, deliverable themes are listed (Neutral Nest, White Wonderland, Color Pop).
// Images are the fal-enhanced versions; each theme points at photos that actually match it.

export type Theme = {
  slug: string;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  body: string;
  palette: string;
  bestFor: string;
  imageHero: string;       // public/photos/setups/...jpg
  imageDetails: string[];  // 2-3 supporting stills (carousel)
  startingFromQar: number; // for cards / SEO. We still hide Signature exact base in copy.
};

export const THEMES: Theme[] = [
  {
    slug: "neutral-nest",
    name: "Neutral Nest",
    nameAr: "نويترال نست",
    tagline: "Bone, sand, sage. Matches every villa.",
    taglineAr: "ألوان هادئة تناسب كل فيلا.",
    body:
      "The understated one. Cream and beige soft-play, neutral foam mat, white picket fence, soft wooden tones. Looks at home in your garden, your majlis, or beachfront. Photographs beautifully in natural daylight.",
    palette: "bone · sand · beige · cream",
    bestFor: "First birthday · playdate · everyday Klub",
    imageHero: "/photos/setups/setup-09-enhanced.jpg",
    imageDetails: ["/photos/setups/setup-11-enhanced.jpg", "/photos/setups/setup-02-enhanced.jpg"],
    startingFromQar: 1400,
  },
  {
    slug: "white-wonderland",
    name: "White Wonderland",
    nameAr: "وايت وندرلاند",
    tagline: "All-white. Timeless on camera.",
    taglineAr: "أبيض كامل. خالد على الكاميرا.",
    body:
      "Pure white soft-play set, white ball pit, white slides and climbers, white picket fence. The cleanest backdrop you'll see all year. Pairs with any cake, any dress, any season. Our most-photographed setup.",
    palette: "off-white · cream · cool-grey accent",
    bestFor: "Christening · 2nd birthday · all-girls party",
    imageHero: "/photos/setups/setup-03-enhanced.jpg",
    imageDetails: ["/photos/setups/setup-10-enhanced.jpg", "/photos/setups/setup-12-enhanced.jpg"],
    startingFromQar: 1400,
  },
  {
    slug: "color-pop",
    name: "Color Pop",
    nameAr: "كولر بوب",
    tagline: "Pastel rainbow. Kids' favourite.",
    taglineAr: "ألوان قوس قزح. الأطفال يحبونها.",
    body:
      "Bright, joyful soft-play in every colour; slide, climber, rocker, and a rainbow ball pit. The kids run straight to the slide. Photographs as joyful as it feels in the room.",
    palette: "butter · sage · dusty pink · sky",
    bestFor: "3-5 yo birthday · siblings party · summer",
    imageHero: "/photos/setups/setup-01-enhanced.jpg",
    imageDetails: ["/photos/setups/setup-07-enhanced.jpg", "/photos/setups/setup-08-enhanced.jpg"],
    startingFromQar: 1400,
  },
];

export const THEME_BY_SLUG = Object.fromEntries(THEMES.map((t) => [t.slug, t]));
