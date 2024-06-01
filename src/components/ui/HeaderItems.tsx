import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderTranslation {
  about: string;
  experiences: string;
  projects: string;
}

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="font-montserrat font-semibold text-portfolio-navy dark:text-portfolio-ice text-[20px] hover:underline underline-offset-[10px]"
  >
    {label}
  </Link>
);

const HeaderItems = () => {
  const asPath = usePathname();
  const [translations, setTranslations] = useState<HeaderTranslation>();

  useEffect(() => {
    const loadTranslations = async (lang: string) => {
      try {
        const messages = await import(`../../../messages/${lang}.json`);
        setTranslations(messages?.Header);
      } catch (error) {
        console.error("Could not load translations", error);
        const defaultMessages = await import("../../../messages/pt.json");
        setTranslations(defaultMessages?.Header);
      }
    };

    const lang = asPath.startsWith("/pt") ? "pt" : "en";
    loadTranslations(lang);
  }, [asPath]);
  return (
    <>
      <NavItem href="#about" label={translations?.about || "About"} />
      <NavItem
        href="#experiences"
        label={translations?.experiences || "Experiences"}
      />
      <NavItem href="#projects" label={translations?.projects || "Projects"} />
      <NavItem href="#skills" label="Skills" />
    </>
  );
};

export default HeaderItems;
