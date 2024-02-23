import { projects } from "@/constants/projects";
import { TiltShape } from "@/public/images/TiltShape";
import { ProjectCard } from "../ProjectCard";
import { Line } from "../ui/Line";

export const Projects = () => {
  return (
    <>
      <TiltShape />
      <section
        className="container mx-auto pt-[250px] pb-16 space-y-10"
        id="projects"
      >
        <div className="flex items-center gap-10">
          <Line />
          <h2 className="font-montserrat text-[52px] text-portfolio-navy">
            Projetos
          </h2>
          <Line />
        </div>
        <div className="grid grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};
