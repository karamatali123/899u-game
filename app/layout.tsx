import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  EXTERNAL_LINK_ATTRS,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";
import { SEO } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

const footerPages = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.defaultLayoutTitle,
    template: "%s | 899u",
  },
  description: SEO.defaultLayoutDescription,
  applicationName: SEO.siteName,
  authors: [{ name: SEO.author, url: SITE_URL }],
  creator: SEO.author,
  publisher: SEO.publisher,
  category: SEO.category,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SEO.canonicalPath,
    languages: {
      [SEO.language]: SEO.canonicalPath,
    },
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
  icons: {
    icon: U899_IMAGES.icon.src,
    apple: U899_IMAGES.icon.src,
    shortcut: U899_IMAGES.icon.src,
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "899u Game",
    statusBarStyle: "default",
  },
  other: {
    ...(googleVerification
      ? { "google-site-verification": googleVerification }
      : {}),
    ...(bingVerification ? { "msvalidate.01": bingVerification } : {}),
  },
};

export const viewport = {
  themeColor: SEO.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SEO.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-violet-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <nav
            className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
            aria-label="Main navigation"
          >
            <a
              href="/"
              className="flex items-center gap-2.5 text-lg font-bold text-violet-700"
            >
              <Image
                src={U899_IMAGES.icon.src}
                alt={U899_IMAGES.icon.alt}
                width={U899_IMAGES.icon.width}
                height={U899_IMAGES.icon.height}
                className="h-9 w-9 rounded-lg"
                priority
              />
              <span>899u</span>
            </a>
            <div className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium sm:gap-4">
              <a href="/download" className="text-slate-600 hover:text-violet-700">
                Download
              </a>
              <a href="/login" className="text-slate-600 hover:text-violet-700">
                Login
              </a>
              <a
                href="/register"
                className="hidden text-slate-600 hover:text-violet-700 sm:inline"
              >
                Register
              </a>
              <a
                href="/contact"
                className="hidden text-slate-600 hover:text-violet-700 md:inline"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
          <nav
            aria-label="Footer pages"
            className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            {footerPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="font-medium text-slate-600 hover:text-violet-700"
              >
                {page.label}
              </a>
            ))}
          </nav>
          <nav
            aria-label="Social links"
            className="mb-4 flex flex-wrap items-center justify-center gap-4"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...EXTERNAL_LINK_ATTRS}
                aria-label={link.label}
                className="font-medium text-violet-700 hover:text-violet-900"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <p>
            &copy; {new Date().getFullYear()} {SEO.siteName}. For informational
            purposes only.
          </p>
        </footer>
      </body>
    </html>
  );
}
