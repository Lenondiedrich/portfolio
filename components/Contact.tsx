import { contacts } from "@/const/contact";
import { RefObject } from "react";
import { ContactCard } from "./ContactCard";

interface ContactProps {
  contactRef: RefObject<HTMLDivElement>;
}

export const Contact = ({ contactRef }: ContactProps) => {
  return (
    <div ref={contactRef} className="flex flex-col items-center mt-12">
      <span className="font-bold text-3xl">Contato</span>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 p-8">
        {contacts.map((contact) => (
          <ContactCard key={contact.contactInfo} {...contact} />
        ))}
      </div>
    </div>
  );
};
