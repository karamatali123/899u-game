export default function DisclaimerSection() {
  return (
    <section
      aria-labelledby="disclaimer-heading"
      className="border-t border-slate-200 bg-slate-100 px-4 py-8 sm:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="disclaimer-heading" className="text-sm font-semibold text-slate-900">
          Disclaimer
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          This article is written for informational purposes only. 899u Game and
          all similar prediction and lottery platforms involve real financial
          risk. All amounts mentioned in this article are in Pakistani Rupees
          (PKR). Never deposit more than you can comfortably afford to lose.
          Results on prediction platforms are not guaranteed. Please play
          responsibly. Read the full{" "}
          <a
            href="/disclaimer"
            className="font-medium text-violet-700 hover:underline"
          >
            Disclaimer
          </a>{" "}
          and{" "}
          <a href="/terms" className="font-medium text-violet-700 hover:underline">
            Terms and Conditions
          </a>
          .
        </p>
      </div>
    </section>
  );
}
