import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SITE_PAGES } from "@/lib/page-seo";
import { SEO } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PAGES.map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: SEO.modifiedDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
