"use client";
import { Something } from './actions';
import { motion } from "framer-motion";
import { useState } from "react";
import { submitVolunteer } from "./actions/actions";
import Image from "next/image";

export default function VolunteerPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

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
    "Aider dans les refuges animaux",
  ];

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const res = await submitVolunteer(formData);
    setLoading(false);

    if (res.success) {
      setDone(true);
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-10"
      >
        <Image
          src="/images/volunteer.jpg"
          alt="Bénévolat"
          width={80}
          height={80}
          className="rounded-xl object-cover shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold">Bénévolat</h1>
          <p className="text-gray-500">Engage-toi localement, aide concrètement.</p>
        </div>
      </motion.div>

      {!done ? (
        <form action={handleSubmit} className="space-y-6">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-700"
          >
            Sélectionne les actions bénévoles que tu souhaites accomplir cette année.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actions.map((action, index) => (
              <motion.label
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
            className="w-full py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700"
          >
            {loading ? "Envoi..." : "Valider mes actions"}
          </button>
        </form>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-10"
        >
          <h2 className="text-3xl font-bold text-green-600">Merci pour ton engagement !</h2>
          <p className="text-gray-600 mt-2">
            Tes actions bénévoles ont été enregistrées.
          </p>
        </motion.div>
      )}
    </div>
  );
}



