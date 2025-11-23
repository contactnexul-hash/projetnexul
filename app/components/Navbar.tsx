"use client";
import Link from "next/link";
import WalletButton from "./WalletButton";
import CryptoPrice from "./CryptoPrice";

export default function Navbar() {
  const poles = ["education", "environment", "innovation", "impact", "charity", "animals"];
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0", display: "flex", gap: "1rem", alignItems: "center" }}>
      {poles.map((pole) => (
        <Link key={pole} href={`/poles/${pole}`} style={{ textDecoration: "none", fontWeight: "bold", color: "#333" }}>
          {pole.charAt(0).toUpperCase() + pole.slice(1)}
        </Link>
      ))}
      <WalletButton />
      <CryptoPrice id="ethereum" />
    </nav>
  );
}
