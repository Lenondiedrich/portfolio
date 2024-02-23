import { Github, Linkedin, Mail } from "lucide-react";
import { ReactNode } from "react";

export const Contact = () => {
  return (
    <footer className="container mx-auto pt-5 lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ContactItem>
          <Mail className="size-5 lg:size-10" color="#1A2F4B" />
          lenon.diedrich@gmail.com
        </ContactItem>
        <ContactItem>
          <Github className="size-5 lg:size-10" color="#1A2F4B" />
          LenonDiedrich
        </ContactItem>
        <ContactItem>
          <Linkedin className="size-5 lg:size-10" color="#1A2F4B" />
          lenon-diedrich-da-silva-b1a6291b8
        </ContactItem>
      </div>

      <p className="text-center pt-20 pb-10 font-montserrat text-portfolio-navy text-[20px]">
        Feito com ❤️ por Lenon
      </p>
    </footer>
  );
};

const ContactItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center font-montserrat font-medium text-[16px] lg:text-[20px] text-portfolio-navy">
      {children}
    </div>
  );
};
