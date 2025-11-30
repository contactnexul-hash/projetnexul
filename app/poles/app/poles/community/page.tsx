"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { submitCommunity } from "./actions/actions";

export default function CommunityPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const actions = [
    "Participer à nos événements",
    "Créer un groupe local",
    "Animer un atelier Nexul",
    "Collaborer avec d'autres membres",
    "Inviter des amis au projet",
    "Participer aux réunions numériques",
    "Proposer une idée de projet",
    "Devenir ambassadeur Nexul",
    "Co-organiser un événement officiel",
    "Tester nos nouvelles fonctionnalités",
  ];

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const res = await submitCommunity(formData);
    setLoading(false);

    if (res.success) setDone(true);
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-10"
      >
        <Image
          src="/images/community.jpg"
          alt="Communauté"
          width={80}
          height={80}
          className="rounded-xl object-cover shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold">Communauté</h1>
          <p className="text-gray-500">Rejoins la famille Nexul.</p>
        </div>
      </motion.div>

      {!done ? (
        <form action={handleSubmit} className="space-y-6">

          <p className="text-gray-700">
            Sélectionne les actions communautaires que tu veux accomplir cette année.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actions.map((action, i) => (
              <motion.label
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 border rounded-xl shadow-sm cursor-pointer hover:bg-gray-50"
              >
                <input type="checkbox" name="actions" value={action} />
                <span>{action}</span>
              </motion.label>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700"
          >
            {loading ? "Envoi..." : "Valider mes actions"}
          </button>
        </form>
      ) : (
        <div className="text-center py-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl font-bold text-purple-600"
          >
            Merci d’avoir rejoint la communauté !
          </motion.h2>

          <p className="text-gray-600 mt-2">
            Tes engagements communautaires sont enregistrés.
          </p>
        </div>
      )}

    </div>
  );
}
