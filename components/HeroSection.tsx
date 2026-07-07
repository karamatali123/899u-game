import Image from "next/image";
import {
  DOWNLOAD_URL,
  EXTERNAL_LINK_ATTRS,
  LOGIN_URL,
  REGISTER_URL,
} from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";

const trustBadges = [
  "Tested on Android 10–14",
  "JazzCash & Easypaisa PKR",
  "Rs 100 Min Deposit",
  "V2.1.0 July 2026 Build",
] as const;

export default function HeroSection() {
  const { icon, appScreen } = U899_IMAGES;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="relative mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className="h-12 w-12 rounded-xl"
              priority
            />
            <p className="text-sm font-medium text-violet-300">
              Independent review · 899u game · July 2026
            </p>
          </div>
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            899u Game Download APK Pakistan 2026 — Login, Bonus &amp; Withdrawal
            Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-300 lg:mx-0">
            This guide explains how to download the 899u APK, register, and log in
            on Android devices in Pakistan. It also covers JazzCash and Easypaisa
            deposit and withdrawal methods, available bonuses including the Rs
            5000 welcome offer and 12% agent commission, and key details to help
            you understand how the 899u earning app works.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={DOWNLOAD_URL}
              {...EXTERNAL_LINK_ATTRS}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-violet-500 px-6 py-2.5 font-semibold text-white hover:bg-violet-400 sm:w-auto"
            >
              Download 899u APK
            </a>
            <a
              href={LOGIN_URL}
              {...EXTERNAL_LINK_ATTRS}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-slate-600 px-6 py-2.5 font-semibold text-white hover:bg-slate-800 sm:w-auto"
            >
              899u Login
            </a>
            <a
              href={REGISTER_URL}
              {...EXTERNAL_LINK_ATTRS}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-amber-500/50 bg-amber-500/10 px-6 py-2.5 font-semibold text-amber-300 hover:bg-amber-500/20 sm:w-auto"
            >
              Register Free
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-violet-200 lg:justify-start">
            {trustBadges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-violet-500/20 px-3 py-1"
              >
                ✓ {b}
              </li>
            ))}
          </ul>
        </div>

        <figure className="mx-auto w-full max-w-[280px] lg:max-w-xs">
          <Image
            src={appScreen.src}
            alt={appScreen.alt}
            width={appScreen.width}
            height={appScreen.height}
            className="h-auto w-full rounded-2xl shadow-2xl ring-1 ring-white/10"
            sizes="(max-width: 1024px) 280px, 320px"
            priority
          />
        </figure>
      </div>
    </section>
  );
}
