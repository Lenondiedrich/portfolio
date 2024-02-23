import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  size?: string;
  color?: string;
  styles?: string;
}

export const Button = ({
  children,
  size = "w-[130px]",
  color = "bg-portfolio-sage hover:bg-portfolio-sage/80",
  styles = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${size} ${color} ${styles} flex items-center justify-center gap-2 py-2 rounded-full text-portfolio-ice font-roboto font-light text-[20px] leading-relaxed -tracking-wide transition-colors duration-300`}
    >
      {children}
    </button>
  );
};
