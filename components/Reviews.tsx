import { SITE } from "@/lib/site";

// Real reviews pulled from his Setmore booking page.
// Add new ones here as he collects them.
const REVIEWS = [
  { name: "Yaro Alcala", rating: 5, body: "solid solids" },
  { name: "Gian loubel fulgencio", rating: 5, body: "Excellent" },
  { name: "Miguel Jaime M. Tanco", rating: 5, body: "guds" },
  { name: "Eauan", rating: 5, body: "⭐️⭐️⭐️⭐️⭐️" },
];

// Build a 1-5★ histogram from the reviews above.
const breakdown = [5, 4, 3, 2, 1].map((stars) => ({
  stars,
  count: REVIEWS.filter((r) => r.rating === stars).length,
}));
const total = REVIEWS.length;

export default function Reviews() {
  return (
    <section id="reviews" className="bg-zinc-950 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-gold uppercase">
            What clients say
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-white sm:text-6xl">
            Reviews
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Left: rating summary */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-7">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl text-white">
                  {SITE.rating}
                </span>
                <span className="text-zinc-500">/ 5</span>
              </div>
              <Stars rating={5} size={18} />
              <p className="mt-2 text-sm text-zinc-400">
                Based on {total} verified review{total === 1 ? "" : "s"}
              </p>

              <ul className="mt-6 space-y-2">
                {breakdown.map((b) => {
                  const pct = total === 0 ? 0 : (b.count / total) * 100;
                  return (
                    <li
                      key={b.stars}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="w-3 text-zinc-400">{b.stars}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-gold"
                      >
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                      </svg>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-gold transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-6 text-right text-xs text-zinc-500">
                        {b.count}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-gold hover:text-gold"
              >
                See all reviews
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </aside>

          {/* Right: review list */}
          <ul className="space-y-4 lg:col-span-8">
            {REVIEWS.map((r) => (
              <li
                key={r.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700"
              >
                <div className="flex items-start gap-4">
                  <Avatar name={r.name} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-medium text-white">{r.name}</p>
                      <Stars rating={r.rating} size={13} />
                    </div>
                    <p className="mt-2 break-words text-zinc-300">{r.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={i <= rating ? "text-gold" : "text-zinc-700"}
        >
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  // Deterministic tint from the name so each reviewer has a consistent color.
  const tints = [
    "from-amber-700/40 to-zinc-800",
    "from-rose-700/40 to-zinc-800",
    "from-emerald-700/40 to-zinc-800",
    "from-sky-700/40 to-zinc-800",
    "from-purple-700/40 to-zinc-800",
  ];
  const hash = [...name].reduce((a, c) => a + c.charCodeAt(0), 0);
  const tint = tints[hash % tints.length];

  return (
    <div
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-zinc-700 bg-gradient-to-br ${tint} font-display text-lg text-gold`}
    >
      {initials}
    </div>
  );
}
