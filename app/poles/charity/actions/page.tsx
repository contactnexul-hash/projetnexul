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
  "use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CharityActions() {
  const actions = [
    { id: 1, title: "Don à une ONG locale", reward: 10 },
    { id: 2, title: "Participer à un événement caritatif", reward: 8 },
    { id: 3, title: "Partager une campagne sociale", reward: 5 },
    { id: 4, title: "Liker et commenter sur un projet caritatif", reward: 2 },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pôle Charity — Actions & Récompenses</h1>
      <p className="mb-6">
        Le pôle Charity de Nexul permet de soutenir activement des causes qui comptent.
        Chaque action validée rapporte des NXL et des points d'action.
      </p>

      <main className="grid gap-6 sm:grid-cols-2">
        {actions.map((action) => (
          <motion.div
            key={action.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">{action.title}</h2>
            <p>Récompense : {action.reward} NXL</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Valider & recevoir {action.reward} NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-8 text-gray-600">
        <Link href="/poles/charity">
          <span className="underline cursor-pointer">Retour au pôle Charity</span>
        </Link>
      </footer>
    </div>
  );
}


