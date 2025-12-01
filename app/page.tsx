'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cryptos, setCryptos] = useState<any[]>([]);
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
      .then(r=>setCryptos(r.data)).catch(()=>{});
  },[]);
  const chartData = {
    labels: cryptos.map(c=>c?.symbol?.toUpperCase()),
    datasets: [{ label: 'Price (USD)', data: cryptos.map(c=>c?.current_price), borderColor: '#f0b90b', backgroundColor: 'rgba(240,185,11,0.15)' }]
  };

  return (
    <div className="space-y-8">
      <motion.h1 initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} className="text-5xl font-bold text-accent">Nexul — Luxe · Technologie · Impact</motion.h1>
      <p className="text-graylight">Plateforme premium pour la charité, l'éducation et l'impact. Accède aux fonctionnalités exclusives avec ton Nexul Pass (NXL).</p>

      <div className="flex gap-6 flex-wrap">
        <Image src="https://source.unsplash.com/600x360/?luxury,crypto" alt="hero" width={600} height={360} />
        <div className="flex-1">
          <button className="mb-4">Mint ton NXL</button>
          <button className="ml-4">Accéder au tableau de bord</button>
          <div className="mt-6 p-4 bg-secondary rounded shadow">
            <h3 className="text-lg font-bold">Top cryptos</h3>
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}



















