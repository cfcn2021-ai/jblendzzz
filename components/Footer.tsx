import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brown/15 bg-cream-light py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 overflow-hidden rounded-full border border-brown/30">
            <img
              src="/gallery/profile.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-display text-lg tracking-wide text-brown">
            {SITE.name}
          </span>
        </div>
        <p className="text-sm text-brown/60">
          © {year} {SITE.name}. Sharp cuts, delivered.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-brown/50 transition hover:text-brown"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1s-1.2-.4-2.3-1.4c-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.4A10 10 0 1012 2z" />
            </svg>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="text-brown/50 transition hover:text-brown"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            aria-label="Call"
            className="text-brown/50 transition hover:text-brown"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 5a2 2 0 012-2h2.3a1 1 0 011 .7l1.3 3.4a1 1 0 01-.3 1.1L8 9.5a13 13 0 006.5 6.5l1.3-1.3a1 1 0 011.1-.3l3.4 1.3a1 1 0 01.7 1V19a2 2 0 01-2 2A16 16 0 013 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
