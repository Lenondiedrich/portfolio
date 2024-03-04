import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";

interface HamburgerComponentProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
}

export const HamburgerComponent = ({
  isDark,
  isOpen,
  setIsOpen,
}: HamburgerComponentProps) => {
  return (
    <div className="z-50">
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        color={`${isDark ? "#EBF3E8" : "#1A2F4B"}`}
      />
    </div>
  );
};
