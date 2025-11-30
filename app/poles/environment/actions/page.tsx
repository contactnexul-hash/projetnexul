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
    title: "Planter un arbre",
    description: "Participe à la reforestation locale et enregistre ton action.",
    reward: 10,
  },
  {
    id: 2,
    title: "Nettoyer une plage",
    description: "Aide à préserver les zones côtières et protège la faune marine.",
    reward: 8,
  },
  {
    id: 3,
    title: "Recyclage communautaire",
    description: "Organise ou participe à des collectes de déchets et tri sélectif.",
    reward: 5,
  },
  {
    id: 4,
    title: "Sensibilisation écologique",
    description: "Partage des contenus éducatifs et des initiatives vertes.",
    reward: 3,
  },
];

export default function EnvironmentActionsPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pôle Environment — Actions</h1>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action) => (
          <motion.div
            key={action.id}
            className="bg-white p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">{action.title}</h2>
            <p className="mb-4">{action.description}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Valider & gagner {action.reward} NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-8 text-gray-600">
        <Link href="/poles/environment">
          <span className="underline cursor-pointer">
            Retour au pôle Environment
          </span>
        </Link>
      </footer>
    </div>
  );
}


