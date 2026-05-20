// app/page.tsx
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import RseSection from "./components/RseSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* Notre section Hero optimisée */}
      <Hero />

      <RseSection />
      {/* Les sections suivantes viendront s'ajouter ici (ex: Groupe, RSE, Fondation...) */}
      <section id="groupe" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contenu de présentation de l'organisation */}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}