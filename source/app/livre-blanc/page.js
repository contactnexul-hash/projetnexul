export default function LivreBlancPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
        📘 Livre Blanc Officiel — Nexul Ultimate V3
      </h1>

      <p className="mb-4 text-gray-600 text-center max-w-2xl">
        Découvrez la vision, la mission et la technologie du projet Nexul à travers notre Livre Blanc officiel (FR/EN).
      </p>

      <iframe
        src="/Livre_Blanc_Officiel_Nexul_Ultimate_V3_FR_EN.pdf"
        width="100%"
        height="800px"
        className="border-2 border-purple-300 rounded-xl shadow-lg"
        title="Livre Blanc Nexul"
      />

      <a
        href="/Livre_Blanc_Officiel_Nexul_Ultimate_V3_FR_EN.pdf"
        download
        className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition"
      >
        📥 Télécharger le Livre Blanc
      </a>
    </div>
  );
}
