import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass, FaJava, FaGitAlt, FaAngular, FaVuejs } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript, SiVite, SiNestjs, SiSpringboot, SiCypress, SiSequelize } from 'react-icons/si'

export interface SkillsProps {
  name: string;
  Icon: IconType;
}

export const skills: SkillsProps[] = [
  {
    name: 'HTML5',
    Icon: FaHtml5
  },
  {
    name: 'CSS3',
    Icon: FaCss3
  },
  {
    name: 'SASS',
    Icon: FaSass
  },
  {
    name: 'React',
    Icon: FaReact
  },
  {
    name: 'Javascript',
    Icon: SiJavascript
  },
  {
    name: 'Typescript',
    Icon: SiTypescript
  },
  {
    name: 'Nextjs',
    Icon: SiNextdotjs
  },
  {
    name: 'TailwindCSS',
    Icon: SiTailwindcss
  },
  {
    name: 'Nodejs',
    Icon: FaNodeJs
  },
  {
    name: 'Java',
    Icon: FaJava
  },
  {
    name: 'Spring',
    Icon: SiSpringboot
  },
  {
    name: 'Vite',
    Icon: SiVite
  },
  {
    name: 'Git',
    Icon: FaGitAlt
  }
]

export const learning: SkillsProps[] = [
  {
    name: 'NestJS',
    Icon: SiNestjs
  },
  {
    name: 'Sequelize',
    Icon: SiSequelize
  }
]

export const haveInterest: SkillsProps[] = [
  {
    name: 'Angular',
    Icon: FaAngular
  },
  {
    name: 'Vue',
    Icon: FaVuejs
  },
  {
    name: 'Cypress',
    Icon: SiCypress
  }
]