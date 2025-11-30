"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import runFreezeDetector from "./detector";

export default function FreezePage() {
  const [status, setStatus] = useState("SAFE");
  const [log, setLog] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function triggerManualFreeze() {
    setStatus("FREEZE");
    setLog(prev => ["🔴 Freezé manuellement", ...prev]);

    await fetch("/api/freeze", {
      method: "POST",
      body: JSON.stringify({ type: "manual", time: Date.now() })
    });
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      const result = await runFreezeDetector();

      if (result.alert) {
        setStatus("FREEZE");
        setLog(prev => [`🔴 ${result.reason}`, ...prev]);

        await fetch("/api/freeze", {
          method: "POST",
          body: JSON.stringify({
            type: "auto",
            reason: result.reason,
            time: Date.now(),
          }),
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <motion.h1 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🔐 Système FREEZE Automatique
      </motion.h1>

      <div className={`p-4 rounded-xl text-white mb-4 ${
        status === "SAFE" ? "bg-green-600" : "bg-red-600"
      }`}>
        Statut : {status}
      </div>

      <button
        onClick={triggerManualFreeze}
        className="bg-red-700 text-white px-4 py-2 rounded-xl"
        disabled={loading}
      >
        Forcer un FREEZE
      </button>

      <h2 className="mt-6 font-semibold text-lg">Historique :</h2>
      <div className="bg-gray-900 text-white p-3 rounded-xl mt-2 h-64 overflow-y-auto">
        {log.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}



