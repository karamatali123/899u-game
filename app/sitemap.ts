import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SEO } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: SEO.modifiedDate,
      changeFrequency: SEO.sitemapChangeFrequency,
      priority: SEO.sitemapPriority,
    },
  ];
}
