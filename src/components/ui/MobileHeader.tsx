"use client";

import { Code } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "../ThemeSwitch";
import { HamburgerComponent } from "../Hamburger";
import { HeaderItems } from "./HeaderItems";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isDark, setIsDark] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const isDarkMode =
      theme === "system" ? systemTheme === "dark" : theme === "dark";

    setIsDark(isDarkMode);
  }, [theme, systemTheme]);

  return (
    <div className="block lg:hidden py-2">
      <div className="flex items-center justify-between px-2">
        <Code
          className="stroke-portfolio-navy dark:stroke-portfolio-ice"
          size={42}
        />

        <HamburgerComponent
          isDark={isDark}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      <aside
        data-hidden={isOpen}
        className="h-full bg-portfolio-seafoam dark:bg-portfolio-navy border-l-2 border-l-portfolio-navy dark:border-l-portfolio-ice overflow-hidden data-[hidden=true]:translate-x-[50%] translate-x-[200%] transform top-0 left-0 w-full fixed ease-in-out transition-all duration-300 z-10"
      >
        <nav className="py-20 px-10 flex flex-col gap-10 h-full">
          <ThemeSwitch />
          <ul
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-start gap-5"
          >
            <HeaderItems />
          </ul>
        </nav>
      </aside>
    </div>
  );
};
