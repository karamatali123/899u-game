import PageShell from "@/components/PageShell";
import { createPageMetadata } from "@/lib/page-seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "899u Terms and Conditions",
  description:
    "899u terms and conditions for using 899ugames.pk, including affiliate links, content use, and user responsibilities for the 899u guide.",
  path: "/terms",
  keywords: ["899u", "899u terms", "terms and conditions", "899ugames.pk terms"],
});

export default function TermsPage() {
  return (
    <PageShell
      title="Terms and Conditions"
      description="These terms explain how you may use 899ugames.pk. By visiting this website, you agree to the conditions below."
    >
      <section>
        <h2 className="text-xl font-bold text-slate-900">1. Informational Purpose</h2>
        <p className="mt-3">
          899ugames.pk provides general information and guides about 899u Game
          for users in Pakistan. Content on this site is for educational and
          informational use only and does not guarantee profits, bonuses, or
          uninterrupted service from the 899u platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">2. Affiliate Links</h2>
        <p className="mt-3">
          Some download, login, and register buttons may use affiliate links. If
          you sign up or deposit through those links, we may receive a commission
          at no extra cost to you. This does not change the advice quality on our
          guides.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">3. Age and Responsibility</h2>
        <p className="mt-3">
          You must be of legal age under the laws that apply to you before using
          real-money gaming apps. You are responsible for checking local laws in
          Pakistan or your region and for any deposits, gameplay, and withdrawals
          you make on 899u.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">4. Accuracy of Information</h2>
        <p className="mt-3">
          App features, bonuses, payment methods, and policies can change without
          notice. We try to keep guides updated, but we do not warrant that every
          detail remains current at all times. Always confirm important details
          inside the official 899u app or support channels.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">5. Intellectual Property</h2>
        <p className="mt-3">
          Text, layout, and original content on 899ugames.pk belong to this guide
          site unless otherwise stated. You may not copy large portions for
          commercial use without permission. 899u branding and screenshots remain
          the property of their respective owners.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">6. Limitation of Liability</h2>
        <p className="mt-3">
          We are not liable for losses from gameplay, deposits, withdrawals,
          bonus rules, account bans, or third-party app issues. Use 899u and this
          website at your own risk.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">7. Changes to These Terms</h2>
        <p className="mt-3">
          We may update these terms from time to time. Continued use of
          899ugames.pk after changes means you accept the updated terms. For
          related notices, also read our{" "}
          <a href="/disclaimer" className="font-medium text-violet-700 hover:underline">
            Disclaimer
          </a>{" "}
          page.
        </p>
      </section>
    </PageShell>
  );
}
