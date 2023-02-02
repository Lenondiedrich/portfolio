import useIsMobile from "@/hooks/useIsMobile";

import * as Switch from "@radix-ui/react-switch";
import Hamburger from "hamburger-react";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";

import { MouseEvent, RefObject, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { LocaleSwitch } from "./LocaleSwitch";
import { SideBar } from "./SideBar";

interface HeaderProps {
  skillsRef: RefObject<HTMLDivElement>;
  experiencesRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

export const Header = ({
  contactRef,
  experiencesRef,
  projectsRef,
  skillsRef,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useIsMobile();

  const { t } = useTranslation();

  const { setTheme } = useTheme();

  const styles = {
    navItemStyle:
      "border-2 border-transparent dark:hover:border-green-500 hover:border-background p-2 rounded-lg cursor-pointer transition-colors",
  };

  const headerHeight = 200;

  const goToAboutMe = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const goToSkills = () =>
    window.scrollTo({
      top: skillsRef.current?.offsetTop
        ? skillsRef.current?.offsetTop - headerHeight
        : 0,
      behavior: "smooth",
    });
  const goToProjects = () =>
    window.scrollTo({
      top: projectsRef.current?.offsetTop
        ? projectsRef.current?.offsetTop - headerHeight
        : 0,
      behavior: "smooth",
    });
  const goToExperience = () =>
    window.scrollTo({
      top: experiencesRef.current?.offsetTop
        ? experiencesRef.current?.offsetTop - headerHeight
        : 0,
      behavior: "smooth",
    });
  const goToContact = () =>
    window.scrollTo({
      top: contactRef.current?.offsetTop
        ? contactRef.current?.offsetTop - headerHeight
        : 0,
      behavior: "smooth",
    });

  const handleToggleSwitch = (e: MouseEvent<Element>) => {
    const isChecked = e.currentTarget.getAttribute("data-state") === "checked";

    if (isChecked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-background backdrop-filter backdrop-blur-lg bg-opacity-30 p-2 lg:p-8 border-b-2 dark:border-b-green-500 border-b-background flex items-center justify-between shadow-md dark:shadow-green-500 shadow-background">
      {isMobile ? (
        <div className="z-20">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
      ) : null}

      <p className="dark:text-mainText text-background font-Inter text-3xl font-bold">
        Portfólio
        <span className="text-lg">
          <LocaleSwitch />
        </span>
      </p>

      <div className="flex items-center gap-14">
        {!isMobile ? (
          <nav className="dark:text-mainText text-background font-bold flex gap-8 font-Inter text-xl">
            <span className={styles.navItemStyle} onClick={() => goToAboutMe()}>
              {t("header>aboutMe")}
            </span>
            <span className={styles.navItemStyle} onClick={() => goToSkills()}>
              SKILLS
            </span>
            <span
              className={styles.navItemStyle}
              onClick={() => goToExperience()}
            >
              {t("header>experience")}
            </span>
            <span
              className={styles.navItemStyle}
              onClick={() => goToProjects()}
            >
              {t("header>projects")}
            </span>
            <span className={styles.navItemStyle} onClick={() => goToContact()}>
              {t("header>contact")}
            </span>
          </nav>
        ) : (
          <aside
            className={`${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transform top-0 left-0 w-4/5 bg-green-300 dark:bg-background fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-10`}
          >
            <SideBar
              style={styles.navItemStyle}
              closeSidebar={setIsMenuOpen}
              goToAboutMe={goToAboutMe}
              goToContact={goToContact}
              goToExperience={goToExperience}
              goToProjects={goToProjects}
              goToSkills={goToSkills}
            />
          </aside>
        )}
        <Switch.Root
          onClick={(e) => handleToggleSwitch(e)}
          className="relative h-6 w-12 dark:bg-slate-500 bg-slate-400 rounded-full px-1"
        >
          <Switch.Thumb className="h-5 w-5 flex items-center justify-center group bg-[#09184a] data-[state=checked]:translate-x-5 data-[state=checked]:bg-[#265ebf] rounded-full transition-transform will-change-transform">
            <BsSunFill
              color="#e0d838"
              className="group-data-[state=checked]:block hidden"
            />
            <BsMoonStarsFill
              color="#7d7d7d"
              className="group-data-[state=unchecked]:block hidden"
            />
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </div>
  );
};
