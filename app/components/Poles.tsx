import React from "react";
import { BadgeCheck, Heart, Leaf, Lightbulb, BookOpen, Users } from "lucide-react";

export const poles = [
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
      "Distribution de matériel",
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
      "Cours et tutoriels",
      "Formations gratuites",
      "Ateliers pratiques"
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
      "Hackathons durables",
      "Startups responsables"
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
      "Projets communautaires",
      "Aide aux associations",
      "Organisation d’événements"
    ],
    image: "/images/volunteer.jpg",
    link: "/pols/volunteer"
  },
  {
    name: "Communauté",
    color: "bg-pink-700",
    icon: <Users size={24} />,
    description: "Rassemblements, partenariats et animaux",
    actions: [
      "Meetups locaux",
      "Échanges culturels",
      "Projets animaliers"
    ],
    image: "/images/community.jpg",
    link: "/pols/community"
  }
];





