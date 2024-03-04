import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { SkillCard } from "./SkillsElements";
import { Project } from "../types/cards";
import { useTranslations } from "next-intl";

export const ProjectCard = ({
  name,
  preview,
  repo,
  demo,
  description,
  technologies,
}: Project) => {
  const t = useTranslations("Projects");

  return (
    <div
      key={name}
      className="mb-4 border border-b-4 border-r-4 border-black dark:border-portfolio-navy rounded-lg flex flex-col items-stretch size-full"
    >
      <Image
        src={preview}
        alt="Preview"
        className="rounded-t-lg w-full h-full object-cover"
        width={512}
        height={300}
      />

      <div className="p-5 border-t-2 border-black bg-portfolio-pale-mint dark:bg-portfolio-deep-seafoam/80 rounded-b-lg relative h-full flex flex-col items-stretch">
        <div className="flex items-center gap-2">
          <a
            className="bg-portfolio-sage dark:bg-portfolio-deep-ice hover:bg-portfolio-sage/60 dark:hover:bg-portfolio-deep-ice/60 transition-colors duration-300 p-2 rounded-lg text-portfolio-ice flex items-center gap-2"
            href={repo}
            target="_blank"
          >
            <Github />
            {t("repo")}
          </a>
          {demo && (
            <a
              className="border border-portfolio-navy text-portfolio-navy dark:text-portfolio-ice hover:bg-portfolio-ice/80 dark:hover:bg-portfolio-ice/10 p-2 rounded-lg flex items-center gap-2"
              href={demo}
              target="_blank"
            >
              <ExternalLink className="stroke-portfolio-navy dark:stroke-portfolio-ice" />
              {t("demo")}
            </a>
          )}
        </div>
        <h3 className="text-portfolio-navy dark:text-portfolio-ice text-[22px] font-montserrat font-bold mt-5">
          {name}
        </h3>
        <p className="text-justify font-roboto font-light text-portfolio-navy dark:text-portfolio-ice text-[18px]">
          {t(description)}
        </p>

        <div className="flex flex-wrap items-end h-full gap-5 py-4">
          {technologies &&
            technologies.map(({ name, icon }, index) => (
              <SkillCard key={`${name}-${index}`} label={name}>
                {icon}
              </SkillCard>
            ))}
        </div>
      </div>
    </div>
  );
};
