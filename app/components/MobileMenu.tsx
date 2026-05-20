"use client";

import { useState } from "react";
import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

export default function MobileMenu({ links }: { links: LinkItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? (
          // Icône Fermer (X)
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Icône Menu (Hamburger)
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Menu Déroulant Mobile */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-20 z-50 border-b border-slate-200 bg-white p-4 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)} // Ferme le menu au clic
                className="block rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center rounded-full bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-500"
              >
                Nous rejoindre
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}