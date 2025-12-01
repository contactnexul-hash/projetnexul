"use client";








import Link from "next/link";

export default function EnvironmentPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto font-sans text-gray-900">

      {/* TITRE */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">🌱 Pôle Environnement</h1>
        <p className="text-lg text-gray-700">
          Agis pour la planète et gagne des points NXL vérifiés via la blockchain.
          Chaque action écologique génère un impact mesurable et récompensé.
        </p>
      </header>

      {/* ACTIONS DISPONIBLES */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">🌍 Actions écologiques possibles</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Planter un arbre (preuve photo + localisation)</li>
          <li>Participer à un nettoyage de plage, forêt ou quartier</li>
          <li>Recycler du plastique ou du métal</li>
          <li>Organiser une collecte de déchets</li>
          <li>Soutenir une association environnementale locale</li>
          <li>Mesurer et réduire son empreinte carbone</li>
          <li>Participer à des ateliers écologiques certifiés</li>
        </ul>
      </section>

      {/* IMPACT ET RÉCOMPENSES */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">💚 Impact & Récompenses NXL</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Gain de NXL pour chaque action validée</li>
          <li>Badges d’impact écologique cumulables</li>
          <li>Vouchers blockchain signés par Guardian</li>
          <li>Tableau de bord personnel d’impact éco-responsable</li>
          <li>Certifications environnementales (Eco-Badge NXL)</li>
          <li>NFT “Green Identity” débloquable selon ton niveau</li>
        </ul>
      </section>

      {/* FREEZE — PROTECTION EN CAS DE CRISE */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">🛑 Fonction Freeze — Sécurité absolue</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          En cas de forte baisse du marché crypto, Nexul Ultimate V3 active automatiquement 
          un <strong>Freeze de sécurité</strong> :
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Blocage temporaire des transactions sensibles</li>
          <li>Protection contre les ventes paniques</li>
          <li>Stabilisation de la valeur du NXL</li>
          <li>Mécanisme similaire aux “circuit breakers” boursiers</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Ce système garantit une croissance durable, même en période de crise.
        </p>
      </section>

      {/* BOUTON */}
      <div className="text-center mt-10">
        <Link href="/dashboard">
          <span className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
            Accéder au tableau de bord
          </span>
        </Link>
      </div>

    </div>
  );
}





















































