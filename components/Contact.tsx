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
    <section id="contact" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-brown/60 uppercase">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-5xl font-normal tracking-tight text-brown sm:text-6xl">
            Contact
          </h2>
          <p className="mt-4 text-brown/70">
            Questions, custom requests, or group bookings — reach out any time.
          </p>
        </div>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => {
            const inner = (
              <>
                <div className="mb-4 text-brown">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    {it.icon}
                  </svg>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-brown/50">
                  {it.label}
                </p>
                <p className="mt-1 font-medium text-brown">{it.value}</p>
                {it.sub && (
                  <p className="text-sm text-brown/50">{it.sub}</p>
                )}
              </>
            );
            return (
              <li
                key={it.label}
                className="border-t border-brown/15 pt-6"
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
