export default function OurStory() {
  return (
    <section id="story" className="bg-cream-light py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.3em] text-brown/60 uppercase">
              The craft
            </p>
            <h2 className="mt-4 font-display text-5xl font-normal leading-[1.1] tracking-tight text-brown sm:text-6xl">
              A clean cut shouldn&apos;t cost you an afternoon.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-brown/80">
              <p>
                Jblendzzz started simple. People kept asking where I cut hair, and
                the truthful answer was: wherever you need me to be. So I packed a
                kit, learned the routes, and made the shop come to you instead.
              </p>
              <p>
                Every appointment gets the same attention as the first one I ever
                charged for — sharp lines, a clean fade, time to get it right. No
                queue, no rush, no compromise on the finish.
              </p>
              <p className="border-l-2 border-gold pl-5 font-display text-2xl italic leading-snug text-brown/90">
                &ldquo;Bring the chair. Bring the craft. Leave the line behind.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-brown/10 bg-paper">
              <img
                src="/gallery/cut5-cleancut.webp"
                alt="Jblendzzz craft"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
