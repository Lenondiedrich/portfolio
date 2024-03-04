import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <footer className="container mx-auto pt-5 lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ContactItem>
          <Mail className="size-5 lg:size-10 stroke-portfolio-navy dark:stroke-portfolio-ice" />
          <span>lenon.diedrich@gmail.com</span>
        </ContactItem>
        <ContactItem>
          <Github className="size-5 lg:size-10 stroke-portfolio-navy dark:stroke-portfolio-ice" />
          <span>LenonDiedrich</span>
        </ContactItem>
        <ContactItem>
          <Linkedin className="size-5 lg:size-10 stroke-portfolio-navy dark:stroke-portfolio-ice" />
          <span>lenon-diedrich-da-silva-b1a6291b8</span>
        </ContactItem>
      </div>

      <p className="text-center pt-20 pb-10 font-montserrat text-portfolio-navy dark:text-portfolio-ice text-[20px]">
        {t("footer")}
      </p>
    </footer>
  );
};

const ContactItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center font-montserrat font-medium text-[16px] lg:text-[20px] text-portfolio-navy dark:text-portfolio-ice">
      {children}
    </div>
  );
};
