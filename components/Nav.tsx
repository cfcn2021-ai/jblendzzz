"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#story", label: "The Craft" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-champagne/60 transition group-hover:ring-champagne">
            <img
              src="/gallery/profile.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-display text-xl font-light tracking-[0.18em] text-ivory uppercase">
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/70 transition hover:text-ivory after:absolute after:-bottom-2 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-champagne after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#book"
              className="border border-champagne/80 px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-champagne transition hover:bg-champagne hover:text-ink"
            >
              Reserve
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border border-ivory/15 md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-ivory transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-ivory transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-ivory transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ivory/10 bg-ink md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-ivory/5">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm uppercase tracking-[0.22em] text-ivory/80 hover:text-champagne"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="block border border-champagne/80 px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.28em] text-champagne"
              >
                Reserve
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
