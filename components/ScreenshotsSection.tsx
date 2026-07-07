import Image from "next/image";
import { U899_IMAGES } from "@/lib/899u-images";

function ScreenshotSlide({
  shot,
  index,
  total,
}: {
  shot: (typeof U899_IMAGES.screenshots)[number];
  index: number;
  total: number;
}) {
  return (
    <li
      className="screenshot-slide flex w-[160px] shrink-0 flex-col sm:w-[200px]"
      aria-hidden={index >= total ? true : undefined}
    >
      <figure className="w-full">
        <div className="overflow-hidden rounded-2xl border-4 border-violet-900/80 bg-violet-950 shadow-lg">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            className="h-auto w-full object-cover object-top"
            sizes="200px"
            loading="lazy"
          />
        </div>
        <figcaption className="mt-2 text-center text-xs font-medium text-slate-600 sm:text-sm">
          {shot.caption}
        </figcaption>
      </figure>
    </li>
  );
}

export default function ScreenshotsSection() {
  const { screenshots } = U899_IMAGES;
  const slides = [...screenshots, ...screenshots];

  return (
    <section
      aria-labelledby="screenshots-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="screenshots-heading"
          className="text-center text-2xl font-bold text-slate-900"
        >
          899u App Screenshots
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Preview the home screen, game lobby, bonuses, and login flow before you
          download the 899u APK on your Android phone.
        </p>

        <div
          className="screenshots-slider relative mt-8"
          role="region"
          aria-label="899u Game app screenshots carousel"
        >
          <ul className="screenshots-track flex gap-5 py-2">
            {slides.map((shot, index) => (
              <ScreenshotSlide
                key={`${shot.src}-${index}`}
                shot={shot}
                index={index}
                total={screenshots.length}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
