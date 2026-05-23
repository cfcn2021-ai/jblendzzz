import { SITE } from "@/lib/site";

export default function Booking() {
  return (
    <section className="bg-brown py-24 lg:py-32">
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

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-sm bg-cream px-8 py-4 text-sm font-medium tracking-[0.15em] text-brown transition hover:bg-cream-light sm:w-auto"
          >
            OPEN BOOKING CALENDAR
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-cream/40 px-8 py-4 text-sm font-medium tracking-[0.15em] text-cream transition hover:bg-cream/10 sm:w-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-emerald-300"
            >
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1s-1.2-.4-2.3-1.4c-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.4A10 10 0 1012 2z" />
            </svg>
            CHAT ON WHATSAPP
          </a>
        </div>

        <p className="mt-8 text-sm text-cream/60">
          Or call directly:{" "}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="text-cream underline-offset-4 hover:underline"
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
