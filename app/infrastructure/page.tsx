import Image from "next/image";

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-[#050814]">
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Infrastructure & capability
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-3xl">
          Ye page buyers ko tumhari factory, machinery, lines aur capacity ka
          clear snapshot deta hai.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src="/leather jacket.webp"
              alt="Production line"
              fill
              className="object-cover"
            />
          </div>
          <ul className="text-sm text-gray-200 space-y-2">
            <li>• Jacket lines: write number of lines / capacity</li>
            <li>• Belt lines: write daily / monthly output</li>
            <li>• In-house pattern & sampling facility</li>
            <li>• QA, packing and finishing sections</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="text-sm text-gray-200 space-y-2">
            <li>• Compliance: audits, fire safety, social audits</li>
            <li>• Storage & warehousing details</li>
            <li>• Power backup / uptime support</li>
          </ul>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src="/leather belt 2.jpg"
              alt="Belts storage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
