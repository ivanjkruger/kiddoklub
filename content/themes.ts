// Theme catalog — source of truth for /packages/[slug] routes + IG link-in-bio pages.
// Council 2026-04-25 priority: each theme gets its own URL for paid social + IG bio rotation.
// Only the three real, deliverable themes are listed (Neutral Nest, White Wonderland, Color Pop).

export type Theme = {
  slug: string;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  body: string;
  palette: string;
  bestFor: string;
  imageHero: string;       // public/photos/setups/...jpeg
  imageDetails: string[];  // 2-3 supporting stills
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
      "The understated one. Bone palette, soft pastel ball pit, neutral foam mat, dried-palm balloon arch. Looks at home in your majlis, your living room, or your garden. Photographs beautifully on iPhone in afternoon light.",
    palette: "bone · sand · sage · cream",
    bestFor: "First birthday · playdate · everyday Klub",
    imageHero: "/photos/setups/setup-01.jpeg",
    imageDetails: ["/photos/setups/setup-02.jpeg", "/photos/setups/setup-03.jpeg"],
    startingFromQar: 1400,
  },
  {
    slug: "white-wonderland",
    name: "White Wonderland",
    nameAr: "وايت وندرلاند",
    tagline: "All-white. Timeless on camera.",
    taglineAr: "أبيض كامل. خالد على الكاميرا.",
    body:
      "Pure white soft-play set, white ball pit, white foam mat, white balloon column. The cleanest backdrop you'll see all year. Pairs with any cake, any dress, any season. Most-photographed package on our IG.",
    palette: "off-white · cream · cool-grey accent",
    bestFor: "Christening · 2nd birthday · all-girls party",
    imageHero: "/photos/setups/setup-04.jpeg",
    imageDetails: ["/photos/setups/setup-05.jpeg", "/photos/setups/setup-06.jpeg"],
    startingFromQar: 1400,
  },
  {
    slug: "color-pop",
    name: "Color Pop",
    nameAr: "كولر بوب",
    tagline: "Pastel rainbow. Kids' favourite.",
    taglineAr: "ألوان قوس قزح. الأطفال يحبونها.",
    body:
      "Pastel rainbow ball pit, soft slide in butter yellow, sage green tunnel, dusty pink soft fence. The kids will run straight to the slide. Photographs as joyful as it feels in the room.",
    palette: "butter · sage · dusty pink · sky",
    bestFor: "3-5 yo birthday · siblings party · summer",
    imageHero: "/photos/setups/setup-07.jpeg",
    imageDetails: ["/photos/setups/setup-08.jpeg", "/photos/setups/setup-09.jpeg"],
    startingFromQar: 1400,
  },
];

export const THEME_BY_SLUG = Object.fromEntries(THEMES.map((t) => [t.slug, t]));
