import Image from "next/image";
import AffiliateCtas from "@/components/AffiliateCtas";
import PageShell from "@/components/PageShell";
import { EXTERNAL_LINK_ATTRS, LOGIN_URL } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";
import { createPageMetadata } from "@/lib/page-seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "899u Login Pakistan — Account Access Guide",
  description:
    "899u login with your Pakistani mobile number, OTP, and password. Fix common 899u login errors and access your wallet safely.",
  path: "/login",
  keywords: ["899u", "899u login", "899u account", "899u OTP"],
});

const loginSteps = [
  "Open the 899u app or visit the official login page.",
  "Enter your registered 03XX Pakistani mobile number.",
  "Type your password carefully — check caps lock if login fails.",
  "Complete OTP verification if the app asks for extra security.",
  "Tap Login and wait for your wallet and game lobby to load.",
] as const;

export default function LoginPage() {
  const { loginScreen, loginBanner } = U899_IMAGES;

  return (
    <PageShell
      title="899u Login Guide"
      description="Access your 899u Game account on Android with a real Pakistani SIM. Follow the steps below for a smooth login every time."
    >
      <div className="grid items-start gap-8 lg:grid-cols-[240px_1fr]">
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
            899u login screen
          </figcaption>
        </figure>

        <div className="space-y-6">
          <Image
            src={loginBanner.src}
            alt={loginBanner.alt}
            width={loginBanner.width}
            height={loginBanner.height}
            className="h-auto w-full max-w-md rounded-lg border border-slate-200"
            sizes="(max-width: 768px) 100vw, 400px"
          />

          <section>
            <h2 className="text-xl font-bold text-slate-900">Steps to Login</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {loginSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Login Tips</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Use a real Pakistani SIM — VoIP numbers usually fail OTP checks.</li>
              <li>If login fails twice, wait five minutes before trying again.</li>
              <li>Never share your OTP or password with anyone claiming to be support.</li>
            </ul>
          </section>
        </div>
      </div>

      <AffiliateCtas
        links={[
          { href: LOGIN_URL, label: "Login to 899u Now", variant: "primary" },
          { href: "/register", label: "Create New Account", variant: "secondary" },
          { href: "/download", label: "Download APK", variant: "secondary" },
        ]}
      />

      <p className="text-sm text-slate-500">
        Official login opens through the{" "}
        <a href={LOGIN_URL} {...EXTERNAL_LINK_ATTRS} className="text-violet-700 hover:underline">
          899u affiliate link
        </a>
        .
      </p>
    </PageShell>
  );
}
