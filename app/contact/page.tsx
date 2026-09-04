import AffiliateCtas from "@/components/AffiliateCtas";
import PageShell from "@/components/PageShell";
import {
  EXTERNAL_LINK_ATTRS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { createPageMetadata } from "@/lib/page-seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "899u Contact Us — Support Links",
  description:
    "899u contact and support via Facebook, WhatsApp, and Telegram. Reach 899u help for download, login, and withdrawal questions on 899ugames.pk.",
  path: "/contact",
  keywords: ["899u", "899u contact", "899u support", "899u WhatsApp", "899u Telegram"],
});

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      description="Need help with 899u download, login, or withdrawals? Use the official social channels below for faster support."
    >
      <p>
        For account, deposit, and withdrawal issues inside the 899u app, contact
        official support through Facebook, WhatsApp, or Telegram. Keep your user
        ID and transaction screenshots ready so agents can help faster.
      </p>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Official Support Links</h2>
        <ul className="mt-4 space-y-3">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                {...EXTERNAL_LINK_ATTRS}
                aria-label={link.label}
                className="inline-flex min-h-[44px] w-full max-w-md items-center justify-between rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-800 hover:bg-violet-100 sm:w-auto sm:min-w-[280px]"
              >
                <span>{link.name}</span>
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Guide Website</h2>
        <p className="mt-3">
          For questions about this guide website (899ugames.pk), you can also
          reach out through the same social channels. We are not the 899u
          operator — we publish independent download and login information for
          Pakistani players.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Quick Links</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <a href="/download" className="text-violet-700 hover:underline">
              Download 899u APK
            </a>
          </li>
          <li>
            <a href="/login" className="text-violet-700 hover:underline">
              899u Login Guide
            </a>
          </li>
          <li>
            <a href="/register" className="text-violet-700 hover:underline">
              Register on 899u
            </a>
          </li>
        </ul>
      </section>

      <AffiliateCtas />
    </PageShell>
  );
}
