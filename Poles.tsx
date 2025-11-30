import React from "react";

type Pole = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const poles: Pole[] = [
  {
    id: 1,
    title: "Pôle Technologie",
    description: "Ce pôle développe des solutions innovantes pour le numérique.",
    image: "/images/tech.png",
    link: "/poles/tech",
  },
  {
    id: 2,
    title: "Pôle Luxe",
    description: "Ce pôle s'occupe de la conception de produits haut de gamme.",
    image: "/images/luxe.png",
    link: "/poles/luxe",
  },
  {
    id: 3,
    title: "Pôle Education",
    description: "Ce pôle forme et accompagne les talents dans divers domaines.",
    image: "/images/education.png",
    link: "/poles/education",
  },
  // Ajouter d'autres pôles ici
];

const Poles: React.FC = () => {
  const handleNXLAction = (id: number) => {
    console.log("Action NXL pour le pôle:", id);
    // Ici tu peux faire une redirection ou action spécifique
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {poles.map((pole) => (
        <div key={pole.id} className="pole-card bg-white shadow-lg rounded-xl p-4 text-center">
          <img src={pole.image} alt={pole.title} className="mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">{pole.title}</h3>
          <p className="mb-4">{pole.description}</p>
          <a href={pole.link} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Voir le pôle
          </a>
          <button
            onClick={() => handleNXLAction(pole.id)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Action NXL
          </button>
        </div>
      ))}
    </div>
  );
};

export default Poles;
