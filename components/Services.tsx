import { SERVICES, SITE } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-gold uppercase">
            What I offer
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-white sm:text-6xl">
            Services & Prices
          </h2>
          <p className="mt-4 text-zinc-400">
            Transparent pricing. No surprises. Travel fees may apply outside Pandan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-7 transition hover:border-gold/50"
            >
              {s.badge && (
                <span className="absolute right-5 top-5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  {s.badge}
                </span>
              )}

              <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl border border-zinc-800 bg-zinc-900">
                <ServiceIcon id={s.id} />
              </div>

              <h3 className="font-display text-3xl tracking-wide text-white">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{s.description}</p>

              <div className="mt-6 flex items-end justify-between border-t border-zinc-800 pt-5">
                <div>
                  <div className="text-3xl font-bold text-white">{s.price}</div>
                  <div className="text-xs text-zinc-500">{s.duration}</div>
                </div>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 transition group-hover:bg-gold"
                >
                  Book
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          Travel fee: Pandan free · within 10 km +₱50 · 10–20 km +₱100. Ask for further locations.
        </p>
      </div>
    </section>
  );
}

function ServiceIcon({ id }: { id: string }) {
  if (id === "kids") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M5 21c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="8" r="0.7" fill="currentColor" />
        <circle cx="14" cy="8" r="0.7" fill="currentColor" />
      </svg>
    );
  }
  if (id === "design") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
        <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
      <path d="M6 4l4 6m8-6l-4 6M6 20a3 3 0 100-6 3 3 0 000 6zm12 0a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 13l3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
