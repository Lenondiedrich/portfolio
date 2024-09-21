import { ThemeProvider } from "next-themes";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "../components/ui/Header";
import { locales } from "../config";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { NextThemeProvider } from "../components/NextThemeProvider";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Sou um desenvolvedor fullstack com uma trajetória iniciada aos 16anos, apaixonado por tecnologia e formado em Análise e Desenvolvimento de Sistemas pela UNISINOS."
        />
        <title>Portfolio - Lenon</title>
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} bg-portfolio-ice dark:bg-portfolio-deep-sky`}>
        <NextIntlClientProvider messages={messages}>
          <NextThemeProvider>
            <Header />
            {children}
          </NextThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
