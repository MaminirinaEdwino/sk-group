import Image from "next/image";

export default function FoundersWord() {
  return (
    <section id="mot-du-fondateur" className="w-full py-24 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grille principale : Layout asymétrique (1 colonne sur mobile, 2 sur desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bloc Image (Prend 5 colonnes sur 12 sur grand écran) */}
          <div className="lg:col-span-5 relative group justify-self-center lg:justify-self-start">
            {/* Arrière-plan décoratif pour donner du relief (Design Premium) */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-10 blur-lg group-hover:opacity-20 transition duration-300" />
            
            {/* Encadrement géométrique en arrière-plan */}
            <div className="absolute bottom-[-12px] right-[-12px] w-full h-full border-2 border-slate-200 rounded-3xl z-0 hidden sm:block" />
            
            <div className="relative h-[450px] w-[320px] sm:w-[380px] rounded-3xl overflow-hidden shadow-md z-10">
              <Image
                src="/images/fondateur.jpg" // À placer dans public/images/
                alt="Portrait du Fondateur - Sk Socialkey Madagascar Group"
                fill
                className="object-cover object-center group-hover:scale-102 transition duration-500"
                sizes="(max-w-768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Bloc Texte (Prend 7 colonnes sur 12) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* En-tête du bloc */}
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Vision & Philosophie
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Le Mot du Fondateur
              </h2>
              <div className="h-1 w-16 bg-blue-600 rounded-full mt-1" />
            </div>

            {/* Corps du message (Stylisé avec des guillemets design) */}
            <div className="relative">
              {/* Guillemet géant en fond opacity */}
              <span className="absolute top-[-30px] left-[-20px] text-8xl font-serif text-slate-200 select-none pointer-events-none z-0">
                “
              </span>
              
              <div className="relative space-y-4 text-slate-600 font-light leading-relaxed text-base md:text-lg z-10">
                <p>
                  Bienvenue chez <strong className="font-semibold text-slate-900">Sk Socialkey Madagascar Group</strong>. 
                  Notre aventure est née d’une conviction profonde : le développement économique de Madagascar ne peut se faire sans une innovation responsable et inclusive.
                </p>
                <p>
                  À travers nos différentes filières et nos structures dédiées comme la <strong className="font-medium text-blue-600">Fondation SK</strong>, 
                  nous mettons un point d’honneur à ce que chaque progrès technologique ou commercial génère un impact social direct. 
                  Qu’il s’agisse d’éduquer la jeunesse, d’accompagner l’entrepreneuriat local ou d’implémenter des solutions durables, 
                  notre moteur reste le même : l’excellence au service de l’humain.
                </p>
                <p>
                  C’est ensemble, main dans la main avec nos partenaires, nos collaborateurs et nos communautés, 
                  que nous dessinons les contours d’un avenir malgache prospère, solidaire et résolument tourné vers l’avenir.
                </p>
              </div>
            </div>

            {/* Signature & Identité */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Maminirina Edwino</h4>
                <p className="text-sm text-slate-500 font-medium">Fondateur & Président Directeur Général</p>
              </div>
              {/* Emplacement optionnel pour un scan de signature manuscrite */}
              <div className="hidden sm:block text-slate-300 font-serif italic text-2xl tracking-wider select-none opacity-60">
                Edwino.M
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}