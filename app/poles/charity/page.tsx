"use client";

import React from "react";
import Link from "next/link";

export default function CharityPage() {
  const causes = [
    {
      id: 1,
      title: "Aide aux enfants",
      description: "Soutenir l’éducation, la santé et le bien-être des enfants dans le besoin.",
      image: "/images/charity.png",
    },
    {
      id: 2,
      title: "Soutien aux familles",
      description: "Aide aux familles en difficulté pour l’alimentation, le logement et les soins.",
      image: "/images/charity.png",
    },
    {
      id: 3,
      title: "Urgences humanitaires",
      description: "Réponse rapide aux catastrophes naturelles ou crises locales.",
      image: "/images/charity.png",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pôle Charity — Nexul</h1>
      <p className="mb-6">
        Le pôle Charity permet de soutenir des causes sociales et humanitaires tout en gagnant des NXL et action points.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {causes.map((cause) => (
          <div
            key={cause.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img src={cause.image} alt={cause.title} className="h-24 w-24 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{cause.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{cause.description}</p>
            <Link href={`/poles/charity/actions/${cause.id}`}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Participer
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

















































