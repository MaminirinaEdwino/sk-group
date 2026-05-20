import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Grille principale du Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Colonne 1 : À propos / Branding */}
          <div className="space-y-4">
            <Link href="/" className="inline-block transition hover:opacity-90">
              <Image
                src="/images/logo.webp" // À prévoir en version blanche/claire si possible
                alt="Sk Socialkey Madagascar Group Logo"
                width={150}
                height={45}
                className="h-9 w-auto object-contain " // Filtre CSS rapide pour blanchir le logo si nécessaire
              />
            </Link>
            <p className="text-sm font-light text-slate-400 leading-relaxed max-w-xs">
              Un groupe diversifié au service de l’innovation, de l'excellence économique et du développement durable à Madagascar.
            </p>
            {/* Réseau Social - Facebook d'origine */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/profile.php/?id=100083995821271" // Lien Facebook extrait de vos métadonnées JSON-LD
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full text-slate-300 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                aria-label="Suivez-nous sur Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="#groupe" className="hover:text-white transition-colors">Le Groupe</Link>
              </li>
              <li>
                <Link href="#rse" className="hover:text-white transition-colors">Engagements RSE</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">Nous Contacter</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Domaines d'Impact RSE */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Impact & Initiatives
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Fondation SK : Éducation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>SK Association : Insertion</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Développement Écologique</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Actions Humanitaires</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Mentions légales / Contextuelles */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Notre Vision
            </h3>
            <p className="text-xs leading-relaxed font-light text-slate-400">
              « Combiner progrès technologique et responsabilité sociale pour bâtir un avenir solidaire et performant à Madagascar ».
            </p>
          </div>

        </div>

        {/* Section Copyright et Mentions Légales de bas de page */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <div>
            &copy; {currentYear} Sk Socialkey Madagascar Group. Tous droits réservés.
          </div>
          <div className="flex space-x-6">
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">Mentions légales</Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">Gestion des cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}