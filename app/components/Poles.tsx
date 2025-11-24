import React from "react";
import { BadgeCheck, Heart, Leaf, Lightbulb, BookOpen, Users } from "lucide-react";

const poles = [
  {
    name: "Environnement",
    color: "bg-green-800",
    icon: <Leaf size={24} />,
    description: "Agir pour la planète et la communauté",
    actions: [
      "Planter des arbres",
      "Nettoyer plages et forêts",
      "Défis éco-responsables",
      "Campagnes de sensibilisation",
      "Crowdfunding pour projets verts",
      "Innovation tech verte"
    ],
    image: "/images/environment.jpg",
    link: "/pols/environment"
  },
  {
    name: "Charity",
    color: "bg-red-700",
    icon: <Heart size={24} />,
    description: "Soutien ciblé aux causes qui comptent",
    actions: [
      "Collectes de fonds",
      "Aide humanitaire ciblée",
      "Projets locaux et internationaux",
      "Campagnes de sensibilisation"
    ],
    image: "/images/charity.jpg",
    link: "/pols/charity"
  },
  {
    name: "Éducation",
    color: "bg-blue-700",
    icon: <BookOpen size={24} />,
    description: "Programmes et formations pour tous",
    actions: [
      "Cours gratuits et accessibles",
      "Programmes de mentorat",
      "Ateliers pratiques",
      "Bibliothèques et e-learning",
      "Multilingue et open-source"
    ],
    image: "/images/education.jpg",
    link: "/pols/education"
  },
  {
    name: "Innovation",
    color: "bg-purple-700",
    icon: <Lightbulb size={24} />,
    description: "Tech & Web3 pour l'impact",
    actions: [
      "Projets blockchain",
      "NFTs à impact social",
      "Applications décentralisées",
      "Crowdfunding innovant",
      "Technologies vertes et durables"
    ],
    image: "/images/innovation.jpg",
    link: "/pols/innovation"
  },
  {
    name: "Bénévolat",
    color: "bg-yellow-700",
    icon: <BadgeCheck size={24} />,
    description: "Engage-toi, impacte localement",
    actions: [
      "Participation à des événements",
      "Soutien aux associations locales",
      "Projets communautaires",
      "Échanges et mentorat"
    ],
    image: "/images/volunteer.jpg",
    link: "/pols/volunteer"
  },
  {
    name: "Communauté",
    color: "bg-orange-700",
    icon: <Users size={24} />,
    description: "Rassemblements, partenariats, et animaux",
    actions: [
      "Meetups et conférences",
      "Partenariats locaux et internationaux",
      "Adoption et protection animale",
      "Forums et échanges"
    ],
    image: "/images/community.jpg",
    link: "/pols/community"
  }
];

export default function PolesDisplay() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {poles.map((pole, idx) => (
        <a key={idx} href={pole.link} className={`rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition ${pole.color} text-white`}>
          <img src={pole.image} alt={pole.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              {pole.icon}
              <h2 className="text-xl font-bold">{pole.name}</h2>
            </div>
            <p className="mb-2">{pole.description}</p>
            <ul className="list-disc ml-5">
              {pole.actions.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  );
}




