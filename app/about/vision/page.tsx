// app/about/vision/page.tsx
import Image from "next/image";
import Link from "next/link";

const hero = "/about-vision-hero.webp"; // change if your file name differs
const bgPattern = "/vision-pattern.svg"; // optional decorative pattern

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative w-full overflow-hidden border-b border-slate-800">
        <div className="relative h-[420px] sm:h-[520px] md:h-[640px]">
          <Image src={hero} alt="Vision hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

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
                <Link href="/contact" className="inline-flex items-center rounded bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200">
                  Talk to sourcing
                </Link>
                <Link href="/products" className="inline-flex items-center rounded border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-sky-300">
                  Explore SKUs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS: Unique industry-level ideas */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-xl font-semibold text-white">Vision pillars — what sets us apart</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-800/40">
                {/* SVG inline icon (supply chain) */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-sky-300">
                  <path d="M3 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Transparent supply chain</h3>
                <p className="mt-1 text-[13px] text-slate-300">
                  Material traceability from hide to carton. Buyers can verify origin, tannery, and processing stages.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-800/40">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-sky-300">
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Measurement-driven QA</h3>
                <p className="mt-1 text-[13px] text-slate-300">
                  Numeric tolerances, recorded test reports and per-batch sample images you can inspect remotely.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-800/40">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-sky-300">
                  <path d="M3 7h5l3 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 7V5a2 2 0 10-4 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Predictable lead times</h3>
                <p className="mt-1 text-[13px] text-slate-300">
                  We design processes so lead-times are forecastable — not “we’ll try our best” but documented cadence.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* KPI STRIP */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="mt-1 text-sm text-slate-300">On-time shipments (last 12 months)</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.8/5</div>
              <div className="mt-1 text-sm text-slate-300">Avg. buyer satisfaction score</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-white">0.6%</div>
              <div className="mt-1 text-sm text-slate-300">Reported defects (per million pcs)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP / TIMELINE */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-6 text-lg font-semibold text-white">Roadmap — next 18 months</h3>

        <ol className="relative ml-4 border-l border-slate-800 pl-6">
          <li className="mb-8">
            <div className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-sky-800/40 text-sky-300">
              1
            </div>
            <div className="text-sm font-semibold text-white">Traceability pilot</div>
            <div className="mt-1 text-sm text-slate-300">Implement QR-tagging on 3 SKUs, share tracking with two buyers for verification.</div>
          </li>

          <li className="mb-8">
            <div className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-sky-800/40 text-sky-300">
              2
            </div>
            <div className="text-sm font-semibold text-white">QC automation</div>
            <div className="mt-1 text-sm text-slate-300">Introduce batch-level photo records and automated tolerance checks to reduce manual re-checks.</div>
          </li>

          <li>
            <div className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-sky-800/40 text-sky-300">
              3
            </div>
            <div className="text-sm font-semibold text-white">Export-ready scale</div>
            <div className="mt-1 text-sm text-slate-300">Expand capacity and formalize pre-shipment audit process for consistent full-container loads.</div>
          </li>
        </ol>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
          <h4 className="text-lg font-semibold text-white">Want the metrics, not promises?</h4>
          <p className="mt-2 text-sm text-slate-300">Request our verification pack: QC reports, sample photos, and lead-time SLAs.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/contact" className="inline-block rounded bg-sky-300 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200">
              Request verification pack
            </Link>
            <Link href="/products" className="inline-block rounded border border-slate-700 px-5 py-2 text-sm text-slate-200 hover:border-sky-300">
              Browse products
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Vision & roadmap.
      </footer>
    </main>
  );
}
