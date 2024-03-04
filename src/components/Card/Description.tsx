import { ReactNode } from "react";

export const Description = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-justify font-roboto font-light text-portfolio-deep-sky dark:text-portfolio-ice text-[18px] lg:text-[20px]">
      {children}
    </p>
  );
};
