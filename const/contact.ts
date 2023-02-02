import { IconType } from "react-icons";
import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si'

export interface ContactProp {
  contactInfo?: string;
  Icon: IconType;
}

export const contacts: ContactProp[] = [
  {
    contactInfo: 'lenon.diedrich@gmail.com',
    Icon: SiGmail,
  },
  {
    contactInfo: '(51) 99808-4576',
    Icon: SiWhatsapp
  },
  {
    contactInfo: 'lenon-diedrich-da-silva-b1a6291b8',
    Icon: SiLinkedin,
  },
  {
    contactInfo: 'LenonDiedrich',
    Icon: SiGithub,
  }
]