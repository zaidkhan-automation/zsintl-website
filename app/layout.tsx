// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "LeatherBrand",
  description: "Export-ready leather manufacturing website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {/* Navbar (global) */}
        <Navbar />

        {/* page content */}
        <div className="app-live relative">
          {children}
        </div>

        {/* small accessibility helper (optional) */}
        <div className="fixed bottom-4 left-4 hidden md:block">
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
