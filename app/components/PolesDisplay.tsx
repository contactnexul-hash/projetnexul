import React from "react";
import { poles } from "./Poles";
import locales from "./locales";

interface PolesDisplayProps {
  poles: typeof poles;
  lang: string;
}

const PolesDisplay: React.FC<PolesDisplayProps> = ({ poles, lang }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {poles.map((pole, idx) => (
        <div key={idx} className={`rounded-2xl shadow-lg overflow-hidden ${pole.color} text-white`}>
          <img src={pole.image} alt={locales[lang].poles[pole.name]} className="w-full h-40 object-cover" />
          <div className="p-5">
            <div className="flex items-center mb-3">{pole.icon}</div>
            <h2 className="text-xl font-bold mb-2">{pole.name}</h2>
            <p>{pole.description}</p>
            <ul>
              {pole.actions.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolesDisplay;




