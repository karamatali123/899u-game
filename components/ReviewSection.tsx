const pros = [
  "Large game library with slots, casino, tables, and arcade titles in one APK.",
  "Fast JazzCash and Easypaisa deposits starting from Rs 100 for most users.",
  "Generous promo calendar with welcome bonus, cashback, and daily check-ins.",
  "12% agent commission for users who build referral networks over time.",
  "Clean UI with Urdu language support and 24/7 chat for wallet issues.",
] as const;

const cons = [
  "Not available on Google Play — sideloading required, which confuses some beginners.",
  "Gambling risk is real; most players lose money over time because of the house edge.",
  "Bonus wagering rules can be confusing if you skip the fine print on promos.",
  "First withdrawal may take longer while the account goes through manual review.",
  "Legal status of online betting in Pakistan remains unclear for individual players.",
] as const;

export default function ReviewSection() {
  return (
    <section
      id="pros-and-cons"
      aria-labelledby="review-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="review-heading" className="text-2xl font-bold text-slate-900">
          Pros and Cons
        </h2>

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-emerald-700">Pros</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-700">Cons</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
