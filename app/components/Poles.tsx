import React from "react";
import { BadgeCheck, Heart, Leaf, Lightbulb, BookOpen, Users } from "lucide-react";

const poles = [
  {
    name: "Environnement",
    color: "bg-green-600",
    icon: <Leaf size={24} />,
    description: "Agir pour la planète et la communauté.",
    actions: [
      "Planter des arbres",
      "Nettoyer plages et forêts",
      "Défis éco-responsables",
      "Campagnes de sensibilisation",
      "Crowdfunding pour projets verts",
      "Innovation tech verte"
    ],
  },
  {
    name: "Charity",
    color: "bg-red-600",
    icon: <Heart size={24} />,
    description: "Soutenir des causes qui comptent.",
    actions: [
      "Dons ciblés pour associations",
      "Collectes alimentaires",
      "Projets humanitaires",
      "Campagnes de sensibilisation",
      "Bénévolat dans des refuges",
      "Crowdfunding pour initiatives sociales"
    ],
  },
  {
    name: "Éducation",
    color: "bg-blue-600",
    icon: <BookOpen size={24} />,
    description: "Programmes et formations pour tous.",
    actions: [
      "Cours en ligne gratuits",
      "Ateliers pratiques",
      "Mentorat et tutorat",
      "Échanges interculturels",
      "Bibliothèques collaboratives",
      "Crowdfunding pour projets éducatifs"
    ],
  },
  {
    name: "Innovation",
    color: "bg-yellow-500",
    icon: <Lightbulb size={24} />,
    description: "Tech & Web3 pour l'impact.",
    actions: [
      "Hackathons solidaires",
      "Projets blockchain pour le social",
      "Startups à impact",
      "Applications éco-responsables",
      "Prototypage rapide",
      "Crowdfunding pour innovation verte"
    ],
  },
  {
    name: "Bénévolat",
    color: "bg-purple-600",
    icon: <BadgeCheck size={24} />,
    description: "Engage-toi, impacte localement.",
    actions: [
      "Participation à des événements locaux",
      "Aide aux associations",
      "Soutien aux communautés",
      "Projets collectifs",
      "Crowdfunding pour initiatives locales",
      "Actions citoyennes"
    ],
  },
  {
    name: "Communauté & Animaux",
    color: "bg-pink-600",
    icon: <Users size={24} />,
    description: "Rassemblements, partenariats et protection animale.",
    actions: [
      "Adoption et soutien aux refuges",
      "Campagnes de sensibilisation animale",
      "Événements communautaires",
      "Partenariats solidaires",
      "Crowdfunding pour projets animaux",
      "Activités locales pour rassembler la communauté"
    ],
  },
];

export default function Poles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {poles.map((pole, idx) => (
        <div key={idx} className={`rounded-2xl shadow-lg p-6 ${pole.color} text-white`}>
          <div className="flex items-center space-x-3 mb-4">
            {pole.icon}
            <h2 className="text-xl font-bold">{pole.name}</h2>
          </div>
          <p className="mb-4">{pole.description}</p>
          <ul className="list-disc list-inside space-y-1">
            {pole.actions.map((action, i) => (
              <li key={i}>{action}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


