"use client";

import Link from "next/link";

type Pole = {
  id: number;
  name: string;
  description: string;
  image: string;
  actionLink: string;
};

const poles: Pole[] = [
  {
    id: 1,
    name: "Environnement",
    description:
      "Actions & projets pour préserver notre planète. Plantations, nettoyages, initiatives écologiques.",
    image: "/images/environment.png",
    actionLink: "/poles/environment",
  },
  {
    id: 2,
    name: "Charité",
    description:
      "Aide aux personnes dans le besoin. Collectes, soutien humanitaire, actions solidaires.",
    image: "/images/charity.png",
    actionLink: "/poles/charity",
  },
  {
    id: 3,
    name: "Éducation",
    description:
      "Cours, ateliers, formations pour développer les compétences de chacun.",
    image: "/images/education.png",
    actionLink: "/poles/education",
  },
  {
    id: 4,
    name: "Innovation",
    description:
      "Projets technologiques, créativité, solutions modernes pour un futur meilleur.",
    image: "/images/innovation.png",
    actionLink: "/poles/innovation",
  },
  {
    id: 5,
    name: "Volontariat",
    description:
      "Donne de ton temps pour aider lors d’événements ou missions sociales.",
    image: "/images/volunteer.png",
    actionLink: "/poles/volunteer",
  },
  {
    id: 6,
    name: "Communauté",
    description:
      "Créer du lien entre les membres, organiser des rencontres et événements.",
    image: "/images/community.png",
    actionLink: "/poles/community",
  },
  {
    id: 7,
    name: "Tech",
    description:
      "Pôle informatique : développement, cybersécurité, IA, projets digitaux.",
    image: "/images/tech.png",
    actionLink: "/poles/tech",
  },
  {
    id: 8,
    name: "Freeze",
    description:
      "Organisation et gestion des événements ‘Freeze’, animations et surprises.",
    image: "/images/freeze.png",
    actionLink: "/poles/freeze",
  },
];

export default function PolesPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Les Pôles Nexul
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {poles.map((pole) => (
          <div
            key={pole.id}
            className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition transform"
          >
            <img
              src={pole.image}
              alt={pole.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-semibold text-gray-800">
              {pole.name}
            </h2>

            <p className="text-gray-600 mt-2">{pole.description}</p>

            <Link
              href={pole.actionLink}
              className="mt-4 inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition"
            >
              Voir ce pôle →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

