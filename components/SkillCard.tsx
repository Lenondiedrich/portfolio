import { SkillsProps } from "@/const/skills";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const SkillCard = ({ name, Icon }: SkillsProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="dark:text-mainText text-background dark:bg-background bg-green-600 font-bold transition-transform hover:scale-110 ease-in-out delay-100 flex flex-col items-center gap-2 border dark:border-green-500 border-background rounded-tr-xl rounded-br p-3 shadow-md dark:shadow-green-500 shadow-background">
      <p>{name}</p>
      <Icon color={theme === "dark" ? "#22c55e" : "#16161a"} size={36} />
    </div>
  );
};
