import './globals.css'

export const metadata = {
  title: 'projetnexul - Nexul Vitrine & Dashboard',
  description: 'Vitrine et dashboard Nexul (Next.js + Tailwind + Web3)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900">
        <nav className="w-full flex justify-center bg-white shadow-md p-4 mb-6">
          <a href="/" className="mx-4 font-semibold text-gray-700 hover:text-purple-700">
            🏠 Accueil
          </a>
          <a
            href="/livre-blanc"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 font-semibold text-gray-700 hover:text-purple-700"
          >
            📘 Livre Blanc
          </a>
        </nav>
        {children}
      </body>
    </html>
  )
}
