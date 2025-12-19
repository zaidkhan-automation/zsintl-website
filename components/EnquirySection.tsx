"use client";

import { useState } from "react";

export default function EnquirySection({ source = "global" }) {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    quantity: "",
    company: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const submit = async () => {
    // basic validation
    if (!form.email || !form.phone) {
      alert("Email and phone are required");
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({
        email: "",
        phone: "",
        quantity: "",
        company: "",
        country: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-b border-sky-500 bg-sky-900 py-14">
      <div className="mx-auto max-w-6xl space-y-10 px-4">
        <h2 className="text-2xl font-semibold text-slate-50">ENQUIRY</h2>

        {/* inputs */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Email *"
          />
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Company name"
          />
          <input
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Quantity required"
          />
          <input
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Country of establishment"
          />
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="md:col-span-2 rounded-lg border border-sky-500 bg-slate-900 p-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Phone number *"
          />
        </div>

        {/* bottom grid */}
        <div className="grid grid-cols-1 gap-8 border-t border-sky-500 pt-8 md:grid-cols-3">
          <div className="space-y-4 text-sm">
            <h3 className="mb-2 font-semibold text-slate-50">
              Panels / shortcuts
            </h3>
            <button className="w-full rounded-lg border border-sky-500 bg-slate-900 px-4 py-3 text-left text-slate-200">
              Certificates
            </button>
            <button className="w-full rounded-lg border border-sky-500 bg-slate-900 px-4 py-3 text-left text-slate-200">
              Contact info
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <button
              onClick={submit}
              disabled={loading}
              className="w-full rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 disabled:opacity-60 md:w-auto"
            >
              {loading ? "Sending..." : "Get quote"}
            </button>

            {status === "success" && (
              <p className="text-xs text-green-400">
                Enquiry sent. We’ll contact you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400">
                Something went wrong. Try again.
              </p>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-sky-500 bg-slate-900">
            <iframe
              title="Kanpur map"
              src="https://www.google.com/maps?q=Kanpur&output=embed"
              loading="lazy"
              className="h-56 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
