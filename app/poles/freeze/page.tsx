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
            ou quand un <strong>évènement mondial majeur</strong> (faillite d’un exchange, attaque, crash financier) provoque une panique de marché.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-6">
          🧊 Que se passe-t-il lors du Freeze ?
        </h2>

        <p className="mt-2 text-gray-700">
          Durant le Freeze, les actions suivantes sont temporairement bloquées :
        </p>

        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>transactions rapides</li>
          <li>retraits importants</li>
          <li>échanges contre des actifs externes</li>
        </ul>

        <p className="mt-4 text-gray-700">
          ➜ Les <strong>soldes des utilisateurs sont sécurisés</strong>  
          et aucune perte ne peut être subie durant la période.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-6">
          ⏳ Quand le Freeze se désactive ?
        </h2>

        <p className="mt-2 text-gray-700">
          Le Freeze se lève automatiquement lorsque :
        </p>

        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>la volatilité revient à un niveau normal ;</li>
          <li>la liquidité est stabilisée ;</li>
          <li>un minimum de 6 heures de stabilité consécutive est observé.</li>
        </ul>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

