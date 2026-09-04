import Image from "next/image";
import AffiliateCtas from "@/components/AffiliateCtas";
import PageShell from "@/components/PageShell";
import { DOWNLOAD_URL, EXTERNAL_LINK_ATTRS } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";
import { createPageMetadata } from "@/lib/page-seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "899u APK Download Pakistan 2026",
  description:
    "899u APK download for Android in Pakistan. Safe install steps, unknown sources guide, and JazzCash ready wallet setup for 899u.",
  path: "/download",
  keywords: ["899u", "899u apk", "899u download", "899u install"],
});

const downloadSteps = [
  "Open this page on your Android phone and tap Download 899u APK.",
  "Wait for the file to finish saving — the APK is roughly 45–55 MB.",
  "Check Downloads or your notification bar to confirm the file is ready.",
  "If Chrome warns you, tap Keep anyway when using the official link.",
] as const;

const installSteps = [
  "Go to Settings → Security → Install unknown apps and allow your browser.",
  "Open the downloaded 899u APK from Downloads.",
  "Tap Install and wait for Android to finish setup.",
  "Launch 899u, then register or login to start playing.",
] as const;

export default function DownloadPage() {
  const { promoBanner, appScreenAlt } = U899_IMAGES;

  return (
    <PageShell
      title="Download 899u APK for Android"
      description="Get the latest 899u Game APK for Pakistan players. Follow the steps below for a safe download and install on Android 8 and above."
    >
      <Image
        src={promoBanner.src}
        alt={promoBanner.alt}
        width={promoBanner.width}
        height={promoBanner.height}
        className="h-auto w-full max-w-2xl rounded-xl border border-slate-200 shadow-md"
        sizes="(max-width: 768px) 100vw, 672px"
        priority
      />

      <p>
        899u is not listed on Google Play, so sideloading the APK is the normal
        path for Pakistani users. Always download from the official affiliate
        link on this site to avoid fake APK files shared in WhatsApp groups.
      </p>

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_240px]">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-slate-900">Downloading Steps</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {downloadSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Installation Steps</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {installSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>
        </div>

        <figure className="mx-auto w-full max-w-[240px]">
          <Image
            src={appScreenAlt.src}
            alt={appScreenAlt.alt}
            width={appScreenAlt.width}
            height={appScreenAlt.height}
            className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg"
            sizes="240px"
          />
          <figcaption className="mt-2 text-center text-sm text-slate-500">
            899u app after install
          </figcaption>
        </figure>
      </div>

      <AffiliateCtas
        links={[
          {
            href: DOWNLOAD_URL,
            label: "Download 899u APK Now",
            variant: "primary",
          },
        ]}
      />

      <p className="text-sm text-slate-500">
        Need an account first?{" "}
        <a href="/register" className="font-medium text-violet-700 hover:underline">
          Register here
        </a>{" "}
        or go to{" "}
        <a href="/login" className="font-medium text-violet-700 hover:underline">
          899u Login
        </a>
        . Official download opens via{" "}
        <a href={DOWNLOAD_URL} {...EXTERNAL_LINK_ATTRS} className="text-violet-700 hover:underline">
          899u affiliate link
        </a>
        .
      </p>
    </PageShell>
  );
}
