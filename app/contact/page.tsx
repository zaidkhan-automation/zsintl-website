// app/contact/page.tsx
import Image from "next/image";

const heroSrc = "/hero-panel.webp"; // edge-to-edge photo on top

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ───────── PANEL + EDGE-TO-EDGE PHOTO ("CONTACT") ───────── */}
      <section className="relative w-full overflow-hidden border-b border-slate-800">
        <div className="relative h-[420px] sm:h-[520px] md:h-[640px]">
          <Image
            src={heroSrc}
            alt="Contact hero"
            fill
            priority
            className="object-cover"
          />

          {/* gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

          {/* overlay text */}
          <div className="absolute inset-0 mx-auto flex max-w-6xl items-end px-6 pb-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                Contact
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Talk directly to{" "}
                <span className="text-sky-300">ZS International</span> about
                your next order.
              </h1>
              <p className="mt-4 max-w-xl text-sm text-slate-200">
                Share basic enquiry details and we’ll respond with lead times,
                pricing bands and the right SKUs to evaluate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── ENQUIRY FORM BLOCK (as per sketch) ───────── */}
      <section className="border-b border-sky-500 bg-sky-900 py-14">
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          <h2 className="text-2xl font-semibold text-slate-50">ENQUIRY</h2>

          {/* first row: NAME / PHONE / EMAIL */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <input
              className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Name"
            />
            <input
              className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Phone"
            />
            <input
              className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Email"
            />
          </div>

          {/* second row: SUBJECT / QUANTITY */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Subject (e.g. trial order, OEM, private label)"
            />
            <input
              className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Quantity (pairs / pcs / monthly volume)"
            />
          </div>

          {/* remarks */}
          <div>
            <textarea
              rows={5}
              className="w-full rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Remarks (target markets, product types, timelines, any specs)"
            />
          </div>

          {/* bottom row – colour-change style blocks from sketch */}
          <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
            <div className="rounded-xl border border-sky-500 bg-slate-900/60 p-4 text-sm text-slate-200 transition-colors hover:bg-sky-900/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                Sales & sourcing
              </div>
              <p className="mt-2 text-sm">
                For new enquiries, RFQs and price bands for different SKUs.
              </p>
            </div>
            <div className="rounded-xl border border-sky-500 bg-slate-900/60 p-4 text-sm text-slate-200 transition-colors hover:bg-sky-900/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                Logistics & documents
              </div>
              <p className="mt-2 text-sm">
                For shipment status, packing details, certifications and
                paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sky-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Contact.
      </footer>
    </main>
  );
}
