"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FreezeActionsPage() {
  const actions = [
    {
      title: "Freeze positif → +4 NXL",
      description:
        "Rester calme, éviter un conflit, apaiser une tension ou désamorcer une situation.",
      proof: "Explication écrite ou capture montrant la situation apaisée",
    },
    {
      title: "Refus d’une provocation → +3 NXL",
      description:
        "Ignorer une attaque verbale, provocation ou critique personnelle sans répondre négativement.",
      proof: "Capture ou résumé de la situation",
    },
    {
      title: "Aide émotionnelle à un membre → +5 NXL",
      description:
        "Soutenir quelqu’un en difficulté, l’écouter, l’aider à travers un moment difficile.",
      proof: "Résumé écrit ou message de remerciement",
    },
    {
      title: "Médiation entre deux membres → +7 NXL",
      description:
        "Aider deux personnes à se réconcilier ou clarifier un malentendu.",
      proof: "Résumé de la médiation (ne pas montrer les MP privés)",
    },
    {
      title: "Action bienveillante spontanée → +2 à +6 NXL",
      description:
        "N’importe quelle action positive non prévue : compliment, aide, encouragement, soutien.",
      proof: "Capture ou description brève",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Actions — Pôle Freeze ❄️</h1>
        <p className="text-gray-600 text-lg">
          Choisis une action, réalise-la et gagne des NXL en contribuant à un environnement calme et bienveillant.
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 border rounded-xl shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{action.title}</h2>
            <p className="text-gray-700 mb-2">{action.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Preuve :</strong> {action.proof}
            </p>

            <button
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => alert(`Action sélectionnée : ${action.title}`)}
            >
              Valider & gagner NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-10 text-gray-600">
        <Link href="/poles/freeze">
          <span className="underline cursor-pointer">Retour au pôle Freeze</span>
        </Link>
      </footer>
    </div>
  );
}

