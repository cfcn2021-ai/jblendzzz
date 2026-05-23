import { SITE } from "@/lib/site";

export default function Booking() {
  return (
    <section id="book" className="bg-brown py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="text-xs font-medium tracking-[0.3em] text-gold-light uppercase">
          Ready when you are
        </p>
        <h2 className="mt-4 font-display text-5xl font-normal leading-[1.1] tracking-tight text-cream sm:text-6xl">
          Book your <em className="not-italic text-gold-light">next cut</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
          Pick a service, pick a time, give me your address. Takes less than a
          minute. I&apos;ll confirm right away.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-sm border border-cream/15 bg-cream shadow-2xl shadow-black/20">
          <iframe
            src="https://flycutzzzz.setmore.com"
            title="Book a cut with Jblendzzz"
            className="block h-[900px] w-full border-0"
            loading="lazy"
          />
        </div>

        <p className="mt-6 text-center text-sm text-cream/60">
          Calendar not loading?{" "}
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline underline-offset-4"
          >
            Open in a new tab
          </a>
          {" · "}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline underline-offset-4"
          >
            WhatsApp
          </a>
          {" · "}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="text-cream underline underline-offset-4"
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
