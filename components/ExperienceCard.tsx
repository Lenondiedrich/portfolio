import { IoBriefcase } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export interface Experience {
  jobRole: string;
  jobPeriod: string;
  company: string;
  jobDescription: JSX.Element;
}

export const ExperienceCard = ({
  jobDescription,
  jobPeriod,
  jobRole,
  company,
}: Experience) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 place-items-center font-Inter p-10 mt-2">
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold dark:text-green-500 text-background">
          {jobRole}
        </span>
        <span className="font-medium">{jobPeriod}</span>
      </div>

      <div className="self-start flex flex-col h-[200px] lg:h-full items-center gap-8">
        <div className="dark:bg-green-500 bg-background p-3 rounded-full">
          <IoBriefcase
            color={theme === "dark" ? "#16161a" : "#22c55e"}
            size={24}
          />
        </div>
        <div className="dark:bg-mainText bg-background h-3/4 w-px" />
      </div>

      <div className="flex flex-col whitespace-pre-wrap col-span-2 lg:col-auto">
        <h2 className="font-Inter text-2xl font-semibold dark:text-green-500 text-background py-4 border-b-4 dark:border-green-500 border-background w-1/3 mb-4">
          {company}
        </h2>
        {jobDescription}
      </div>
    </section>
  );
};
