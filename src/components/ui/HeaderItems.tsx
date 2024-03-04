import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";

export const HeaderItems = () => {
  const t = useTranslations("Header");
  return (
    <>
      <NavItem href="#about">{t("about")}</NavItem>
      <NavItem href="#experiences">{t("experiences")}</NavItem>
      <NavItem href="#projects">{t("projects")}</NavItem>
      <NavItem href="#skills">Skills</NavItem>
    </>
  );
};

const NavItem = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <li className="font-montserrat font-semibold text-portfolio-navy dark:text-portfolio-ice text-[20px] hover:underline underline-offset-[10px]">
      <Link href={href} className="scroll-smooth">
        {children}
      </Link>
    </li>
  );
};
