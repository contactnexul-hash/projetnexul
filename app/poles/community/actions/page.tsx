"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Action = {
  id: number;
  title: string;
  description: string;
  reward: number;
};

const actions: Action[] = [
  {
    id: 1,
    title: "Participer à un événement local",
    description: "Rejoins une action de solidarité ou un meetup communautaire proche de chez toi.",
    reward: 10,
  },
  {
    id: 2,
    title: "Partager un projet sur les réseaux",
    description: "Partage un projet Nexul et contribue à la visibilité de la communauté.",
    reward: 5,
  },
  {
    id: 3,
    title: "Commenter ou soutenir un projet",
    description: "Exprime ton soutien sur un projet communautaire et gagne des points.",
    reward: 3,
  },
  {
    id: 4,
    title: "Inviter un ami",
    description: "Invitez un ami à rejoindre Nexul et recevez des NXL bonus.",
    reward: 8,
  },
  {
    id: 5,
    title: "Poster un retour d’expérience",
    description: "Décris ton expérience dans la communauté et partage ton impact.",
    reward: 6,
  },
];

export default function CommunityActions() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pôle Communauté — Actions à réaliser</h1>
      <p className="mb-6 text-gray-700">
        Chaque action validée te permet de gagner des NXL et de renforcer l’impact de la communauté Nexul.
      </p>

      <main className="grid gap-6">
        {actions.map((action) => (
          <motion.div
            key={action.id}
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 shadow-lg bg-white"
          >
            <h2 className="text-2xl font-semibold mb-2">{action.title}</h2>
            <p className="mb-4">{action.description}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Valider & gagner {action.reward} NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <Link href="/poles/community">
          <span className="underline cursor-pointer">
            Retour au pôle Community
          </span>
        </Link>
      </footer>
    </div>
  );
}



