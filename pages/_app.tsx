import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import i18nextconfig from "../next-i18next.config";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App, i18nextconfig);
