"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900 bg-gradient-to-r from-sky-700/95 via-sky-600/95 to-sky-800/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-300 text-sm font-bold text-slate-900 shadow">
            LB
          </div>
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-slate-100"
          >
            LeatherBrand
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-100">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/products" className="hover:text-white">
            Products
          </Link>

          {/* ABOUT DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpenAbout((s) => !s)}
              className="flex items-center gap-1 hover:text-white"
            >
              About
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {openAbout && (
              <div
                onMouseLeave={() => setOpenAbout(false)}
                className="absolute left-0 mt-2 w-48 rounded-md border border-slate-700 bg-slate-900/95 shadow-xl"
              >
                <Link
                  href="/about/introduction"
                  className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
                >
                  Introduction
                </Link>

                <Link
                  href="/about/mission"
                  className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
                >
                  Our Mission
                </Link>

                <Link
                  href="/about/vision"
                  className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
                >
                  Vision
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="rounded-full bg-sky-300 px-5 py-2 text-sm font-semibold text-slate-900 shadow-md hover:bg-sky-200"
        >
          Get quote
        </a>
      </div>
    </header>
  );
}
