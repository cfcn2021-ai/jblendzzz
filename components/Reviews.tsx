import { SITE } from "@/lib/site";
import ReviewForm from "./ReviewForm";

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
    <section id="reviews" className="bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
            <span className="gilt-rule" />
            What clients say
            <span className="gilt-rule ml-3 mr-0" />
          </p>
          <h2 className="mt-6 font-display text-5xl font-light tracking-tight text-ivory sm:text-6xl">
            Reviews
          </h2>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-28 border border-ivory/10 bg-ink-soft p-10">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl font-light text-champagne-light">
                  {SITE.rating}
                </span>
                <span className="text-ivory/40 font-light">/ 5</span>
              </div>
              <div className="mt-2">
                <Stars rating={5} size={16} />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-ivory/50">
                Based on {total} verified review{total === 1 ? "" : "s"}
              </p>

              <ul className="mt-8 space-y-3">
                {breakdown.map((b) => {
                  const pct = total === 0 ? 0 : (b.count / total) * 100;
                  return (
                    <li key={b.stars} className="flex items-center gap-3 text-sm">
                      <span className="w-3 text-ivory/50 font-light">{b.stars}</span>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-champagne"
                      >
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                      </svg>
                      <div className="h-px flex-1 bg-ivory/15">
                        <div
                          className="h-full bg-champagne transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-6 text-right text-xs text-ivory/40">
                        {b.count}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#book"
                className="mt-8 flex w-full items-center justify-center gap-2 border border-champagne/70 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne transition hover:bg-champagne hover:text-ink"
              >
                Reserve a chair
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <ReviewForm />
            </div>
          </aside>

          <ul className="space-y-px lg:col-span-8">
            {REVIEWS.map((r) => (
              <li
                key={r.name}
                className="border border-ivory/10 bg-ink-soft p-8 transition hover:border-champagne/40"
              >
                <div className="flex items-start gap-5">
                  <Avatar name={r.name} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-display text-lg font-light text-ivory">{r.name}</p>
                      <Stars rating={r.rating} size={12} />
                    </div>
                    <p className="mt-3 break-words font-light italic text-ivory/70">
                      &ldquo;{r.body}&rdquo;
                    </p>
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
          className={i <= rating ? "text-champagne" : "text-ivory/15"}
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
    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-champagne/40 bg-ink font-display text-base font-light text-champagne-light">
      {initials}
    </div>
  );
}
