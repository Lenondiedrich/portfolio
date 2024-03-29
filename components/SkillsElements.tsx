"use client";

import { ReactNode } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

export const GroupSkillCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-stretch">
      <span className="w-[60%] p-5 text-center bg-portfolio-ice dark:bg-portfolio-deep-seafoam rounded-t-lg border-t border-l border-r border-portfolio-navy dark:border-portfolio-mint text-[20px] font-roboto text-portfolio-navy dark:text-portfolio-ice font-medium">
        {title}
      </span>
      <div className="bg-portfolio-ice dark:bg-portfolio-deep-seafoam rounded-b-lg border border-b-8 border-r-8 border-portfolio-navy dark:border-portfolio-mint p-5 flex flex-col md:flex-row items-center gap-10">
        {children}
      </div>
    </div>
  );
};

export const SkillCard = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="">{children}</Tooltip.Trigger>
        <Tooltip.Content
          className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-[4px] bg-white px-[15px] py-[10px] font-roboto font-light text-[20px] text-portfolio-navy leading-none shadow-md will-change-[transform,opacity]"
          sideOffset={5}
        >
          {label}
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
