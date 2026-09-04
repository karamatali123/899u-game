import type { Metadata } from "next";
import BonusesPromotionsSection from "@/components/BonusesPromotionsSection";
import ConclusionSection from "@/components/ConclusionSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import DownloadGuide from "@/components/DownloadGuide";
import ExperienceReviewsSection from "@/components/ExperienceReviewsSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import GamesSection from "@/components/GamesSection";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import PaymentGuide from "@/components/PaymentGuide";
import ReferralSection from "@/components/ReferralSection";
import RegistrationGuide from "@/components/RegistrationGuide";
import ReviewSection from "@/components/ReviewSection";
import SafetyLegalSection from "@/components/SafetyLegalSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import TableOfContents from "@/components/TableOfContents";
import WhatIs899u from "@/components/WhatIs899u";
import WhyChooseSection from "@/components/WhyChooseSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import { SITE_URL } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";
import { absoluteUrl, SEO } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: SEO.siteTitle,
  description: SEO.siteDescription,
  keywords: [...SEO.keywords],
  metadataBase: new URL(SITE_URL),
  authors: [{ name: SEO.author, url: SITE_URL }],
  creator: SEO.author,
  publisher: SEO.publisher,
  applicationName: SEO.siteName,
  alternates: {
    canonical: SEO.canonicalPath,
    languages: {
      [SEO.language]: SEO.canonicalPath,
    },
  },
  openGraph: {
    title: SEO.openGraph.title,
    description: SEO.openGraph.description,
    url: SEO.canonicalPath,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "article",
    publishedTime: SEO.publishedDate,
    modifiedTime: SEO.modifiedDate,
    authors: [SEO.author],
    section: SEO.category,
    tags: [
      "899u",
      "899u download",
      "899u apk",
      "899u login",
      "899u register",
      "899u pakistan",
      "JazzCash",
      "Easypaisa",
    ],
    images: [
      {
        url: absoluteUrl(U899_IMAGES.promoBanner.src),
        width: U899_IMAGES.promoBanner.width,
        height: U899_IMAGES.promoBanner.height,
        alt: U899_IMAGES.promoBanner.alt,
        type: "image/jpeg",
      },
      {
        url: absoluteUrl(U899_IMAGES.icon.src),
        width: U899_IMAGES.icon.width,
        height: U899_IMAGES.icon.height,
        alt: U899_IMAGES.icon.alt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.twitter.title,
    description: SEO.twitter.description,
    images: [absoluteUrl(U899_IMAGES.promoBanner.src)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: SEO.category,
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup />
      <article itemScope itemType="https://schema.org/Article">
        <meta itemProp="headline" content={SEO.siteTitle} />
        <meta itemProp="datePublished" content={SEO.publishedDate} />
        <meta itemProp="dateModified" content={SEO.modifiedDate} />
        <HeroSection />
        <TableOfContents />
        <OverviewSection />
        <WhyChooseSection />
        <WhatIs899u />
        <FeaturesSection />
        <GamesSection />
        <ScreenshotsSection />
        <GetStartedSection />
        <RegistrationGuide />
        <DownloadGuide />
        <BonusesPromotionsSection />
        <ReferralSection />
        <PaymentGuide />
        <SafetyLegalSection />
        <ReviewSection />
        <ExperienceReviewsSection />
        <ConclusionSection />
        <FaqSection />
        <DisclaimerSection />
      </article>
    </>
  );
}
