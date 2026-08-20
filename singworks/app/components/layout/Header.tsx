// components/home/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-neutral-950"
        >
          Graphic Lab LDN
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-neutral-700 transition-colors hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/quote"
          className="group hidden items-center gap-2 rounded-full bg-neutral-950 py-2.5 pl-5 pr-2.5 text-[13px] font-medium text-white transition-colors hover:bg-neutral-800 lg:flex"
        >
          Get a Quote
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-950" />
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-neutral-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="mt-6 flex w-fit items-center gap-2 rounded-full bg-neutral-950 py-2.5 pl-5 pr-2.5 text-[13px] font-medium text-white"
          >
            Get a Quote
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-300">
              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-950" />
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}