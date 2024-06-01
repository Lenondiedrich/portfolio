"use client";

import { ThemeProvider } from "next-themes";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "../components/ui/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Sou um desenvolvedor fullstack com uma trajetória iniciada aos 16anos, apaixonado por tecnologia e formado em Análise e Desenvolvimento de Sistemas pela UNISINOS."
        />
        <title>Portfolio - Lenon</title>
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} bg-portfolio-ice dark:bg-portfolio-deep-sky`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
