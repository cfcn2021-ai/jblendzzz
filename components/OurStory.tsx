export default function OurStory() {
  return (
    <section id="story" className="bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-7">
            <p className="flex items-center text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
              <span className="gilt-rule" />
              The craft
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl">
              A clean cut shouldn&apos;t cost you
              <br />
              <em className="not-italic text-champagne-light">an afternoon.</em>
            </h2>
            <div className="mt-10 space-y-6 text-lg font-light leading-relaxed text-ivory/75">
              <p>
                Jblendzzz started simply. People kept asking where I cut hair,
                and the honest answer was: wherever you needed me to be. So I
                packed a kit, learned the routes, and made the shop come to you
                instead.
              </p>
              <p>
                Every appointment receives the same attention as the very first
                — sharp lines, a clean fade, time to get it right. No queue, no
                rush, no compromise on the finish.
              </p>
              <p className="border-l border-champagne pl-6 font-display text-2xl font-light italic leading-snug text-ivory">
                &ldquo;Bring the chair. Bring the craft. Leave the line
                behind.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 border border-champagne/30" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-raised">
                <img
                  src="/gallery/cut5-cleancut.webp"
                  alt="Jblendzzz craft"
                  loading="lazy"
                  className="h-full w-full object-cover opacity-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
