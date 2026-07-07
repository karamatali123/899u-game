import { SITE_URL } from "@/lib/constants";

export const SEO = {
  siteName: "899u Game Guide",
  siteTitle: "899u Game Download APK Pakistan 2026 | Login, Bonus & Withdrawal Guide",
  siteDescription:
    "Complete 899u Game guide for Pakistan: APK download, login, JazzCash & Easypaisa withdrawal, Rs 5000 welcome bonus, 12% agent commission, and FAQs.",
  defaultLayoutTitle: "899u Game — Pakistan Download, Login & Withdrawal Guide",
  defaultLayoutDescription:
    "Independent 899u Game guide for Pakistan. APK download, JazzCash & Easypaisa withdrawal steps, bonuses, agent commission & 2026 review.",
  locale: "en_PK",
  language: "en-PK",
  themeColor: "#6d28d9",
  category: "Gaming",
  author: "899u Game Guide",
  publisher: "899u Game Guide",
  publishedDate: "2026-07-07",
  modifiedDate: "2026-07-07",
  keywords: [
    "899u",
    "899u Game",
    "899u Game Download",
    "899u APK Download",
    "899u Download Pakistan",
    "899u Login",
    "899u Game Pakistan",
    "899u Real or Fake",
    "899u Easypaisa Withdrawal",
    "899u JazzCash Withdrawal",
    "899u Bonus 2026",
    "899u Agent Commission",
    "Tojay BET",
    "new earning app",
    "real money app",
    "earning app in Pakistan",
    "earn money online",
    "online earning",
    "lottery app",
    "earning game",
    "make money online",
    "899u game download",
    "899ugames.pk",
  ],
  openGraph: {
    title: "899u Game Download APK Pakistan 2026 | Login, Bonus & Withdrawal Guide",
    description:
      "899u Game guide: APK download, JazzCash & Easypaisa cash-out, Rs 5000 welcome bonus, agent program & review for Pakistan players.",
  },
  twitter: {
    title: "899u Game Download APK Pakistan 2026 | Login, Bonus & Withdrawal Guide",
    description:
      "899u APK download, JazzCash & Easypaisa withdrawal, agent commission & guide for Pakistan players.",
  },
  canonicalPath: "/",
  sitemapChangeFrequency: "weekly" as const,
  sitemapPriority: 1,
} as const;

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}
