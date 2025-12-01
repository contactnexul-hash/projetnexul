"use client";








import { useState } from "react";
import { motion } from "framer-motion";
import { registerFreezeAction } from "./actions";

export default function FreezeActionsPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const events = [
    "Détection d’une chute du marché",
    "Anomalie réseau",
    "Blocage anti-fraude",
    "Gel préventif automatique",
  ];

  async function submit(eventName: string) {
    setLoading(true);
    await registerFreezeAction({ event: eventName, date: new Date() });
    setLoading(false);
    setDone(true);

    setTimeout(() => setDone(false), 2000);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">
          Actions du Système Freeze
        </h1>

        <div className="space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 bg-white rounded-xl shadow flex justify-between items-center"
            >
              <span>{event}</span>

              <button
                disabled={loading}
                onClick={() => submit(event)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Enregistrer
              </button>
            </motion.div>
          ))}
        </div>

        {done && (
          <p className="mt-6 text-center text-green-600 font-semibold">
            ✓ Action enregistrée
          </p>
        )}
      </div>
    </div>
  );
}


