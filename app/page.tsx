"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">Nexul Ultimate V3</h1>
        <p className="mt-4 text-xl">
          Écosystème Web3 de luxe — NXL Token · NFT Pass · Education · Environnement · Impact
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-6">
        <Link href="/dashboard" className="btn-primary">Tableau de bord</Link>
        <Link href="/mint" className="btn-primary">Mint ton NXL</Link>
        <Link href="/whitepaper" className="btn-primary">Livre blanc</Link>
      </div>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link href="/poles/environment" className="pole-card">Environnement</Link>
        <Link href="/poles/charity" className="pole-card">Charity</Link>
        <Link href="/poles/education" className="pole-card">Éducation</Link>
        <Link href="/poles/innovation" className="pole-card">Innovation</Link>
        <Link href="/poles/tech" className="pole-card">Tech</Link>
        <Link href="/poles/volunteer" className="pole-card">Bénévolat</Link>
        <Link href="/poles/community" className="pole-card">Communauté</Link>
        <Link href="/poles/freeze" className="pole-card">Freeze</Link>
      </section>

      <footer className="text-center mt-16 text-gray-500">
        Nexul • © 2025 • Luxe · Technologie · Impact
      </footer>
    </div>
  );
}


















