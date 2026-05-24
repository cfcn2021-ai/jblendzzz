import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ivory/10 bg-ink py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 overflow-hidden rounded-full ring-1 ring-champagne/60">
            <img
              src="/gallery/profile.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-display text-base font-light uppercase tracking-[0.22em] text-ivory">
            {SITE.name}
          </span>
        </div>
        <p className="text-xs uppercase tracking-[0.24em] text-ivory/45">
          © {year} {SITE.name} — Mobile barbering, by appointment
        </p>
        <div className="flex items-center gap-5">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-ivory/45 transition hover:text-champagne"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1s-1.2-.4-2.3-1.4c-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.4A10 10 0 1012 2z" />
            </svg>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="text-ivory/45 transition hover:text-champagne"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            aria-label="Call"
            className="text-ivory/45 transition hover:text-champagne"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 5a2 2 0 012-2h2.3a1 1 0 011 .7l1.3 3.4a1 1 0 01-.3 1.1L8 9.5a13 13 0 006.5 6.5l1.3-1.3a1 1 0 011.1-.3l3.4 1.3a1 1 0 01.7 1V19a2 2 0 01-2 2A16 16 0 013 5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
