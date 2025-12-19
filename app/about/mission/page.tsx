// app/about/mission/page.tsx
import Image from "next/image";
import Link from "next/link";

const heroSrc = "/leather.jpeg";
const logoImage = "/leather.jpeg";
const missionVideo = "/company logo.mp4";

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* FULL-BLEED HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[360px] sm:h-[420px] md:h-[520px]">
          <Image src={heroSrc} alt="Mission hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/60" />

          <div className="absolute inset-0 mx-auto max-w-6xl px-6">
            <div className="absolute left-6 right-6 top-8 md:top-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">
                About us
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                Mission and milestone
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-200">
                Our mission: deliver consistent, export-ready leather products
                that meet buyer specifications and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIG PHOTO BAND */}
      <section className="border-t border-slate-800 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-800">
            <Image src={heroSrc} alt="Production floor" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Left */}
          <div className="space-y-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
              <Image src={logoImage} alt="Company logo" fill className="object-cover" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="aspect-video">
                <video src={missionVideo} controls className="h-full w-full object-cover" />
              </div>
              <div className="px-4 py-3 text-xs text-slate-300">
                Factory & QC overview (video)
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-2 space-y-4 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-white">Our mission</h2>
            <p>
              To be a dependable partner for international buyers by combining
              skilled workmanship with documented quality controls.
            </p>

            <h3 className="mt-4 text-sm font-semibold text-slate-200">
              How we achieve it
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-2 pl-4 text-sm">
              <li>Standardised dye recipes and templates</li>
              <li>Batch-level QC checkpoints</li>
              <li>Export-grade packing & documentation</li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-block rounded bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200"
              >
                Request a sample
              </Link>
              <Link
                href="/products"
                className="inline-block rounded border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-sky-300"
              >
                View products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h3 className="mb-6 text-lg font-semibold text-white">Milestones</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["2020", "Founding", "Started export trials"],
            ["2022", "QC scale", "Documented QC checkpoints"],
            ["2023", "Bulk shipping", "First large orders"],
            ["2024", "Process improvements", "Automated tracking"],
          ].map(([year, title, desc]) => (
            <div
              key={year}
              className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300"
            >
              <div className="text-xs font-semibold text-sky-300">{year}</div>
              <div className="mt-2 font-medium text-white">{title}</div>
              <p className="mt-1 text-[13px]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES + CTA */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-300">
            <h4 className="text-base font-semibold text-white">Capabilities</h4>
            <p>
              Pattern grading, hardware selection and export packaging handled
              end-to-end.
            </p>
            <ul className="list-inside list-disc pl-4 text-sm">
              <li>Custom grading</li>
              <li>Nickel-safe hardware</li>
              <li>Pre-shipment inspection</li>
            </ul>
          </div>

          <aside className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 text-sm text-slate-300">
            <div className="font-semibold text-white">Need detailed specs?</div>
            <p className="mt-2">
              Download technical sheets or request reports.
            </p>
            <Link
              href="/specs.pdf"
              className="mt-4 inline-block rounded bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200"
            >
              Download specs
            </Link>
          </aside>
        </div>
      </section>

      {/* ❌ ENQUIRY REMOVED – rendered globally in layout.tsx */}

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Export manufacturing.
      </footer>
    </main>
  );
}
