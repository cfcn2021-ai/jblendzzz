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
    <header className="sticky top-0 z-40 border-b border-brown/10 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-9 w-9 overflow-hidden rounded-full border border-brown/30 transition group-hover:border-brown">
            <img
              src="/gallery/profile.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-display text-xl tracking-wide text-brown">
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-brown/70 transition hover:text-brown"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#book"
              className="rounded-sm bg-brown px-5 py-2.5 text-sm font-medium tracking-wide text-cream transition hover:bg-brown-light"
            >
              Book
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-sm border border-brown/15 md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-brown transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-brown transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-brown transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-brown/10 bg-cream md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-brown hover:text-brown-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-brown px-5 py-3 text-center text-sm font-medium text-cream"
              >
                Book
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
