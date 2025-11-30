"use client";

import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto font-sans text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Pôle Communauté</h1>

      <img
        src="/images/community.png"
        alt="Communauté"
        className="w-full max-w-2xl mb-6 rounded-lg shadow-lg"
      />

      <p className="mb-4">
        Le pôle Communauté rassemble tous les utilisateurs de Nexul pour créer un réseau actif,
        partager des idées, et coordonner des actions sociales et environnementales.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🌐 Actions disponibles</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Création et participation à des groupes thématiques</li>
        <li>Partage de contenus et expériences liées aux causes sociales</li>
        <li>Organisation d’événements en ligne et hors-ligne</li>
        <li>Échanges de ressources et opportunités entre membres</li>
        <li>Tableaux de classement et récompenses pour les membres actifs</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🎯 Impact mesurable</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Engagement communautaire suivi via action points</li>
        <li>Nombre d’événements et initiatives participatives</li>
        <li>Badge Nexul pour les contributeurs les plus actifs</li>
      </ul>

      <Link
        href="/"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}


