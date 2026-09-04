import Image from "next/image";
import AffiliateCtas from "@/components/AffiliateCtas";
import PageShell from "@/components/PageShell";
import { EXTERNAL_LINK_ATTRS, REGISTER_URL } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";
import { createPageMetadata } from "@/lib/page-seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "899u Register — Create Account in Pakistan",
  description:
    "899u register guide for Pakistan. Create a new 899u account with your mobile number, OTP signup steps, referral tips, and welcome bonus details.",
  path: "/register",
  keywords: ["899u", "899u register", "899u signup", "899u create account"],
});

const registerSteps = [
  "Open the official 899u website or app and tap Register.",
  "Enter your active Pakistani mobile number starting with 03XX.",
  "Create a strong password you can remember securely.",
  "Enter the OTP sent to your phone to verify the SIM.",
  "Add a referral code if a friend invited you (optional).",
  "Tap Submit and wait for the welcome screen to confirm your account.",
] as const;

export default function RegisterPage() {
  const { loginScreen } = U899_IMAGES;

  return (
    <PageShell
      title="Register on 899u Game"
      description="Create your 899u account in a few minutes. New users in Pakistan can unlock welcome offers after signup and first deposit."
    >
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_240px]">
        <div className="space-y-6">
          <p>
            Registration usually takes about two minutes if your SIM receives OTP
            texts without delay. After signup, you can deposit with JazzCash or
            Easypaisa and start playing slots, casino, table, and arcade games.
          </p>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Registration Steps
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {registerSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              After You Register
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Download the APK if you signed up on mobile browser.</li>
              <li>Check the promo tab for welcome bonus and check-in rewards.</li>
              <li>Start with a small deposit and test one withdrawal early.</li>
            </ul>
          </section>
        </div>

        <figure className="mx-auto w-full max-w-[240px]">
          <Image
            src={loginScreen.src}
            alt={loginScreen.alt}
            width={loginScreen.width}
            height={loginScreen.height}
            className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg"
            sizes="240px"
            priority
          />
          <figcaption className="mt-2 text-center text-sm text-slate-500">
            899u register screen
          </figcaption>
        </figure>
      </div>

      <AffiliateCtas
        links={[
          {
            href: REGISTER_URL,
            label: "Register on 899u Free",
            variant: "primary",
          },
          { href: "/login", label: "Already have account? Login", variant: "secondary" },
          { href: "/download", label: "Download APK", variant: "secondary" },
        ]}
      />

      <p className="text-sm text-slate-500">
        Official register opens through the{" "}
        <a
          href={REGISTER_URL}
          {...EXTERNAL_LINK_ATTRS}
          className="text-violet-700 hover:underline"
        >
          899u affiliate link
        </a>
        .
      </p>
    </PageShell>
  );
}
