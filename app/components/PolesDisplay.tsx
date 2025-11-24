import React from "react";
import { poles } from "./Poles";

interface PolesDisplayProps {
  lang?: string; // facultatif si tu veux gérer la langue
}

const PolesDisplay: React.FC<PolesDisplayProps> = ({ lang = "fr" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {poles.map((pole) => (
        <div key={pole.key} className={`rounded-2xl shadow-lg overflow-hidden ${pole.color} text-white`}>
          <img src={pole.image} alt={pole.name} className="w-full h-40 object-cover" />
          <div className="p-5">
            <div className="flex items-center mb-3">{pole.icon}</div>
            <h2 className="text-xl font-bold mb-2">{pole.name}</h2>
            <p className="mb-3">{pole.description}</p>
            <ul className="list-disc ml-5 mb-3">
              {pole.actions.map((action, idx) => (
                <li key={idx}>{action}</li>
              ))}
            </ul>
            <a
              href={pole.link}
              className="inline-block mt-2 px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              En savoir plus
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolesDisplay;



