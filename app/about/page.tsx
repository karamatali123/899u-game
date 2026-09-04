import AffiliateCtas from "@/components/AffiliateCtas";
import PageShell from "@/components/PageShell";
import { createPageMetadata } from "@/lib/page-seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "899u About Us — Independent Game Guide",
  description:
    "899u guide site 899ugames.pk explains APK download, login, bonuses, and withdrawals for Pakistan players. Learn about our independent 899u coverage.",
  path: "/about",
  keywords: ["899u", "about 899u", "899ugames.pk", "899u guide"],
});

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      description="899ugames.pk is an independent guide site that helps Pakistani players understand 899u Game before they download, register, or deposit."
    >
      <p>
        We publish clear, practical information about the 899u earning app —
        including APK download steps, login and registration help, JazzCash and
        Easypaisa payment methods, bonuses, and the agent referral program.
      </p>

      <section>
        <h2 className="text-xl font-bold text-slate-900">What We Do</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Explain how 899u works in simple English for first-time users.</li>
          <li>Share step-by-step download, install, login, and register guides.</li>
          <li>Highlight bonuses, payments, and safety tips for responsible play.</li>
          <li>Link to official 899u channels for support on Facebook, WhatsApp, and Telegram.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Our Approach</h2>
        <p className="mt-3">
          Our goal is to make 899u easier to understand — not to promise profits.
          Online games involve real financial risk. Always start small, read bonus
          rules, and never deposit money you cannot afford to lose.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Need Help?</h2>
        <p className="mt-3">
          Visit our{" "}
          <a href="/contact" className="font-medium text-violet-700 hover:underline">
            Contact Us
          </a>{" "}
          page for social support links, or read the full guide on the{" "}
          <a href="/" className="font-medium text-violet-700 hover:underline">
            homepage
          </a>
          .
        </p>
      </section>

      <AffiliateCtas />
    </PageShell>
  );
}
