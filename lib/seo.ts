import { SITE_URL } from "@/lib/constants";

/** Primary focus keyword for the site */
export const PRIMARY_KEYWORD = "899u";

export const SEO = {
  primaryKeyword: PRIMARY_KEYWORD,
  siteName: "899u",
  siteTitle: "899u — Download APK Pakistan 2026 | Login, Register & Withdrawal",
  siteDescription:
    "899u is a real money earning game app for Pakistan. Download the 899u APK, login, register, use JazzCash & Easypaisa for deposit and withdrawal, claim the Rs 5000 welcome bonus, and earn with 12% agent commission. Full 899u guide on 899ugames.pk.",
  defaultLayoutTitle:
    "899u — APK Download, Login, Bonus & Withdrawal Guide Pakistan",
  defaultLayoutDescription:
    "899u guide for Pakistan: APK download, login, register, JazzCash & Easypaisa withdrawals, bonuses, and agent earnings on 899ugames.pk.",
  locale: "en_PK",
  language: "en-PK",
  themeColor: "#6d28d9",
  category: "Gaming",
  author: "899u",
  publisher: "899u",
  publishedDate: "2026-07-07",
  modifiedDate: "2026-09-04",
  keywords: [
    "899u",
    "899u download",
    "899u apk",
    "899u login",
    "899u register",
    "899u game",
    "899u pakistan",
    "899u app",
    "899u bonus",
    "899u withdrawal",
    "899u easypaisa",
    "899u jazzcash",
    "899u agent",
    "899u game download",
    "899ugames.pk",
    "earning app in Pakistan",
    "real money app Pakistan",
    "new earning app",
  ],
  openGraph: {
    title: "899u — Download APK Pakistan 2026 | Login, Register & Withdrawal",
    description:
      "899u APK download for Android in Pakistan. Login, register, JazzCash & Easypaisa cash-out, welcome bonus, and agent commission — complete 899u guide.",
  },
  twitter: {
    title: "899u — Download APK Pakistan 2026 | Login & Withdrawal",
    description:
      "899u APK download, login, register, JazzCash & Easypaisa withdrawal, bonuses, and FAQs for Pakistan players.",
  },
  canonicalPath: "/",
  sitemapChangeFrequency: "weekly" as const,
  sitemapPriority: 1,
} as const;

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}
