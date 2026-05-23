import { GALLERY } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-gold uppercase">
            Recent work
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-white sm:text-6xl">
            The portfolio
          </h2>
          <p className="mt-4 text-zinc-400">
            Real cuts, real clients. Bring a reference or pick a style from here
            — I&apos;ll take it from there.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((item, i) => (
            <li
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950"
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <Placeholder label={item.label} index={i} />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.label}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-zinc-500">
          Want a specific style? Bring a photo when you book — or DM it on
          WhatsApp first.
        </p>
      </div>
    </section>
  );
}

function Placeholder({ label, index }: { label: string; index: number }) {
  const tints = [
    "from-zinc-800 to-zinc-900",
    "from-amber-900/40 to-zinc-900",
    "from-zinc-900 to-amber-950/30",
    "from-zinc-800 to-black",
    "from-amber-950/30 to-zinc-900",
    "from-zinc-900 to-zinc-800",
  ];
  const tint = tints[index % tints.length];

  return (
    <div className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${tint} p-4 text-center`}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-zinc-700">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M21 17l-5-5-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <p className="mt-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
        Photo
      </p>
      <p className="mt-1 text-sm font-medium text-zinc-300">{label}</p>
    </div>
  );
}
