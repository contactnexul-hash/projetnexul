"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TechActionsPage() {
  const actions = [
    {
      title: "Création d’un bot ou script utile → +15 NXL",
      description:
        "Développer un outil numérique, un bot Discord, Telegram, ou une automatisation utile à la communauté.",
      proof: "Lien du repo, capture d’écran ou démo",
    },
    {
      title: "Résolution d’un bug communautaire → +8 NXL",
      description:
        "Corriger un problème sur un projet partagé ou aider un membre à débugger son code.",
      proof: "Capture avant/après, description technique",
    },
    {
      title: "Création d’un tutoriel technique → +6 NXL",
      description:
        "Tutoriel vidéo ou écrit sur un sujet tech (programmation, IA, cybersécurité…).",
      proof: "Lien du tuto ou fichier",
    },
    {
      title: "Contribution open source → +10 NXL",
      description:
        "Contribution à un projet GitHub open-source : PR, issue, amélioration…",
      proof: "Lien GitHub",
    },
    {
      title: "Atelier tech pour la communauté → +12 NXL",
      description:
        "Organiser un atelier d’apprentissage (JS, Python, IA, 3D…).",
      proof: "Photos, liste des participants, documents",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Actions — Pôle Tech</h1>
        <p className="text-gray-500 text-lg">
          Développe, construit et innove pour faire avancer la communauté.
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="border p-5 rounded-xl bg-white shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{action.title}</h2>
            <p className="text-gray-700 mb-3">{action.description}</p>

            <p className="text-sm text-gray-400 mb-4">
              Preuve requise : <strong>{action.proof}</strong>
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full">
              Valider et gagner NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-14">
        <Link href="/poles/tech">
          <span className="text-gray-500 underline cursor-pointer">
            Retour au pôle Tech
          </span>
        </Link>
      </footer>
    </div>
  );
}


