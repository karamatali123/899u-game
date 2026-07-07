const faqs = [
  {
    question: "Is 899u Game real or fake in Pakistan?",
    answer:
      "899u is a real app that moves actual PKR through JazzCash and Easypaisa for many users we tested. It is not a scam clone if you download from a verified source on this page. Still, real does not mean you will profit — most players lose over time because of the house edge on casino games.",
  },
  {
    question: "How do I download 899u APK on Android?",
    answer:
      "Enable install from unknown sources, tap the official download link on this page, and save the ~50 MB APK file. Open it from Downloads and tap Install. 899u is not on Google Play, so sideloading is the normal path for Pakistani users who want the full app.",
  },
  {
    question: "What is the 899u login process?",
    answer:
      "Open the app, tap Login, enter your registered 03XX mobile number and password. Complete OTP if prompted for security on a new device. VoIP numbers usually fail verification, so use a real Pakistani SIM card linked to your name.",
  },
  {
    question: "What is the minimum deposit in 899u?",
    answer:
      "Most wallet deposits start at Rs 100 through JazzCash or Easypaisa on the wallet screen. Bank transfer minimums are higher, often Rs 5,000 or more depending on the event. Always pay the exact amount shown on screen to avoid delayed credits to your balance.",
  },
  {
    question: "How long does 899u withdrawal take?",
    answer:
      "Verified accounts often receive JazzCash or Easypaisa cash-outs in five to thirty minutes during normal hours. First withdrawals may take two to six hours for manual review on new profiles. Peak evening hours can add a short delay, so plan ahead if you need cash tonight.",
  },
  {
    question: "How does the 899u agent referral program work?",
    answer:
      "Copy your invite code from the agent center, share it with friends, and earn commission when they register and deposit real PKR. Active agents can reach up to 12% on qualifying referral activity over time. Withdraw referral earnings the same way as normal game winnings through your wallet.",
  },
  {
    question: "Which games are most popular on 899u?",
    answer:
      "Teen Patti, Aviator, Fortune Tiger, and Dragon Tiger draw the most traffic from Pakistani players every evening. Slots suit quick sessions; live casino tables last longer and need more focus. None guarantee profit — set limits before you play and stick to them.",
  },
  {
    question: "Is 899u available on iPhone?",
    answer:
      "There is no official iOS app as of July 2026. 899u runs on Android APK only for full features and wallet access. Sites promising iPhone downloads are usually scams or unsafe web wrappers that risk your account details.",
  },
  {
    question: "What bonuses can new 899u users claim?",
    answer:
      "New users may see welcome offers up to Rs 10,000, daily check-ins up to Rs 450, bonus rain drops, and 1% deposit credits on every top-up. Read wagering rules on each promo before you chase large headline amounts in ads or WhatsApp forwards.",
  },
] as const;

export default function FaqSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-slate-900 px-4 py-10 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="text-2xl font-bold">
          FAQs
        </h2>
        <div className="mt-6 space-y-2">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="rounded-lg border border-slate-700 bg-slate-800/50"
            >
              <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-violet-300 [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Question {index + 1}: </span>
                {faq.question}
              </summary>
              <p className="border-t border-slate-700 px-4 py-3 text-sm text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export { faqs };
