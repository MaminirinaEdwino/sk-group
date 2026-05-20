import React from "react";
import Link from "next/link";
import { Metadata } from "next";

// Métadonnées SEO configurées pour le pôle juridique
export const metadata: Metadata = {
  title: "SK Cabinet Juridique - Conseil & Assistance Juridique Madagascar",
  description:
    "Accompagnement, conseil et assistance juridique sur-mesure pour entreprises, institutions, ONG, cabinets d'avocats et particuliers à Madagascar par SK Group.",
  alternates: {
    canonical:
      "https://sk-socialkey-madagascar-group.com/activites/sk-cabinet-juridique/",
  },
  openGraph: {
    title: "SK Cabinet Juridique - Conseil & Protection Juridique",
    description:
      "Un partenaire juridique de confiance pour sécuriser vos contrats, projets et structures à Madagascar.",
    url: "https://sk-socialkey-madagascar-group.com/activites/sk-cabinet-juridique/",
    siteName: "Sk Socialkey Madagascar Group",
    locale: "fr_FR",
    type: "article",
  },
};

export default function SkCabinetJuridiquePage() {
  return (
    <main className="w-full bg-white pt-28">
      {/* 1. Fil d'Ariane & En-tête de la filière */}
      <section className="py-16 bg-blue-50/50 border-b border-blue-100/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex space-x-2 text-xs font-medium text-blue-800/70">
            <Link href="/" className="hover:text-blue-950 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/#activities"
              className="hover:text-blue-950 transition-colors"
            >
              Activités
            </Link>
            <span>/</span>
            <span className="text-blue-950 font-semibold">
              SK Cabinet Juridique
            </span>
          </nav>

          <div className="space-y-3 pt-2">
            <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
              Pôle Conseil, Stratégie &amp; Cadre Légal
            </span>
            <h1 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
              SK Cabinet Juridique
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl">
              Sécuriser vos initiatives et garantir votre conformité face aux
              défis réglementaires à Madagascar.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contenu Principal Sémantique */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Gauche : Vision et Écosystème Cible */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full" />
                  Notre Approche &amp; Expertise Métier
                </h2>
                <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                  Le pôle <strong>SK Cabinet Juridique</strong> propose des
                  services complets de conseil, d’assistance et d’accompagnement
                  juridique adaptés aux réalités du tissu économique national et
                  international.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Afin de bâtir une sécurité juridique pérenne, notre structure
                  développe des solutions collaboratives avec les{" "}
                  <strong>cabinets d'avocats</strong>, tout en répondant
                  directement aux exigences réglementaires des{" "}
                  <strong>
                    entreprises, des institutions publiques, des ONG
                  </strong>{" "}
                  et en offrant un accompagnement de proximité aux{" "}
                  <strong>particuliers</strong>.
                </p>
              </div>

              {/* Les 3 axes fondamentaux du Cabinet Juridique */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Champs d'intervention stratégiques :
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm shrink-0">
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
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H9.75m0 18.75h-4.5A2.25 2.25 0 0 1 3 18.75V7.5A2.25 2.25 0 0 1 5.25 5.25h3.75m10.5 3.504v9.996a2.25 2.25 0 0 1-2.25 2.25h-10.5M9 15h6m-6-3h6m-6-3h4.5"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Conseil &amp; Conformité Corporate
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Garantir la sécurité juridique des contrats commerciaux,
                        des statuts d’entreprise et des opérations de
                        restructuration ou d’investissement.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm shrink-0">
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
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0 1 12 2.714Z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Assistance Institutionnelle &amp; ONG
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Sécuriser le déploiement légal des projets à fort impact
                        social en accord avec le cadre juridique territorial.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm shrink-0">
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
                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        Protection des Droits &amp; Particuliers
                      </h4>
                      <p className="text-xs font-light text-slate-600 leading-relaxed">
                        Une oreille attentive et experte pour guider et défendre
                        les intérêts civils, fonciers et patrimoniaux des
                        citoyens.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonne Droite : Partenaires & Hub de Synergie */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                Synergies &amp; Réseaux
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200/60 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    Réseau d'Experts
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    Cabinets d'Avocats Co-partenaires
                  </p>
                  <p className="text-[11px] font-light text-slate-500 leading-relaxed">
                    Une collaboration fluide permettant d’étendre le champ
                    d’action légal jusqu’aux procédures contentieuses et à la
                    représentation.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/60 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    Acteurs Institutionnels
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    Institutions Publiques &amp; ONG
                  </p>
                  <p className="text-[11px] font-light text-slate-500 leading-relaxed">
                    Interfaçage rigoureux pour garantir le respect strict des
                    conventions réglementaires locales.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200/80">
                <Link
                  href="/#contact"
                  className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition duration-150"
                >
                  Consulter un conseiller juridique
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
