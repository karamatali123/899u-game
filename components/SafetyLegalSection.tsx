const safetyPoints = [
  "899u uses OTP login and encrypted wallet pages, which blocks many casual account takeover attempts on shared phones.",
  "Deposits and withdrawals run through licensed Pakistani mobile wallets — Easypaisa and JazzCash — instead of shady card gateways.",
  "The APK should only come from official sources; fake clones still appear in WhatsApp groups and can steal credentials.",
  "Online gambling laws in Pakistan are unclear for individuals, so play at your own risk and never deposit rent or bill money.",
  "Set personal limits, take screenshots of transactions, and contact support with your user ID if any payout stalls beyond 24 hours.",
] as const;

export default function SafetyLegalSection() {
  return (
    <section
      id="safe-and-legal"
      aria-labelledby="safety-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="safety-heading" className="text-2xl font-bold text-slate-900">
          Is 899u Safe and Legal?
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Safety and legality are two different questions, and honestly, you should
          weigh both before depositing real PKR into any earning game app in
          Pakistan. Our team tested small deposits, played several sessions, and
          requested withdrawals to see if the platform behaves like a real service
          — not a one-week scam that vanishes after your first top-up.
        </p>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700">
          {safetyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
