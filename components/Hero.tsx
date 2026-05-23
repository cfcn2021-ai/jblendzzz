import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 lg:px-8 lg:pt-32 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium tracking-widest text-gold uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Mobile barber · {SITE.serviceArea}
          </p>

          <h1 className="font-display text-6xl leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
            Sharp cuts.{" "}
            <span className="text-gold-gradient">At your door.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl">
            {SITE.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-zinc-950 shadow-lg shadow-gold/20 transition hover:bg-gold-light hover:shadow-gold/40 sm:w-auto"
            >
              Book Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition group-hover:translate-x-0.5"
              >
                <path
                  d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-base font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Stars />
              <span>
                <span className="font-semibold text-white">{SITE.rating}</span>{" "}
                rating
              </span>
            </div>
            <div className="hidden h-4 w-px bg-zinc-800 sm:block" />
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" fill="currentColor"/>
              </svg>
              <span>100% home-service</span>
            </div>
            <div className="hidden h-4 w-px bg-zinc-800 sm:block" />
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold">
                <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"/>
              </svg>
              <span>{SITE.serviceArea}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}
