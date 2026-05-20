import React from "react";
import Link from "next/link";

// 1. Définition des Valeurs du Groupe issues du HTML d'origine
const values = [
  {
    title: "Innovation Responsable",
    description:
      "Placer les nouvelles technologies et les solutions durables au service direct du développement humain et de la transformation locale.",
    icon: (
      <svg
        className="w-6 h-6 text-teal-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Impact & Solidarité",
    description:
      "Garantir qu'une part majeure de la valeur créée par nos filières marchandes finance directement l'accès à l'éducation et l'aide humanitaire.",
    icon: (
      <svg
        className="w-6 h-6 text-rose-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    title: "Excellence & Intégrité",
    description:
      "Maintenir des standards rigoureux de qualité dans nos pôles d'activité tout en respectant un commerce équitable et transparent.",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110.5 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0110.5 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
];

// 2. Chronologie Évolutive extraite textuellement du code d'origine
const timelineEvents = [
  {
    year: "2017",
    title: "Fondation SK : L'Élan Humanitaire",
    description:
      "Premières missions sur le terrain axées sur le soutien d'urgence, l'accès à l'éducation, la santé des communautés les plus vulnérables et l'initiation de projets écologiques de base.",
  },
  {
    year: "2019",
    title: "SK Association : Vers la Durabilité",
    description:
      "Prise de conscience que l'aide ponctuelle ne suffit pas. Structuration d'une entité dédiée au développement durable pour identifier les freins socio-économiques majeurs de la jeunesse.",
  },
  {
    year: "En cours",
    title: "SK Social Key Madagascar Group",
    description:
      "Création du groupe d'entreprises sociales. Consolidation de filières technologiques, graphiques et agricoles pour transformer l'emploi stable en véritable moteur d'autonomie financière.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white pt-28">
      {/* SECTION 1 : En-tête de la Page (Hero Minimal) */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
            Qui sommes-nous ?
          </span>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            À Propos de SK Group
          </h1>
          <div className="h-1 w-16 bg-teal-600 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto pt-2">
            L&apos;histoire d&apos;un engagement profond devenu un écosystème
            d&apos;innovation et de transformation sociale à Madagascar.
          </p>
        </div>
      </section>

      {/* SECTION 2 : Mission & Objectifs (Contenu sémantique pur) */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Gauche : Notre Mission */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
                Notre Mission & Vision
              </h2>
              <div className="h-0.5 w-10 bg-teal-600 rounded-full" />
              <div className="text-slate-600 font-light leading-relaxed space-y-4 pt-2 text-base sm:text-lg">
                <p>
                  Le constat fondateur de SK Group repose sur une réalité
                  indéniable à Madagascar : un taux de chômage élevé, un faible
                  accès au marché du travail et un manque flagrant de
                  perspectives professionnelles pour une jeunesse pourtant
                  motivée et compétente.
                </p>
                <p className="font-medium text-slate-800">
                  Nous croyons fermement quapos;un emploi stable est le levier
                  le plus puissant pour assurer lapos;autonomie financière des
                  jeunes et transformer durablement les familles.
                </p>
                <p>
                  C’est pourquoi notre modèle dépasse le cadre de l’entreprise
                  classique ou de la simple structure caritative. En liant
                  filières marchandes dapos;excellence et actions humanitaires
                  directes, nous créons un cercle vertueux dapos;autonomisation.
                </p>
              </div>
            </div>

            {/* Colonne Droite : Objectifs Stratégiques */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Nos Objectifs Majeurs
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 text-xs font-bold mt-0.5">
                    1
                  </span>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    <strong className="font-semibold text-slate-900">
                      Insertion Professionnelle :
                    </strong>{" "}
                    Briser les barrières à lapos;embauche en formant et
                    recrutant activement la jeunesse locale dans des secteurs
                    dapos;avenir.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 text-xs font-bold mt-0.5">
                    2
                  </span>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    <strong className="font-semibold text-slate-900">
                      Soutien Économique Local :
                    </strong>{" "}
                    Valoriser durablement le savoir-faire et les ressources
                    naturelles malgaches par le biais de lapos;agro-business et
                    du numérique.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 text-xs font-bold mt-0.5">
                    3
                  </span>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    <strong className="font-semibold text-slate-900">
                      Pérennisation de lapos;Impact :
                    </strong>{" "}
                    Assurer le financement autonome et continu des actions de la
                    Fondation SK grâce aux revenus des pôles dapos;activités.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : Historique & Genèse (Timeline Compacte) */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
              Notre Parcours Évolutif
            </h2>
            <p className="text-sm text-slate-500 font-light max-w-md mx-auto">
              De lapos;action humanitaire dapos;urgence à la construction
              dapos;un groupe diversifié intégré.
            </p>
          </div>

          {/* Composant Frise Chronologique vertical sur mobile, horizontal/grille sur large */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative space-y-3"
              >
                <span className="inline-block text-xs font-black px-3 py-1 bg-teal-50 text-teal-700 rounded-full">
                  {event.year}
                </span>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                  {event.title}
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 : Nos Valeurs Cardinaux */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
              Les Valeurs qui nous Animent
            </h2>
            <p className="text-sm text-slate-500 font-light max-w-md mx-auto">
              Les principes non négociables ancrés au cœur de chacune de nos
              filières.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <div
                key={index}
                className="text-center p-6 space-y-4 flex flex-col items-center"
              >
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-slate-800">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed max-w-sm">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 : Call To Action Institutionnel */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Participez à la construction de cet avenir durable
          </h2>
          <p className="text-slate-400 font-light text-sm max-w-xl mx-auto leading-relaxed">
            Que vous soyez une entreprise cherchant un partenaire technique à
            Madagascar, une organisation internationale ou un porteur de projet,
            collaborons.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-teal-500 transition duration-150"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
