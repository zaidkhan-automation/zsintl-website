"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  label: string;
  href?: string;
  description?: string;
};

const aboutMenu: MenuItem[] = [
  { label: "Overview", href: "#about" },
  { label: "Our Vision & Mission" },
  { label: "History & Evolution" },
  { label: "Chairman’s Desk" },
  { label: "Leadership Team" },
  { label: "Research & Development" },
];

const productsMenu: MenuItem[] = [
  { label: "Invoice Extractor", href: "#products" },
  { label: "Excel Cleaner" },
  { label: "PDF Sync Engine" },
  { label: "Contract Summarizer" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<null | "about" | "products">(null);

  const handleOpen = (menu: "about" | "products") => {
    setOpenMenu(menu);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="#top" className="text-xl font-bold tracking-tight">
          YourBrand
        </Link>

        {/* NAV ITEMS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="#top" className="hover:text-slate-900">
            Home
          </Link>

          {/* ABOUT US DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleOpen("about")}
            onMouseLeave={handleClose}
          >
            <button className="hover:text-slate-900 flex items-center gap-1">
              About Us
              <span className="text-xs">▾</span>
            </button>

            <Dropdown open={openMenu === "about"} items={aboutMenu} />
          </div>

          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleOpen("products")}
            onMouseLeave={handleClose}
          >
            <button className="hover:text-slate-900 flex items-center gap-1">
              Products
              <span className="text-xs">▾</span>
            </button>

            <Dropdown open={openMenu === "products"} items={productsMenu} />
          </div>

          <Link href="#contact" className="hover:text-slate-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Dropdown({ open, items }: { open: boolean; items: MenuItem[] }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18 }}
          className="absolute left-0 top-full mt-2 w-56 rounded-lg border bg-white shadow-lg overflow-hidden"
        >
          <ul className="py-2 text-sm text-slate-700">
            {items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="block px-4 py-2 hover:bg-slate-100 cursor-default">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
