import Image from "next/image";

export default function FoundersWord() {
  return (
    <section id="mot-du-fondateur" className="w-full py-24 bg-slate-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Layout asymétrique (Grille 12 colonnes sur desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Bloc de Gauche : Image et Identité (Prend 5 colonnes) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative group">
              {/* Effet d'arrière-plan élégant */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-600 to-teal-600 opacity-10 blur-lg group-hover:opacity-15 transition duration-300" />
              <div className="absolute bottom-[-10px] right-[-10px] w-full h-full border-2 border-slate-200 rounded-3xl z-0 hidden sm:block" />
              
              <div className="relative h-[440px] w-[320px] sm:w-[360px] rounded-3xl overflow-hidden shadow-sm z-10">
                <Image
                  src="/images/founder.webp" // À remplacer dans votre dossier public/images/
                  alt="Stéphane Kennedy FITIAVANJANAHARY - Fondateur SK Group"
                  fill
                  className="object-cover object-center group-hover:scale-101 transition duration-500"
                  sizes="(max-w-768px) 100vw, 360px"
                />
              </div>
            </div>

            {/* Identité du Fondateur */}
            <div className="text-center lg:text-left pt-2">
              <h4 className="text-xl font-extrabold text-slate-950 tracking-tight">
                Stéphane Kennedy FITIAVANJANAHARY
              </h4>
              <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider mt-1">
                Fondateur - Président Directeur Général
              </p>
              <div className="h-0.5 w-12 bg-teal-600 rounded-full mt-3 mx-auto lg:mx-0" />
            </div>
          </div>

          {/* Bloc de Droite : Le Message Évolutif (Prend 7 colonnes) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Titre de section */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Vision du Dirigeant
              </span>
              <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                Mot du Fondateur
              </h2>
            </div>

            {/* Citation d'introduction */}
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="absolute top-2 left-4 text-7xl font-serif text-teal-100 select-none pointer-events-none">
                “
              </span>
              <p className="relative text-slate-700 italic font-medium leading-relaxed text-base md:text-lg z-10 pl-4">
                Madagascar est une terre d’opportunités, de talents et de ressources. Pourtant, nous sommes confrontés à une réalité indéniable : trop de jeunes, pleins de potentiel, se heurtent à des obstacles lorsqu’il s’agit d’accéder à un emploi stable et valorisant. L’histoire de SK Group est née de cette prise de conscience et d’une volonté inébranlable d’agir.
              </p>
            </div>

            {/* Fil conducteur / Timeline de l'engagement */}
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-base">
              
              {/* Étape 1 : L'humanitaire */}
              <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-600" />
                <h5 className="font-bold text-slate-900 text-base md:text-lg">
                  De l’Humanitaire à l’Entreprise Sociale : Un Engagement Évolutif
                </h5>
                <p>
                  En 2017, animé par la conviction que le changement commence par des actions concrètes, j’ai initié les premières missions humanitaires à travers la <strong className="font-medium text-slate-900">Fondation SK</strong>. L’objectif était clair : apporter un soutien immédiat aux communautés vulnérables, notamment dans les domaines de l’éducation, de la santé et du développement durable.
                </p>
                <p>
                  Cependant, en œuvrant sur le terrain, un constat s’est imposé : l’aide humanitaire seule ne peut suffire. Pour véritablement transformer les conditions de vie des jeunes et des familles, il est impératif de leur offrir des opportunités économiques pérennes.
                </p>
              </div>

              {/* Étape 2 : L'approche durable */}
              <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-600" />
                <h5 className="font-bold text-slate-900 text-base md:text-lg">
                  SK Association : Vers une Approche Durable
                </h5>
                <p>
                  En 2019, cette réflexion a donné naissance à <strong className="font-medium text-slate-900">SK Association</strong>, une organisation dédiée au développement durable. C’est à travers ses actions que nous avons identifié les principaux défis qui freinent l’essor de la jeunesse malgache :
                </p>
                <ul className="list-none space-y-2 pt-1 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-0.5">✓</span>
                    <span>Un taux de chômage élevé et un faible accès au marché du travail.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-0.5">✓</span>
                    <span>Un manque de perspectives professionnelles pour les jeunes, malgré leurs compétences et leur motivation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-0.5">✓</span>
                    <span>L’importance d’un emploi stable comme levier de transformation sociale et d’autonomie financière.</span>
                  </li>
                </ul>
              </div>

              {/* Étape 3 : Le Groupe d'aujourd'hui */}
              <div className="relative pl-6 border-l-2 border-teal-600 space-y-2">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-600" />
                <h5 className="font-bold text-slate-900 text-base md:text-lg text-teal-800">
                  SK Social Key Madagascar Group : Transformer l’Emploi en Moteur de Développement
                </h5>
                <p>
                  C’est ainsi qu’est né <strong className="font-semibold text-slate-900">SK Social Key Madagascar Group</strong>, une structure qui dépasse le simple cadre entrepreneurial pour devenir un véritable acteur du changement socio-économique.
                </p>
                <p className="font-medium text-slate-800">
                  Notre mission repose sur trois piliers fondamentaux :
                </p>
                <ul className="list-none space-y-2 pl-1">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    <span>Créer des emplois stables et valorisants pour la jeunesse malgache.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    <span>Soutenir l’économie locale en mettant en avant les talents malgaches.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    <span>Innover dans des secteurs stratégiques pour un impact durable.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}