"use client";

export default function FinancePole() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Finance</h1>
        <p className="text-gray-700">
          Découvrez toutes les informations et actions liées au pôle Finance.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-2">Budget annuel</h2>
          <p>Consultez les budgets et rapports annuels.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-2">Investissements</h2>
          <p>Suivez les investissements du pôle Finance.</p>
        </div>
      </div>
    </div>
  );
}





