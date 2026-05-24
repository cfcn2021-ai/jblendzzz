import { GALLERY } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink-soft py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
            <span className="gilt-rule" />
            Recent work
            <span className="gilt-rule ml-3 mr-0" />
          </p>
          <h2 className="mt-6 font-display text-5xl font-light tracking-tight text-ivory sm:text-6xl">
            The portfolio
          </h2>
          <p className="mt-5 text-ivory/65">
            Real cuts, real clients. Bring a reference or choose a style here —
            the rest is mine.
          </p>
        </div>

        <ul className="mt-20 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {GALLERY.map((item, i) => (
            <li
              key={i}
              className="group relative aspect-square overflow-hidden bg-ink-raised ring-1 ring-ivory/5 transition hover:ring-champagne/60"
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
                />
              ) : (
                <Placeholder label={item.label} />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/40 to-transparent p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.28em] text-champagne-light">
                  {item.label}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-xs leading-relaxed text-ivory/50">
          Want a specific style? Bring a photograph when you reserve — or send it
          ahead by WhatsApp.
        </p>
      </div>
    </section>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-ink-raised p-4 text-center">
      <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/30">
        Photo
      </p>
      <p className="mt-2 text-sm font-light text-ivory/55">{label}</p>
    </div>
  );
}
