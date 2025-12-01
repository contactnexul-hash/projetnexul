"use client";








import React, { useEffect, useState } from "react";

interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
}

export default function CommunityWallet() {
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const savedBalance = localStorage.getItem("community_balance");
    setBalance(savedBalance ? Number(savedBalance) : 0);

    const savedTx = JSON.parse(localStorage.getItem("community_transactions") || "[]");
    setTransactions(savedTx);
  }, []);

  const addTransaction = (type: string, amount: number) => {
    const newTx: Transaction = {
      id: crypto.randomUUID(),
      type,
      amount,
      date: new Date().toISOString(),
    };

    const updatedTx = [newTx, ...transactions];
    setTransactions(updatedTx);
    setBalance(balance + amount);

    localStorage.setItem("community_transactions", JSON.stringify(updatedTx));
    localStorage.setItem("community_balance", (balance + amount).toString());
  };

  return (
    <div style={{ padding: 24, minHeight: "100vh", background: "#0d0d0d", color: "#fff" }}>
      <h1 style={{ fontSize: 32 }}>Portefeuille Communauté</h1>
      <p style={{ color: "#bbb" }}>Suivi de ton solde NXL et de tes transactions.</p>

      <div style={{ marginTop: 20, padding: 20, background: "#1a1a1a", borderRadius: 12 }}>
        <h2>Solde : {balance} NXL</h2>

        <button
          onClick={() => addTransaction("Récompense action sociale", 50)}
          style={{
            marginTop: 12,
            padding: "10px 18px",
            borderRadius: 10,
            background: "#ffd700",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Simuler une récompense +50 NXL
        </button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h2>Historique des transactions</h2>
        {transactions.length === 0 ? (
          <p style={{ color: "#777" }}>Aucune transaction enregistrée</p>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.id}
              style={{
                background: "#222",
                padding: 12,
                borderRadius: 8,
                marginBottom: 10,
                border: "1px solid #333",
              }}
            >
              <strong>Type :</strong> {tx.type} <br />
              <strong>Montant :</strong> {tx.amount} NXL <br />
              <strong>Date :</strong> {new Date(tx.date).toLocaleString()}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

