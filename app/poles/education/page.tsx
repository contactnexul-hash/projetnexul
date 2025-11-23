"use client";
import Wallet from "../../components/Wallet";
import CryptoLive from "../../components/CryptoLive";
import CryptoLive from "../../components/CryptoLive";
import Wallet from "../../components/Wallet";
"use client";
import Wallet from "../../components/Wallet";
import CryptoLive from "../../components/CryptoLive";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function EducationPage() {
  const [actions, setActions] = useState([
    { id: 1, title: "Action 1", description: "Description détaillée de l'action 1 pour Education", validated: false, nxl: 10 },
    { id: 2, title: "Action 2", description: "Description détaillée de l'action 2 pour Education", validated: false, nxl: 15 },
    { id: 3, title: "Action 3", description: "Description détaillée de l'action 3 pour Education", validated: false, nxl: 20 },
  ]);

  const validateAction = (id: number) => {
    setActions(actions.map(a => a.id === id ? { ...a, validated: true } : a));
    alert("Action validée, NXL gagné !");
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
    <Wallet />
    <CryptoLive />
        <section>
          <h1 className="text-4xl font-bold mb-4">Education</h1>
          <p className="text-lg text-gray-700">
            Description détaillée du pôle Education. Ici tu peux expliquer la mission, les objectifs, et les actions clés du pôle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Actions disponibles</h2>
          <ul className="space-y-6">
            {actions.map(action => (
              <li key={action.id} className="p-6 border rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{action.title}</h3>
                  <p className="mt-2 text-gray-700">{action.description}</p>
                  <p className="mt-1 font-medium text-green-600">{action.nxl} NXL</p>
                </div>
                <button
                  onClick={() => validateAction(action.id)}
                  disabled={action.validated}
                  className={`mt-4 md:mt-0 px-5 py-2 rounded-lg font-semibold transition-colors ${action.validated ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"}`}
                >
                  {action.validated ? "Validée" : "Valider"}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Pourquoi ce pôle est important</h2>
          <p className="text-gray-700">
            Chaque action validée contribue à l'avancement et à la mission globale du pôle Education. Les NXL gagnés servent à débloquer des fonctionnalités et montrer ton engagement au sein de Nexul.
          </p>
        </section>
      </main>
    </>
  );
}
