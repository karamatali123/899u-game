import Image from "next/image";
import { REGISTER_URL, LOGIN_URL, EXTERNAL_LINK_ATTRS } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";

const registerSteps = [
  "Open the official 899u website or app and tap the Register button.",
  "Enter your active Pakistani mobile number starting with 03XX.",
  "Create a strong password you will remember but others cannot guess easily.",
  "Enter the OTP sent to your phone to verify ownership of the SIM card.",
  "Optionally add a referral code if a friend invited you to earn bonuses.",
  "Tap Submit and wait for the welcome screen to confirm your new account.",
] as const;

const loginSteps = [
  "Launch the 899u app or visit the login page on your mobile browser.",
  "Type your registered mobile number in the phone field without spaces.",
  "Enter your account password carefully — caps lock causes most login errors.",
  "Complete OTP verification if the app requests it for security on this device.",
  "Tap Login and wait for your wallet balance and game lobby to load fully.",
] as const;

export default function RegistrationGuide() {
  const { loginScreen, loginBanner } = U899_IMAGES;

  return (
    <section
      id="registration-login"
      aria-labelledby="registration-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="registration-heading"
          className="text-2xl font-bold text-slate-900"
        >
          899u Registration and Login Process
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Registration takes about two minutes if your SIM receives OTP texts
          without delay on your network. After that, login becomes a daily habit —
          phone, password, and you are inside the earning game lobby. Below we
          break both flows into clear steps so nothing gets skipped by mistake.
        </p>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[280px_1fr]">
          <figure className="mx-auto w-full max-w-[280px]">
            <Image
              src={loginScreen.src}
              alt={loginScreen.alt}
              width={loginScreen.width}
              height={loginScreen.height}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg"
              sizes="280px"
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              899u login &amp; register screen
            </figcaption>
          </figure>

          <div>
            <Image
              src={loginBanner.src}
              alt={loginBanner.alt}
              width={loginBanner.width}
              height={loginBanner.height}
              className="h-auto w-full max-w-md rounded-lg border border-slate-200"
              sizes="(max-width: 768px) 100vw, 400px"
            />

            <h3 className="mt-8 text-lg font-bold text-violet-800">
              Register Account on 899u
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Use a real Pakistani SIM — virtual or VoIP numbers usually fail OTP
              checks during signup on most earning apps in Pakistan.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {registerSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-bold text-violet-800">
              Steps to Login your Account
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              If login fails twice, wait five minutes before retrying to avoid a
              temporary lock on your account from too many wrong attempts.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {loginSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={REGISTER_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
          >
            Register on 899u
          </a>
          <a
            href={LOGIN_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Login to 899u
          </a>
        </div>
      </div>
    </section>
  );
}
