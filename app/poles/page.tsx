"use client";

import { useState } from "react";
import styles from "../../styles/global.css"; // style existant

export default function PolesPage() {
  const [validated, setValidated] = useState<number[]>([]);

  const poles = [
    {
      id: 1,
      title: "Environnement",
      image: "/images/poles/photo-environnement.jpg",
      description:
        "Agis pour la planète : énergie renouvelable, gestion des déchets et protection de la biodiversité.",
      actions: [
        "Énergie renouvelable",
        "Gestion des déchets",
        "Protection de la biodiversité",
      ],
    },
    {
      id: 2,
      title: "Charity",
      image: "/images/poles/photo-charity nxl.jpg",
      description:
        "Engage-toi dans des projets humanitaires et collectes de fonds pour impacter localement.",
      actions: ["Collectes de fonds", "Projets humanitaires", "Bénévolat"],
    },
    {
      id: 3,
      title: "Éducation",
      image: "/images/poles/istockphoto-education nexul.jpg",
      description:
        "Partage le savoir : formation, ateliers et sensibilisation des participants.",
      actions: [
        "Formation & e-learning",
        "Ateliers & séminaires",
        "Sensibilisation",
      ],
    },
    {
      id: 4,
      title: "Innovation",
      image: "/images/poles/photo-innovation.jpg",
      description: "Développe des idées nouvelles, prototypes et projets R&D.",
      actions: ["Innovation", "Prototypes", "R&D"],
    },
    {
      id: 5,
      title: "Communauté",
      image: "/images/poles/photos nexul.webp",
      description:
        "Rassemble et connecte les participants : partenariats, réseaux et événements.",
      actions: ["Rassemblements", "Partenariats", "Réseaux"],
    },
    {
      id: 6,
      title: "Bénévolat",
      image: "/images/poles/photo-benevolat.jpg",
      description:
        "Participe à des missions concrètes pour soutenir la communauté.",
      actions: ["Actions locales", "Soutien aux projets"],
    },
    {
      id: 7,
      title: "Technologie",
      image: "/images/poles/technology.jpg",
      description:
        "Utilise la technologie pour impacter et développer des projets digitaux.",
      actions: ["Projets digitaux", "Bénévolat tech"],
    },
  ];

  const handleValidate = (poleId: number, actionIndex: number) => {
    const key = poleId * 10 + actionIndex;
    if (!validated.includes(key)) {
      setValidated([...validated, key]);
      alert("Action validée !");
    }
  };

  return (
    <div className="poles-container" style={{ padding: "20px" }}>
      <h1 className="page-title">Nos Pôles</h1>
      <div className="poles-grid" style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {poles.map((pole) => (
          <div
            key={pole.id}
            className="pole-card"
            style={{
              width: "calc(33% - 20px)",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 className="pole-title">{pole.title}</h2>
            <img
              src={pole.image}
              alt={pole.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p className="pole-description">{pole.description}</p>
            <div className="actions-list">
              {pole.actions.map((action, index) => (
                <div
                  key={index}
                  className="action-item"
                  style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
                >
                  <span>{action}</span>
                  <button
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#0070f3",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleValidate(pole.id, index)}
                  >
                    Valider
                  </button>
                  {validated.includes(pole.id * 10 + index) && (
                    <span style={{ marginLeft: "10px", color: "green", fontWeight: "bold" }}>
                      ✔ Validée
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="crypto-widget" style={{ marginTop: "50px" }}>
        <h2>Suivi Crypto en direct</h2>
        <iframe
          src="https://www.tradingview.com/widgetembed/?symbol=CRYPTO:BTCUSDT"
          width="100%"
          height="400"
          frameBorder="0"
          allowTransparency={true}
        ></iframe>
      </div>
    </div>
  );
}


