"use client";








import Link from "next/link";

export default function InnovationPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto font-sans text-gray-900">

      {/* TITRE */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">🚀 Pôle Innovation</h1>
        <p className="text-lg text-gray-700">
          Le pôle Innovation développe les technologies avancées de Nexul :
          IA, blockchain, automation, cybersécurité, outils Guardian et
          systèmes de stabilité économique comme le Freeze.
        </p>
      </header>

      {/* SECTIONS – TECHNOLOGIES */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">🧠 Technologies développées</h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Intelligence Artificielle Guardian</strong> – Analyse en temps réel,
            détection de fraude, validation des actions sociales et écologiques.
          </li>
          <li>
            <strong>Blockchain NexulChain</strong> – Traçabilité, preuves cryptographiques,
            vouchers signés, réduction des fraudes.
          </li>
          <li>
            <strong>Automatisation sécurisée</strong> – Vérification automatique des preuves,
            scoring intelligent, attribution automatique des points NXL.
          </li>
          <li>
            <strong>Outils anti-manipulation</strong> – Système de sécurité inspiré des marchés traditionnels.
          </li>
          <li>
            <strong>Smart Contracts adaptatifs</strong> – Contractualisation autonome des missions NXL.
          </li>
          <li>
            <strong>Système de réputation NXL</strong> – Score basé sur la confiance, les missions,
            le comportement et les preuves validées.
          </li>
        </ul>
      </section>

      {/* SECTION — FREEZE */}
      <section className="mb-10 bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-3xl font-semibold mb-4">🛑 Freeze : L’innovation majeure de Nexul</h2>
        <p className="text-gray-700 mb-4">
          Le Freeze est une technologie unique permettant de stabiliser l’économie de Nexul.
          Lors de mouvements extrêmes du marché crypto :
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Blocage automatique des transactions risquées</li>
          <li>Protection contre les crashs brutaux du marché</li>
          <li>Évite les spirales de panique</li>
          <li>Maintient une valeur stable pour les détenteurs de NXL</li>
          <li>Inspired by traditional finance “Circuit Breakers”</li>
        </ul>

        <p className="mt-4 text-gray-700">
          Le Freeze est directement intégré au protocole, rendant Nexul l’un des
          tokens les plus résilients du marché DeFi moderne.
        </p>
      </section>

      {/* SECTION – PROJETS EN COURS */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">🧩 Projets actuels</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Développement du Dashboard 3.0 ultra-interactif</li>
          <li>Intégration IA pour analyser l’impact réel des utilisateurs</li>
          <li>NFT “Proof of Action” certifiant les missions réussies</li>
          <li>Application mobile Nexul (Android + iOS)</li>
          <li>Version Lite pour pays émergents à faible connexion</li>
          <li>Stable Engine : moteur anti-volatilité intelligent</li>
        </ul>
      </section>

      {/* SECTION — RÉCOMPENSES */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">🎖️ Récompenses & Avantages</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Badges Innovator & Master Innovator NXL</li>
          <li>Accès prioritaire aux nouvelles apps Nexul</li>
          <li>Points bonus pour participation aux tests</li>
          <li>Tokenomics préférentielle pour les innovateurs actifs</li>
          <li>Possibilité de co-créer des outils officiels Nexul</li>
        </ul>
      </section>

      {/* BOUTON */}
      <div className="text-center mt-10">
        <Link href="/dashboard">
          <span className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Accéder au tableau de bord
          </span>
        </Link>
      </div>

    </div>
  );
}



