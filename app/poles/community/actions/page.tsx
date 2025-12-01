"use client";








import { motion } from "framer-motion";
import { useState } from "react";
import { submitCommunity } from "../actions";
import Image from "next/image";

export default function CommunityPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const actions = [
    "Participer à un événement communautaire",
    "Soutenir un projet local",
    "Organiser un atelier",
    "Rassembler des bénévoles",
    "Créer un partenariat",
  ];

  const handleSubmit = async (action: string) => {
    setLoading(true);
    await submitCommunity(action);
    setLoading(false);
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Pôle Communauté</h1>

      {done && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-green-600 text-white rounded-lg mb-4"
        >
          Merci pour votre participation ❤️
        </motion.div>
      )}

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




