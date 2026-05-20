import React from "react";
import Link from "next/link";
import { Metadata } from "next";

// 1. Déclaration de l'objet Métadonnées SEO extrait du HTML d'origine
export const metadata: Metadata = {
  title: "Fondation SK - Impact Social & Humanitaire Madagascar",
  description:
    "Découvrez les actions de la Fondation SK depuis 2017 : accès à l'éducation, soutien humanitaire d'urgence et développement écologique à Madagascar.",
  alternates: {
    canonical: "https://sk-socialkey-madagascar-group.com/sk-foundation/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Fondation SK - Impact Social & Humanitaire Madagascar",
    description:
      "Découvrez les actions de la Fondation SK depuis 2017 : accès à l'éducation, soutien humanitaire d'urgence et développement écologique à Madagascar.",
    url: "https://sk-socialkey-madagascar-group.com/sk-foundation/",
    siteName: "Sk Socialkey Madagascar Group",
    locale: "fr_FR",
    type: "article",
    authors: ["https://www.facebook.com/profile.php/?id=100083995821271"],
  },
  twitter: {
    card: "summary",
    title: "Fondation SK - Impact Social & Humanitaire Madagascar",
    description:
      "Découvrez les actions de la Fondation SK depuis 2017 à Madagascar.",
  },
};

// 2. Les 3 Piliers Majeurs d'Intervention de la Fondation SK
const pillars = [
  {
    id: "education",
    title: "Éducation & Jeunesse",
    description:
      "Parce que l'éducation est l'arme la plus puissante pour changer le monde, nous finançons des fournitures scolaires, parrainons des élèves issus de milieux défavorisés et réhabilitons des espaces d'apprentissage pour briser le cycle de la précarité.",
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
          d="M4.26 10.174L10.72 14.177a2.4 2.4 0 002.56 0L19.74 10.174m-15.48 0L12 5.5l7.74 4.674m-15.48 0v4.34a2.4 2.4 0 001.032 1.984l4.98 3.42a2.4 2.4 0 002.456 0l4.98-3.42a2.4 2.4 0 001.032-1.984v-4.34"
        />
      </svg>
    ),
    badge: "Priorité Absolue",
  },
  {
    id: "humanitaire",
    title: "Actions Humanitaires d'Urgence",
    description:
      "Présente aux côtés des populations vulnérables lors des moments critiques, la fondation déploie des programmes d'aide alimentaire, de distribution de produits de première nécessité et d'assistance médicale dans les zones isolées.",
    icon: (
      <svg
        className="w-6 h-6 text-amber-600"
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
    badge: "Solidarité Terrain",
  },
  {
    id: "ecologie",
    title: "Développement Écologique",
    description:
      "Sensibilisation des communautés locales aux enjeux environnementaux. Nous menons des initiatives de reboisement, de gestion responsable des ressources et promouvons des solutions d'agriculture durable pour préserver la biodiversité malgache.",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v13.5m0-13.5L6.75 8.25M12 3l5.25 5.25M12 16.5A3.75 3.75 0 1012 24a3.75 3.75 0 000-7.5z"
        />
      </svg>
    ),
    badge: "Avenir Durable",
  },
];

export default function SkFoundationPage() {
  return (
    <main className="w-full bg-white pt-28">
      {/* SECTION 1 : Hero Header de la Fondation */}
      <section className="relative py-20 bg-gradient-to-b from-rose-50/40 to-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
            Notre Cœur Associatif
          </span>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            La Fondation SK
          </h1>
          <div className="h-1 w-16 bg-rose-600 mx-auto rounded-full" />
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto pt-2">
            Depuis 2017, nous unissons nos forces pour offrir des perspectives
            d'avenir concrètes aux populations les plus fragiles de Madagascar.
          </p>
        </div>
      </section>

      {/* SECTION 2 : Manifeste et Alliance Vertueuse */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texte d'introduction sémantique */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
                Pourquoi la Fondation SK existe-t-elle ?
              </h2>
              <div className="h-0.5 w-10 bg-rose-600 rounded-full" />
              <div className="text-slate-600 font-light leading-relaxed space-y-4 text-base sm:text-lg">
                <p>
                  L’aide humanitaire ponctuelle résout les crises immédiates,
                  mais elle ne suffit pas à bâtir une autonomie à long terme.
                  C'est de ce constat, posé par notre fondateur en 2017, qu'est
                  née la vision intégrée de SK Group.
                </p>
                <p>
                  La{" "}
                  <strong className="font-medium text-slate-900">
                    Fondation SK
                  </strong>{" "}
                  est le réceptacle de notre engagement social. Elle ne dépend
                  pas uniquement de subventions externes aléatoires : elle est
                  directement propulsée et soutenue par les performances
                  économiques des filières technologiques, graphiques et
                  agricoles de SK Group.
                </p>
                <p className="italic border-l-2 border-rose-500 pl-4 text-slate-700 font-medium bg-rose-50/30 py-2 rounded-r-xl">
                  « Chaque contrat signé avec nos filières marchandes devient un
                  cartable distribué, un arbre planté ou un repas assuré sur le
                  terrain. »
                </p>
              </div>
            </div>

            {/* Bloc d'appel à projet / Chiffres clés symboliques (Sans images lourdes) */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Notre Impact en Quelques Mots
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Grâce au déploiement de SK Association et du groupe, la
                fondation concentre ses efforts sur des indicateurs de
                changement structurels :
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-rose-600" />
                  <span>Scolarisation continue des enfants vulnérables</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Restauration des écosystèmes forestiers locaux</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span>Autonomie financière progressive des familles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : Grille Compacte des Axes d'Intervention */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
              Nos Piliers d'Intervention Évolutifs
            </h2>
            <p className="text-sm text-slate-500 font-light max-w-md mx-auto">
              Découvrez les trois axes méthodologiques qui guident nos actions
              citoyennes.
            </p>
          </div>

          {/* Grille compacte à 3 colonnes avec icônes (Gain de place optimal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white p-8 border border-slate-100/80 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:border-rose-500/20"
              >
                <div className="space-y-5">
                  <div className="inline-flex p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 : Appel au Partenariat Solidaire */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold sm:text-3xl tracking-tight">
            Devenez Acteur du Changement avec la Fondation SK
          </h2>
          <p className="text-slate-400 font-light text-sm max-w-xl mx-auto leading-relaxed">
            Que vous soyez une entité publique, une ONG internationale ou une
            entreprise désireuse de maximiser son impact RSE à Madagascar,
            joignez vos compétences aux nôtres.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-rose-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-rose-500 transition duration-150"
            >
              Initier un projet solidaire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
