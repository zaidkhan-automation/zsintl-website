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

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const currentSlide = heroSlides[heroIndex];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-900 bg-gradient-to-r from-sky-700/95 via-sky-600/95 to-sky-800/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-300 text-sm font-bold text-slate-900 shadow">
              LB
            </div>
            <span className="text-sm font-semibold tracking-wide text-slate-100">
              LeatherBrand
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-100">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-sky-300 px-5 py-2 text-sm font-semibold text-slate-900 shadow-md hover:bg-sky-200"
          >
            Get quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative w-full overflow-hidden">
        <div className="relative w-full h-[420px] sm:h-[520px] md:h-[640px]">
          <Image
            key={currentSlide.src}
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

          <div className="mx-auto max-w-6xl px-4">
            <div className="absolute top-6 left-6 right-6 max-w-3xl md:top-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white drop-shadow-lg">
                Leather manufacturing for buyers who care about{" "}
                <span className="text-sky-300">export quality</span>.
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-xl drop-shadow">
                Clear sections, real product photos, and a contact flow that
                makes it easy for international buyers to evaluate you in
                minutes instead of weeks.
              </p>
            </div>

            <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between text-xs text-slate-200">
              <p className="max-w-md">{currentSlide.caption}</p>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setHeroIndex(i)}
                    className={`h-3 w-3 rounded-full transition ${
                      i === heroIndex
                        ? "bg-sky-300"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      <section id="infrastructure" className="border-b border-slate-900 bg-slate-950 py-12">
        <div className="mx-auto max-w-6xl flex flex-col gap-10 px-4">

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
                finishing and hardware quality.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-3 text-sm text-slate-300">
              <h2 className="text-xl font-semibold text-slate-50">Infrastructure buyers can trust</h2>
              <p>Talk about your cutting, stitching and finishing lines.</p>
            </div>
            <div className="relative h-56 flex-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <Image src="/leather belt 2.jpg" alt="Production area" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="relative h-56 flex-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <Image src="/leather jacket.webp" alt="Jacket" fill className="object-cover" />
            </div>
            <div className="flex-1 space-y-3 text-sm text-slate-300">
              <h2 className="text-xl font-semibold text-slate-50">Jacket lines built for export quality</h2>
            </div>
          </div>

        </div>
      </section>

      {/* VIDEO */}
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

      {/* MINI PRODUCTS */}
      <section id="products" className="border-b border-slate-900 bg-slate-950 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-semibold text-slate-50">Highlight products</h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/40">
              <Image src="/Mens-Western-Belt-with-Embossed-Detailing-and-Ornate-Buckle-Smart-Casual-and-Evening.webp" alt="belt" width={600} height={400} className="h-56 w-full object-cover" />
              <div className="p-4 text-xs text-slate-300 space-y-1">
                <h3 className="text-sm font-semibold text-slate-50">Western embossed belt</h3>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/40">
              <Image src="/leather belt.jpg" alt="belt" width={600} height={400} className="h-56 w-full object-cover" />
              <div className="p-4 text-xs text-slate-300 space-y-1">
                <h3 className="text-sm font-semibold text-slate-50">Classic everyday belt</h3>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/40">
              <Image src="/leather jacket.webp" alt="jacket" width={600} height={400} className="h-56 w-full object-cover" />
              <div className="p-4 text-xs text-slate-300 space-y-1">
                <h3 className="text-sm font-semibold text-slate-50">Shearling jacket line</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION — FULL BLUE BORDERS */}
      <section id="contact" className="border-b border-sky-500 bg-sky-900 py-14">
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          <h2 className="text-2xl font-semibold text-slate-50">ENQUIRY</h2>

          {/* FORM */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Email" />
            <input className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Company name" />
            <input className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Quantity required" />
            <input className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Country of establishment" />
            <input className="md:col-span-2 rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Phone number" />
          </div>

          {/* GRID ROW */}
          <div className="grid grid-cols-1 gap-8 border-t border-sky-500 pt-8 md:grid-cols-3">

            {/* PANELS */}
            <div className="space-y-4 text-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-50">Panels / shortcuts</h3>
              <button className="w-full rounded-lg border border-sky-500 bg-slate-900 px-4 py-3 text-left text-slate-200">
                Certificates
              </button>
              <button className="w-full rounded-lg border border-sky-500 bg-slate-900 px-4 py-3 text-left text-slate-200">
                Contact info
              </button>
            </div>

            {/* BUTTON */}
            <div className="flex items-center justify-center">
              <button className="w-full rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 md:w-auto">
                Get quote
              </button>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-xl border border-sky-500 bg-slate-900">
              <iframe title="Kanpur map" src="https://www.google.com/maps?q=Kanpur&output=embed" loading="lazy" className="h-56 w-full" />
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-sky-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LeatherBrand · Export-focused leather manufacturing.
      </footer>
    </main>
  );
}
