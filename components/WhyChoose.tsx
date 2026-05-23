const POINTS = [
  {
    title: "I come to you",
    body: "No traffic, no waiting room. I bring sanitized tools, a chair, and a clean setup to your home.",
    icon: (
      <path d="M3 12l9-9 9 9M5 10v10h14V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Sharp, modern cuts",
    body: "Fades, tapers, designs, and classics. Bring a reference or trust the chair — either way, you leave looking sharp.",
    icon: (
      <>
        <path d="M6 4l4 6m8-6l-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  {
    title: "Book online in 30 seconds",
    body: "Pick a service, pick a time, done. No back-and-forth messaging, no guessing schedules.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 9h18M8 3v4m8-4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Honest, fair pricing",
    body: "What you see is what you pay. Travel fees are transparent — no surprise charges at the door.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v10m-3-7h6m-6 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="relative bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-widest text-gold uppercase">
              Why book Jblendzzz
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-tight text-white sm:text-6xl">
              Barbering, the way it should be.
            </h2>
            <p className="mt-5 text-lg text-zinc-400">
              You shouldn't have to wait in line, fight traffic, or argue with a
              schedule just to look fresh. I built Jblendzzz so a great cut
              comes to you — wherever &ldquo;you&rdquo; is.
            </p>
          </div>

          <ul className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 transition hover:border-zinc-800"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-gold">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {p.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
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
