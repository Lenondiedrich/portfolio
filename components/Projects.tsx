import { projects } from "@/const/projects";
import { useTranslation } from "next-i18next";
import { RefObject } from "react";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  projectsRef: RefObject<HTMLDivElement>;
}

export const Projects = ({ projectsRef }: ProjectsProps) => {
  const { t } = useTranslation();

  return (
    <div
      ref={projectsRef}
      className="dark:text-mainText text-background flex flex-col items-center justify-center mt-12"
    >
      <h2 className="text-3xl font-bold">{t("projects")}</h2>
      <div className="grid grid-cols-1 overflow-y-scroll lg:overflow-y-visible lg:grid-cols-3 justify-items-center gap-8 mt-10 w-full h-full max-h-[600px] px-10 lg:px-20">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.name}-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};
