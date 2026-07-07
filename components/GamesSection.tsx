import Image from "next/image";
import { U899_IMAGES } from "@/lib/899u-images";

export default function GamesSection() {
  const { gamesLobby } = U899_IMAGES;

  return (
    <section
      id="games-to-play"
      aria-labelledby="games-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 id="games-heading" className="text-2xl font-bold text-slate-900">
              Games to Play on 899u Game App
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              The lobby splits into four main categories, and honestly, that makes
              browsing easier than scrolling one endless list of icons on your screen.
              Whether you like quick spins or longer card sessions, 899u keeps enough
              variety for most real money players in Pakistan without feeling overwhelming.
            </p>

            <h3 className="mt-8 text-lg font-bold text-violet-800">Slots</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Slots are the fastest way to play when you only have five or ten minutes
              free during a break at work or home. Titles like Fortune Tiger and Lucky
              Spin use bright graphics and simple bet buttons anyone can understand.
              Therefore, beginners often start here before moving to live tables later.
            </p>

            <h3 className="mt-8 text-lg font-bold text-violet-800">Casino</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Live casino rooms bring dealers, timers, and chat boxes that feel closer
              to a real floor than static slot reels ever could. Teen Patti and
              Andar Bahar draw heavy traffic from Pakistani players every evening
              without fail. Meanwhile, roulette and baccarat suit users who prefer
              classic table pacing and steady betting patterns.
            </p>

            <h3 className="mt-8 text-lg font-bold text-violet-800">Table</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Table games focus on cards and dice with clear rules shown before each
              round starts inside the earning game lobby. Dragon Tiger and poker
              variants let you test skill and luck against other real players online.
              Still, set a stop-loss — table sessions can run longer than you planned
              on a busy night.
            </p>

            <h3 className="mt-8 text-lg font-bold text-violet-800">Arcade</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Arcade picks like Aviator and crash games end in seconds, which suits
              users who want instant results without learning complex card rules first.
              Multipliers climb fast, but they can crash just as quickly if you chase
              too high without a plan. In short, arcade mode is exciting — and risky —
              so bet small until you know the rhythm.
            </p>
          </div>

          <figure className="mx-auto w-full max-w-[280px] lg:sticky lg:top-24">
            <Image
              src={gamesLobby.src}
              alt={gamesLobby.alt}
              width={gamesLobby.width}
              height={gamesLobby.height}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg"
              sizes="280px"
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Slots, casino, table &amp; arcade games
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
