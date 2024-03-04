"use client";
import { CalendarDays } from "lucide-react";
import { ReactNode } from "react";

export const Period = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center gap-2">
      <CalendarDays className="stroke-portfolio-navy dark:stroke-portfolio-ice" />
      <span className="font-roboto font-light text-portfolio-navy dark:text-portfolio-ice text-[18px] lg:text-[20px]">
        {children}
      </span>
    </div>
  );
};
