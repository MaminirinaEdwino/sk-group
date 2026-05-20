"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

// 1. Définition des Valeurs du Groupe
const values = [
  {
    title: "Innovation Responsable",
    description:
      "Placer les nouvelles technologies et les solutions durables au service direct du développement humain et de la transformation locale.",
    icon: (
      <svg
        className="w-8 h-8 text-teal-600"
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
        className="w-8 h-8 text-rose-600"
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
        className="w-8 h-8 text-blue-600"
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

// 2. Chronologie Évolutive
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutContent() {
  return (
    <main className="w-full bg-white pt-28">
      {/* SECTION 1 : En-tête de la Page (Hero Minimal) */}
      <section className="relative py-28 bg-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Decorative background */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <FadeIn>
            <span className="text-xs font-black tracking-[0.2em] text-teal-600 uppercase bg-teal-50 px-4 py-1.5 rounded-full">
              Qui sommes-nous ?
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              À Propos de <span className="text-teal-600">SK Group</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="h-1.5 w-24 bg-teal-600 mx-auto rounded-full" />
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 font-normal max-w-3xl mx-auto pt-4 leading-relaxed">
              L&apos;histoire d&apos;un engagement profond devenu un écosystème
              d&apos;innovation et de transformation sociale à Madagascar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 : Mission & Objectifs */}
      <section className="py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            {/* Colonne Gauche : Notre Mission */}
            <div className="lg:col-span-6 space-y-8">
              <FadeIn>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl">
                    Notre Mission & Vision
                  </h2>
                  <div className="h-1.5 w-16 bg-teal-600 rounded-full" />
                </div>
              </FadeIn>

              <div className="text-slate-600 font-normal leading-relaxed space-y-6 pt-2 text-lg">
                <FadeIn delay={0.1}>
                  <p>
                    Le constat fondateur de SK Group repose sur une réalité
                    indéniable à Madagascar : un taux de chômage élevé, un
                    faible accès au marché du travail et un manque flagrant de
                    perspectives professionnelles pour une jeunesse pourtant
                    motivée et compétente.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="font-bold text-slate-900 border-l-4 border-teal-500 pl-6 py-2 bg-slate-50 rounded-r-2xl">
                    Nous croyons fermement qu&apos;un emploi stable est le
                    levier le plus puissant pour assurer l&apos;autonomie
                    financière des jeunes et transformer durablement les
                    familles.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p>
                    C’est pourquoi notre modèle dépasse le cadre de l’entreprise
                    classique ou de la simple structure caritative. En liant
                    filières marchandes d&apos;excellence et actions
                    humanitaires directes, nous créons un cercle vertueux
                    d&apos;autonomisation.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Colonne Droite : Objectifs Stratégiques */}
            <div className="lg:col-span-6">
              <FadeIn delay={0.4}>
                <div className="bg-white border border-slate-100 p-10 sm:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] space-y-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -mr-16 -mt-16" />

                  <h3 className="relative text-2xl font-black text-slate-900 tracking-tight">
                    Nos Objectifs Majeurs
                  </h3>

                  <div className="relative space-y-8">
                    {[
                      {
                        num: "1",
                        title: "Insertion Professionnelle",
                        text: "Briser les barrières à l'embauche en formant et recrutant activement la jeunesse locale dans des secteurs d'avenir.",
                      },
                      {
                        num: "2",
                        title: "Soutien Économique Local",
                        text: "Valoriser durablement le savoir-faire et les ressources naturelles malgaches par le biais de l'agro-business et du numérique.",
                      },
                      {
                        num: "3",
                        title: "Pérennisation de l'Impact",
                        text: "Assurer le financement autonome et continu des actions de la Fondation SK grâce aux revenus des pôles d'activités.",
                      },
                    ].map((obj, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white text-sm font-black shadow-lg shadow-teal-600/20 group-hover:scale-110 transition-transform">
                          {obj.num}
                        </span>
                        <div className="space-y-1">
                          <h4 className="font-black text-slate-900 text-lg">
                            {obj.title}
                          </h4>
                          <p className="text-base text-slate-500 font-normal leading-relaxed">
                            {obj.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : Historique & Genèse */}
      <section className="py-32 bg-slate-50 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <FadeIn>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl">
                Notre Parcours Évolutif
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-500 font-normal max-w-xl mx-auto">
                De l&apos;action humanitaire d&apos;urgence à la construction
                d&apos;un groupe diversifié intégré.
              </p>
            </FadeIn>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 space-y-6"
              >
                <div className="inline-block text-[10px] font-black px-4 py-1.5 bg-teal-600 text-white rounded-full uppercase tracking-widest shadow-lg shadow-teal-600/20">
                  {event.year}
                </div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-teal-600 transition-colors">
                  {event.title}
                </h4>
                <p className="text-base text-slate-500 font-normal leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 : Nos Valeurs */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-24">
            <FadeIn>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl">
                Les Valeurs qui nous Animent
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-500 font-normal max-w-xl mx-auto">
                Les principes non négociables ancrés au cœur de chacune de nos
                filières.
              </p>
            </FadeIn>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {values.map((val, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center group space-y-6 flex flex-col items-center"
              >
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-slate-800 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {val.title}
                </h3>
                <p className="text-base text-slate-500 font-normal leading-relaxed max-w-sm">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 : Call To Action */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-teal-600/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <FadeIn>
            <h2 className="text-4xl font-black sm:text-5xl text-white tracking-tight">
              Participez à la construction de cet avenir durable
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-400 font-normal text-xl max-w-2xl mx-auto leading-relaxed">
              Que vous soyez une entreprise cherchant un partenaire technique à
              Madagascar, une organisation internationale ou un porteur de
              projet,
              <span className="text-white font-bold"> collaborons</span>.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="pt-4">
              <Link
                href="/#contact"
                className="inline-flex rounded-full bg-teal-600 px-12 py-5 text-lg font-black text-white shadow-[0_10px_30px_rgba(13,148,136,0.3)] hover:bg-teal-500 hover:shadow-[0_15px_40px_rgba(13,148,136,0.4)] transition-all duration-300 active:scale-95"
              >
                Nous contacter
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
