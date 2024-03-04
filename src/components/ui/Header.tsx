import { Code } from "lucide-react";
import { ThemeSwitch } from "../ThemeSwitch";
import { HeaderItems } from "./HeaderItems";
import { Line } from "./Line";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  return (
    <header className="bg-portfolio-pale-mint dark:bg-portfolio-navy border-b-2 border-portfolio-navy dark:border-portfolio-ice fixed z-50 w-screen">
      <div className="container mx-auto p-5 hidden lg:flex items-center justify-between">
        <Code
          className="stroke-portfolio-navy dark:stroke-portfolio-ice"
          size={42}
        />
        <Line width="w-[200px]" />
        <nav>
          <ul className="flex items-center gap-10">
            <HeaderItems />
          </ul>
        </nav>
        <Line width="w-[200px]" />

        <ThemeSwitch />
      </div>

      {/*  -------------- MOBILE ----------------- */}
      <MobileHeader />
    </header>
  );
};
