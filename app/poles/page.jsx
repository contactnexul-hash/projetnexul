"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const polesData = [
  {
    name: "Environnement",
    color: "#1DB954",
    image: "/images/poles/photo-environnement.jpg",
    actions: [
      "Nettoyer plages et forêts",
      "Recycler et trier déchets",
      "Participer à des projets écologiques"
    ]
  },
  {
    name: "Charity",
    color: "#FF4500",
    image: "/images/poles/photo-charity nxl.jpg",
    actions: [
      "Soutenir associations locales",
      "Donner du matériel ou vêtements",
      "Participer à des événements caritatifs"
    ]
  },
  {
    name: "Éducation / Anti-harcèlement",
    color: "#FF69B4",
    image: "/images/poles/istockphoto-education nexul.jpg",
    actions: [
      "Aider élèves motivés / récompense efforts",
      "Lutter contre harcèlement scolaire et travail"
    ]
  },
  {
    name: "Innovation",
    color: "#00BFFF",
    image: "/images/poles/photo-innovation.jpg",
    actions: [
      "Créer projets Tech & Web3",
      "Développer outils à impact social"
    ]
  },
  {
    name: "Bénévolat",
    color: "#FFD700",
    image: "/images/poles/photo-benevolat.jpg",
    actions: [
      "Engage-toi localement",
      "Participer à des missions ponctuelles"
    ]
  },
  {
    name: "Communauté",
    color: "#8A2BE2",
    image: "/images/poles/photos nexul.webp",
    actions: [
      "Organiser événements et rencontres",
      "Créer partenariats locaux"
    ]
  }
];

export default function Poles() {
  const [loading, setLoading] = useState(true);
  const [openIdx, setOpenIdx] = useState(null);
  const [nxl, setNxl] = useState(0);
  const [account, setAccount] = useState(null);
  const [crypto, setCrypto] = useState({BTC:"--",ETH:"--",NXL:"--"});
  const [expanded, setExpanded] = useState({});

  useEffect(()=>{
    const timer = setTimeout(()=>setLoading(false),2500);
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
      .then(res=>res.json())
      .then(data=>setCrypto({BTC:data.bitcoin.usd,ETH:data.ethereum.usd,NXL:"--"}))
      .catch(()=>{});
    return ()=>clearTimeout(timer);
  },[]);

  const connectWallet = async () => {
    if(window.ethereum){
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } else alert("Wallet non détecté !");
  };

  const handleAction = () => { setNxl(prev=>prev+1); alert("✅ NXL attribués !"); };

  if(loading){
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#080808"}}>
        <img src="/images/local/symbole nexul.jpg" style={{width:120,animation:"glow 2.5s infinite alternate, zoomIn 2.5s"}}/>
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
    <div style={{minHeight:"100vh",padding:"2rem",background:"#080808",color:"#f5f5f5",fontFamily:"Inter,system-ui",transition:"all 0.5s"}}>
      <div style={{ padding:"2rem", background:"#111", color:"#fff" }}>
        <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"}}>
          <h1>Pôles d'Impact Nexul</h1>
        </header>

        <div style={{marginBottom:"1rem"}}>NXL: {nxl} | BTC: ${crypto.BTC} | ETH: ${crypto.ETH}</div>

        <main style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1.5rem"}}>
          {polesData.map((pole,index)=>(
            <div key={pole.name} style={{
              background:"#0b0b0b",
              borderRadius:12,
              padding:"1rem",
              boxShadow:"0 8px 24px rgba(0,0,0,0.6)",
              transition:"all 0.3s",
              overflow:"hidden"
            }}>
              <div style={{
                width:"100%",
                height:180,
                backgroundImage:`url(${pole.image})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                borderRadius:8,
                marginBottom:"1rem",
                boxShadow:"0 4px 20px rgba(0,0,0,0.5)"
              }}></div>

              <h2 style={{color:pole.color,cursor:"pointer"}} onClick={()=>setExpanded({...expanded,[index]:!expanded[index]})}>
                {pole.name}
              </h2>

              {expanded[index] && (
                <ul style={{marginTop:"0.5rem",animation:"fadeIn 0.5s"}}>
                  {pole.actions.map((a,i)=>(
                    <li key={i} style={{marginBottom:"1rem",padding:"0.5rem",background:"#1a1a1a",borderRadius:8}}>
                      <div style={{fontWeight:600}}>{a}</div>
                      <button onClick={handleAction} style={{marginTop:"0.5rem",background:pole.color,color:"#000",fontWeight:700,padding:"0.5rem 1rem",borderRadius:6}}>
                        Valider et gagner NXL
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </main>

        <Link href="/" style={{color:"#ffd700", display:"block", marginTop:"2rem"}}>Retour à l'accueil</Link>

        <style jsx>{`
          @keyframes fadeIn {
            0% {opacity:0; transform:translateY(-10px);}
            100% {opacity:1; transform:translateY(0);}
          }
        `}</style>
      </div>
    </div>
  );
}
EOF


