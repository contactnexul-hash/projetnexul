"use client";

import React from "react";

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="max-w-5xl mx-auto py-16 px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
            Nexul — Paiement Hors-Ligne
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300">
            La cryptomonnaie qui continue de fonctionner même sans Internet, partout dans le monde.
          </p>
        </header>

        {/* Section principale */}
        <section className="space-y-12">
          {/* Paiement hors-ligne */}
          <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">💠 Paiement Hors-Ligne Total</h2>
            <p className="mb-6 text-gray-200">
              Chaque utilisateur possède un solde localement protégé. Les transactions sont signées
              et validées instantanément, même en zone sans réseau. Voici les modes disponibles :
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-300 text-lg">
              <li>QR Code sécurisé</li>
              <li>Bluetooth Peer-to-Peer</li>
              <li>NFC Ultra-Fast</li>
              <li>WiFi Direct crypté</li>
              <li>SMS chiffrés</li>
            </ul>
          </div>

          {/* Fonctionne même en guerre */}
          <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">🛰 Fonctionne Même en Conflit</h2>
            <p className="text-gray-200 text-lg">
              Nexul continue de fonctionner sans Internet, même en période de guerre, coupure
              gouvernementale ou catastrophe naturelle. Votre argent reste disponible à tout moment.
            </p>
          </div>

          {/* Synchronisation automatique */}
          <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-green-400">🔗 Synchronisation Automatique</h2>
            <p className="text-gray-200 text-lg">
              Dès que l’un des appareils retrouve du réseau, même faible (2G ou réseau instable),
              toutes les transactions hors-ligne se synchronisent instantanément et de manière sécurisée.
            </p>
          </div>

          {/* Zones sans réseau */}
          <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-pink-400">🌍 Zones Sans Réseau</h2>
            <p className="text-gray-200 text-lg">
              Nexul permet des paiements dans les pays où Internet est instable, censuré, inexistant
              ou trop coûteux. Les utilisateurs peuvent payer et recevoir de l’argent même en pleine
              zone de conflit ou catastrophe.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400">
          <p className="text-lg">© 2025 Nexul — La cryptomonnaie de référence mondiale hors-ligne</p>
        </footer>
      </div>
    </div>
  );
}

