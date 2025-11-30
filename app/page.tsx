"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Bienvenue sur Nexul
      </h1>

      <p className="text-lg text-gray-700 mb-10 text-center max-w-xl">
        Découvrez les différents pôles du centre de formation et explorez les
        ressources qui vous sont dédiées.
      </p>

      <Link
        href="/poles"
        className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Explorer les pôles
      </Link>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Pôle Informatique</h2>
          <p className="text-gray-600 mb-4">
            Développement web, systèmes, réseaux, cybersécurité.
          </p>
          <Link
            href="/poles/informatique"
            className="text-blue-600 font-semibold hover:underline"
          >
            Accéder →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Pôle Gestion</h2>
          <p className="text-gray-600 mb-4">
            RH, comptabilité, administration, management.
          </p>
          <Link
            href="/poles/gestion"
            className="text-blue-600 font-semibold hover:underline"
          >
            Accéder →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Pôle Industrie</h2>
          <p className="text-gray-600 mb-4">
            Maintenance, électrotechnique, production.
          </p>
          <Link
            href="/poles/industrie"
            className="text-blue-600 font-semibold hover:underline"
          >
            Accéder →
          </Link>
        </div>
      </div>
    </div>
  );
}














