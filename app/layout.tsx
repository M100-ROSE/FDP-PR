import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--f-display" });
const body = Work_Sans({ subsets: ["latin"], variable: "--f-body" });

export const metadata: Metadata = {
  title: "Brasil Soberano Paraná · Mobilização para o 2º turno",
  description: "Campanha de mobilização no Paraná pela vitória de Lula no segundo turno. Ato em Curitiba dia 18/10, às 13h.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
