import { ContactProp } from "@/const/contact";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ContactCard = ({ Icon, contactInfo }: ContactProp) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="grid grid-rows-2 place-items-center">
      <Icon size={40} color={theme === "dark" ? "#fffffe" : "#16161a"} />
      <p className="font-light text-xl text-center">{contactInfo}</p>
    </div>
  );
};
