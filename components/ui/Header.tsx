"use client";

import { Code } from "lucide-react";
import { ThemeSwitch } from "../ThemeSwitch";
import { Line } from "./Line";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-portfolio-pale-mint border-b-2 border-portfolio-navy fixed z-50 w-screen">
      <div className="container mx-auto p-5 hidden lg:flex items-center justify-between">
        <Code color="#1A2F4B" size={42} />
        <Line width="w-[200px]" />
        <nav>
          <ul className="flex items-center gap-10">
            <NavItem href="#about">Sobre</NavItem>
            <NavItem href="#experiences">Experiência</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projetos</NavItem>
          </ul>
        </nav>
        <Line width="w-[200px]" />

        <ThemeSwitch />
      </div>

      <div className="block lg:hidden py-2">
        <div className="flex items-center justify-between px-2">
          <Code color="#1A2F4B" size={42} />
          <div className="z-50">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#1A2F4B" />
          </div>
        </div>

        <aside
          data-hidden={isOpen}
          className="h-full bg-portfolio-seafoam border-l-2 border-l-portfolio-navy overflow-hidden data-[hidden=true]:translate-x-[50%] translate-x-[200%] transform top-0 left-0 w-full fixed ease-in-out transition-all duration-300 z-10 "
        >
          <nav className="py-20 px-10 flex flex-col gap-10 h-full">
            <ThemeSwitch />
            <ul
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col items-start gap-5"
            >
              <NavItem href="#about">Sobre</NavItem>
              <NavItem href="#experiences">Experiência</NavItem>
              <NavItem href="#skills">Skills</NavItem>
              <NavItem href="#projects">Projetos</NavItem>
            </ul>
          </nav>
        </aside>
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
