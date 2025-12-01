"use client";








export default function TechPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto font-sans text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Pôle Technologie</h1>
      <p className="mb-6">
        Découvrez toutes les initiatives et projets du pôle Technologie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Innovation</h2>
          <p>Projets innovants et technologies émergentes.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Projets Techniques</h2>
          <p>Développement de nouvelles solutions et outils.</p>
        </div>
      </div>
    </div>
  );
}


