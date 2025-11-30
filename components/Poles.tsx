import React from "react";
import Link from "next/link";

type Pole = {
  id: number;
  name: string;
  description: string;
  image: string;
  actionLink: string;
};

const poles: Pole[] = [
  {
    id: 1,
    name: "Technologie",
    description:
      "Découvre les dernières innovations technologiques et solutions digitales.",
    image: "/images/tech.png",
    actionLink: "/poles/tech",
  },
  {
    id: 2,
    name: "Finance",
    description:
      "Explore les services financiers, investissements et conseils économiques.",
    image: "/images/finance.png",
    actionLink: "/poles/finance",
  },
  {
    id: 3,
    name: "Education",
    description:
      "Accède à des ressources éducatives et programmes de formation adaptés.",
    image: "/images/education.png",
    actionLink: "/poles/education",
  },
];

export default function Poles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {poles.map((pole) => (
        <div
          key={pole.id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <img src={pole.image} alt={pole.name} className="w-full h-48 object-cover mb-4 rounded"/>
          <h2 className="text-xl font-bold mb-2">{pole.name}</h2>
          <p className="mb-4">{pole.description}</p>
          <Link href={pole.actionLink} className="text-blue-600 font-semibold hover:underline">
            Voir plus
          </Link>
        </div>
      ))}
    </div>
  );
}


