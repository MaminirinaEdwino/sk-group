import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK Agribusiness - Production & Transformation Agricole Madagascar",
  description:
    "Valorisation du patrimoine agricole malgache, transformation locale à forte valeur ajoutée et circuits courts par SK Social Key Madagascar Group.",
  alternates: {
    canonical:
      "https://sk-socialkey-madagascar-group.com/activites/sk-agribusiness/",
  },
  openGraph: {
    title: "SK Agribusiness - Production & Transformation Agricole",
    description:
      "Valorisation durable du potentiel du terroir malgache pour les marchés locaux et internationaux.",
    url: "https://sk-socialkey-madagascar-group.com/activites/sk-agribusiness/",
    siteName: "Sk Socialkey Madagascar Group",
    locale: "fr_FR",
    type: "article",
  },
};

export default function SkAgribusinessPage() {
  return (
    <main className="w-full bg-white pt-28">
      {/* 1. Fil d'Ariane & En-tête de la filière */}
      <section className="py-16 bg-emerald-50/40 border-b border-emerald-100/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex space-x-2 text-xs font-medium text-emerald-700/70">
            <Link href="/" className="hover:text-emerald-900 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/#activities"
              className="hover:text-emerald-900 transition-colors"
            >
              Activités
            </Link>
            <span>/</span>
            <span className="text-emerald-900 font-semibold">
              SK Agribusiness
            </span>
          </nav>

          <div className="space-y-3 pt-2">
            <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Pôle Terre &amp; Terroir Durable
            </span>
            <h1 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
              SK Agribusiness
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl">
              Valoriser le patrimoine agricole malgache tout en préservant
              durablement nos écosystèmes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contenu Principal de l'Activité */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Gauche : Vision et Manifeste Opérationnel */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-500 rounded-full" />
                  Notre Vision &amp; Engagement
                </h2>
                <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                  Nous transformons le potentiel de notre terroir en produits à
                  forte valeur ajoutée en synergie avec les{" "}
                  <strong>industries agroalimentaires</strong>. Cette dynamique
                  nous permet de répondre avec précision aux exigences des{" "}
                  <strong>exportateurs et acheteurs internationaux</strong> en
                  quête d’authenticité, tout en bénéficiant de l’appui technique
                  des <strong>institutions de développement</strong> engagées
                  pour une agriculture durable.
                </p>
              </div>

              {/* Axes stratégiques d'intervention */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Champs d'action opérationnels :
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white mt-0.5 text-xs font-bold">
                      1
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Production Responsable
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Exploitation et récoltes respectueuses des cycles
                        naturels du sol malgache.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white mt-0.5 text-xs font-bold">
                      2
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Transformation Agroalimentaire
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Soutenir et collaborer avec les industries locales pour
                        maximiser la valeur ajoutée sur le territoire national.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white mt-0.5 text-xs font-bold">
                      3
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Ouverture Internationale
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Distribution qualifiée répondant aux exigences strictes
                        des acheteurs et exportateurs mondiaux.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonne Droite : Partenariats & Débouchés */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                Écosystème &amp; Synergies
              </h3>

              <div className="space-y-4">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200/60 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                    Partenaires techniques
                  </span>
                  <p className="text-xs font-medium text-slate-800">
                    Institutions de développement durable
                  </p>
                  <p className="text-[11px] font-light text-slate-500">
                    Garantissent l'alignement sur les standards écoresponsables
                    internationaux.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200/60 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                    Marchés cibles
                  </span>
                  <p className="text-xs font-medium text-slate-800">
                    Exportateurs &amp; Acheteurs globaux
                  </p>
                  <p className="text-[11px] font-light text-slate-500">
                    Demandeurs d’authenticité et de traçabilité éthique
                    rigoureuse.
                  </p>
                </div>
              </div>

              {/* Actions & Mises en relation */}
              <div className="pt-4 border-t border-slate-200/80">
                <Link
                  href="/#contact"
                  className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition duration-150"
                >
                  Contacter le pôle Agribusiness
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Call to Action - Retour au Hub */}
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
