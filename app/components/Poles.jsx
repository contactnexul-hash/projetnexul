"use client";
import { useState } from "react";

const polesData = [
  { name: "Environnement", color: "#1DB954", image: "/images/poles/photo-environnement.jpg", actions: ["Agir pour la planète", "Sensibiliser aux énergies renouvelables"] },
  { name: "Education / Anti-harcèlement", color: "#FF69B4", image: "/images/poles/istockphoto-education nexul.jpg", actions: ["Aider élèves motivés / récompense efforts", "Lutter contre harcèlement scolaire"] },
  { name: "Relations avec l'Etat", color: "#00BFFF", image: "/images/poles/photo-benevolat.jpg", actions: ["Créer liens et faciliter démarches officielles"] },
  { name: "Commerce / Proximité", color: "#FF8C00", image: "/images/poles/photo-charity nxl.jpg", actions: ["Favoriser commerces locaux", "Soutenir économie de proximité"] },
  { name: "Innovation", color: "#8A2BE2", image: "/images/poles/photo-innovation.jpg", actions: ["Développer solutions tech pour impact social"] }
];

export default function Poles() {
  const [expanded, setExpanded] = useState({});

  const handleAction = () => {
    alert("✅ NXL attribués !");
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
      {polesData.map((pole, index) => (
        <div key={index} style={{ background: "#0b0b0b", borderRadius: 12, padding: "1rem", boxShadow: "0 8px 24px rgba(0,0,0,0.6)", transition: "all 0.3s" }}>
          <img src={pole.image} alt={pole.name} style={{ width: "100%", borderRadius: "12px", marginBottom: "0.5rem" }} />
          <h2 style={{ color: pole.color, cursor: "pointer" }} onClick={() => setExpanded({ ...expanded, [index]: !expanded[index] })}>
            {pole.name}
          </h2>
          {expanded[index] && (
            <ul style={{ marginTop: "0.5rem" }}>
              {pole.actions.map((action, i) => (
                <li key={i} style={{ marginBottom: "1rem", padding: "0.5rem", background: "#1a1a1a", borderRadius: 8 }}>
                  <div style={{ fontWeight: 600 }}>{action}</div>
                  <button onClick={handleAction} style={{ marginTop: "0.5rem", background: pole.color, color: "#000", fontWeight: 700, padding: "0.5rem 1rem", borderRadius: 6 }}>
                    Valider et gagner NXL
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
