import dsDelivery from '../assets/projects-covers/dsdeliver.png'
import dsDeliveryDemo from '../assets/projects-covers/dsdeliveryDemo.gif'
import dsmovie from '../assets/projects-covers/dsmovie.png'
import dsmovieDemo from '../assets/projects-covers/dsmovieDemo.gif'
import dsVendas from '../assets/projects-covers/dsvendas.png'
import dsVendasDemo from '../assets/projects-covers/dsvendasDemo.gif'
import esports from '../assets/projects-covers/esports.png'
import esportsDemo from '../assets/projects-covers/esportsDemo.gif'
import evernote from '../assets/projects-covers/evernote.png'
import feedback from '../assets/projects-covers/feedback.png'
import happy from '../assets/projects-covers/happy.png'
import happyDemo from '../assets/projects-covers/happyDemo.gif'

import { IconType } from 'react-icons'
import { SiNestjs, SiNodedotjs } from 'react-icons/si'

export interface Project {
  name: string;
  description: string;
  stack: string[],
  demoUrl?: string;
  Cover: string | IconType;
  videoDemo?: string;
  repoUrl: string;
}


export const projects: Project[] = [
  {
    name: 'DSVendas',
    description: 'Projeto desenvolvido na semana DevSuperior. O projeto consiste em uma aplicação de para ver o resultado de vendas.',
    stack: ['Java (JDK 16)', 'Spring Framework (STS)', 'ReactJs', 'PostgreSQL 12', 'Insomnia', 'Heroku', 'Netlify'],
    demoUrl: 'https://lenon-dsvendas.netlify.app/',
    Cover: dsVendas.src,
    videoDemo: dsVendasDemo.src,
    repoUrl: 'https://github.com/Lenondiedrich/dsvendas'
  },
  {
    name: 'E-sports',
    description: 'Esse projeto foi desenvolvido durante uma Next Level Week, disponibilizado pela RocketSeat. O projeto consiste em publicar anúncio para encontrar um duo para sua jogatina online, selecionando o jogo e criando o anúncio.',
    stack: ['Typescript', 'ReactJS', 'React Native', 'Vite', 'Tailwind CSS', 'Phosphor-icons', 'Radix UI', 'NodeJS', 'Prisma', 'Express'],
    Cover: esports.src,
    videoDemo: esportsDemo.src,
    repoUrl: 'https://github.com/Lenondiedrich/nlw-esports'
  },
  {
    name: 'Happy',
    description: 'Esse projeto foi desenvolvido durante uma Next Level Week, disponibilizado pela RocketSeat. O projeto consiste em uma aplicação para encontrar orfanatos ou para cadastrar orfanatos no mapa.',
    stack: ['Handlebars', 'Express', 'Nodemon', 'SQLite', 'Leaflet'],
    Cover: happy.src,
    videoDemo: happyDemo.src,
    repoUrl: 'https://github.com/Lenondiedrich/happy'
  },
  {
    name: 'Feedback Widget',
    description: 'Projeto desenvolvido a Next Level Week, disponibilizado pela RocketSeat. O Projeto consiste em um componente para enviar feedbacks sobre um determinado sistema.',
    stack: ['Typescript', 'ReactJS', 'Vite', 'Tailwind CSS', 'Insomnia', 'NodeJS', 'Prisma', 'Express', 'NodeMailer'],
    Cover: feedback.src,
    repoUrl: 'https://github.com/Lenondiedrich/FeedbackWidget'
  },
  {
    name: 'Task Management API',
    description: 'Projeto desenvolvido durante o curso NestJS Zero to Hero - Modern Typescript Back-end Development. O projeto consiste em uma API para gerenciar tarefas cadastradas.',
    stack: ['NestJS', 'TypeORM', 'Typescript', 'Jest'],
    Cover: SiNestjs,
    repoUrl: 'https://github.com/Lenondiedrich/task-management-api'
  },
  {
    name: 'Clone Evernote',
    description: 'Projeto desenvolvido para o curso Programador FullStack. O projeto consiste em um clone da aplicação Evernote, onde é possível se registrar, fazer login, criar e excluir notas',
    stack: ['NodeJS', 'MongoDB', 'ReactJS', 'Bulma', 'Sass', 'Rbx', 'Insomnia'],
    Cover: evernote.src,
    repoUrl: 'https://github.com/Lenondiedrich/clone_evernote'
  },
  {
    name: 'DSMovie',
    description: 'Projeto desenvolvido na semana DevSuperior. O projeto consiste em uma aplicação de avaliação de filmes.',
    stack: ['Java (JDK 17)', 'Spring Framework (STS)', 'ReactJS', 'PostgreSQL 12', 'React-Query', 'Chakra UI', 'Axios', 'Typescript'],
    Cover: dsmovie.src,
    videoDemo: dsmovieDemo.src,
    demoUrl: 'https://lenon-dsmovie.netlify.app/',
    repoUrl: 'https://github.com/Lenondiedrich/ds-movie'
  },
  {
    name: 'DSDelivery',
    description: 'Projeto desenvolvido na semana DevSuperior. O projeto consiste em uma aplicação de registro e entrega de pedidos.',
    stack: ['Java (JDK 11)', 'Spring Framework (STS)', 'ReactJS', 'React Native', 'Expo CLI', 'PostgreSQL 12', 'Postman'],
    Cover: dsDelivery.src,
    videoDemo: dsDeliveryDemo.src,
    demoUrl: 'https://lenondiedrichsds2.netlify.app/',
    repoUrl: 'https://github.com/Lenondiedrich/dsdeliver-sds2'
  }, 
  {
    name: 'NPS-API',
    description: 'Projeto desenvolvido durante a Next Level Week 4.0 disponibilizada pela Rockeatseat. A aplicação consiste em uma API Restful para Net Promoter Score.',
    stack: ['NodeJS', 'Typescript', 'TypeORM', 'NodeMailer', 'Handlebars', 'Yup'],
    Cover: SiNodedotjs,
    repoUrl: 'https://github.com/Lenondiedrich/nlw-nodejs'
  }
]