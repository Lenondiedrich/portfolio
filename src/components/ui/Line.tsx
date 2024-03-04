import { ComponentProps } from "react";

interface LineProps extends ComponentProps<"div"> {
  width?: string;
  height?: string;
  color?: string;
  styles?: string;
}

export const Line = ({
  width = "w-full",
  height = "h-0.5",
  color = "bg-portfolio-navy dark:bg-portfolio-ice",
  styles = "",
  ...props
}: LineProps) => {
  return <div {...props} className={`${width} ${height} ${color} ${styles}`} />;
};
