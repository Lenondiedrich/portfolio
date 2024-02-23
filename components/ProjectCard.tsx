import { Project } from "@/types/cards";
import { ExternalLink, Github } from "lucide-react";
import { SkillCard } from "./SkillsElements";
import Image from "next/image";

export const ProjectCard = ({
  name,
  preview,
  repo,
  demo,
  description,
  technologies,
}: Project) => {
  return (
    <div
      key={name}
      className="mb-4 border border-b-4 border-r-4 border-black rounded-lg flex flex-col items-stretch size-full"
    >
      <Image
        src={preview}
        alt="Preview"
        className="rounded-t-lg w-full h-full object-cover"
        width={512}
        height={300}
      />

      <div className="p-5 border-t-2 border-black bg-portfolio-pale-mint rounded-b-lg relative h-full flex flex-col items-stretch">
        <div className="flex items-center gap-2">
          <a
            className="bg-portfolio-sage hover:bg-portfolio-sage/60 transition-colors duration-300 p-2 rounded-lg text-portfolio-ice flex items-center gap-2"
            href={repo}
            target="_blank"
          >
            <Github />
            Acessar repo
          </a>
          {demo && (
            <a
              className="border border-portfolio-navy text-portfolio-navy hover:bg-portfolio-ice/80 p-2 rounded-lg flex items-center gap-2"
              href={demo}
              target="_blank"
            >
              <ExternalLink color="#1A2F4B" />
              Acessar demo
            </a>
          )}
        </div>
        <h3 className="text-portfolio-navy text-[22px] font-montserrat font-bold mt-5">
          {name}
        </h3>
        <p className="text-justify font-roboto font-light text-portfolio-navy text-[18px]">
          {description}
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
