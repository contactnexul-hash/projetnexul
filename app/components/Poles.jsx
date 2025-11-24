"use client";

import React from "react";

// Données des pôles
const polesData = [
  { title: "Environnement", image: "/images/poles/photo-environnement.jpg" },
  { title: "Charity", image: "/images/poles/photo-charity nxl.jpg" },
  { title: "Education", image: "/images/poles/istockphoto-education nexul.jpg" },
  { title: "Innovation", image: "/images/poles/photo-innovation.jpg" },
  { title: "Bénévolat", image: "/images/poles/photo-benevolat.jpg" },
  { title: "Autres", image: "/images/poles/photos nexul.webp" },
];

// Export des données pour utilisation ailleurs
export const poles = polesData;

// Composant affichant les pôles
export default function Poles() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {polesData.map((pole, index) => (
        <div
          key={index}
          style={{
            width: "250px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            textAlign: "center",
            fontFamily: "'Arial', sans-serif",
            color: "#fff",
            background: "#111",
          }}
        >
          <img
            src={pole.image}
            alt={pole.title}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <h3 style={{ padding: "10px", fontSize: "18px", fontWeight: "bold", background: "#222" }}>
            {pole.title}
          </h3>
        </div>
      ))}
    </div>
  );
}


