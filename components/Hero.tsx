import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10">
        <img
          src="/gallery/front-page.webp"
          alt="Sharp cut by Jblendzzz"
          className="h-full w-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/75 to-ink"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(13,11,9,0.85)_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pt-40 pb-32 lg:px-8 lg:pt-56 lg:pb-44">
        <div className="max-w-2xl">
          <p className="mb-8 flex items-center text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
            <span className="gilt-rule" />
            Mobile barber · {SITE.serviceArea}
          </p>

          <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            A sharper cut,
            <br />
            <em className="not-italic text-champagne-light">delivered to your door.</em>
          </h1>

          <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-ivory/75">
            {SITE.description}
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-champagne px-9 py-4 text-[11px] font-medium tracking-[0.32em] text-ink uppercase transition hover:bg-champagne-light"
            >
              Reserve a chair
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-ivory/30 px-9 py-4 text-[11px] font-medium tracking-[0.32em] text-ivory uppercase transition hover:border-champagne hover:text-champagne"
            >
              View the menu
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
    </section>
  );
}
