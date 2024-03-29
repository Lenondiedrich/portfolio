import { ReactNode } from "react";

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <div className="size-full flex flex-col items-stretch max-w-[550px]">
      {children}
    </div>
  );
};
