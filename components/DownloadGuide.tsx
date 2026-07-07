import Image from "next/image";
import { DOWNLOAD_URL, EXTERNAL_LINK_ATTRS } from "@/lib/constants";
import { U899_IMAGES } from "@/lib/899u-images";

const downloadSteps = [
  "Open this page on your Android phone and tap the official Download 899u APK button.",
  "Wait for the file to save — the APK is roughly 45–55 MB depending on the build version.",
  "Check your Downloads folder or notification bar to confirm the file finished saving.",
  "If Chrome blocks the file, tap Keep anyway — the official APK is safe when sourced here.",
] as const;

const installSteps = [
  "Go to Settings → Security → Install unknown apps and allow your browser or file manager.",
  "Open the downloaded 899u APK file from Downloads or your file manager app.",
  "Tap Install and wait for Android to verify and copy files to your device storage.",
  "Launch 899u from your home screen, grant storage permission if asked, then register or login.",
] as const;

export default function DownloadGuide() {
  const { appScreenAlt, promoBanner } = U899_IMAGES;

  return (
    <section
      id="download-install"
      aria-labelledby="download-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="download-heading" className="text-2xl font-bold text-slate-900">
          How to Download and Install 899u APK?
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          899u is not listed on Google Play, so sideloading the APK is the normal
          path for Pakistani players who want the full earning game experience.
          The process is straightforward on Android 8 and above, though you must
          enable installs from unknown sources once before the first setup.
        </p>

        <Image
          src={promoBanner.src}
          alt={promoBanner.alt}
          width={promoBanner.width}
          height={promoBanner.height}
          className="mt-6 h-auto w-full max-w-2xl rounded-xl border border-slate-200 shadow-md"
          sizes="(max-width: 768px) 100vw, 672px"
        />

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_260px]">
          <div>
            <h3 className="text-lg font-bold text-violet-800">
              Downloading Steps
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Always download from the official link below — fake APK files still
              circulate in WhatsApp groups and can steal wallet credentials.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {downloadSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-bold text-violet-800">
              Installation Steps
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              If install fails, free up at least 200 MB storage and disable battery
              optimization for the installer app before trying again.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              {installSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>

            <a
              href={DOWNLOAD_URL}
              {...EXTERNAL_LINK_ATTRS}
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
            >
              Download 899u APK
            </a>
          </div>

          <figure className="mx-auto w-full max-w-[260px]">
            <Image
              src={appScreenAlt.src}
              alt={appScreenAlt.alt}
              width={appScreenAlt.width}
              height={appScreenAlt.height}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg"
              sizes="260px"
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              899u app after install
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
