"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Wallet from "../../components/Wallet";
import CryptoLive from "../../components/CryptoLive";
import Link from "next/link";

export default function AnimalsPage() {
  const [state, setState] = useState(null);

  return (
    <div>
      <Navbar />
      <CryptoLive />
      <Wallet />

      <section>
        <h1>Animals Pole</h1>
        <p>Détails et actions du pôle Animals.</p>
        <p>Liens vers les autres pôles :</p>
        <ul>
          <li><Link href="/poles/charity">Charity</Link></li>
          <li><Link href="/poles/education">Education</Link></li>
          <li><Link href="/poles/environment">Environment</Link></li>
          <li><Link href="/poles/impact">Impact</Link></li>
          <li><Link href="/poles/innovation">Innovation</Link></li>
        </ul>
      </section>
    </div>
  );
}
