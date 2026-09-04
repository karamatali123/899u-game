import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";
import { absoluteUrl, PRIMARY_KEYWORD, SEO } from "@/lib/seo";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const mergedKeywords = Array.from(
    new Set([PRIMARY_KEYWORD, ...keywords, ...SEO.keywords]),
  );

  return {
    title,
    description,
    keywords: mergedKeywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
      languages: {
        [SEO.language]: path,
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SEO.siteName,
      locale: SEO.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl(U899_IMAGES.promoBanner.src),
          width: U899_IMAGES.promoBanner.width,
          height: U899_IMAGES.promoBanner.height,
          alt: U899_IMAGES.promoBanner.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(U899_IMAGES.promoBanner.src)],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "og:url": url,
    },
  };
}

export const SITE_PAGES = [
  {
    path: "/",
    label: "Home",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/download",
    label: "Download",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/login",
    label: "Login",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/register",
    label: "Register",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/about",
    label: "About Us",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    label: "Contact Us",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/terms",
    label: "Terms & Conditions",
    priority: 0.5,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/disclaimer",
    label: "Disclaimer",
    priority: 0.5,
    changeFrequency: "yearly" as const,
  },
] as const;
