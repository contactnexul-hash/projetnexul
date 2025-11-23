import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar /> {/* Navbar intégré */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Bienvenue sur Nexul</h1>
        <p className="mt-4 text-lg">Page d’accueil fonctionnelle avec ton style luxe/tech.</p>
        {/* Ici tu peux garder ton contenu existant */}
      </main>
    </>
  );
}




