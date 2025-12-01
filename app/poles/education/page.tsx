"use client";








import React from "react";
import Link from "next/link";

export default function EducationPage() {
  const programs = [
    {
      id: 1,
      title: "Cours en ligne",
      description: "Accès à des formations gratuites et premium pour tous les âges.",
      image: "/images/education.png",
    },
    {
      id: 2,
      title: "Mentorat",
      description: "Accompagnement personnalisé pour étudiants et jeunes professionnels.",
      image: "/images/education.png",
    },
    {
      id: 3,
      title: "Ateliers pratiques",
      description: "Sessions interactives pour apprendre des compétences concrètes.",
      image: "/images/education.png",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pôle Éducation — Nexul</h1>
      <p className="mb-6">
        Le pôle Éducation offre des programmes et formations tout en générant des action points et NXL pour l’utilisateur.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img src={program.image} alt={program.title} className="h-24 w-24 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{program.description}</p>
            <Link href={`/poles/education/actions/${program.id}`}>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Participer
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}





















































