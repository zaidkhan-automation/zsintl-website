"use client";

import Image from "next/image";
import Link from "next/link";

const highlightedModels = [
  {
    id: "black-classic-wood",
    name: "Black Classic Safety",
    tag: "Best seller",
    image: "/products/black-classic-wood.webp",
    use: "Factory floors, warehouse, loading bays",
    surface: "Oil-prone concrete, metal grids, rough flooring",
    protection: "Steel toe, slip-resistant sole, ankle padding",
  },
  {
    id: "black-red-firetail",
    name: "LavaGuard Pro",
    tag: "Heat rated",
    image: "/products/black-red-firetail.webp",
    use: "High-heat zones, welding, furnaces",
    surface: "Hot metal, slag, abrasive floors",
    protection: "Heat-resistant sole, reinforced upper, secure grip",
  },
  {
    id: "tan-rose-backdrop",
    name: "StudioSafe Tan",
    tag: "Presentation ready",
    image: "/products/tan-rose-backdrop.jpg",
    use: "Client visits, plant walkthroughs, light-duty work",
    surface: "Indoor floors, tiles, polished concrete",
    protection: "Impact protection with all-day comfort",
  },
];

const allModels = [
  {
    name: "Black Classic Wood",
    image: "/products/black-classic-wood.webp",
    surface: "Standard industrial floors",
    bestFor: "General factory staff, supervisors",
  },
  {
    name: "Black Mountain Trail",
    image: "/products/black-mountain-trail.png",
    surface: "Uneven outdoor terrain, construction sites",
    bestFor: "Site engineers, outdoor teams",
  },
  {
    name: "SoftFabric Black Pair",
    image: "/products/black-pair-softfabric.jpg",
    surface: "Indoor & mixed-use areas",
    bestFor: "Support staff, warehouse teams",
  },
  {
    name: "Studio Black Pair",
    image: "/products/black-pair-studio.webp",
    surface: "Showroom, demo zones, light-duty work",
    bestFor: "Client-facing staff",
  },
  {
    name: "Brown FireTrail",
    image: "/products/brown-firetrail.jpg",
    surface: "High-friction production zones",
    bestFor: "Heavy-duty operators",
  },
  {
    name: "Forest Rock Brown",
    image: "/products/brown-forest-rock.jpg",
    surface: "Outdoor & semi-outdoor floors",
    bestFor: "Yard teams, inspection staff",
  },
  {
    name: "Grey Steel Blueback",
    image: "/products/grey-steel-blueback.jpg",
    surface: "Steel plants, fabrication units",
    bestFor: "Welders, fabrication teams",
  },
  {
    name: "Tan Rose Backdrop",
    image: "/products/tan-rose-backdrop.jpg",
    surface: "Indoor, showroom, light-duty zones",
    bestFor: "Management, visitors, audits",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-16 pt-8 text-slate-50">
      {/* NAVBAR – synced with homepage */}
      <header className="sticky top-0 z-30 border-b border-slate-900 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-slate-950">
              LB
            </div>
            <span className="text-sm font-semibold tracking-wide">
              LeatherBrand
            </span>
          </div>

          {/* Home / Products only */}
          <nav className="flex items-center gap-4 text-xs font-medium text-slate-300 sm:gap-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/30 hover:bg-sky-400 md:text-sm"
          >
            Get quote
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pt-6">
        {/* Page title */}
        <header className="mb-10 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Product range
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Safety footwear line for real industrial work.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            All models are designed for export buyers: consistent finishing,
            tested soles and repeatable quality across batches.
          </p>
        </header>

        {/* ───────── Highlighted models (big cards) ───────── */}
        <section className="mb-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold text-slate-50">
              Highlighted models
            </h2>
            <p className="text-xs text-slate-400">
              These three SKUs cover most factory, warehouse and high-heat
              scenarios.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlightedModels.map((model) => (
              <article
                key={model.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/50"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40">
                    {model.tag}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4 text-xs text-slate-300">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {model.name}
                    </h3>
                    <div className="grid grid-cols-3 gap-3 pt-3">
                      <div>
                        <p className="font-semibold text-slate-200">Use</p>
                        <p className="text-[11px] leading-snug">
                          {model.use}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-200">Surface</p>
                        <p className="text-[11px] leading-snug">
                          {model.surface}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-200">
                          Protection
                        </p>
                        <p className="text-[11px] leading-snug">
                          {model.protection}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 text-[11px] text-slate-400">
                    Rated for full-shift usage with export-grade finishing and
                    packaging.
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ───────── Full catalogue grid ───────── */}
        <section>
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold text-slate-50">
              Full model catalogue
            </h2>
            <p className="text-xs text-slate-400">
              Use this section to map SKUs to surfaces and job roles.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {allModels.map((model) => (
              <article
                key={model.name}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/40"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 p-3 text-xs text-slate-300">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {model.name}
                  </h3>
                  <p className="text-[11px]">
                    <span className="font-semibold text-slate-200">
                      Surface:&nbsp;
                    </span>
                    {model.surface}
                  </p>
                  <p className="text-[11px]">
                    <span className="font-semibold text-slate-200">
                      Best for:&nbsp;
                    </span>
                    {model.bestFor}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
