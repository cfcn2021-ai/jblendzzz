import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/gallery/front-page.webp"
          alt="Sharp cut by Jblendzzz"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-brown/40 via-brown/45 to-brown/85"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pt-36 pb-24 lg:px-8 lg:pt-52 lg:pb-36">
        <div className="max-w-2xl">
          <p className="mb-6 inline-block text-xs font-medium tracking-[0.3em] text-cream uppercase">
            Mobile barber · {SITE.serviceArea}
          </p>

          <h1 className="font-display text-5xl font-normal leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Sharp cuts,{" "}
            <em className="not-italic text-gold-light">brought to your door.</em>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-cream/85">
            {SITE.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-cream px-8 py-4 text-sm font-medium tracking-[0.15em] text-brown transition hover:bg-cream-light"
            >
              BOOK A CUT
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-sm border border-cream/40 px-8 py-4 text-sm font-medium tracking-[0.15em] text-cream transition hover:bg-cream/10"
            >
              VIEW THE LIST
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
