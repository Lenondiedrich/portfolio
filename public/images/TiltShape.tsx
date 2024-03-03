"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const TiltShape = () => {
  const [isDark, setIsDark] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const isDarkMode =
      theme === "system" ? systemTheme === "dark" : theme === "dark";

    setIsDark(isDarkMode);
  }, [theme, systemTheme]);

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100% + 1.3px)] h-[140px]"
        fill={`${isDark ? "#1F6E8C" : "#86A789"}`}
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="fill-portfolio-pale-mint dark:fill-portfolio-ice-blue"
        ></path>
      </svg>
    </div>
  );
};
