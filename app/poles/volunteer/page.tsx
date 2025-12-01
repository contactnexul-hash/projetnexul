"use client";








import Link from "next/link";

export default function VolunteerPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto font-sans text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-green-600">Pôle Bénévolat</h1>

      <img
        src="/images/volunteer.png"
        alt="Bénévolat"
        className="w-full max-w-2xl mb-6 rounded-lg shadow-lg"
      />

      <p className="mb-4">
        Le pôle Bénévolat permet aux utilisateurs de Nexul de s’engager directement dans des actions
        locales et sociales. Chaque engagement est traçable et récompensé via NXL et action points.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🤝 Actions disponibles</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Participation à des événements communautaires</li>
        <li>Aide directe aux associations et projets locaux</li>
        <li>Organisation de collectes et campagnes de sensibilisation</li>
        <li>Suivi et reporting via vouchers signés pour preuve d’engagement</li>
        <li>Récompenses gamifiées et badges pour les bénévoles</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🎯 Impact mesurable</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Nombre d’heures bénévoles enregistrées</li>
        <li>Résultats des projets sociaux et environnementaux</li>
        <li>Points et badges visibles sur le tableau de bord utilisateur</li>
      </ul>

      <Link
        href="/"
        className="inline-block mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}

