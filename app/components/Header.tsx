import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  // Liste des liens de navigation extraite de vos besoins d'architecture
  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Le Groupe", href: "#groupe" },
    { label: "Engagements RSE", href: "#rse" },
    { label: "Fondation SK", href: "/fondation-sk" },
    { label: "Contact", href: "#contact" },
    { label: "A propos", href: "/a-propos" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:opacity-90"
        >
          <Image
            src="/images/logo.webp" // À placer dans public/images/
            alt="Sk Socialkey Madagascar Group"
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
            priority // Indique à Next.js de précharger l'image immédiatement (Optimisation LCP / Core Web Vitals)
          />
        </Link>

        {/* Menu de Navigation de bureau (Masqué sur Mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bouton d'action principal de bureau */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition"
          >
            Nous rejoindre
          </Link>
        </div>

        {/* Menu Mobile (Composant Client interactif) */}
        <div className="flex md:hidden">
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
