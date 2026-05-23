import { SITE } from "@/lib/site";

const ITEMS = [
  {
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phoneRaw}`,
    icon: (
      <path d="M3 5a2 2 0 012-2h2.3a1 1 0 011 .7l1.3 3.4a1 1 0 01-.3 1.1L8 9.5a13 13 0 006.5 6.5l1.3-1.3a1 1 0 011.1-.3l3.4 1.3a1 1 0 01.7 1V19a2 2 0 01-2 2A16 16 0 013 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Service area",
    value: SITE.address,
    href: null,
    icon: (
      <>
        <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  {
    label: "Hours",
    value: SITE.hours,
    sub: SITE.closedNote,
    href: null,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-gold uppercase">
            Get in touch
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-white sm:text-6xl">
            Contact
          </h2>
          <p className="mt-4 text-zinc-400">
            Questions, custom requests, or group bookings — reach out any time.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => {
            const inner = (
              <>
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-gold">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {it.icon}
                  </svg>
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {it.label}
                </p>
                <p className="mt-1 font-medium text-white">{it.value}</p>
                {it.sub && (
                  <p className="text-sm text-zinc-500">{it.sub}</p>
                )}
              </>
            );
            return (
              <li
                key={it.label}
                className="rounded-2xl border border-zinc-900 bg-black/40 p-6 transition hover:border-zinc-800"
              >
                {it.href ? (
                  <a href={it.href} className="block">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
