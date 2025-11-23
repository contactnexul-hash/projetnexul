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
        <p>
          Ce pôle gère toutes les informations et actions liées aux animaux.
        </p>

        <div>
          <Link href="/app/poles/animals/donate">
            <button>Faire un don</button>
          </Link>
          <Link href="/app/poles/animals/projects">
            <button>Voir les projets</button>
          </Link>
        </div>
      </section>

      <footer>
        <Link href="/app/poles/education">→ Education</Link> | 
        <Link href="/app/poles/charity">→ Charity</Link>
      </footer>
    </div>
  );
}

