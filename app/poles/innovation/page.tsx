"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Wallet from "../../components/Wallet";
import CryptoLive from "../../components/CryptoLive";
import Link from "next/link";

export default function InnovationPage() {
  const [state, setState] = useState(null);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '10px' }}>
      <header style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
        <Navbar />
      </header>

      <section style={{ backgroundColor: '#d0f0d0', margin: '10px 0', padding: '10px' }}>
        <h2>Crypto en direct</h2>
        <CryptoLive />
      </section>

      <section style={{ backgroundColor: '#f0d0d0', margin: '10px 0', padding: '10px' }}>
        <h2>Wallet</h2>
        <Wallet />
      </section>

      <main style={{ backgroundColor: '#d0d0f0', margin: '10px 0', padding: '10px' }}>
        <h1>Innovation Pole</h1>
        <p>Contenu spécifique et actions détaillées pour le pôle Innovation.</p>

        <h3>Liens vers les autres pôles :</h3>
        <ul>
          <li><Link href="/poles/animals" style={{color: 'blue'}}>Animals</Link></li>
          <li><Link href="/poles/charity" style={{color: 'blue'}}>Charity</Link></li>
          <li><Link href="/poles/education" style={{color: 'blue'}}>Education</Link></li>
          <li><Link href="/poles/environment" style={{color: 'blue'}}>Environment</Link></li>
          <li><Link href="/poles/impact" style={{color: 'blue'}}>Impact</Link></li>
        </ul>
      </main>
    </div>
  );
}
