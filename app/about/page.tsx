export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050814]">
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">About us</h1>
        <p className="text-gray-300 text-sm md:text-base">
          Yahan tum apni company ka clean, professional introduction likhoge:
          kab se leather business me ho, kaun se markets serve karte ho, annual
          capacity, core strengths, etc. Text is intentionally generic so you
          can replace it with real data.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="text-xl font-semibold mb-1">10+ years</div>
            <p className="text-gray-300 text-xs">
              Experience in leather manufacturing & exports.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="text-xl font-semibold mb-1">Global clients</div>
            <p className="text-gray-300 text-xs">
              Space to list your key regions / partners.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="text-xl font-semibold mb-1">Quality first</div>
            <p className="text-gray-300 text-xs">
              Talk about your QC process and standards.
            </p>
          </div>
        </div>

        <section className="space-y-3 text-sm text-gray-300">
          <h2 className="text-xl font-semibold text-white">
            Vision & manufacturing philosophy
          </h2>
          <p>
            Yeh section buyers ko batata hai ki tum sirf sasta product nahi
            bana rahe, long-term brand relationships ke liye kaam kar rahe ho.
          </p>
        </section>
      </section>
    </main>
  );
}
