"use client";








import React, { useEffect, useState } from "react";

/**
 * Dashboard du pôle Community
 * - vue des NXL
 * - vue des vouchers créés
 * - synchronisation blockchain (mock)
 */

export default function CommunityDashboard() {
  const [nxlBalance, setNxlBalance] = useState<number>(0);
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [syncStatus, setSyncStatus] = useState<string>("Aucune synchronisation en cours");

  useEffect(() => {
    const saved = localStorage.getItem("nexul_nxl_balance");
    setNxlBalance(saved ? Number(saved) : 0);

    const queue = JSON.parse(localStorage.getItem("nexul_voucher_queue") || "[]");
    setVouchers(queue);
  }, []);

  const syncToBlockchain = () => {
    setSyncStatus("⏳ Envoi des vouchers vers la blockchain...");

    setTimeout(() => {
      localStorage.setItem("nexul_voucher_queue", JSON.stringify([]));
      setVouchers([]);
      setSyncStatus("✅ Synchronisation terminée (mock) — Blockchain mise à jour !");
    }, 2000);
  };

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", padding: 24, color: "#fff" }}>
      <h1 style={{ fontSize: 32 }}>Dashboard Communauté</h1>
      <p style={{ color: "#bbb" }}>
        Vue sur ton activité : NXL gagnés, vouchers, synchronisation blockchain…
      </p>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#1a1a1a",
            padding: 20,
            borderRadius: 12,
            minWidth: 260,
            border: "1px solid #333",
          }}
        >
          <h2>NXL total</h2>
          <p style={{ fontSize: 28, color: "#ffd700" }}>{nxlBalance}</p>
        </div>

        <div
          style={{
            background: "#1a1a1a",
            padding: 20,
            borderRadius: 12,
            flex: 1,
            border: "1px solid #333",
          }}
        >
          <h2>Vouchers en attente</h2>

          {vouchers.length === 0 ? (
            <p style={{ color: "#777" }}>Aucun voucher en attente</p>
          ) : (
            vouchers.map((v) => (
              <div
                key={v.id}
                style={{
                  background: "#222",
                  padding: 12,
                  borderRadius: 8,
                  marginBottom: 12,
                  border: "1px solid #333",
                }}
              >
                <strong>ID : </strong>{v.id} <br />
                <strong>Action : </strong>{v.actionId} <br />
                <strong>Gain : </strong>{v.amount} NXL <br />
                <strong>Date : </strong>{new Date(v.timestamp).toLocaleString()}
              </div>
            ))
          )}
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <button
          onClick={syncToBlockchain}
          style={{
            background: "#ffd700",
            border: "none",
            color: "#000",
            padding: "10px 18px",
            borderRadius: 10,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Synchroniser vers Blockchain (mock)
        </button>

        <p style={{ marginTop: 12, color: "#bbb" }}>{syncStatus}</p>
      </div>
    </div>
  );
}

