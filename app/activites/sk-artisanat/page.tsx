import React from "react";
import Link from "next/link";
import { Metadata } from "next";

// Métadonnées SEO hautement qualifiées basées sur le contexte d'origine
export const metadata: Metadata = {
  title: "SK Artisanat - Art & Créations Traditionnelles Madagascar",
  description:
    "Valorisation de l'artisanat malgache, alliance entre authenticité culturelle et marchés internationaux (boutiques de luxe, galeries) par SK Group.",
  alternates: {
    canonical:
      "https://sk-socialkey-madagascar-group.com/activites/sk-artisanat/",
  },
  openGraph: {
    title: "SK Artisanat - Éco-conception & Art Traditionnel Malgache",
    description:
      "Une passerelle éthique entre le savoir-faire unique des artisans de Madagascar et les collectionneurs du monde entier.",
    url: "https://sk-socialkey-madagascar-group.com/activites/sk-artisanat/",
    siteName: "Sk Socialkey Madagascar Group",
    locale: "fr_FR",
    type: "article",
  },
};

export default function SkArtisanatPage() {
  return (
    <main className="w-full bg-white pt-28">
      {/* 1. Fil d'Ariane & En-tête de la filière */}
      <section className="py-16 bg-amber-50/40 border-b border-amber-100/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex space-x-2 text-xs font-medium text-amber-800/70">
            <Link href="/" className="hover:text-amber-950 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/#activities"
              className="hover:text-amber-950 transition-colors"
            >
              Activités
            </Link>
            <span>/</span>
            <span className="text-amber-950 font-semibold">SK Artisanat</span>
          </nav>

          <div className="space-y-3 pt-2">
            <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
              Pôle Culture, Art &amp; Valorisation Éthique
            </span>
            <h1 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
              SK Artisanat
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl">
              Faire rayonner l'authenticité et le savoir-faire unique de
              l'artisanat malgache à travers le monde.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contenu Principal Sémantique */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Gauche : Vision et Canaux de distribution */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="w-1 h-6 bg-amber-500 rounded-full" />
                  Notre Vision &amp; Canaux Partenaires
                </h2>
                <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                  Notre démarche repose sur une alliance subtile entre{" "}
                  <strong>l'authenticité culturelle</strong> des créations
                  locales et les exigences rigoureuses des marchés haut de
                  gamme.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Grâce à cette rigueur, nous établissons des connexions
                  directes avec des{" "}
                  <strong>
                    boutiques de luxe, des galeries d'art et des collectionneurs
                    internationaux
                  </strong>{" "}
                  passionnés, tout en profitant d'un précieux appui technique
                  fourni par les <strong>institutions de développement</strong>{" "}
                  pour structurer notre démarche d'éco-conception.
                </p>
              </div>

              {/* Les 3 piliers opérationnels du pôle Artisanat */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Notre méthodologie sur le terrain :
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80">
                    <div className="p-2 bg-white rounded-lg text-amber-600 shadow-sm shrink-0">
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
                          d="M11.48 3.499c-.151-.377-.618-.377-.77 0L8.435 7.544 4.09 8.13c-.419.056-.586.57-.285.871l3.147 3.067-.742 4.336c-.072.417.361.73.737.533L10.5 14.897l3.865 2.041c.376.197.809-.116.738-.533l-.742-4.336 3.147-3.067c.301-.3-.066-.815-.285-.871l-4.347-.587-1.928-4.045Z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Authenticité &amp; Rareté
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Préservation des techniques de tressage, de sculpture et
                        d'assemblage traditionnelles de la Grande Île.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80">
                    <div className="p-2 bg-white rounded-lg text-amber-600 shadow-sm shrink-0">
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
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.015 9.015 0 0 1 8.716 5.253M12 3a9.015 9.015 0 0 0-8.716 5.253M12 11.25c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1Z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Éco-conception &amp; Éthique
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Matériaux locaux, naturels, renouvelables et sourcés
                        dans le respect strict des chartes du commerce
                        équitable.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80">
                    <div className="p-2 bg-white rounded-lg text-amber-600 shadow-sm shrink-0">
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
                          d="M2.25 18.75a60.07 60.07 0 0 1 15.797-2.101c.727 0 1.434.036 2.132.107m2.25-1.365A3.75 3.75 0 1 1 18.75 18.75m0 0V16.5m0 3v2.25m-13.5-3h10.5"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Exigence Marché Premium
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Contrôle qualité rigoureux adapté aux cahiers des
                        charges des galeries et boutiques internationales.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonne Droite : Synthèse & Formulaire d'intérêt */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                Cibles &amp; Synergies Institutionnelles
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200/60 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Canal Distribution
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    Boutiques de luxe &amp; Galeries
                  </p>
                  <p className="text-[11px] font-light text-slate-500 leading-relaxed">
                    Mise en valeur de pièces d'exception pour une clientèle
                    internationale sélective.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/60 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Appui Institutionnel
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    Organisations de Développement
                  </p>
                  <p className="text-[11px] font-light text-slate-500 leading-relaxed">
                    Soutien aux processus écoresponsables et émancipation
                    économique des artisans d'art locaux.
                  </p>
                </div>
              </div>

              {/* Call to action contextuel */}
              <div className="pt-4 border-t border-slate-200/80">
                <Link
                  href="/#contact"
                  className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition duration-150"
                >
                  Demander un catalogue / Collaborer
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
