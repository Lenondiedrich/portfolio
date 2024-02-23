"use client";
import * as Switch from "@radix-ui/react-switch";
import { Sun, MoonStar } from "lucide-react";
import { useState } from "react";

export const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Switch.Root
      onCheckedChange={() => setIsDarkMode(!isDarkMode)}
      className="group cursor-pointer w-[42px] h-[25px] border border-portfolio-sage bg-blue-400 rounded-full relative data-[state=checked]:bg-portfolio-deep-sky outline-none"
    >
      <Switch.Thumb
        asChild
        className="block w-[21px] h-[21px] rounded-full transition-transform duration-500 ease-in-out translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
      >
        {isDarkMode ? (
          <MoonStar color="#f9f9f9" size={24} className="block" />
        ) : (
          <Sun color="#f6ff00" size={24} className="block" fill="#f6ff00" />
        )}
      </Switch.Thumb>
    </Switch.Root>
  );
};
