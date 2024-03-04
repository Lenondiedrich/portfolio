import { TiltShape } from "@/public/images/TiltShape";
import { ProjectCard } from "../ProjectCard";
import { Line } from "../ui/Line";
import { projects } from "@/src/constants/projects";
import { useTranslations } from "next-intl";

export const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <section className="relative" id="projects">
      <TiltShape />
      <div className="container mx-auto px-[30px] lg:px-0 pt-[100px] lg:pt-[250px] pb-16 space-y-10">
        <div className="flex items-center gap-10">
          <Line />
          <h2 className="font-montserrat text-[32px] lg:text-[52px] text-portfolio-navy dark:text-portfolio-ice">
            {t("title")}
          </h2>
          <Line />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
