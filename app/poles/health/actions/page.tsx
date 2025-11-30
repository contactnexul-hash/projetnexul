"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HealthActionsPage() {
  const actions = [
    {
      title: "Don de sang → +8 NXL",
      description:
        "Participer à une campagne de don de sang locale pour soutenir les hôpitaux.",
      proof: "Photo du centre / preuve de participation",
    },
    {
      title: "Aider une personne âgée → +5 NXL",
      description:
        "Accompagnement médical, déplacement, rendez-vous, soutien physique.",
      proof: "Photo, témoignage signé, voucher",
    },
    {
      title: "Prévention santé → +6 NXL",
      description:
        "Distribution de brochures, sensibilisation publique, ateliers éducatifs.",
      proof: "Photo de l’atelier / document signé",
    },
    {
      title: "Sport & bien-être → +4 NXL",
      description:
        "Participation à un événement sportif communautaire ou marche santé.",
      proof: "Photo ou certificat de participation",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Actions — Pôle Santé</h1>
        <p className="text-gray-500 text-lg">
          Contribuez au bien-être physique et mental de votre communauté.
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

            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full">
              Valider et gagner NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-14">
        <Link href="/poles/health">
          <span className="text-gray-500 underline cursor-pointer">
            Retour au pôle Santé
          </span>
        </Link>
      </footer>
    </div>
  );
}

