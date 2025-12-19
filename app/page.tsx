"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroSlides = [
  {
    src: "/shoe.webp",
    alt: "Premium leather shoe – studio shot",
    caption: "Export-ready leather footwear with consistent finishing",
  },
  {
    src: "/shoefire.webp",
    alt: "Heat-resistant industrial shoe",
    caption: "High-performance footwear engineered for demanding work zones",
  },
  {
    src: "/shoe3.jpg",
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
      {/* ───────────────── HERO ───────────────── */}
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
                    onClick={() => setHeroIndex(i)}
                    className={`h-3 w-3 rounded-full ${
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

      {/* ───────────────── CONTENT BLOCKS ───────────────── */}
      <section className="border-b border-slate-900 py-12">
        <div className="mx-auto max-w-6xl flex flex-col gap-10 px-4">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="relative h-56 flex-1 overflow-hidden rounded-2xl border border-slate-800">
              <Image src="/shoewhite.jpeg" alt="Embossed leather" fill className="object-cover" />
            </div>
            <div className="flex-1 space-y-3 text-sm text-slate-300">
              <h2 className="text-xl font-semibold text-slate-50">
                Clean embossing & consistent finishing
              </h2>
              <p>Macro shots of stitching, edges and hardware quality.</p>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-3 text-sm text-slate-300">
              <h2 className="text-xl font-semibold text-slate-50">
                Infrastructure buyers can trust
              </h2>
              <p>Cutting, stitching and finishing lines.</p>
            </div>
            <div className="relative h-56 flex-1 overflow-hidden rounded-2xl border border-slate-800">
              <Image src="/shoess.jpeg" alt="Production area" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── PRODUCTS ───────────────── */}
      <section className="border-b border-slate-900 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-semibold">Highlight products</h2>

          <div className="grid gap-8 sm:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 overflow-hidden">
              <Image src="/shoefire.webp" alt="product" width={600} height={400} className="h-56 w-full object-cover" />
              <div className="p-4 text-sm">Western embossed belt</div>
            </article>

            <article className="rounded-2xl border border-slate-800 overflow-hidden">
              <Image src="/tableshoe.jpg" alt="product" width={600} height={400} className="h-56 w-full object-cover" />
              <div className="p-4 text-sm">Classic everyday belt</div>
            </article>

            <article className="rounded-2xl border border-slate-800 overflow-hidden">
              <Image src="/rockshoe.png" alt="product" width={600} height={400} className="h-56 w-full object-cover" />
              <div className="p-4 text-sm">Shearling jacket line</div>
            </article>
          </div>
        </div>
      </section>

      {/* ❌ ENQUIRY SECTION REMOVED
          ✔ Now coming globally from layout.tsx */}

      <footer className="bg-sky-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LeatherBrand · Export-focused leather manufacturing.
      </footer>
    </main>
  );
}
