import { SERVICES } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
            <span className="gilt-rule" />
            The menu
            <span className="gilt-rule ml-3 mr-0" />
          </p>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl">
            Rates &amp; reservations
          </h2>
          <p className="mx-auto mt-6 max-w-md text-ivory/65">
            Transparent pricing. No surprises at the door. Travel beyond Pandan
            adjusted by distance.
          </p>
        </div>

        <ul className="mt-20 space-y-12">
          {SERVICES.map((s, i) => (
            <li
              key={s.id}
              className="border-t border-ivory/10 pt-6 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline gap-3 text-champagne/60 mb-2">
                <span className="font-display text-xs tracking-[0.3em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-end">
                <h3 className="font-display text-3xl font-light text-ivory sm:text-4xl">
                  {s.name}
                </h3>
                <span className="dotted-leader" aria-hidden />
                <span className="font-display text-3xl font-light text-champagne-light sm:text-4xl">
                  {s.price}
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <p className="font-light italic text-ivory/65">{s.description}</p>
                <p className="shrink-0 whitespace-nowrap text-xs uppercase tracking-[0.22em] text-ivory-mute">
                  {s.duration}
                </p>
              </div>
              {s.badge && (
                <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-champagne">
                  — {s.badge}
                </p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-20 text-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center bg-champagne px-10 py-4 text-[11px] font-medium tracking-[0.32em] text-ink uppercase transition hover:bg-champagne-light"
          >
            Reserve an appointment
          </a>
          <p className="mt-8 text-xs leading-relaxed text-ivory/50">
            Travel · Pandan complimentary · within 10 km +₱50 · 10–20 km +₱100 ·
            further locations on request.
          </p>
        </div>
      </div>
    </section>
  );
}
