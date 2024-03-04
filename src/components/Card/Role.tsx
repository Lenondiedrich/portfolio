import { ReactNode } from "react";

export const Role = ({ children }: { children: ReactNode }) => {
  return (
    <span className="font-roboto font-semibold text-[18px] lg:text-[20px] text-portfolio-navy dark:text-portfolio-ice">
      {children}
    </span>
  );
};
