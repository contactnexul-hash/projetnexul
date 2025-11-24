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
      "Soutien matériel aux associations",
      "Événements caritatifs"
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
      "Cours et tutoriels",
      "Ateliers pratiques",
      "Échanges et conférences"
    ],
    image: "/images/education.jpg",
    link: "/pols/education"
  },
  {
    name: "Innovation",
    color: "bg-yellow-600",
    icon: <Lightbulb size={24} />,
    description: "Tech & Web3 pour l'impact",
    actions: [
      "Projets blockchain",
      "Solutions durables tech",
      "Hackathons et défis"
    ],
    image: "/images/innovation.jpg",
    link: "/pols/innovation"
  },
  {
    name: "Communauté",
    color: "bg-purple-700",
    icon: <Users size={24} />,
    description: "Rassemblements, partenariats et animaux",
    actions: [
      "Événements locaux",
      "Partenariats solidaires",
      "Sensibilisation sur le bien-être animal"
    ],
    image: "/images/community.jpg",
    link: "/pols/community"
  }
];

export default poles;



