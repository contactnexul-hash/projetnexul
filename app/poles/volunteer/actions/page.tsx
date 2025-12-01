"use client";








import { motion } from "framer-motion";
import Link from "next/link";

const actions = [
  {
    id: 1,
    title: "Aider à distribuer de la nourriture",
    description:
      "Participer à une distribution locale d’aliments pour familles en difficulté.",
    points: 8,
  },
  {
    id: 2,
    title: "Participer à un nettoyage de quartier",
    description:
      "Rejoindre une équipe de bénévoles pour nettoyer les rues, parcs et espaces publics.",
    points: 6,
  },
  {
    id: 3,
    title: "Visiter des personnes âgées isolées",
    description:
      "Apporter de la compagnie, du soutien moral et de l’écoute à des seniors.",
    points: 12,
  },
  {
    id: 4,
    title: "Accompagner des enfants dans leurs devoirs",
    description:
      "Aider des élèves en difficulté scolaire à progresser et reprendre confiance.",
    points: 10,
  },
  {
    id: 5,
    title: "Assister une association locale",
    description:
      "Offrir du soutien administratif, logistique ou événementiel à une ONG.",
    points: 15,
  },
];

export default function VolunteerActions() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Actions — Pôle Volunteer</h1>
        <p className="text-gray-600">
          Choisis une action, réalise-la, valide-la et gagne des NXL !
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((a) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-xl bg-white shadow-xl border border-blue-200"
          >
            <h3 className="text-xl font-semibold">{a.title}</h3>
            <p className="text-gray-600 mt-2">{a.description}</p>

            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Valider & Gagner {a.points} NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-8">
        <Link href="/poles/volunteer">
          <span className="underline text-blue-700 cursor-pointer">
            Retour au pôle Volunteer
          </span>
        </Link>
      </footer>
    </div>
  );
}


