import Image from "next/image";
import { U899_IMAGES } from "@/lib/899u-images";

export default function BonusesPromotionsSection() {
  const { offers } = U899_IMAGES;

  return (
    <section
      id="bonuses-promotions"
      aria-labelledby="bonuses-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 id="bonuses-heading" className="text-2xl font-bold text-slate-900">
              899u Bonuses and Promotions
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Promos change often, but the core offers below show up regularly for
              new and returning players on 899u throughout the month. Read each rule
              line before you chase headline numbers — wagering requirements still
              apply even on the biggest welcome packages advertised online.
            </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          CashBack Bonus - upto 20%
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Cashback returns a slice of net losses over a set period, sometimes up
          to 20% for VIP tiers or weekend events on the platform. It softens bad
          runs, but it is not a guarantee you will end the week ahead overall.
          Check the promo tab every Monday — rates and caps shift without much notice.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Welcome Bonus - Rs 10,000
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          New accounts may qualify for welcome packages that advertise up to Rs
          10,000 when you combine signup gifts and first deposits together. The
          full amount usually unlocks in stages, not as instant withdrawable cash
          on day one. Still, it gives extra play time while you learn the lobby.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Bonus Rain - Daily Drop upto Rs. 10,000
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Bonus rain events drop random rewards into active accounts during peak
          hours, with pools that can reach Rs 10,000 split across many winners.
          You often need to tap claim fast before the timer runs out completely.
          Therefore, keep notifications on if you chase these daily drops regularly.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Download App Bonus - Claim Everyday
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Some builds reward users who open the app daily after install with small
          chip credits or spin tokens in the promo center. The amount is modest,
          but it adds up over a month of consistent logins without extra deposits.
          Miss a day and the streak resets — annoying, but that is how most apps work.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Daily Check-in Bonus - Upto Rs 450
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Tap the check-in button seven days in a row and rewards climb toward Rs
          450 on the final day for many active accounts we tested. Mid-week skips
          break the chain, so set a phone reminder if you are serious about it.
          Honestly, it is one of the easiest bonuses to collect without risking much cash.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">
          Deposit Bonus - 1% on Every Deposit
        </h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Every JazzCash or Easypaisa top-up can earn a 1% bonus credit on top of
          your main wallet balance automatically in most cases. On a Rs 5,000
          deposit, that is Rs 50 extra to play with — small, but it compounds over time.
          Meanwhile, larger bank transfers may qualify for higher match rates during events.
        </p>
          </div>

          <figure className="mx-auto w-full max-w-[280px] lg:sticky lg:top-24">
            <Image
              src={offers.src}
              alt={offers.alt}
              width={offers.width}
              height={offers.height}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg"
              sizes="280px"
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Welcome bonus &amp; daily rewards
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
