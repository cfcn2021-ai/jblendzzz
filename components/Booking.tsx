import { SITE } from "@/lib/site";

export default function Booking() {
  return (
    <section id="book" className="bg-ink-soft py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="flex items-center justify-center text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
          <span className="gilt-rule" />
          By appointment
          <span className="gilt-rule ml-3 mr-0" />
        </p>
        <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl">
          Reserve your <em className="not-italic text-champagne-light">next cut</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-ivory/70">
          Select a service, choose a time, share your address. Less than a
          minute. Confirmation is immediate.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-5 lg:px-8">
        <div className="relative">
          <span className="absolute -top-1 -left-1 h-4 w-4 border-t border-l border-champagne" aria-hidden />
          <span className="absolute -top-1 -right-1 h-4 w-4 border-t border-r border-champagne" aria-hidden />
          <span className="absolute -bottom-1 -left-1 h-4 w-4 border-b border-l border-champagne" aria-hidden />
          <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b border-r border-champagne" aria-hidden />
          <div className="overflow-hidden border border-ivory/15 bg-ivory">
            <iframe
              src="https://flycutzzzz.setmore.com"
              title="Reserve a cut with Jblendzzz"
              className="block h-[900px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-ivory/55">
          Calendar not loading?{" "}
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-champagne underline underline-offset-4 hover:text-champagne-light"
          >
            Open in a new tab
          </a>
          {" · "}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-champagne underline underline-offset-4 hover:text-champagne-light"
          >
            WhatsApp
          </a>
          {" · "}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="text-champagne underline underline-offset-4 hover:text-champagne-light"
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
