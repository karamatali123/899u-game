import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SEO } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO.siteName,
    short_name: "899u Game",
    description: SEO.siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: SEO.themeColor,
    lang: SEO.language,
    icons: [
      {
        src: "/899uimages/icon.webp",
        sizes: "200x200",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/899uimages/icon.webp",
        sizes: "200x200",
        type: "image/webp",
        purpose: "maskable",
      },
    ],
  };
}
