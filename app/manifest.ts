import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KiddoKlub · soft-play parties in Doha",
    short_name: "KiddoKlub",
    description:
      "Premium soft-play party rentals delivered, set up, and collected anywhere in Doha. For kids 1-5.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5EFE6",
    theme_color: "#1F2421",
    orientation: "portrait-primary",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
