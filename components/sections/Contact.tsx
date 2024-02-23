import { Github, Linkedin, Mail } from "lucide-react";
import { ReactNode } from "react";

export const Contact = () => {
  return (
    <footer className="container mx-auto pt-20">
      <div className="grid grid-cols-3">
        <ContactItem>
          <Mail size={40} color="#1A2F4B" />
          lenon.diedrich@gmail.com
        </ContactItem>
        <ContactItem>
          <Github size={40} color="#1A2F4B" />
          LenonDiedrich
        </ContactItem>
        <ContactItem>
          <Linkedin size={40} color="#1A2F4B" />
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
    <div className="flex flex-col items-center font-montserrat font-medium text-[20px] text-portfolio-navy">
      {children}
    </div>
  );
};
