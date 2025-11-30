"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function InnovationActions() {
  const actions = [
    {
      id: 1,
      title: "Proposer une idée innovante",
      description: "Soumettez une idée créative pouvant améliorer le quotidien ou les services Nexul.",
      points: 8,
    },
    {
      id: 2,
      title: "Participer à un atelier innovation",
      description: "Rejoignez un atelier collaboratif pour créer de nouvelles solutions.",
      points: 10,
    },
    {
      id: 3,
      title: "Tester un prototype",
      description: "Aidez à tester et améliorer un prototype technologique avant son lancement.",
      points: 6,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Actions - Innovation</h1>

      <main>
        {actions.map((action) => (
          <motion.div
            key={action.id}
            whileHover={{ scale: 1.02 }}
            style={{
              padding: 20,
              marginBottom: 20,
              borderRadius: 10,
              background: "#f0f0f0",
            }}
          >
            <h2>{action.title}</h2>
            <p>{action.description}</p>
            <button
              style={{
                marginTop: 10,
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Valider & gagner {action.points} NXL
            </button>
          </motion.div>
        ))}
      </main>

      <footer style={{ textAlign: "center", marginTop: 40 }}>
        <Link href="/poles/innovation">
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Retour au pôle Innovation
          </span>
        </Link>
      </footer>
    </div>
  );
}



