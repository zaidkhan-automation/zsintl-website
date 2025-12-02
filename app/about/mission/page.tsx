// app/about/mission/page.tsx
import Image from "next/image";
import Link from "next/link";

const heroSrc = "/about-hero.webp"; // replace if you have a dedicated image
const logoSrc = "/company-logo.png"; // replace with real logo

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* FULL-BLEED HERO / PANEL */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[360px] sm:h-[420px] md:h-[520px]">
          <Image src={heroSrc} alt="Mission hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/60" />

          <div className="absolute inset-0 mx-auto max-w-6xl px-6">
            <div className="absolute left-6 right-6 top-8 md:top-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">About us</p>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                Mission and milestone
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-200">
                Our mission: deliver consistent, export-ready leather products that meet buyer specifications and timelines. Below are the milestones that show we actually do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: left visual (logo / icon) + right content */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Visual / Logo */}
          <div className="flex items-start justify-center md:justify-start">
            <div className="relative h-36 w-36 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <Image src={logoSrc} alt="Company logo" fill className="object-contain p-6" />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-4 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-white">Our mission</h2>
            <p>
              To be a dependable partner for international buyers by combining skilled workmanship with documented quality controls. We reduce sample-to-bulk variation, maintain traceability and ensure timely delivery.
            </p>

            <h3 className="mt-4 text-sm font-semibold text-slate-200">How we achieve it</h3>
            <ul className="mt-2 list-inside list-disc space-y-2 pl-4 text-sm">
              <li>Standardised dye recipes and templates for repeatable color across batches.</li>
              <li>Batch-level QC checkpoints with recorded tolerances and per-carton inspection.</li>
              <li>Export-grade packing and documentation to pass customs and buyers' QA checks.</li>
            </ul>

            <div className="mt-4 flex gap-3">
              <Link href="/contact" className="inline-block rounded bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200">
                Request a sample
              </Link>
              <Link href="/products" className="inline-block rounded border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-sky-300">
                View products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES - horizontal cards */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h3 className="mb-6 text-lg font-semibold text-white">Milestones</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300">
            <div className="text-xs font-semibold text-sky-300">2020</div>
            <div className="mt-2 font-medium text-white">Founding</div>
            <p className="mt-1 text-[13px]">Started small export trials with high finishing standards.</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300">
            <div className="text-xs font-semibold text-sky-300">2022</div>
            <div className="mt-2 font-medium text-white">QC scale</div>
            <p className="mt-1 text-[13px]">Introduced documented QC checkpoints and packaging standards.</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300">
            <div className="text-xs font-semibold text-sky-300">2023</div>
            <div className="mt-2 font-medium text-white">Bulk shipping</div>
            <p className="mt-1 text-[13px]">First large bulk orders fulfilled for international buyers.</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300">
            <div className="text-xs font-semibold text-sky-300">2024</div>
            <div className="mt-2 font-medium text-white">Process improvements</div>
            <p className="mt-1 text-[13px]">Automated sample tracking and strengthened supplier QA.</p>
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS + LOGO / CTA at bottom (mimic sketch layout) */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-300">
            <h4 className="text-base font-semibold text-white">Capabilities</h4>
            <p>
              Pattern grading, lining choices, hardware selection and export packaging — we handle the checklist so buyers can order confidently.
            </p>

            <ul className="mt-2 list-inside list-disc pl-4 text-sm">
              <li>Custom grading across sizes</li>
              <li>Nickel-safe hardware options</li>
              <li>Pre-shipment inspection and reports</li>
            </ul>
          </div>

          <aside className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 text-sm text-slate-300">
            <div className="font-semibold text-white">Need detailed specs?</div>
            <p className="mt-2">Download technical sheet or request the sample & test report for specific SKUs.</p>
            <div className="mt-4">
              <Link href="/specs.pdf" className="inline-block rounded bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200">
                Download specs
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM BORDER (visual divider as in sketch) */}
      <div className="h-6 border-t border-slate-800 bg-slate-950" />

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Export manufacturing.
      </footer>
    </main>
  );
}
