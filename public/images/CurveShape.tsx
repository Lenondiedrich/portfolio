"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const CurveShape = () => {
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
        className="relative block w-[calc(115% + 1.3px)] h-24"
        fill={isDark ? "#28475C" : "#EBF3E8"}
      >
        <path
          d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
          className="fill-portfolio-sage dark:fill-portfolio-sky-blue"
        ></path>
      </svg>
    </div>
  );
};
