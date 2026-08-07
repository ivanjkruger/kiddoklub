import type { MetadataRoute } from "next";
import { THEMES } from "@/content/themes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kiddoklubdoha.com";
  const top = [
    "",
    "/packages",
    "/gallery",
    "/about",
    "/faq",
    "/contact",
    "/book",
    "/referral",
    "/availability",
    "/ar",
    "/ar/packages",
    "/ar/faq",
  ];
  const themes = THEMES.map((t) => `/packages/${t.slug}`);
  const paths = [...top, ...themes];
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.startsWith("/packages") ? 0.9 : 0.7,
  }));
}
