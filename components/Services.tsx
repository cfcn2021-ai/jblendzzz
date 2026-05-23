import { SERVICES, SITE } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-brown/60 uppercase">
            Services
          </p>
          <h2 className="mt-4 font-display text-5xl font-normal tracking-tight text-brown sm:text-6xl">
            The price list
          </h2>
          <p className="mx-auto mt-5 max-w-md text-brown/70">
            Transparent pricing. No surprises. Travel fees may apply outside Pandan.
          </p>
        </div>

        <ul className="mt-16 space-y-10">
          {SERVICES.map((s) => (
            <li key={s.id}>
              <div className="flex items-end">
                <h3 className="font-display text-3xl font-normal text-brown sm:text-4xl">
                  {s.name}
                </h3>
                <span className="dotted-leader" aria-hidden />
                <span className="font-display text-3xl font-normal text-brown sm:text-4xl">
                  {s.price}
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <p className="italic text-brown/70">{s.description}</p>
                <p className="shrink-0 whitespace-nowrap text-sm text-brown-muted">
                  {s.duration}
                </p>
              </div>
              {s.badge && (
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">
                  · {s.badge}
                </p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-brown px-8 py-4 text-sm font-medium tracking-[0.15em] text-cream transition hover:bg-brown-light"
          >
            BOOK AN APPOINTMENT
          </a>
          <p className="mt-6 text-xs text-brown/60">
            Travel fee: Pandan free · within 10 km +₱50 · 10–20 km +₱100. Ask for further locations.
          </p>
        </div>
      </div>
    </section>
  );
}
