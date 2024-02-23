import { CurveShape } from "@/public/images/CurveShape";
import { HardSkills } from "../HardSkills";
import { SoftSkills } from "../SoftSkills";

export const Skills = () => {
  return (
    <section
      className="relative bg-portfolio-pale-mint min-h-[500px] size-full pb-20"
      id="skills"
    >
      <CurveShape />

      <div className="container mx-auto pt-[100px] md:pt-[150px] lg:pt-[250px] px-[30px] lg:px-0 space-y-10">
        <HardSkills />

        <SoftSkills />
      </div>
    </section>
  );
};
