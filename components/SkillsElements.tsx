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
    <div>
      <span className="px-10 pt-5 pb-1 bg-portfolio-ice rounded-t-lg border-t border-l border-r border-portfolio-navy text-[20px] font-roboto text-portfolio-navy font-medium">
        {title}
      </span>
      <div className="bg-portfolio-ice rounded-b-lg border border-b-8 border-r-8 border-portfolio-navy p-5 flex flex-col md:flex-row items-center gap-10">
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
