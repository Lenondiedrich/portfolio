"use client";

import { Code } from "lucide-react";
import { ThemeSwitch } from "../ThemeSwitch";
import { Line } from "./Line";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-portfolio-pale-mint border-b-2 border-portfolio-navy fixed z-50 w-screen">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Code color="#1A2F4B" size={42} />
        <Line width="w-[200px]" />
        <nav>
          <ul className="flex items-center gap-10">
            <NavItem href="#about">Sobre</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projetos</NavItem>
            <NavItem href="#experiences">Experiência</NavItem>
          </ul>
        </nav>
        <Line width="w-[200px]" />

        <ThemeSwitch />
      </div>
    </header>
  );
};

const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className="font-montserrat font-semibold text-portfolio-navy text-[20px] hover:underline underline-offset-[10px]">
      <Link href={href} className="scroll-smooth">
        {children}
      </Link>
    </li>
  );
};
