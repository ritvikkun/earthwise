"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-emerald-700"
        >
          EarthWise
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.label}>
              <Link
                href={n.href}
                className="text-sm text-gray-700 transition hover:text-emerald-700"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/waitlist"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="block rounded-lg p-2 ring-1 ring-gray-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="h-0.5 w-5 bg-gray-800" />
          <div className="mt-1 h-0.5 w-5 bg-gray-800" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4">
            {nav.map((n) => (
              <li key={n.label}>
                <Link
                  href={n.href}
                  className="block rounded-lg px-2 py-2 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/waitlist"
                className="mt-1 block rounded-lg bg-emerald-600 px-3 py-2 text-center font-semibold text-white transition hover:bg-emerald-700"
                onClick={() => setOpen(false)}
              >
                Join Waitlist
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
