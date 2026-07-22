import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin project root to this app so Next doesn't walk up to the ~/ivan
  // monorepo and file-watch the whole tree (OOMs the machine). See
  // ops/scripts/mem-watch.sh.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,

  reactStrictMode: true,
  typedRoutes: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "drive.google.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/wa", destination: "https://wa.me/97450318434", permanent: false },
      { source: "/brand", destination: "/brand/index.html", permanent: false },
    ];
  },
};

export default nextConfig;
