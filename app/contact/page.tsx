// app/contact/page.tsx
import Image from "next/image";

const heroSrc = "/hero-panel.webp";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ───────── HERO / CONTACT INTRO ───────── */}
      <section className="relative w-full overflow-hidden border-b border-slate-800">
        <div className="relative h-[420px] sm:h-[520px] md:h-[640px]">
          <Image
            src={heroSrc}
            alt="Contact hero"
            fill
            priority
            className="object-cover"
          />

          {/* gradient overlay */}
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

      {/* ───────── CONTEXT / INFO STRIP (optional but useful) ───────── */}
      <section className="border-b border-slate-800 bg-slate-900/40 py-10">
        <div className="mx-auto max-w-6xl grid gap-6 px-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-300">
            <div className="text-xs font-semibold uppercase tracking-wide text-sky-300">
              Sales & sourcing
            </div>
            <p className="mt-2">
              For new enquiries, RFQs and pricing bands across SKUs and volumes.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-300">
            <div className="text-xs font-semibold uppercase tracking-wide text-sky-300">
              Logistics & documents
            </div>
            <p className="mt-2">
              For shipment timelines, packing standards, certifications and export
              documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ❌ ENQUIRY REMOVED – rendered globally from layout.tsx */}

      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZS International · Contact.
      </footer>
    </main>
  );
}
