import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "A Propos - Sk Socialkey Madagascar Group",
  description:
    "Découvrez l'histoire, les objectifs majeurs et les valeurs de SK Group à Madagascar. De l'action humanitaire avec la Fondation SK à la création d'emplois stables pour la jeunesse.",
  alternates: {
    canonical: "https://sk-socialkey-madagascar-group.com/a-propos/",
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
    title: "A Propos - Sk Socialkey Madagascar Group",
    description:
      "Découvrez l'histoire, les objectifs majeurs et les valeurs de SK Group à Madagascar. De l'action humanitaire avec la Fondation SK à la création d'emplois stables pour la jeunesse.",
    url: "https://sk-socialkey-madagascar-group.com/a-propos/",
    siteName: "Sk Socialkey Madagascar Group",
    locale: "fr_FR",
    type: "article",
    // Vous pouvez optionnellement lier les profils Facebook officiels extraits du HTML d'origine
    authors: ["https://www.facebook.com/profile.php/?id=100083995821271"],
  },
  twitter: {
    card: "summary",
    title: "A Propos - Sk Socialkey Madagascar Group",
    description:
      "Découvrez l'histoire, les objectifs majeurs et les valeurs de SK Group à Madagascar.",
  },
};

// 1. Définition des Valeurs du Groupe issues du HTML d'origine
export default function AboutPage() {
  return <AboutContent />;
}
