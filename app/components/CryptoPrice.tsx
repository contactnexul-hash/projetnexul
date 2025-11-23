"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface CryptoPriceProps {
  id?: string;
}

export default function CryptoPrice({ id = "ethereum" }: CryptoPriceProps) {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrice = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
      );

      if (res.data && res.data[id]) {
        setPrice(res.data[id].usd);
      } else {
        setPrice(null);
        setError("Prix introuvable");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la récupération du prix");
      setPrice(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // mise à jour toutes les 30s
    return () => clearInterval(interval);
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      Prix de {id} : ${price}
    </div>
  );
}

