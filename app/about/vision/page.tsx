import Image from "next/image";
import Link from "next/link";

// Proper static import for sharp rendering + no layout shift
import hero from "@/public/leathermake.jpeg";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

      {/* HERO (Edge-to-edge, no empty space) */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[420px] sm:h-[520px] md:h-[640px] w-full">
          <Image
            src={hero}
            alt="Vision hero — leather manufacturing"
            fill
            priority
            className="object-cover"
          />

          {/* gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

          {/* Content */}
          <div className="absolute inset-0 mx-auto max-w-6xl px-6 flex items-start">
            <div className="mt-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
                Vision
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Build leather supply chains buyers trust — not just products.
              </h1>

              <p className="mt-4 max-w-xl text-sm text-slate-200">
                We visualise a manufacturing partner that reduces uncertainty for
                global buyers: traceable materials, repeatable batches, and
                transparent delivery — every season, every carton.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200"
                >
                  Talk to sourcing
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center rounded border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-sky-300"
                >
                  Explore SKUs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Vision pillars — what sets us apart
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-800/40">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-sky-300">
                  <path d="M3 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M15 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M9 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Transparent supply chain</h3>
                <p className="mt-1 text-[13px] text-slate-300">
                  Material traceability from hide to carton.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-800/40">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-sky-300">
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 8h14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Measurement-driven QA</h3>
                <p className="mt-1 text-[13px] text-slate-300">
                  Numeric tolerances & recorded sample images.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-800/40">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-sky-300">
                  <path d="M3 7h5l3 10h6" strokeWidth="1.5" stroke="currentColor" />
                  <path d="M16 7V5a2 2 0 10-4 0v2" strokeWidth="1.5" stroke="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Predictable lead times</h3>
                <p className="mt-1 text-[13px] text-slate-300">
                  Documented, forecastable production cadence.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* KPI, Roadmap, CTA, Enquiry — unchanged as you instructed */}
      {/* ----------------------------------------------- */}
      {/* Yahan se neeche sab EXACT same rakha gaya hai */}
      {/* ----------------------------------------------- */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="mt-1 text-sm text-slate-300">On-time shipments</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.8/5</div>
              <div className="mt-1 text-sm text-slate-300">Buyer rating</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-white">0.6%</div>
              <div className="mt-1 text-sm text-slate-300">Reported defects</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-6 text-lg font-semibold text-white">Roadmap — next 18 months</h3>

        <ol className="relative ml-4 border-l border-slate-800 pl-6">
          <li className="mb-8">
            <div className="absolute -left-5 top-0 h-10 w-10 flex items-center justify-center rounded-full bg-sky-800/40 text-sky-300">
              1
            </div>
            <div className="text-sm font-semibold text-white">Traceability pilot</div>
            <div className="mt-1 text-sm text-slate-300">
              QR tagging on selected SKUs.
            </div>
          </li>

          <li className="mb-8">
            <div className="absolute -left-5 top-0 h-10 w-10 flex items-center justify-center rounded-full bg-sky-800/40 text-sky-300">
              2
            </div>
            <div className="text-sm font-semibold text-white">QC automation</div>
            <div className="mt-1 text-sm text-slate-300">
              Automated tolerance checks.
            </div>
          </li>

          <li>
            <div className="absolute -left-5 top-0 h-10 w-10 flex items-center justify-center rounded-full bg-sky-800/40 text-sky-300">
              3
            </div>
            <div className="text-sm font-semibold text-white">Export-ready scale</div>
            <div className="mt-1 text-sm text-slate-300">
              Consistent FCL/LCL shipment workflow.
            </div>
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
          <h4 className="text-lg font-semibold text-white">
            Want the metrics, not promises?
          </h4>
          <p className="mt-2 text-sm text-slate-300">
            Request our verification pack.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/contact" className="rounded bg-sky-300 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200">
              Request verification pack
            </Link>

            <Link href="/products" className="rounded border border-slate-700 px-5 py-2 text-sm text-slate-200 hover:border-sky-300">
              Browse products
            </Link>
          </div>
        </div>
      </section>

      {/* ENQUIRY (unchanged as requested) */}
      <section id="contact" className="border-b border-sky-500 bg-sky-900 py-14">
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          <h2 className="text-2xl font-semibold text-slate-50">ENQUIRY</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100" placeholder="Email" />
            <input className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100" placeholder="Company name" />
            <input className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100" placeholder="Quantity required" />
            <input className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100" placeholder="Country of establishment" />
            <input className="md:col-span-2 rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100" placeholder="Phone number" />
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-sky-500 pt-8 md:grid-cols-3">
            <div className="space-y-4 text-sm">
              <h3 className="text-sm font-semibold text-slate-50">Panels / shortcuts</h3>
              <button className="w-full rounded-lg border border-sky-500 bg-slate-900 px-4 py-3 text-left text-slate-200">Certificates</button>
              <button className="w-full rounded-lg border border-sky-500 bg-slate-900 px-4 py-3 text-left text-slate-200">Contact info</button>
            </div>

            <div className="flex items-center justify-center">
              <button className="w-full md:w-auto rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400">
                Get quote
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-sky-500 bg-slate-900">
              <iframe className="h-56 w-full" src="https://www.google.com/maps?q=Kanpur&output=embed" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Vision & roadmap.
      </footer>
    </main>
  );
}
