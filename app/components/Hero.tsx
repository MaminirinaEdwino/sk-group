import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. Image d'arrière-plan ultra-optimisée par Next.js */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" // À placer dans public/images/ (choisissez une image représentative de vos ambitions)
          alt="Innovation et développement à Madagascar"
          fill // Remplace le positionnement absolu et prend tout l'espace du parent
          className="object-cover object-center opacity-45"
          priority // CRUCIAL POUR LE SEO : Force le chargement immédiat de l'image principale (LCP)
          sizes="100vw"
        />
        {/* Overlay en dégradé pour garantir la lisibilité parfaite du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      {/* 2. Contenu textuel et call-to-actions */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl space-y-6 md:space-y-8 text-left">
          
          {/* Badge de contexte local / international */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 border border-blue-500/20 backdrop-blur-sm animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Au service de l&apos;innovation à Madagascar
          </div>

          {/* Titre principal à fort impact (Accroche WordPress d'origine rehaussée) */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            Sk Socialkey <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
              Madagascar Group
            </span>
          </h1>

          {/* Description claire et lisible (Optimisée pour le pitch) */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Un groupe diversifié engagé pour transformer durablement le paysage économique local en alliant innovation technologique, excellence et responsabilité sociétale.
          </p>

          {/* Boutons d'actions responsives */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="#rse"
              className="inline-flex justify-center items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30 transition-all duration-200 text-center"
            >
              Découvrir nos engagements
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            
            <Link
              href="#contact"
              className="inline-flex justify-center items-center rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 border border-white/10 transition-all duration-200 text-center"
            >
              Nous contacter
            </Link>
          </div>

        </div>
      </div>

      {/* Indication visuelle de scroll discrète (Optionnelle) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-slate-400/60 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400/60 to-transparent animate-bounce" />
        </div>
      </div>

    </section>
  );
}