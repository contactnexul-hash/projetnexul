"use client";

import React from "react";
import Link from "next/link";

export default function CommunautePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Communauté</h1>

      <p className="mb-4">
        Le pôle Communauté rassemble les utilisateurs, créateurs, ONG, artisans et partenaires
        autour de l’écosystème Nexul. C’est le cœur battant du projet : entraide, partage,
        évènements et collaboration réelle.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🤝 Actions communautaires</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Évènements locaux — quartiers, villages, villes</li>
        <li>Workshops Web3, écologie, entrepreneuriat</li>
        <li>Rencontres avec ONG et artisans</li>
        <li>Groupes d’entraide et mentors Nexul</li>
        <li>Actions collectives : plantations, nettoyages, dons</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🌍 Développement de la communauté</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Création de hubs Nexul dans les villes</li>
        <li>Ambassadeurs certifiés avec NXL Pass</li>
        <li>Partenariats avec écoles, centres sociaux, ONG</li>
        <li>Programmes d’intégration pour nouveaux membres</li>
        <li>Système de niveaux, badges & récompenses communautaires</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">💠 Objectifs du pôle</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Créer un réseau mondial engagé pour l’impact</li>
        <li>Faciliter l’échange de compétences et d’entraide</li>
        <li>Favoriser la participation active via les rewards NXL</li>
        <li>Renforcer la cohésion sociale grâce à la blockchain</li>
      </ul>

      <p className="mb-4">
        La communauté Nexul, c’est un mouvement : accessible, soudée, inclusive, présente en ligne et sur le terrain.
      </p>

      <Link href="/dashboard">
        <span className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Accéder au Tableau de bord
        </span>
      </Link>
    </div>
  );
}

