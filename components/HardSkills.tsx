import Image from "next/image";
import { GroupSkillCard, SkillCard } from "./SkillsElements";
import { Line } from "./ui/Line";
import { backendSkills, frontendSkills } from "@/constants/skills";

export const HardSkills = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-full flex items-center justify-start">
          <div className="bg-portfolio-navy dark:bg-portfolio-ice size-4 lg:size-8 rounded-full" />
          <Line width="w-[80%]" />
        </div>
        <span className="font-montserrat text-portfolio-navy dark:text-portfolio-ice text-[30px] lg:text-[52px] w-full text-right">
          Hard Skills
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <GroupSkillCard title="Backend">
          <Image
            src="/images/backend.webp"
            alt="image"
            className="size-[80%] lg:size-[300px]"
            width={300}
            height={300}
          />

          <div className="grid grid-cols-3 size-full gap-10 place-items-center">
            {backendSkills.map(({ name, icon: Icon }, index) => (
              <SkillCard label={name} key={`${name}-${index}`}>
                {Icon}
              </SkillCard>
            ))}
          </div>
        </GroupSkillCard>

        <GroupSkillCard title="Frontend">
          <Image
            src="/images/frontend.webp"
            alt="image"
            className="size-[80%] lg:size-[300px]"
            width={300}
            height={300}
          />

          <div className="grid grid-cols-3 size-full gap-10 place-items-center">
            {frontendSkills.map(({ name, icon: Icon }, index) => (
              <SkillCard label={name} key={`${name}-${index}`}>
                {Icon}
              </SkillCard>
            ))}
          </div>
        </GroupSkillCard>
      </div>
    </>
  );
};
