"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const polesData = [
  {
    name: "Environnement",
    color: "#1DB954",
    image: "/images/poles/environment.jpg",
    actions: [
      "Participer à un nettoyage de plage ou rivière",
      "Planter des arbres et jardiner localement",
      "Recycler et promouvoir les déchets zéro déchet",
    ],
  },
  {
    name: "Charity",
    color: "#FF4500",
    image: "/images/poles/charity.jpg",
    actions: [
      "Soutenir financièrement des associations locales",
      "Collecter des dons et vêtements pour les démunis",
      "Participer à des événements caritatifs",
    ],
  },
  {
    name: "Éducation / Anti-harcèlement",
    color: "#FF69B4",
    image: "/images/poles/education.jpg",
    actions: [
      "Aider les élèves motivés / récompense efforts",
      "Lutter contre le harcèlement scolaire et travail",
      "Organiser des ateliers éducatifs en ligne",
    ],
  },
  {
    name: "Innovation",
    color: "#00CED1",
    image: "/images/poles/innovation.jpg",
    actions: [
      "Créer des projets tech ou Web3 à impact",
      "Proposer des solutions durables via l'innovation",
      "Tester des prototypes pour la communauté",
    ],
  },
  {
    name: "Bénévolat",
    color: "#FFD700",
    image: "/images/poles/volunteering.jpg",
    actions: [
      "Participer à des missions locales",
      "Aider des associations de quartier",
      "Encadrer des ateliers citoyens",
    ],
  },
  {
    name: "Communauté",
    color: "#8A2BE2",
    image: "/images/poles/community.jpg",
    actions: [
      "Organiser des rassemblements et événements locaux",
      "Créer des partenariats entre associations et citoyens",
      "Participer aux projets communautaires",
    ],
  },
  {
    name: "Relations avec l'État",
    color: "#00BFFF",
    image: "/images/poles/state.jpg",
    actions: [
      "Créer des liens et faciliter les démarches officielles",
      "Informer la communauté sur les droits et procédures",
    ],
  },
  {
    name: "Commerce / Proximité",
    color: "#FF8C00",
    image: "/images/poles/commerce.jpg",
    actions: [
      "Favoriser les commerces locaux",
      "Soutenir l'économie de proximité",
    ],
  },
  {
    name: "Santé",
    color: "#DC143C",
    image: "/images/poles/health.jpg",
    actions: [
      "Arrêter de fumer ou réduire les addictions",
      "Perdre du poids et suivre une routine saine",
      "Participer à des programmes de resocialisation pour SDF",
    ],
  },
];

export default function Poles() {
  const [loading, setLoading] = useState(true);
  const [openIdx, setOpenIdx] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [nxl, setNxl] = useState(0);
  const [account, setAccount] = useState(null);
  const [crypto, setCrypto] = useState({ BTC: "--", ETH: "--", NXL: "--" });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
      .then((res) => res.json())
      .then((data) => setCrypto({ BTC: data.bitcoin.usd, ETH: data.ethereum.usd, NXL: "--" }))
      .catch(() => {});
    return () => clearTimeout(timer);
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } else alert("Wallet non détecté !");
  };

  const handleAction = () => {
    setNxl((prev) => prev + 1);
    alert("✅ NXL attribués !");
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#080808" }}>
        <img src="/images/local/symbole nexul.jpg" style={{ width: 120, animation: "glow 2.5s infinite alternate, zoomIn 2.5s" }} />
        <style jsx>{`
          @keyframes glow {
            0% { filter: drop-shadow(0 0 10px #ffd700); }
            100% { filter: drop-shadow(0 0 25px #ffd700); }
          }
          @keyframes zoomIn {
            0% { transform: scale(1.2); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", padding: "2rem", background: "#080808", color: "#f5f5f5", fontFamily: "Inter,system-ui", transition: "all 0.5s" }}>
      <div style={{ padding: "2rem", background: "#111", color: "#fff" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h1>Pôles d'Impact Nexul</h1>
        </header>
        <div style={{ marginBottom: "1rem" }}>NXL: {nxl} | BTC: ${crypto.BTC} | ETH: ${crypto.ETH}</div>
        <main style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          {polesData.map((pole, index) => (
            <div key={index} style={{ background: "#0b0b0b", borderRadius: 12, padding: "1rem", boxShadow: "0 8px 24px rgba(0,0,0,0.6)", transition: "all 0.3s" }}>
              <h2 style={{ color: pole.color, cursor: "pointer" }} onClick={() => setExpanded({ ...expanded, [index]: !expanded[index] })}>
                {pole.name}
              </h2>
              <img src={pole.image} style={{ width: "100%", borderRadius: 12, marginBottom: "1rem" }} />
              {expanded[index] && (
                <ul style={{ marginTop: "0.5rem", animation: "fadeIn 0.5s" }}>
                  {pole.actions.map((a, i) => (
                    <li key={i} style={{ marginBottom: "1rem", padding: "0.5rem", background: "#1a1a1a", borderRadius: 8 }}>
                      <div style={{ fontWeight: 600 }}>{a}</div>
                      <button onClick={handleAction} style={{ marginTop: "0.5rem", background: pole.color, color: "#000", fontWeight: 700, padding: "0.5rem 1rem", borderRadius: 6 }}>
                        Valider et gagner NXL
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </main>
        <Link href="/" style={{ color: "#ffd700", display: "block", marginTop: "2rem" }}>Retour à l'accueil</Link>
        <style jsx>{`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}

