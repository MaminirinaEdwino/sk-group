import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css"; // Assurez-vous d'avoir Tailwind configuré ici
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Sk Socialkey Madagascar Group",
  description: "Un Groupe diversifié au service de l’innovation et du développement",
  metadataBase: new URL("https://sk-socialkey-madagascar-group.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sk Socialkey Madagascar Group",
    description: "Un Groupe diversifié au service de l’innovation et du développement",
    url: "https://sk-socialkey-madagascar-group.com",
    siteName: "Sk Socialkey Madagascar Group",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sk Socialkey Madagascar Group",
    description: "Un Groupe diversifié au service de l’innovation et du développement",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR" className="scroll-smooth">
      <head>
        {/* Schémas de données structurées SEO d'origine de votre WordPress */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Sk Socialkey Madagascar Group",
                "alternateName": "sk-socialkey-madagascar-group",
                "description": "Un Groupe diversifié au service de l’innovation et du développement",
                "url": "https://sk-socialkey-madagascar-group.com"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Sk-Socialkey-Madagascar-group",
                "url": "https://sk-socialkey-madagascar-group.com",
                "alternateName": "sk-socialkey-madagascar-group",
                "description": "Sk Socialkey Madagascar Group",
                "logo": "https://sk-socialkey-madagascar-group.com/wp-content/uploads/2025/03/cropped-394679478_302399465903245_4451706533750314685_n.jpg",
                "sameAs": ["https://www.facebook.com/profile.php/?id=100083995821271"]
              }
            ]),
          }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        {/* Le Header s'affichera sur toutes les pages du site */}
        <Header />
        
        {/* Contenu principal injecté dynamiquement */}
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}