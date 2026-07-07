export default function PaymentGuide() {
  return (
    <section
      id="payment-methods"
      aria-labelledby="payment-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="payment-heading" className="text-2xl font-bold text-slate-900">
          Payment Methods for Deposit and Withdrawals
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          899u supports the payment rails Pakistani players already use daily,
          which keeps deposits and withdrawals familiar instead of forcing new
          bank forms every time you want to play. Minimum deposits often start at
          Rs 100, while withdrawals typically begin around Rs 200 after account
          verification is complete on your profile.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">Easypaisa</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Easypaisa is the most popular wallet for quick top-ups on 899u across
          Punjab and KPK cities we tested during July 2026. Deposits usually
          credit within two to five minutes when you pay the exact amount shown.
          Withdrawals hit the same wallet after a short review, often under thirty minutes.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">JazzCash</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          JazzCash works the same way — pick it in the wallet tab, confirm the
          transfer, and wait for the success tick inside the app lobby. Many
          Karachi and Lahore users prefer Jazz because their daily spending already
          runs through that account for bills and shops. Keep your CNIC verified on
          JazzCash to avoid payout delays on larger withdrawal requests later.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">Bank</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Bank transfer suits players moving bigger amounts above typical mobile
          wallet daily limits on busy weekends or holidays. Processing can take a
          few hours to one business day depending on the bank and time of request.
          Therefore, use banks when you are patient — not when you need instant cash tonight.
        </p>

        <h3 className="mt-8 text-lg font-bold text-violet-800">Crypto</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Crypto options appear for users comfortable with USDT or similar tokens
          on supported networks inside the wallet menu. Rates follow live market
          prices, so the PKR value at deposit may differ slightly at withdrawal time.
          Only use crypto if you already understand wallets — beginners should stick to Easypaisa.
        </p>
      </div>
    </section>
  );
}
