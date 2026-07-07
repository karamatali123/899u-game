import { faqs } from "@/components/FaqSection";
import { APP_INFO, SITE_URL } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";
import { TABLE_OF_CONTENTS } from "@/lib/toc";
import { absoluteUrl, SEO } from "@/lib/seo";

const downloadHowToSteps = [
  {
    name: "Open official download page",
    text: "Visit the official 899u download page on your Android phone.",
  },
  {
    name: "Save the APK file",
    text: "Tap download and wait for the 45–55 MB APK to finish saving.",
  },
  {
    name: "Enable unknown sources",
    text: "Allow install from unknown sources in Android security settings.",
  },
  {
    name: "Install and launch",
    text: "Open the APK, tap Install, then launch 899u and register or login.",
  },
] as const;

const registerHowToSteps = [
  {
    name: "Open register screen",
    text: "Tap Register on the 899u app or official website.",
  },
  {
    name: "Enter mobile number",
    text: "Type your active Pakistani 03XX mobile number.",
  },
  {
    name: "Set password and verify OTP",
    text: "Create a password and enter the OTP sent to your phone.",
  },
  {
    name: "Complete signup",
    text: "Submit the form and wait for the welcome screen to confirm your account.",
  },
] as const;

export default function SchemaMarkup() {
  const pageUrl = absoluteUrl("/");
  const logoUrl = absoluteUrl(U899_IMAGES.icon.src);
  const bannerUrl = absoluteUrl(U899_IMAGES.promoBanner.src);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: SEO.siteTitle,
    description: SEO.siteDescription,
    inLanguage: SEO.language,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: SEO.siteName,
      url: SITE_URL,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: bannerUrl,
      width: U899_IMAGES.promoBanner.width,
      height: U899_IMAGES.promoBanner.height,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    mainEntity: {
      "@id": `${pageUrl}#article`,
    },
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name: APP_INFO.appName,
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    description:
      "899u is a mobile casino and earning game app for Pakistan users with Easypaisa, JazzCash, and crypto payment support.",
    downloadUrl: pageUrl,
    screenshot: U899_IMAGES.screenshots.map((shot) => absoluteUrl(shot.src)),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
      description: APP_INFO.welcomeBonus,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      ratingCount: "980",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SEO.siteName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: U899_IMAGES.icon.width,
      height: U899_IMAGES.icon.height,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "899u Game Pakistan Guide",
        item: pageUrl,
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SEO.siteName,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
    inLanguage: SEO.language,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: SEO.siteTitle,
    description: SEO.siteDescription,
    image: [
      {
        "@type": "ImageObject",
        url: bannerUrl,
        width: U899_IMAGES.promoBanner.width,
        height: U899_IMAGES.promoBanner.height,
      },
    ],
    author: {
      "@type": "Organization",
      name: SEO.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SEO.publisher,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    datePublished: SEO.publishedDate,
    dateModified: SEO.modifiedDate,
    inLanguage: SEO.language,
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
    articleSection: "Gaming",
    keywords: SEO.keywords.join(", "),
  };

  const tableOfContents = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#toc`,
    name: "899u Game Guide Table of Contents",
    itemListElement: TABLE_OF_CONTENTS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      url: `${pageUrl}#${item.id}`,
    })),
  };

  const downloadHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#download-howto`,
    name: "How to Download and Install 899u APK",
    description:
      "Step-by-step guide to download and install the 899u Game APK on Android in Pakistan.",
    image: absoluteUrl(U899_IMAGES.appScreenAlt.src),
    totalTime: "PT5M",
    step: downloadHowToSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  const registerHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#register-howto`,
    name: "How to Register on 899u Game",
    description:
      "Step-by-step guide to create a new 899u Game account using a Pakistani mobile number.",
    image: absoluteUrl(U899_IMAGES.loginScreen.src),
    totalTime: "PT3M",
    step: registerHowToSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  const schemas = [
    webPage,
    website,
    organization,
    breadcrumb,
    article,
    softwareApplication,
    faqPage,
    tableOfContents,
    downloadHowTo,
    registerHowTo,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
