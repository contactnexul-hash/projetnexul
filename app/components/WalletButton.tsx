"use client";
import React, { useState } from "react";
import { ethers } from "ethers";

export default function WalletButton() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("MetaMask non détecté !");
    }
  };

  return (
    <button
      onClick={connectWallet}
      style={{ marginLeft: "auto", padding: "0.5rem 1rem", cursor: "pointer" }}
    >
      {account ? `Wallet: ${account.slice(0,6)}...${account.slice(-4)}` : "Connecter Wallet"}
    </button>
  );
}
