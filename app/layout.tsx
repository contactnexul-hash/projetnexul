import "../styles/global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Nexul — Global Ecosystem",
  description: "Nexul: Next generation Web3 ecosystem",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}


