"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    src: "/hero-panel.webp",
    alt: "Hero leather panel",
    caption: "Export-grade leather belts and jackets",
  },
  {
    src: "/leather-winter.webp",
    alt: "Winter leather jacket",
    caption: "Winter-ready collections with consistent quality",
  },
  {
    src: "/suede-vintage.webp",
    alt: "Vintage suede jacket",
    caption: "Suede and vintage lines for premium buyers",
  },
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);

  // Simple auto-rotating hero slider
  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const currentSlide = heroSlides[heroIndex];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ───────────────── NAVBAR ───────────────── */}
      <header className="sticky top-0 z-30 border-b border-slate-900 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-slate-950">
              LB
            </div>
            <span className="text-sm font-semibold tracking-wide">
              LeatherBrand
            </span>
          </div>

          {/* Primary navigation – matches sketch labels */}
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#hero" className="hover:text-white">
              About us
            </a>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <a href="#infrastructure" className="hover:text-white">
              Infrastructure
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          {/* Get quote button on right */}
          <a
            href="#contact"
            className="rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/30 hover:bg-sky-400 md:text-sm"
          >
            Get quote
          </a>
        </div>
      </header>

      {/* ───────────────── HERO: PHOTO TRANSITION + HEADING ───────────────── */}
      <section
        id="hero"
        className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-12 pt-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
          {/* Big transitioning hero photo – 3–4 photos, auto-rotating */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/60">
            <div className="relative h-64 w-full sm:h-80 md:h-[380px]">
              <Image
                key={currentSlide.src}
                src={currentSlide.src}
                alt={currentSlide.alt}
                fill
                priority
                className="object-cover transition-opacity duration-700 ease-out"
              />
            </div>

            {/* Soft gradient overlay bottom for caption */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

            {/* Caption and slide dots */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-4 pt-6 text-xs sm:text-sm">
              <p className="max-w-md text-slate-200">{currentSlide.caption}</p>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setHeroIndex(i)}
                    className={`h-2 w-2 rounded-full transition ${
                      i === heroIndex
                        ? "bg-sky-400"
                        : "bg-slate-500 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Heading row from sketch */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Leather manufacturing for buyers who care about{" "}
              <span className="text-sky-400">export quality</span>.
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              Clear sections, real product photos, and a contact flow that makes
              it easy for international buyers to evaluate you in minutes
              instead of weeks.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── CONTENT BLOCKS (PHOTO + TEXT, ALTERNATING) ───────────────── */}
      <section
        id="infrastructure"
        className="border-b border-slate-900 bg-slate-950 py-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
          {/* Block 1 – Photo left, text right */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="relative h-56 flex-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <Image
                src="/Mens-Western-Belt-with-Embossed-Detailing-and-Ornate-Buckle-Smart-Casual-and-Evening.webp"
                alt="Embossed belt close-up"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-3 text-sm text-slate-300">
              <h2 className="text-xl font-semibold text-slate-50">
                Clean embossing & consistent finishing
              </h2>
              <p>
                Use this section to show macro shots of belts, stitching, edge
                finishing and hardware quality. Buyers want to see that every
                piece in a shipment looks like the sample.
              </p>
              <p>
                Mention leather grade, embossing technology and your typical
                tolerance levels per batch.
              </p>
            </div>
          </div>

          {/* Block 2 – Text left, photo right */}
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-3 text-sm text-slate-300">
              <h2 className="text-xl font-semibold text-slate-50">
                Infrastructure buyers can trust
              </h2>
              <p>
                Talk about your cutting, stitching and finishing lines. How many
                pieces per month, what kind of machines, and how you manage
                quality control at each stage.
              </p>
              <p>
                Keep the tone factual and number-driven. Serious buyers are
                looking for predictable output, not marketing fluff.
              </p>
            </div>
            <div className="relative h-56 flex-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <Image
                src="/leather belt 2.jpg"
                alt="Production area with belts"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Block 3 – Photo left, text right */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="relative h-56 flex-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <Image
                src="/leather jacket.webp"
                alt="Leather jacket on mannequin"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-3 text-sm text-slate-300">
              <h2 className="text-xl font-semibold text-slate-50">
                Jacket lines built for export quality
              </h2>
              <p>
                Use this block for jacket-specific details: pattern consistency,
                grading across sizes and lining choices. Back this up with
                numbers on monthly capacity and defect rates.
              </p>
              <p>
                The goal is to let a buyer imagine placing their first trial
                order without needing a long email thread.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── VIDEO STRIP ───────────────── */}
      <section className="border-b border-slate-900 bg-slate-950 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-xl font-semibold text-slate-50">Video</h2>
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="flex h-60 items-center justify-center text-sm text-slate-400">
              Factory / process video placeholder
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── MINI PRODUCTS STRIP ───────────────── */}
      <section
        id="products"
        className="border-b border-slate-900 bg-slate-950 py-12"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-semibold text-slate-50">
            Highlight products
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/40">
              <Image
                src="/Mens-Western-Belt-with-Embossed-Detailing-and-Ornate-Buckle-Smart-Casual-and-Evening.webp"
                alt="Western embossed belt"
                width={600}
                height={400}
                className="h-56 w-full object-cover"
              />
              <div className="space-y-1 p-4 text-xs text-slate-300">
                <h3 className="text-sm font-semibold text-slate-50">
                  Western embossed belt
                </h3>
                <p>Embossed detail, ornate buckle, export-ready finishing.</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/40">
              <Image
                src="/leather belt.jpg"
                alt="Classic leather belt"
                width={600}
                height={400}
                className="h-56 w-full object-cover"
              />
              <div className="space-y-1 p-4 text-xs text-slate-300">
                <h3 className="text-sm font-semibold text-slate-50">
                  Classic everyday belt
                </h3>
                <p>Clean edges, stable dyes and nickel-safe hardware.</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/40">
              <Image
                src="/leather jacket.webp"
                alt="Shearling leather jacket"
                width={600}
                height={400}
                className="h-56 w-full object-cover"
              />
              <div className="space-y-1 p-4 text-xs text-slate-300">
                <h3 className="text-sm font-semibold text-slate-50">
                  Shearling jacket line
                </h3>
                <p>
                  Winter-weight hides, consistent sizing and export packaging
                  ready.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ───────────────── CONTACT + SHORTCUT PANELS + MAP ───────────────── */}
      <section
        id="contact"
        className="border-b border-slate-900 bg-slate-950 py-14"
      >
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          <h2 className="text-2xl font-semibold text-slate-50">Contact us</h2>

          {/* Form rows */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              className="rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Email"
            />
            <input
              className="rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Company name"
            />
            <input
              className="rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Quantity required"
            />
            <input
              className="rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Country of establishment"
            />
            <input
              className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Phone number"
            />
          </div>

          {/* Bottom row: shortcuts / get quote / map */}
          <div className="grid grid-cols-1 gap-8 border-t border-slate-800 pt-8 md:grid-cols-3">
            {/* Panels / shortcuts */}
            <div className="space-y-4 text-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-50">
                Panels / shortcuts
              </h3>
              <button className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-left text-slate-200 hover:border-sky-500">
                Certificates
              </button>
              <button className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-left text-slate-200 hover:border-sky-500">
                Contact info
              </button>
            </div>

            {/* Center: main Get quote button */}
            <div className="flex items-center justify-center">
              <button className="w-full rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 md:w-auto">
                Get quote
              </button>
            </div>

            {/* Right: Kanpur map embed */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <iframe
                title="Kanpur map"
                src="https://www.google.com/maps?q=Kanpur&output=embed"
                loading="lazy"
                className="h-56 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="bg-slate-950 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LeatherBrand · Export-focused leather
        manufacturing.
      </footer>
    </main>
  );
}
