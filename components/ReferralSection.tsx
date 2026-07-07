import { REF_URL, EXTERNAL_LINK_ATTRS } from "@/lib/constants";

const referralSteps = [
  {
    bold: "Visit",
    text: "Official Website: Open 899u on your phone and log into your verified account.",
  },
  {
    bold: "Open",
    text: "Agent Center: Tap the referral or agent tab from the main menu or profile screen.",
  },
  {
    bold: "Copy",
    text: "Your Invite Link: Save your unique code or shareable URL to clipboard for friends.",
  },
  {
    bold: "Share",
    text: "With Friends: Send the link on WhatsApp, Facebook, or SMS with a short honest note.",
  },
  {
    bold: "Track",
    text: "Registrations: Watch the dashboard as friends sign up and complete their first deposits.",
  },
  {
    bold: "Withdraw",
    text: "Commission: Cash out agent earnings through JazzCash, Easypaisa, or bank like normal winnings.",
  },
] as const;

export default function ReferralSection() {
  return (
    <section
      id="become-899u-agent"
      aria-labelledby="referral-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="referral-heading" className="text-2xl font-bold text-slate-900">
          How to Become 899u Agent - Start Earnings from Referrals
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          The agent program suits users who already talk about earning apps with
          friends and family in Pakistan every week. You do not need a shop or
          license — just a real account, an invite link, and people who trust your
          recommendation enough to try 899u themselves after reading your message.
        </p>

        <ul className="mt-6 space-y-4">
          {referralSteps.map((step) => (
            <li
              key={step.bold}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              <strong className="text-violet-800">{step.bold}</strong>{" "}
              {step.text}
            </li>
          ))}
        </ul>

        <a
          href={REF_URL}
          {...EXTERNAL_LINK_ATTRS}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
        >
          Become 899u Agent
        </a>
      </div>
    </section>
  );
}
