"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 mb-6 flex flex-wrap gap-4">
      <Link href="/" className="text-blue-600 font-semibold hover:underline">Accueil</Link>
      <Link href="/poles/animals" className="text-blue-600 font-semibold hover:underline">Animals</Link>
      <Link href="/poles/charity" className="text-blue-600 font-semibold hover:underline">Charity</Link>
      <Link href="/poles/education" className="text-blue-600 font-semibold hover:underline">Education</Link>
      <Link href="/poles/environment" className="text-blue-600 font-semibold hover:underline">Environment</Link>
      <Link href="/poles/impact" className="text-blue-600 font-semibold hover:underline">Impact</Link>
      <Link href="/poles/innovation" className="text-blue-600 font-semibold hover:underline">Innovation</Link>
    </nav>
  );
}


