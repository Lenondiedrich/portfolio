import { Project } from "@/const/projects";
import Image from "next/image";
import { StackCard } from "./StackCard";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ProjectDescription = ({
  Cover,
  description,
  repoUrl,
  stack,
  demoUrl,
  videoDemo,
}: Project) => {
  const [isMounted, setIsMounted] = useState(false);
  const coverIsString = typeof Cover === "string";

  const { t } = useTranslation();

  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full max-h-[600px] overflow-y-scroll font-Inter">
      <div className="mt-6 flex flex-col items-center justify-center">
        {videoDemo ? (
          <Image
            src={videoDemo}
            alt="Project cover image"
            className="rounded-lg object-contain"
            width={800}
            height={400}
          />
        ) : coverIsString ? (
          <Image
            src={Cover}
            alt="Project cover image"
            className="rounded-lg object-contain"
            width={350}
            height={200}
          />
        ) : (
          <Cover size={80} color={theme === "dark" ? "#22c55e" : "#16161a"} />
        )}
        <div className="flex items-center justify-center dark:text-mainText text-background font-semibold gap-4 mt-4">
          <a
            href={repoUrl}
            target="_blank"
            className="cursor-pointer flex items-center justify-center gap-2 transition-colors border-2 dark:border-green-500 border-background p-2 rounded-xl dark:hover:bg-green-500 hover:bg-background dark:hover:text-black hover:text-mainText"
            rel="noreferrer"
          >
            <SiGithub />
            {t("projects>repo")}
          </a>
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              className="border-2 cursor-pointer dark:border-green-500 border-background p-2 rounded-xl transition-colors dark:hover:bg-green-500 hover:bg-background dark:hover:text-black hover:text-mainText flex items-center justify-center gap-2"
              rel="noreferrer"
            >
              <FiExternalLink />
              {t("projects>demo")}
            </a>
          ) : null}
        </div>
      </div>
      <span className="dark:text-mainText text-background font-medium text-justify">
        {description}
      </span>
      <h2 className="dark:text-mainText text-background text-xl font-semibold">
        {t("projects>stack")}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {stack.map((tech, index) => (
          <StackCard key={`${tech}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};
