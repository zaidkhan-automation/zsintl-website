// app/about/introduction/page.tsx
import Image from "next/image";
import Link from "next/link";

const heroSrc = "/tool.jpeg";
const videoPoster = "/brownleather.mp4";

export default function IntroductionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* FULL-BLEED HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[420px] sm:h-[520px] md:h-[640px]">
          <Image
            src={heroSrc}
            alt="About — hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

          <div className="absolute inset-0 mx-auto max-w-6xl px-6">
            <div className="absolute left-6 right-6 top-8 md:top-14">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
                About us
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                Introducing ZS International —{" "}
                <span className="text-sky-300">export-grade leather</span> and
                reliable supply.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-200">
                We build production lines that deliver consistent finishing,
                tested materials and predictable packaging — so buyers import
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW / QUICK FACTS */}
      <section className="bg-slate-900/60 border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl text-slate-200">
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <p className="mt-3 text-sm text-slate-300">
                Established to serve export buyers, we combine traditional
                finishing craft with modern QC processes. Monthly capacity,
                grading accuracy and packaging guidelines are available on
                request.
              </p>
            </div>

            <div className="grid w-full gap-3 sm:w-auto sm:grid-cols-3 md:gap-4">
              <div className="rounded-lg bg-slate-900/40 px-4 py-3 text-xs text-slate-200">
                <div className="font-semibold text-white">Monthly output</div>
                <div className="mt-1 text-slate-300">10k+ pairs / month</div>
              </div>
              <div className="rounded-lg bg-slate-900/40 px-4 py-3 text-xs text-slate-200">
                <div className="font-semibold text-white">QC tolerance</div>
                <div className="mt-1 text-slate-300">&lt; 1.5% defects</div>
              </div>
              <div className="rounded-lg bg-slate-900/40 px-4 py-3 text-xs text-slate-200">
                <div className="font-semibold text-white">Export ready</div>
                <div className="mt-1 text-slate-300">Packing, barcodes, docs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-4 text-2xl font-semibold text-white">Our story</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-300">
            <p>
              Started as a small tannery team with a focus on hand finishing,
              we gradually introduced mechanised processes without losing
              control over trimming and quality.
            </p>

            <p>
              We work with vetted hide suppliers, standardised dye recipes and a
              documented inspection flow so sample-to-bulk changes are minimal.
            </p>

            <Link
              href="/products"
              className="inline-block rounded-full bg-sky-300 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200"
            >
              View products
            </Link>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-lg bg-slate-900/40 p-4">
              <div className="text-xs font-semibold text-sky-300">2020</div>
              <div className="mt-1 text-sm">Founded — small export trials</div>
            </div>
            <div className="rounded-lg bg-slate-900/40 p-4">
              <div className="text-xs font-semibold text-sky-300">2022</div>
              <div className="mt-1 text-sm">Scaled QC line & packing</div>
            </div>
            <div className="rounded-lg bg-slate-900/40 p-4">
              <div className="text-xs font-semibold text-sky-300">2024</div>
              <div className="mt-1 text-sm">First bulk orders shipped</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO STRIP */}
      <section className="border-t border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h3 className="mb-6 text-lg font-semibold text-white">
            Factory video
          </h3>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="aspect-video bg-black">
              <video
                src={videoPoster}
                controls
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-4 text-xl font-semibold text-white">
          Details & capabilities
        </h3>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="col-span-2 space-y-4 text-sm text-slate-300">
            <p>
              We maintain batch-level traceability, inspect each carton before
              dispatch and run third-party testing on request.
            </p>

            <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-300">
              <li>Custom orders: sized grading templates and run cards</li>
              <li>Packaging: export cartons with internal poly and barcodes</li>
              <li>Testing: abrasion, slip, dye stability and seam strength</li>
            </ul>
          </div>

          <aside className="rounded-lg border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
            <div className="font-semibold text-white">Need a sample?</div>
            <div className="mt-2 text-sm">
              Request a sample pack and lead time estimate.
            </div>
            <Link
              href="#contact"
              className="mt-4 inline-block rounded bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200"
            >
              Request quote
            </Link>
          </aside>
        </div>
      </section>

      {/* ❌ ENQUIRY REMOVED – now rendered globally from layout.tsx */}

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Export-focused
        manufacturing.
      </footer>
    </main>
  );
}
