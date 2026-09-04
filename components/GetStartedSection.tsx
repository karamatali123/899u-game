import {
  DOWNLOAD_URL,
  EXTERNAL_LINK_ATTRS,
  LOGIN_URL,
  REGISTER_URL,
} from "@/lib/constants";

const steps = [
  {
    label: "Register Account",
    text: "Open the app or site, tap register, and verify your Pakistani mobile number with OTP.",
  },
  {
    label: "Login Account",
    text: "Enter your phone number and password on the login screen to access your wallet and games.",
  },
  {
    label: "Download App",
    text: "Grab the latest 899u APK from the official link on this page if you have not installed it yet.",
  },
  {
    label: "Install App",
    text: "Allow unknown sources in Android settings, open the file, and tap install to finish setup.",
  },
  {
    label: "Deposit Funds",
    text: "Go to wallet, pick JazzCash or Easypaisa, and add at least Rs 100 to start playing.",
  },
  {
    label: "Withdraw Funds",
    text: "After you win, open withdraw, choose your wallet, and request cash-out from Rs 200 upward.",
  },
] as const;

export default function GetStartedSection() {
  return (
    <section
      id="how-to-get-started"
      aria-labelledby="get-started-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="get-started-heading"
          className="text-2xl font-bold text-slate-900"
        >
          How to Get Started on 899u Game App?
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Getting started sounds tricky, but the flow is actually six simple
          moves from download to cash-out on your Android phone. Follow the order
          below if you are brand new to real money gaming apps in Pakistan today.
          Take your time on each step — rushing often leads to wrong wallet numbers.
        </p>

        <ul className="mt-6 space-y-4">
          {steps.map((step) => (
            <li
              key={step.label}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              <strong className="text-violet-800">{step.label}:</strong>{" "}
              {step.text}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/register"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
          >
            Register Now
          </a>
          <a
            href="/download"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Download APK
          </a>
          <a
            href="/login"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Login
          </a>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Prefer the direct app link?{" "}
          <a
            href={DOWNLOAD_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="font-medium text-violet-700 hover:underline"
          >
            Open 899u download
          </a>
          ,{" "}
          <a
            href={LOGIN_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="font-medium text-violet-700 hover:underline"
          >
            login
          </a>
          , or{" "}
          <a
            href={REGISTER_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="font-medium text-violet-700 hover:underline"
          >
            register
          </a>
          .
        </p>
      </div>
    </section>
  );
}
