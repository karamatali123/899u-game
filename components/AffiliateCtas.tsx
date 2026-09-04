import {
  DOWNLOAD_URL,
  EXTERNAL_LINK_ATTRS,
  LOGIN_URL,
  REGISTER_URL,
} from "@/lib/constants";

type CtaLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

const defaultLinks: CtaLink[] = [
  { href: DOWNLOAD_URL, label: "Download 899u APK", variant: "primary" },
  { href: LOGIN_URL, label: "Login to 899u", variant: "secondary" },
  { href: REGISTER_URL, label: "Register Free", variant: "secondary" },
];

export default function AffiliateCtas({
  links = defaultLinks,
}: {
  links?: CtaLink[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const isExternal = link.href.startsWith("http");
        return (
          <a
            key={link.label}
            href={link.href}
            {...(isExternal ? EXTERNAL_LINK_ATTRS : {})}
            className={
              link.variant === "primary"
                ? "inline-flex min-h-[44px] items-center justify-center rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
                : "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
            }
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
