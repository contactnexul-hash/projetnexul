import React from "react";
import { BadgeCheck, Heart, Leaf, Lightbulb, BookOpen, Users, Paw } from "lucide-react";

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
    description: "Soutien ciblé aux causes importantes.",
    actions: [
      "Collectes de fonds",
      "Partenariats associations",
      "Événements caritatifs",
      "Campagnes de sensibilisation",
      "Dons matériels et financiers"
    ],
  },
  {
    name: "Éducation",
    color: "bg-blue-600",
    icon: <BookOpen size={24} />,
    description: "Programmes et formations pour tous.",
    actions: [
      "Cours et ateliers",
      "Formation Web3 & Tech",
      "Tutorats et mentorats",
      "Sensibilisation éco-responsable",
      "Bibliothèques et ressources en ligne"
    ],
  },
  {
    name: "Innovation",
    color: "bg-yellow-500",
    icon: <Lightbulb size={24} />,
    description: "Tech & Web3 pour l'impact.",
    actions: [
      "Projets blockchain responsables",
      "Hackathons pour l'impact",
      "Startups sociales",
      "R&D sur solutions durables",
      "Partenariats technologiques"
    ],
  },
  {
    name: "Bénévolat",
    color: "bg-purple-600",
    icon: <BadgeCheck size={24} />,
    description: "Engage-toi et impacte localement.",
    actions: [
      "Actions de terrain",
      "Mentorat et soutien",
      "Collectes et distributions",
      "Événements communautaires",
      "Plateformes de volontariat"
    ],
  },
  {
    name: "Communauté",
    color: "bg-orange-500",
    icon: <Users size={24} />,
    description: "Rassemblements, partenariats et entraide.",
    actions: [
      "Événements locaux",
      "Meetups et conférences",
      "Groupes d'entraide",
      "Forums et discussions",
      "Partenariats associatifs"
    ],
  },
  {
    name: "Animaux",
    color: "bg-pink-500",
    icon: <Paw size={24} />,
    description: "Protection et bien-être des animaux.",
    actions: [
      "Refuges et sauvetages",
      "Campagnes de sensibilisation",
      "Adoptions responsables",
      "Actions locales de protection",
      "Crowdfunding pour causes animales"
    ],
  },
];

export default poles;

