export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://899ugames.pk";

export const APP_INFO = {
  appName: "899u",
  version: "V2.1.0",
  platform: "Android 5.0+",
  category: "Casino & Earning Games",
  minDeposit: "PKR 100",
  minWithdrawal: "PKR 200",
  withdrawalTime: "5–30 minutes (varies)",
  welcomeBonus: "Up to PKR 10,000 (promotional)",
  referralCommission: "Up to 12% agent commission",
  officialWebsite: "899ugames.pk",
  paymentMethods: ["Easypaisa", "JazzCash", "Bank Transfer", "Crypto"],
} as const;

export const REF_URL =
  "https://899u55.vip/?pid=3503425703&fromPage=AGENCY_CENTER";

export const DOWNLOAD_URL = REF_URL;
export const LOGIN_URL = REF_URL;
export const REGISTER_URL = REF_URL;

export const EXTERNAL_LINK_ATTRS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61552763391684",
    label: "Follow 899u on Facebook",
  },
  {
    name: "WhatsApp",
    href: "https://www.whatsapp.com/channel/0029Vb8o7sEK5cD6r1isZN3h",
    label: "Join 899u WhatsApp channel",
  },
  {
    name: "Telegram",
    href: "https://telegram.me/VIP899Ubot",
    label: "Contact 899u on Telegram",
  },
] as const;
