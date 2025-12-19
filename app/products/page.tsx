import Image from "next/image";

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
      <div className="mx-auto max-w-6xl px-4">
        {/* PAGE TITLE */}
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

        {/* HIGHLIGHTED MODELS */}
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
                  <Image src={model.image} alt={model.name} fill className="object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-slate-950">
                    {model.tag}
                  </div>
                </div>

                <div className="flex-1 p-4 text-xs text-slate-300 space-y-3">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {model.name}
                  </h3>
                  <p><b>Use:</b> {model.use}</p>
                  <p><b>Surface:</b> {model.surface}</p>
                  <p><b>Protection:</b> {model.protection}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FULL CATALOGUE */}
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
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60"
              >
                <div className="relative h-44 w-full">
                  <Image src={model.image} alt={model.name} fill className="object-cover" />
                </div>

                <div className="space-y-1 p-3 text-xs text-slate-300">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {model.name}
                  </h3>
                  <p><b>Surface:</b> {model.surface}</p>
                  <p><b>Best for:</b> {model.bestFor}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* ❌ ENQUIRY REMOVED – now rendered globally from layout.tsx */}

      <footer className="bg-sky-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Safety footwear range.
      </footer>
    </main>
  );
}
