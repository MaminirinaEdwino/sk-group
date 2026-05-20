// app/page.tsx
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-full">
      {/* Notre section Hero optimisée */}
      <Hero />
      
      {/* Les sections suivantes viendront s'ajouter ici (ex: Groupe, RSE, Fondation...) */}
      <section id="groupe" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contenu de présentation de l'organisation */}
        </div>
      </section>
    </main>
  );
}