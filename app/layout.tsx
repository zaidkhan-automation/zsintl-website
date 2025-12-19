// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import EnquirySection from "@/components/EnquirySection";

export const metadata = {
  title: "LeatherBrand",
  description: "Export-ready leather manufacturing website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {/* Global Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="app-live relative">
          {children}
        </div>

        {/* Global Enquiry (exact same UI as before) */}
        <div id="contact">
          <EnquirySection source="global" />
        </div>

        {/* Floating helper button */}
        <div className="fixed bottom-4 left-4 hidden md:block z-50">
          <a
            href="#contact"
            className="rounded-full bg-sky-300 px-3 py-2 text-sm font-semibold text-slate-900 shadow"
          >
            Get quote
          </a>
        </div>
      </body>
    </html>
  );
}
