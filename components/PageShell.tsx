import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function PageShell({
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <article className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
            {description}
          </p>
        </header>
        <div className="prose-section mt-8 space-y-6 text-slate-700 leading-relaxed">
          {children}
        </div>
      </div>
    </article>
  );
}
