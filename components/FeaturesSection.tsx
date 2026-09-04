import Image from "next/image";
import { EXTERNAL_LINK_ATTRS, SOCIAL_LINKS } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";

export default function FeaturesSection() {
  const { allGames } = U899_IMAGES;

  return (
    <section
      id="key-features"
      aria-labelledby="features-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="features-heading" className="text-2xl font-bold text-slate-900">
          Key Features of 899u Game Earning App
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Before you download anything, it helps to know what the app actually
          offers day to day for real money players in Pakistan. 899u packs a full
          casino lobby, wallet tools, and promo events into one clean home screen.
          Below are the features we noticed during our 899ugames.pk test on
          Android V2.1.0.
        </p>

        <figure className="mx-auto mt-8 max-w-[280px] sm:max-w-xs">
          <Image
            src={allGames.src}
            alt={allGames.alt}
            width={allGames.width}
            height={allGames.height}
            className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg"
            sizes="(max-width: 640px) 280px, 320px"
          />
          <figcaption className="mt-2 text-center text-sm text-slate-500">
            899u full game library on Android
          </figcaption>
        </figure>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Huge Game Library
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          You get dozens of titles across slots, tables, and quick arcade rounds
          without installing extra apps on your phone. Popular picks include
          Aviator, Teen Patti, Fortune Tiger, and Dragon Tiger for fast sessions.
          Because the list updates often, bored players usually find something new.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Advance Security
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Sign-up relies on SMS OTP, which blocks many casual login attempts on
          your account from unknown devices. Wallet actions also ask for
          confirmation before large withdrawals leave the app balance. Still, you
          should never share OTP codes with strangers posing as support on WhatsApp.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Fair Gameplay
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Each game shows rules and bet limits before you place money on the
          table or reel inside the lobby. Random outcomes drive slots and crash
          titles, while card games follow familiar house rules most players know.
          Even so, the platform keeps an edge — winning streaks feel great, but losses happen.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Quick Deposit and Withdrawals
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Deposits through JazzCash or Easypaisa often land within a few minutes
          during normal hours across Pakistan cities. Withdrawals usually hit your
          wallet after a short review, especially once your account is verified
          properly. First cash-outs can take longer, so plan ahead if you need money
          the same evening without delay. Keep screenshots of every transaction ID
          just in case support asks for proof later on.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Amazing Bonuses and Rewards
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Daily check-ins, lucky wheels, and deposit matches give extra chips
          without always adding fresh cash from your pocket. Festival events
          sometimes drop limited-time coupons during cricket season or holidays
          in Pakistan. Read wagering notes first — bonuses are sweet, but they are not free money.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Referral Earning Program
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Share your invite link and earn when friends register and deposit real
          PKR into their wallets through the app. Agent tiers can push commission
          up toward 12% for active promoters with steady referrals each month.
          Many users in Lahore and Karachi treat this as a side hustle alongside
          casual play sessions. Payouts follow the same withdrawal path as normal game winnings.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Advance Graphics and Simple UI
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The home screen stays clean even when dozens of game icons load at once
          on mid-range Android phones we tested daily. Animations run smoothly on
          4G networks, though Wi-Fi gives the best experience during live tables.
          Menus use large buttons, so first-time users rarely get lost looking for
          wallet or bonus tabs inside the app. Overall, the layout feels modern without being cluttered.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Multiple Language Options
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          You can switch between English and Urdu in settings without reinstalling
          the APK file on your device. That helps players in smaller cities who
          prefer simple local wording over casino jargon. Support articles inside
          the app also mirror the same language you pick on day one.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          24/7 Fast Customer Support
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Live chat, WhatsApp, and Telegram stay open around the clock for deposit
          and withdrawal questions from Pakistani users. Response times were
          fastest after midnight when fewer tickets pile up in the queue. Keep your
          user ID ready — agents resolve most wallet issues faster with that number.
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                {...EXTERNAL_LINK_ATTRS}
                aria-label={link.label}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-100"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
