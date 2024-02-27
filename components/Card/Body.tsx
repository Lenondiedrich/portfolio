import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const body = tv({
  slots: {
    base: "relative flex flex-col items-center px-5 pb-5 border-x-4 border-b-8  shadow-xl z-10 space-y-10",
  },
  variants: {
    color: {
      "light-navy":
        "border-portfolio-navy bg-portfolio-pale-mint dark:bg-portfolio-deep-ice/50",
      "light-pale-mint": "border-portfolio-pale-mint bg-portfolio-ice",
    },
  },
});

type BodyVariants = ComponentProps<"div"> & VariantProps<typeof body>;

interface BodyProps extends BodyVariants {
  children: React.ReactNode;
}

export const Body = ({
  color = "light-navy",
  className = "",
  children,
  ...props
}: BodyProps) => {
  const { base } = body({ color });
  return (
    <div {...props} className={`${base()} ${className}`}>
      {children}
    </div>
  );
};
