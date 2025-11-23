"use client";
import { useState } from "react";
import { ethers } from "ethers";

export default function Wallet() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (err) {
        console.error("Connexion échouée", err);
      }
    } else {
      alert("Veuillez installer Metamask !");
    }
  };

  return (
    <div className="my-4">
      {account ? (
        <p>Connecté : {account}</p>
      ) : (
        <button onClick={connectWallet} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Connecter Wallet
        </button>
      )}
    </div>
  );
}
