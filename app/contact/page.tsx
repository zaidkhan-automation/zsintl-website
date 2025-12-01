export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050814]">
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Contact & enquiries
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          Yahan se buyers directly tumse quote maang sakte hain. Neeche ka form
          simple rakha hai, baad me backend se attach kar sakte ho.
        </p>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company"
              className="bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Country"
              className="bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <textarea
            placeholder="Tell us what products & quantities you are looking for."
            className="bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 w-full min-h-[120px]"
          />
          <button
            type="button"
            className="px-5 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-sm font-semibold"
          >
            Submit enquiry
          </button>
        </form>

        {/* Map placeholder */}
        <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-gray-300">
          Map / factory location embed placeholder. Baad me Google Maps iframe
          ya koi aur map yahan embed kar sakte ho.
        </div>
      </section>
    </main>
  );
}
