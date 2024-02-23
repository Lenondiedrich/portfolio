import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const header = tv({
  slots: {
    base: "w-full p-5 rounded-t-full flex items-center justify-between z-20 relative",
  },
  variants: {
    color: {
      navy: "bg-portfolio-navy",
      "deep-sky": "bg-portfolio-deep-sky",
      teal: "bg-portfolio-teal",
      mint: "bg-portfolio-mint",
      sage: "bg-portfolio-sage",
      seafoam: "bg-portfolio-seafoam",
      "pale-mint": "bg-portfolio-pale-mint",
      ice: "bg-portfolio-ice",
    },
    rounded: {
      full: "rounded-b-full",
      right: "rounded-br-full",
      left: "rounded-bl-full",
    },
  },
});

type HeaderVariants = ComponentProps<"div"> & VariantProps<typeof header>;

interface HeaderProps extends HeaderVariants {
  children: React.ReactNode;
}

export const Header = ({
  color = "navy",
  rounded = "full",
  className = "",
  children,
  ...props
}: HeaderProps) => {
  const { base } = header({ color, rounded });

  return (
    <div {...props} className={`${base()} ${className}`}>
      {children}
    </div>
  );
};
