import Image from "next/image";
import Link from "next/link";
import hero from "@/public/leathermake.jpeg";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[420px] sm:h-[520px] md:h-[640px] w-full">
          <Image
            src={hero}
            alt="Vision hero — leather manufacturing"
            fill
            priority
            className="object-cover"
          />

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
                transparent delivery.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href="#contact"
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
            <h3 className="text-sm font-semibold text-white">
              Transparent supply chain
            </h3>
            <p className="mt-1 text-[13px] text-slate-300">
              Material traceability from hide to carton.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-sm font-semibold text-white">
              Measurement-driven QA
            </h3>
            <p className="mt-1 text-[13px] text-slate-300">
              Numeric tolerances & recorded sample images.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-sm font-semibold text-white">
              Predictable lead times
            </h3>
            <p className="mt-1 text-[13px] text-slate-300">
              Documented, forecastable production cadence.
            </p>
          </article>
        </div>
      </section>

      {/* KPIs */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-8">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm text-slate-300">On-time shipments</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4.8/5</div>
            <div className="text-sm text-slate-300">Buyer rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold">0.6%</div>
            <div className="text-sm text-slate-300">Reported defects</div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-6 text-lg font-semibold text-white">
          Roadmap — next 18 months
        </h3>

        <ol className="border-l border-slate-800 pl-6 space-y-8">
          <li>
            <div className="text-sm font-semibold">Traceability pilot</div>
            <div className="text-sm text-slate-300">
              QR tagging on selected SKUs.
            </div>
          </li>
          <li>
            <div className="text-sm font-semibold">QC automation</div>
            <div className="text-sm text-slate-300">
              Automated tolerance checks.
            </div>
          </li>
          <li>
            <div className="text-sm font-semibold">Export-ready scale</div>
            <div className="text-sm text-slate-300">
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
            <Link
              href="#contact"
              className="rounded bg-sky-300 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200"
            >
              Request verification pack
            </Link>
            <Link
              href="/products"
              className="rounded border border-slate-700 px-5 py-2 text-sm text-slate-200 hover:border-sky-300"
            >
              Browse products
            </Link>
          </div>
        </div>
      </section>

      {/* ❌ ENQUIRY REMOVED – handled globally in layout.tsx */}

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Vision & roadmap.
      </footer>
    </main>
  );
}
