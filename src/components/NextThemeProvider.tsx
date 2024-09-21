"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};
