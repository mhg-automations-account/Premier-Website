"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#models", label: "Models" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_8px_30px_-16px_rgba(38,36,32,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/#top" className="flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt=""
            width={847}
            height={680}
            className="h-9 w-auto"
          />
          <span
            className={`font-display text-lg tracking-tight transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            Premier Midwest Homes
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-500 ${
                scrolled ? "text-ink/70 hover:text-maroon-600" : "text-cream/85 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className={`btn-pill transition-all duration-500 ${
              scrolled
                ? "border border-ink/80 bg-cream text-ink hover:bg-ink hover:text-cream"
                : "glass border-cream/40 text-cream hover:bg-cream hover:text-ink"
            }`}
          >
            Get A Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden ${
            scrolled ? "border-ink/15 text-ink" : "border-cream/40 text-cream"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-maroon-200/60 px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-[0.15em] text-ink/80 uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-pill mt-1 justify-center border border-ink/80 bg-cream text-ink"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
