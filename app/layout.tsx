export const metadata = {
  title: "Nexul",
  description: "Projet Nexul",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}


