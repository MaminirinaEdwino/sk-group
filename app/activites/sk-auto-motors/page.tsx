import React from "react";
import Link from "next/link";
import { Metadata } from "next";

// Métadonnées SEO basées fidèlement sur l'en-tête d'origine du site
export const metadata: Metadata = {
  title: "SK Auto Motors - Vente & Distribution Automobile Madagascar",
  description:
    "Importation, vente et distribution de véhicules, pièces de rechange et accessoires de qualité. Partenaire des constructeurs et des professionnels du transport à Madagascar.",
  alternates: {
    canonical:
      "https://sk-socialkey-madagascar-group.com/activites/sk-auto-motors/",
  },
  openGraph: {
    title: "SK Auto Motors - Solutions Équipements & Automobile",
    description:
      "Distribution de véhicules et de pièces détachées d'origine pour professionnels et particuliers à Madagascar.",
    url: "https://sk-socialkey-madagascar-group.com/activites/sk-auto-motors/",
    siteName: "Sk Socialkey Madagascar Group",
    locale: "fr_FR",
    type: "article",
  },
};

export default function SkAutoMotorsPage() {
  return (
    <main className="w-full bg-white pt-28">
      {/* 1. Fil d'Ariane & En-tête de la filière */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex space-x-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/#activities"
              className="hover:text-slate-900 transition-colors"
            >
              Activités
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">SK Auto Motors</span>
          </nav>

          <div className="space-y-3 pt-2">
            <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-50 border border-slate-950">
              Pôle Mobilité, Équipements &amp; Distribution
            </span>
            <h1 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
              SK Auto Motors
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl">
              Garantir l'accès à des équipements de mobilité fiables,
              performants et adaptés aux infrastructures à Madagascar.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contenu Principal Sémantique */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Gauche : Vision, Marchés et Canaux de Distribution */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="w-1 h-6 bg-slate-900 rounded-full" />
                  Notre Vision &amp; Positionnement Marché
                </h2>
                <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                  Le pôle <strong>SK Auto Motors</strong> est spécialisé dans
                  l’importation, la vente et la distribution de véhicules, de
                  pièces détachées et d’accessoires automobiles de haute
                  qualité.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Pour répondre avec rigueur aux exigences de durabilité sur le
                  territoire national, nous collaborons étroitement avec des{" "}
                  <strong>
                    concessionnaires et des constructeurs mondiaux
                  </strong>
                  . Cela nous permet de fournir des solutions adaptées aux
                  besoins stratégiques des{" "}
                  <strong>
                    compagnies de transport et des entreprises de logistique
                  </strong>
                  , tout en bénéficiant de l’accompagnement et des garanties des{" "}
                  <strong>
                    institutions financières et assurances locales
                  </strong>
                  .
                </p>
              </div>

              {/* Les 3 engagements clés de SK Auto Motors */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Nos domaines d'expertise :
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-white rounded-lg text-slate-900 shadow-sm shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.75 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.75 6H7.5m3 12h6.75m-13.5-3h16.5M21 12H3m18-3H3m18 6H3"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Distribution Certifiée
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Importation directe depuis des constructeurs
                        internationaux garantissant la traçabilité complète des
                        composants automobiles.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-white rounded-lg text-slate-900 shadow-sm shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83m0 0a2.93 2.93 0 1 1-4.14-4.14m4.14 4.14L5.14 21.14a2.93 2.93 0 0 1-4.14-4.14L6.86 11.14m5.42 4.03L15.17 11.42m-4.03 4.03-5.42-5.42M11.14 6.86 15.17 11.42"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Pièces d'Origine &amp; Longévité
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Fourniture de rechanges d'origine mécanique stricte pour
                        contrer l'usure prématurée liée aux contraintes
                        routières locales.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-white rounded-lg text-slate-900 shadow-sm shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v14.25M21 4.5v13.5m0-13.5V6a2.25 2.25 0 0 1-2.25 2.25H4.5M21 4.5H4.5m0 0A2.25 2.25 0 0 0 2.25 6.75V21M4.5 8.25V21m0-12.75H16.5m0 0V21m-12-8.25H12m0 0V21"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Synergie B2B Logistique
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Des offres flottes sur-mesure calibrées pour la chaîne
                        d’approvisionnement des professionnels du fret et des
                        transports.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonne Droite : Écosystème Partenaires */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                Alliances Stratégiques
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200/60 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Amont Écosystème
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    Constructeurs &amp; Concessionnaires
                  </p>
                  <p className="text-[11px] font-light text-slate-500 leading-relaxed">
                    Un accès direct aux réseaux d’approvisionnement officiels
                    internationaux pour des équipements certifiés.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/60 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sécurisation &amp; Appui
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    Banques &amp; Compagnies d'Assurances
                  </p>
                  <p className="text-[11px] font-light text-slate-500 leading-relaxed">
                    Des processus encadrés par les institutions financières
                    locales pour faciliter les acquisitions de flottes.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200/80">
                <Link
                  href="/#contact"
                  className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition duration-150"
                >
                  Prendre contact avec l'équipe Motors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bouton Retour au Hub d'accueil */}
      <section className="py-12 bg-slate-50 border-t border-slate-100 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#activities"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Retourner à l'ensemble des activités
          </Link>
        </div>
      </section>
    </main>
  );
}
