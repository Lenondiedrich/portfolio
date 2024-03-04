import { useTranslations } from "next-intl";
import { softskills } from "../constants/soft-skills";
import { Line } from "./ui/Line";

export const SoftSkills = () => {
  return (
    <>
      <div className="flex items-center justify-between pt-10">
        <span className="font-montserrat text-portfolio-navy dark:text-portfolio-ice text-[32px] lg:text-[52px] w-full text-left">
          Soft Skills
        </span>
        <div className="w-full flex items-center justify-end">
          <Line width="w-[80%]" />
          <div className="bg-portfolio-navy dark:bg-portfolio-ice size-4 lg:size-8 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {softskills.map((skill, index) => (
          <SoftSkillCard key={`${skill.color}`} {...skill} number={index + 1} />
        ))}
      </div>
    </>
  );
};

const SoftSkillCard = ({
  number,
  tKey,
  color,
}: {
  number: number;
  tKey: string;
  color: string;
}) => {
  const t = useTranslations("SoftSkills");

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-14">
        <p
          className={`font-montserrat font-extrabold text-[64px] leading-none ${color}`}
        >
          {number}.
        </p>
        <div className={`h-2 w-full ${color}`} />
      </div>
      <span className="text-[32px] font-montserrat font-medium text-portfolio-navy dark:text-portfolio-ice tracking-tighter">
        {t(`${tKey}.title`)}
      </span>
      <p className="font-roboto text-justify text-portfolio-navy dark:text-portfolio-ice">
        {t(`${tKey}.description`)}
      </p>
    </div>
  );
};
