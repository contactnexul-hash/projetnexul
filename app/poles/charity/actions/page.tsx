"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Action = {
  id: number;
  title: string;
  description: string;
  reward: number; // en NXL
};

const actions: Action[] = [
  {
    id: 1,
    title: "Don alimentaire",
    description: "Participe à la collecte et distribution de repas pour les familles dans le besoin.",
    reward: 10,
  },
  {
    id: 2,
    title: "Soutien aux orphelinats",
    description: "Aide les orphelinats avec des dons et du bénévolat.",
    reward: 20,
  },
];

export default function CharityActions() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {actions.map((action) => (
        <motion.div
          key={action.id}
          className="mb-4 p-6 border rounded shadow hover:shadow-lg transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-xl font-bold mb-2">{action.title}</h2>
          <p className="mb-2">{action.description}</p>
          <p className="font-semibold">Récompense : {action.reward} NXL</p>
          <Link href={`/poles/charity/actions/${action.id}`}>
            <a className="text-blue-600 hover:underline mt-2 inline-block">Voir détails</a>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}




