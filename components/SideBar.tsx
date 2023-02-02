import { useTranslation } from "next-i18next";
import { RefObject } from "react";

interface SideBarProps {
  style: string;
  closeSidebar: (value: boolean) => void;
  goToAboutMe: () => void;
  goToSkills: () => void;
  goToExperience: () => void;
  goToProjects: () => void;
  goToContact: () => void;
}

export const SideBar = ({
  style,
  closeSidebar,
  goToAboutMe,
  goToContact,
  goToExperience,
  goToProjects,
  goToSkills,
}: SideBarProps) => {
  const { t } = useTranslation();

  const goToSection = (
    goToFunction: () => void,
    closeFunction: (value: boolean) => void
  ) => {
    goToFunction();
    closeFunction(false);
  };

  return (
    <div className="h-full overflow-hidden flex items-center justify-center -mt-10">
      <nav className="flex flex-col gap-8 dark:text-mainText text-background font-bold font-Inter text-xl mt-4">
        <span
          className={style}
          onClick={() => goToSection(goToAboutMe, closeSidebar)}
        >
          {t("header>aboutMe")}
        </span>
        <span
          className={style}
          onClick={() => goToSection(goToSkills, closeSidebar)}
        >
          SKILLS
        </span>
        <span
          className={style}
          onClick={() => goToSection(goToExperience, closeSidebar)}
        >
          {t("header>experience")}
        </span>
        <span
          className={style}
          onClick={() => goToSection(goToProjects, closeSidebar)}
        >
          {t("header>projects")}
        </span>
        <span
          className={style}
          onClick={() => goToSection(goToContact, closeSidebar)}
        >
          {t("header>contact")}
        </span>
      </nav>
    </div>
  );
};
