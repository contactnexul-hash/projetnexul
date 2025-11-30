"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CultureActionsPage() {
  const actions = [
    {
      title: "Participation à un événement culturel → +6 NXL",
      description:
        "Visiter un musée, une exposition, ou assister à un spectacle local pour soutenir la culture.",
      proof: "Photo du ticket / photo sur place",
    },
    {
      title: "Organisation d’un atelier culturel → +10 NXL",
      description:
        "Atelier musique, art, poésie, écriture ou danse ouvert au public.",
      proof: "Photos, liste des participants, voucher signé",
    },
    {
      title: "Soutien aux artistes locaux → +4 NXL",
      description:
        "Achat d’une œuvre, partage de visibilité, aide logistique ou participation à leurs événements.",
      proof: "Photo, facture ou témoignage",
    },
    {
      title: "Promouvoir la diversité culturelle → +7 NXL",
      description:
        "Actions en faveur de l’inclusion culturelle et de l’accès à la culture.",
      proof: "Preuves visuelles, documents de participation",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Actions — Pôle Culture</h1>
        <p className="text-gray-500 text-lg">
          Promouvoir l’art, la créativité, les traditions et l’inclusion culturelle.
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

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg w-full">
              Valider et gagner NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-14">
        <Link href="/poles/culture">
          <span className="text-gray-500 underline cursor-pointer">
            Retour au pôle Culture
          </span>
        </Link>
      </footer>
    </div>
  );
}
