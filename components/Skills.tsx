import { haveInterest, learning, skills } from "@/const/skills";
import { RefObject, useRef } from "react";
import { useTranslation } from "next-i18next";
import { Line } from "./Line";
import { SkillCard } from "./SkillCard";

interface SkillsProps {
  skillsRef: RefObject<HTMLDivElement>;
}

const styles = {
  titleStyle: "dark:text-mainText text-background font-bold text-2xl",
  containerStyle: "flex items-center lg:justify-center gap-4",
};

export const Skills = ({ skillsRef }: SkillsProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="font-Inter gap-8 mt-16 flex flex-col items-center justify-center animate-fade-up"
      ref={skillsRef}
    >
      <h3 className={styles.titleStyle}>Hard skills:</h3>

      <div
        className={`${styles.containerStyle} justify-start px-4 lg:px-0 overflow-x-scroll lg:overflow-visible w-full h-32 lg:h-full`}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>

      <Line />

      <h3 className={styles.titleStyle}>{t("skills>skillsLearning")}</h3>
      <div className={styles.containerStyle}>
        {learning.map((learn) => (
          <SkillCard key={learn.name} {...learn} />
        ))}
      </div>

      <Line />

      <h3 className={styles.titleStyle}>{t("skills>haveInterest")}</h3>
      <div className={styles.containerStyle}>
        {haveInterest.map((interestTech) => (
          <SkillCard key={interestTech.name} {...interestTech} />
        ))}
      </div>
    </div>
  );
};
