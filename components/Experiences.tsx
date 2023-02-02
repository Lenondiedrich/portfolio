import { Trans, useTranslation } from "next-i18next";
import { RefObject } from "react";
import { Experience, ExperienceCard } from "./ExperienceCard";

interface ExperiencesProps {
  experiencesRef: RefObject<HTMLDivElement>;
}

export const Experiences = ({ experiencesRef }: ExperiencesProps) => {
  const { t } = useTranslation();

  const experiences: Experience[] = [
    {
      jobRole: "Software engineer",
      jobPeriod: t("experience>firstJobPeriod"),
      company: "W3block",
      jobDescription: <Trans i18nKey="experience>firstJobDescription" />,
    },
    {
      jobRole: "Fullstack Junior Developer",
      jobPeriod: t("experience>secondJobPeriod"),
      company: "Supera Inovação em Tecnologia",
      jobDescription: <Trans i18nKey="experience>secondJobDescription" />,
    },
  ];

  return (
    <div
      ref={experiencesRef}
      className="dark:text-mainText text-background flex flex-col items-center justify-center mt-20"
    >
      <h1 className="text-3xl font-bold font-Inter">{t("experience")}</h1>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={`${experience.company}-${index}`}
          {...experience}
        />
      ))}
    </div>
  );
};
