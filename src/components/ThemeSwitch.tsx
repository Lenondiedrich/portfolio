"use client";

import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading indicator
  }

  const isDarkMode = theme === "system" ? systemTheme === "dark" : theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div>
      <DarkModeSwitch checked={isDarkMode} onChange={toggleTheme} size={30} sunColor="#fcc203" moonColor="#bdbfbe" />
    </div>
  );
};

export default ThemeSwitch;
