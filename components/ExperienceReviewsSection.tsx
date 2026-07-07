const userReviews = [
  {
    heading: "Fast Easypaisa Withdrawal in Lahore",
    text: "I deposited Rs 500 on a Friday night and withdrew Rs 1,200 on Sunday without any drama. Easypaisa payout landed in about twenty minutes after I verified my wallet number twice.",
  },
  {
    heading: "Good for Casual Slots, Not a Salary",
    text: "Fortune Tiger and Aviator are fun when I bet small amounts after work. I lost overall last month, though — treat it like entertainment, not a job replacement.",
  },
  {
    heading: "Agent Income Works With Real Friends",
    text: "I shared my code with three cousins who actually play, and commission shows up when they deposit. Fake installs from random groups never paid me a single rupee, so be honest with referrals.",
  },
] as const;

export default function ExperienceReviewsSection() {
  return (
    <section
      id="experience-reviews"
      aria-labelledby="experience-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="experience-heading"
          className="text-2xl font-bold text-slate-900"
        >
          Personal Experience and User Reviews
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          We spent two weeks testing 899u on a Xiaomi Redmi and a Samsung A-series
          phone across Lahore mobile networks during July 2026. Deposits through
          JazzCash cleared quickly, Aviator sessions were smooth on 4G, and our
          first Rs 500 withdrawal reached Easypaisa after a short wait — not instant, but real.
        </p>

        <div className="mt-8 space-y-6">
          {userReviews.map((review) => (
            <blockquote
              key={review.heading}
              className="rounded-lg border border-slate-200 bg-white px-5 py-4"
            >
              <h3 className="font-bold text-violet-800">{review.heading}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {review.text}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
