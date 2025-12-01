"use client";







import { useState } from "react";
import { submitCommunity } from "./actions";

export default function CommunityPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (action: string) => {
    setLoading(true);
    await submitCommunity(action);
    setLoading(false);
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  };

  const actions = [
    "Organiser un événement local",
    "Participer à un atelier communautaire",
    "Soutenir une initiative sociale"
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Actions Communauté</h1>
      {done && <div className="p-4 bg-green-600 text-white rounded-lg mb-4">Merci pour votre participation ❤️</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleSubmit(action)}
            disabled={loading}
            className="p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            {loading ? "Envoi..." : action}
          </button>
        ))}
      </div>
    </div>
  );
}





