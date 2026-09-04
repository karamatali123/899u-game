import PageShell from "@/components/PageShell";
import { createPageMetadata } from "@/lib/page-seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "899u Disclaimer — Play Responsibly",
  description:
    "899u disclaimer for 899ugames.pk: real-money risk, no profit guarantees, and informational use only for 899u content in Pakistan.",
  path: "/disclaimer",
  keywords: ["899u", "899u disclaimer", "responsible play", "899ugames.pk disclaimer"],
});

export default function DisclaimerPage() {
  return (
    <PageShell
      title="Disclaimer"
      description="Please read this disclaimer carefully before downloading, registering, or depositing on 899u Game."
    >
      <p>
        This article and website are written for informational purposes only.
        899u Game and similar prediction or lottery-style platforms involve real
        financial risk. All amounts mentioned on this site are in Pakistani
        Rupees (PKR) unless stated otherwise.
      </p>

      <section>
        <h2 className="text-xl font-bold text-slate-900">No Profit Guarantee</h2>
        <p className="mt-3">
          Results on gaming and earning apps are not guaranteed. Most players
          lose money over time because of the house edge. Never treat 899u as a
          salary replacement or guaranteed online income method.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Play Responsibly</h2>
        <p className="mt-3">
          Never deposit more than you can comfortably afford to lose. Set personal
          limits for deposits and playtime. If gambling is affecting your health,
          money, or relationships, stop and seek appropriate help.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Independent Guide</h2>
        <p className="mt-3">
          899ugames.pk is an independent guide website. We are not the official
          operator of 899u. Screenshots, bonus figures, and payment details may
          change. Confirm current terms inside the app or with official support
          on Facebook, WhatsApp, or Telegram.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Legal Notice</h2>
        <p className="mt-3">
          Online gaming laws can vary and may be unclear for individuals in
          Pakistan. You are responsible for following the laws that apply to you.
          By using this website, you accept that any decision to download,
          register, or play is yours alone.
        </p>
      </section>

      <p>
        For website usage rules, see our{" "}
        <a href="/terms" className="font-medium text-violet-700 hover:underline">
          Terms and Conditions
        </a>
        .
      </p>
    </PageShell>
  );
}
