import { SITE } from "@/lib/site";

const REVIEWS = [
  { name: "Yaro Alcala", rating: 5, body: "solid solids" },
  { name: "Gian loubel fulgencio", rating: 5, body: "Excellent" },
  { name: "Miguel Jaime M. Tanco", rating: 5, body: "guds" },
  { name: "Eauan", rating: 5, body: "⭐️⭐️⭐️⭐️⭐️" },
];

const breakdown = [5, 4, 3, 2, 1].map((stars) => ({
  stars,
  count: REVIEWS.filter((r) => r.rating === stars).length,
}));
const total = REVIEWS.length;

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream-light py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-brown/60 uppercase">
            What clients say
          </p>
          <h2 className="mt-4 font-display text-5xl font-normal tracking-tight text-brown sm:text-6xl">
            Reviews
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-sm border border-brown/10 bg-cream p-8">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl text-brown">{SITE.rating}</span>
                <span className="text-brown/50">/ 5</span>
              </div>
              <Stars rating={5} size={18} />
              <p className="mt-2 text-sm text-brown/70">
                Based on {total} verified review{total === 1 ? "" : "s"}
              </p>

              <ul className="mt-6 space-y-2">
                {breakdown.map((b) => {
                  const pct = total === 0 ? 0 : (b.count / total) * 100;
                  return (
                    <li key={b.stars} className="flex items-center gap-3 text-sm">
                      <span className="w-3 text-brown/60">{b.stars}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-gold"
                      >
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                      </svg>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper">
                        <div
                          className="h-full rounded-full bg-gold transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-6 text-right text-xs text-brown/50">
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
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm border border-brown/20 bg-cream-light px-5 py-3 text-sm font-medium text-brown transition hover:border-brown hover:bg-cream"
              >
                See all reviews
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
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

          <ul className="space-y-4 lg:col-span-8">
            {REVIEWS.map((r) => (
              <li
                key={r.name}
                className="rounded-sm border border-brown/10 bg-cream p-6 transition hover:border-brown/25"
              >
                <div className="flex items-start gap-4">
                  <Avatar name={r.name} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-medium text-brown">{r.name}</p>
                      <Stars rating={r.rating} size={13} />
                    </div>
                    <p className="mt-2 break-words text-brown/80">{r.body}</p>
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
          className={i <= rating ? "text-gold" : "text-brown/20"}
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
  return (
    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brown/15 bg-paper font-display text-lg text-brown">
      {initials}
    </div>
  );
}
