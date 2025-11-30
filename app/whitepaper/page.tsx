"use client";

export default function WhitePaper() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Livre Blanc Nexul</h1>
      <iframe
        src="/docs/livreblanc.pdf"
        width="100%"
        height="800px"
        className="border rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
}


