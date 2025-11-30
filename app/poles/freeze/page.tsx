"use client";
import Link from "next/link";

export default function FreezePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Mode Freeze – Sécurité Anti-Volatilité
        </h1>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Le <strong>mode Freeze</strong> est un mécanisme automatique de sécurité
          intégré dans le système Nexul afin de protéger la valeur du token
          <strong> NXL</strong> lorsque le marché crypto connaît une chute brutale.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-6">
          🔒 Quand le mode Freeze s’active ?
        </h2>

        <p className="mt-2 text-gray-700">
          Le Freeze s’active automatiquement quand :
        </p>

        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>
            le <strong>marché crypto chute de plus de -15%</strong> en moins de 24 heures ;
          </li>
          <li>
            ou quand la <strong>liquidité générale devient instable</strong> selon un algorithme interne ;
          </li>
          <li>
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FreezePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Système Freeze — Sécurité Automatique
        </motion.h1>

        <p className="text-gray-700 text-lg mb-8">
          Le système <strong>FREEZE</strong> protège Nexul en cas d’activité anormale.
          Dès que notre IA détecte une chute, un risque, ou un comportement
          suspect, elle active un gel automatique des transactions pour protéger
          les utilisateurs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-3">🔒 Protection instantanée</h2>
            <p className="text-gray-600">
              Le gel est déclenché en moins de 0,6 seconde grâce à un modèle
              d’analyse temps réel.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-3">📉 Chute anormale</h2>
            <p className="text-gray-600">
              En cas de baisse rapide du NXL ou surcharge réseau, les opérations
              sont stoppées jusqu’à sécurisation.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-3">🛡 Prévention des fraudes</h2>
            <p className="text-gray-600">
              Toute activité suspecte déclenche un audit automatique par IA.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-3">⚠ Zone d’alerte</h2>
            <p className="text-gray-600">
              Les utilisateurs sont informés immédiatement par une alerte globale.
            </p>
          </div>
        </div>

        <Link
          href="/poles/freeze/actions"
          className="mt-10 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Voir les Actions Freeze
        </Link>
      </div>
    </div>
  );
}


