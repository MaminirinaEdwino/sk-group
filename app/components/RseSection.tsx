"use client"; // Requis pour utiliser Framer Motion et les déclencheurs au scroll

import React from 'react';
import { motion } from 'framer-motion';

const rseEngagements = [
  {
    title: "Éducation & Formation",
    description: "Offrir des formations adaptées aux besoins du marché pour armer les générations futures face aux défis professionnels.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.263 15.918a9 9 0 1 0 15.474 0M12 3v13.5M12 3L7.5 7.5M12 3l4.5 4.5M19.5 12h-15" />
      </svg>
    ),
    badge: "Fondation SK"
  },
  {
    title: "Entrepreneuriat & Insertion",
    description: "Encourager les jeunes à créer leurs propres opportunités et soutenir l’écosystème entrepreneurial local à Madagascar.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    badge: "SK Association"
  },
  {
    title: "Actions Sociales & Humanitaires",
    description: "Accompagner les communautés les plus en difficulté par des projets d'aide directe et de soutien logistique ou matériel.",
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    badge: "Engagement Social"
  },
  {
    title: "Écologie & Développement Durable",
    description: "Mettre en place des solutions de développement écologiques et responsables ancrées dans la préservation de l'environnement malgache.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925-3.547 5.993 5.993 0 0 0-4.431-1.2 3.96 3.96 0 0 0-3.072 2.472A3.75 3.75 0 0 0 3 12c0 .958.359 1.83 1.031 2.495A3.751 3.751 0 0 0 12 18Zm0 0v-4.5m0 4.5H4.5M12 13.5H4.5" />
      </svg>
    ),
    badge: "Impact Vert"
  }
];

// 1. Configuration de l'animation du conteneur parent (gère la cascade / le délai entre les enfants)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Délai de 0.15s entre l'apparition de chaque carte enfant
    },
  },
};

// 2. Configuration de l'animation individuelle de chaque carte
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 // Départ légèrement plus bas
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1] // Courbe d'atténuation fluide
    }
  },
};

export default function RseSection() {
  return (
    <section id="rse" className="w-full py-24 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de la section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            RSE & Impact Sociétal
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Nos Engagements pour Madagascar
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-2" />
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto pt-2">
            Allier innovation et responsabilité sociale pour transformer durablement et positivement le paysage économique et social de nos communautés.
          </p>
        </div>

        {/* 3. Le conteneur se transforme en motion.div pour orchestrer la cascade */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Déclenche l'animation dès que la grille entre dans l'écran
          viewport={{ once: true, margin: "-100px" }} // S'exécute une seule fois, 100px avant que l'élément soit entièrement visible
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {rseEngagements.map((item, index) => (
            // 4. Chaque carte devient un motion.div et hérite automatiquement des états parents
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative flex flex-col justify-between p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="inline-flex p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                  {item.icon}
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-medium text-slate-400 tracking-wider block">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                En savoir plus 
                <svg className="ml-1 w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bannière du bas */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Une démarche ancrée dans le développement local</h4>
              <p className="text-sm text-blue-200 font-light max-w-3xl">
                Chacun de nos projets privilégie l'écoute active des besoins de terrain, la collaboration avec les acteurs locaux, et le respect rigoureux des standards environnementaux.
              </p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 px-6 py-3 bg-white text-blue-900 font-semibold rounded-full text-sm hover:bg-blue-50 transition shadow-sm"
            >
              Devenir partenaire
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}