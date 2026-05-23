import { SITE } from "@/lib/site";

export default function Booking() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div
        className="absolute inset-0 bg-grid opacity-30"
        aria-hidden
      />
      <div
        className="absolute -inset-x-20 -top-32 h-72 bg-gold/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-medium tracking-widest text-gold uppercase">
          Ready when you are
        </p>
        <h2 className="mt-3 font-display text-5xl tracking-tight text-white sm:text-7xl">
          Book your <span className="text-gold-gradient">next cut</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
          Pick a service, pick a time, give me your address. Takes less than a
          minute. I&apos;ll confirm right away.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-zinc-950 shadow-lg shadow-gold/20 transition hover:bg-gold-light hover:shadow-gold/40 sm:w-auto"
          >
            Open booking calendar
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-base font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1s-1.2-.4-2.3-1.4c-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.4A10 10 0 1012 2z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Or call directly:{" "}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="font-medium text-zinc-300 hover:text-gold"
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
