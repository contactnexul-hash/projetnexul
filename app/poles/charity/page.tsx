"use client";








import Link from "next/link";

export default function CharityPole() {
  const actions = [
    "Don alimentaire",
    "Soutien aux orphelinats",
    "Collectes locales"
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Charity</h1>
      <ul className="space-y-4">
        {actions.map((action, idx) => (
          <li key={idx} className="border p-4 rounded shadow hover:bg-gray-100">
            {action}
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-6 inline-block btn-primary">Retour</Link>
    </div>
  );
}


















































