import { GALLERY } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-brown/60 uppercase">
            Recent work
          </p>
          <h2 className="mt-4 font-display text-5xl font-normal tracking-tight text-brown sm:text-6xl">
            The portfolio
          </h2>
          <p className="mt-4 text-brown/70">
            Real cuts, real clients. Bring a reference or pick a style from here
            — I&apos;ll take it from there.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {GALLERY.map((item, i) => (
            <li
              key={i}
              className="group relative aspect-square overflow-hidden rounded-sm border border-brown/10 bg-paper"
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <Placeholder label={item.label} />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown/80 via-brown/30 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <p className="text-sm font-medium text-cream">{item.label}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-brown/60">
          Want a specific style? Bring a photo when you book — or DM it on
          WhatsApp first.
        </p>
      </div>
    </section>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-paper p-4 text-center">
      <p className="mt-3 text-xs font-medium uppercase tracking-wider text-brown/40">
        Photo
      </p>
      <p className="mt-1 text-sm font-medium text-brown/70">{label}</p>
    </div>
  );
}
