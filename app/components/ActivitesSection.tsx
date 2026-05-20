import React from 'react';

const activities = [
  {
    id: "digital-tech",
    title: "Innovation Digitale & Nouvelles Technologies",
    subtitle: "Filière Numérique",
    description: "Conception de plateformes applicatives et développement de solutions web et mobiles adaptées au marché. Nous transformons le potentiel de la jeunesse malgache en compétences techniques pointues pour accompagner la transition numérique des entreprises locales et internationales.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
    hoverBorder: "hover:border-blue-500/30 hover:shadow-blue-500/5"
  },
  {
    id: "agrobusiness",
    title: "Agro-business & Solutions Durables",
    subtitle: "Filière Éco-responsable",
    description: "Valorisation des ressources naturelles et du secteur agricole à Madagascar à travers des pratiques durables et respectueuses de l'environnement. Ce pôle crée des chaînes de valeur courtes pour assurer des revenus équitables aux producteurs tout en proposant des produits de qualité.",
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 0-10.5 3.818m10.5-3.818V21M6.75 7.364V21" />
      </svg>
    ),
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    hoverBorder: "hover:border-emerald-500/30 hover:shadow-emerald-500/5"
  },
  {
    id: "formation-conseil",
    title: "Centre de Formation Professionnelle & Conseil",
    subtitle: "Filière Compétences",
    description: "Services d'audit, de conseil stratégique pour les organisations et programmes de formations certifiantes sur-mesure. En synergie directe avec nos branches associatives, ce pôle prépare activement les talents aux exigences réelles des recruteurs pour briser le chômage.",
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.263 15.918a9 9 0 1 0 15.474 0M12 3v13.5M12 3L7.5 7.5M12 3l4.5 4.5M19.5 12h-15" />
      </svg>
    ),
    badgeColor: "bg-teal-50 text-teal-700 border-teal-100",
    hoverBorder: "hover:border-teal-500/30 hover:shadow-teal-500/5"
  }
];

export default function ActivitiesSection() {
  return (
    <section id="activites" className="w-full py-20 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de la section */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 uppercase tracking-wider">
            Secteurs d'Activité
          </div>
          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Nos Domaines d'Expertise
          </h2>
          <div className="h-1 w-12 bg-teal-600 mx-auto rounded-full mt-2" />
          <p className="text-base text-slate-600 font-light max-w-xl mx-auto pt-1">
            Des pôles complémentaires créés pour générer des emplois stables, valoriser le savoir-faire malgache et financer notre modèle social.
          </p>
        </div>

        {/* Grille compacte à 3 colonnes, sans images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className={`group flex flex-col justify-between p-8 bg-slate-50 border border-slate-100 rounded-2xl transition-all duration-300 ${activity.hoverBorder} hover:bg-white hover:shadow-xl`}
            >
              <div className="space-y-6">
                {/* Bloc Icône stylisé */}
                <div className="inline-flex p-4 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                  {activity.icon}
                </div>

                {/* Textes */}
                <div className="space-y-3">
                  <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border ${activity.badgeColor}`}>
                    {activity.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-slate-950">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Lien d'action minimaliste en bas */}
              <div className="pt-6 border-t border-slate-100/60 mt-6 flex items-center text-xs font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-200">
                En savoir plus
                <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}