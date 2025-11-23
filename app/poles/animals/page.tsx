"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Wallet from "../../components/Wallet";
import CryptoLive from "../../components/CryptoLive";
import Link from "next/link";

export default function AnimalsPage() {
  const [state, setState] = useState(null);
  const poles = ["animals","charity","education","environment","impact","innovation"];

  return (
    <div style={{
      fontFamily:'Montserrat,sans-serif',color:'#f0f0f0',backgroundColor:'#1a1a1a',padding:'20px',minHeight:'100vh'
    }}>
      <header style={{background:'linear-gradient(90deg,#0d0d0d,#1f1f1f)',padding:'20px',boxShadow:'0 4px 6px rgba(0,0,0,0.5)'}}>
        <Navbar />
      </header>

      <nav style={{display:'flex',gap:'15px',margin:'20px 0'}}>
        {poles.map(p=>(
          <Link key={p} href={"/poles/"+p} style={{color:'#00ffff',textDecoration:'none'}}>
            {p.charAt(0).toUpperCase()+p.slice(1)}
          </Link>
        ))}
      </nav>

      <section style={{
        margin:'20px 0',padding:'20px',backgroundColor:'#2a2a2a',borderRadius:'12px',
        boxShadow:'0 2px 10px rgba(0,0,0,0.3)',transition:'transform 0.3s ease, boxShadow 0.3s ease'
      }}
      onMouseEnter={e=>e.currentTarget.style.boxShadow='0 6px 15px rgba(0,255,255,0.5)'}
      onMouseLeave={e=>e.currentTarget.style.boxShadow='0 2px 10px rgba(0,0,0,0.3)'}
      >
        <h1 style={{fontSize:'2.5rem',color:'#00ffff'}}>Animals Pole</h1>
        <p style={{fontSize:'1.1rem',lineHeight:'1.6'}}>
          Toutes les actions et projets du pôle Animals, avec style Luxe & Tech et hover premium.
        </p>
      </section>

      <CryptoLive />
      <Wallet />
    </div>
  );
}
