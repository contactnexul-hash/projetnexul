"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Wallet from "../../components/Wallet";
import CryptoLive from "../../components/CryptoLive";
import Link from "next/link";

export default function InnovationPage() {
  const [state, setState] = useState(null);

  return (
    <div>
      <Navbar />
      <CryptoLive />
      <Wallet />

      <main>
        <h1>Innovation Pole</h1>
        <p>Ici vous pouvez ajouter les détails et actions spécifiques pour le pôle Innovation.</p>

        <section>
          <h2>Liens vers les autres pôles :</h2>
          <ul>
            <li><Link href="/poles/animals">Animals</Link></li>
            <li><Link href="/poles/charity">Charity</Link></li>
            <li><Link href="/poles/education">Education</Link></li>
            <li><Link href="/poles/environment">Environment</Link></li>
            <li><Link href="/poles/impact">Impact</Link></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
