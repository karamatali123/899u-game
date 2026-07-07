import { TABLE_OF_CONTENTS } from "@/lib/toc";

export default function TableOfContents() {
  return (
    <nav
      aria-labelledby="toc-heading"
      className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <details
          className="group overflow-hidden rounded-lg border border-slate-300"
          open
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-slate-50 px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
            <span id="toc-heading">Table of Contents</span>
            <span
              className="shrink-0 text-slate-400 transition group-open:rotate-180"
              aria-hidden="true"
            >
              ▼
            </span>
          </summary>

          <ol className="border-t border-slate-300">
            {TABLE_OF_CONTENTS.map((item, index) => (
              <li
                key={item.id}
                className="border-b border-slate-300 last:border-b-0"
              >
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 transition hover:bg-violet-50 hover:text-violet-800"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-slate-300 bg-slate-50 text-xs font-semibold text-violet-700">
                    {index + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </nav>
  );
}
