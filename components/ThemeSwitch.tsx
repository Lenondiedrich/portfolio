"use client";

import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const isDarkMode =
    theme === "system" ? systemTheme === "dark" : theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleTheme}
        size={30}
        sunColor="#fcc203"
        moonColor="#bdbfbe"
      />
    </div>
  );
};
