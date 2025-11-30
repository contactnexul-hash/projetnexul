"use client"; 
/**
 * Ce fichier est un composant CLIENT.
 * Il gère l'affichage, les interactions utilisateur
 * et les animations.
 *
 * Tout ce qui touche à :
 *   - useState
 *   - framer motion
 *   - onClick
 *   - Rendering UI
 * doit être dans un client component.
 */

import { motion } from "framer-motion"; // animations
import { useState } from "react";       // état React
import { submitVolunteer } from "./actions"; 
/**
 * Import CORRECT :
 * Le fichier actions.ts est dans le même dossier.
 * Donc le bon chemin est "./actions"
 * et NON "./actions/actions"
 */

import Image from "next/image"; // si tu veux des images

export default function VolunteerPage() {

  // --- ÉTATS DU COMPOSANT ---
  const [loading, setLoading] = useState(false); 
  const [done, setDone] = useState(false);

  // --- LISTE D'ACTIONS ---
  const actions = [
    "Aider dans une banque alimentaire",
    "Distribuer des repas aux sans-abri",
    "Participer à des maraudes",
    "Nettoyer des espaces publics",
    "Donner des cours de soutien",
    "Assister des associations locales",
    "Participer à des événements solidaires",
    "Aider à organiser des collectes",
    "Soutenir les personnes âgées",
    "Aider dans les refuges",
  ];

  // --- FONCTION QUI APPELLE L’ACTION SERVEUR ---
  const handleSubmit = async (action: string) => {
    setLoading(true);

    /**
     * submitVolunteer() est une Server Action.
     * Elle est exécutée côté serveur, jamais côté client,
     * donc elle DOIT être dans un fichier avec "use server".
     */
    await submitVolunteer(action);

    setLoading(false);
    setDone(true);

    // message de confirmation pendant 2.5 sec
    setTimeout(() => setDone(false), 2500);
  };

  // --- RENDU DU COMPOSANT ---
  return (
    <div className="p-6">

      {/* TITRE */}
      <h1 className="text-3xl font-bold mb-6">
        Actions de bénévolat
      </h1>

      {/* MESSAGE DE CONFIRMATION */}
      {done && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-green-600 text-white rounded-lg mb-4"
        >
          Merci pour votre participation ❤️
        </motion.div>
      )}

      {/* LISTE DES BOUTONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            onClick={() => handleSubmit(action)}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Envoi..." : action}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
// Ajout pour corriger le build
export function submitVolunteer(data: any) {
  console.log("Volunteer submitted:", data);
}

