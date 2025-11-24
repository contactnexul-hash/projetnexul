import React from "react";
import poles from "./Poles";
import locales from "./locales";

interface PolesDisplayProps {
  lang?: "fr" | "en";
}

const PolesDisplay: React.FC<PolesDisplayProps> = ({ lang = "fr" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {poles.map((pole, idx) => (
        <div key={idx} className={`rounded-2xl shadow-lg overflow-hidden ${pole.color} text-white`}>
          <img src={pole.image} alt={locales[lang].poles[pole.key]} className="w-full h-40 object-cover" />
          <div className="p-5">
            <div className="flex items-center mb-3">
              {pole.icon}
              <h2 className="ml-3 text-xl font-bold">{locales[lang].poles[pole.key]}</h2>
            </div>
            <p className="mb-3">{pole.description}</p>
            <ul className="list-disc list-inside mb-3">
              {locales[lang].actions[pole.key]?.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
            <a
              href={pole.link}
              className="inline-block bg-white text-black font-semibold py-2 px-4 rounded hover:opacity-90 transition"
            >
              {locales[lang].seeMore}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolesDisplay;


