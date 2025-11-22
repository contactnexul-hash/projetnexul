"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CryptoLive() {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
        setPrice(res.data.ethereum.usd);
      } catch (err) {
        console.error("Erreur récupération crypto", err);
      }
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // mise à jour toutes les 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4">
      {price !== null ? (
        <p>Prix ETH : ${price.toLocaleString()}</p>
      ) : (
        <p>Chargement des cours...</p>
      )}
    </div>
  );
}
