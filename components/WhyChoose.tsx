const POINTS = [
  {
    title: "Brought to your door",
    body: "No traffic, no waiting room. A sanitised kit, a proper chair, and a clean setup arrive with me.",
    icon: (
      <path d="M3 12l9-9 9 9M5 10v10h14V10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Sharp, modern, classic",
    body: "Fades, tapers, designs, and traditional finishes. Bring a reference or trust the chair — you leave looking sharp.",
    icon: (
      <>
        <path d="M6 4l4 6m8-6l-4 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1" />
      </>
    ),
  },
  {
    title: "Reserve in thirty seconds",
    body: "Pick a service, pick a time, done. No back-and-forth, no guesswork around schedules.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1" />
        <path d="M3 9h18M8 3v4m8-4v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Honest, settled pricing",
    body: "What you see is what you pay. Travel is published — no surprise charges at the door.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
        <path d="M12 7v10m-3-7h6m-6 4h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-ink-soft py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="flex items-center text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
              <span className="gilt-rule" />
              The house
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl">
              Barbering,
              <br />
              <em className="not-italic text-champagne-light">as it should be.</em>
            </h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-ivory/70">
              You shouldn&apos;t have to queue, fight traffic, or argue with a
              schedule to look your best. Jblendzzz brings the chair, the craft,
              and the finish to wherever you happen to be.
            </p>
          </div>

          <ul className="lg:col-span-7 grid gap-10 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p.title} className="border-t border-ivory/15 pt-8">
                <div className="mb-5 text-champagne">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {p.icon}
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-light text-ivory">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ivory/65">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
