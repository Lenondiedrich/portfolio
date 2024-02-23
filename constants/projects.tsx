import { ExpressIcon } from "@/public/icons/ExpressIcon";
import { HandlebarsIcon } from "@/public/icons/Handlebars";
import { HerokuIcon } from "@/public/icons/HerokuIcon";
import { JavaIcon } from "@/public/icons/JavaIcon";
import { LeafletIcon } from "@/public/icons/LeafletIcon";
import { NextIcon } from "@/public/icons/NextIcon";
import { NodeIcon } from "@/public/icons/NodeIcon";
import { NodemonIcon } from "@/public/icons/NodemonIcon";
import { PostgreIcon } from "@/public/icons/PostgreIcon";
import { PrismaIcon } from "@/public/icons/PrismaIcon";
import { ReactIcon } from "@/public/icons/ReactIcon";
import { SQLiteIcon } from "@/public/icons/SQLiteIcon";
import { SpringIcon } from "@/public/icons/SpringIcon";
import { TailwindIcon } from "@/public/icons/TailwindIcon";
import { TypescriptIcon } from "@/public/icons/TypescriptIcon";
import { ViteIcon } from "@/public/icons/ViteIcon";
import { Project } from "@/types/cards";
import { Zap } from "lucide-react";

export const projects: Project[] = [
  {
    name: "DSVendas",
    description:
      "Projeto desenvolvido durante a Semana DevSuperior 3.0, evento organizado pela DevSuperior. O projeto consiste em uma aplicação web que exibe um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.",
    repo: "https://github.com/Lenondiedrich/dsvendas",
    demo: "https://lenon-dsvendas.netlify.app/",
    preview: "/images/dsvendasDemo.gif",
    technologies: [
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Spring",
        icon: <SpringIcon />,
      },
      {
        name: "PostgreSQL",
        icon: <PostgreIcon />,
      },
      {
        name: "Heroku",
        icon: <HerokuIcon />,
      },
    ],
  },
  {
    name: "E-sports",
    description:
      "Esse projeto foi desenvolvido durante uma Next Level Week, disponibilizado pela RocketSeat. O projeto consiste em publicar anúncio para encontrar um duo para sua jogatina online, selecionando o jogo e criando o anúncio.",
    repo: "https://github.com/Lenondiedrich/nlw-esports",
    preview: "/images/esportsDemo.gif",
    technologies: [
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Typescript",
        icon: <TypescriptIcon />,
      },
      {
        name: "Vite",
        icon: <ViteIcon />,
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindIcon />,
      },
      {
        name: "NodeJS",
        icon: <NodeIcon />,
      },
      {
        name: "Prisma",
        icon: <PrismaIcon />,
      },
      {
        name: "Express",
        icon: <ExpressIcon />,
      },
    ],
  },
  {
    name: "Happy",
    description:
      "Projeto desenvolvido durante a Next Level Week 3, evento organizado pela RocketSeat. O projeto consiste em uma aplicação web que exibe orfanatos próximos a você, permitindo que você agende uma visita ou mesmo cadastrando um orfanato no mapa.",
    preview: "/images/happyDemo.gif",
    repo: "https://github.com/Lenondiedrich/happy",
    technologies: [
      {
        name: "Handlebars",
        icon: <HandlebarsIcon />,
      },
      {
        name: "Nodemon",
        icon: <NodemonIcon />,
      },
      {
        name: "Express",
        icon: <ExpressIcon />,
      },
      {
        name: "Leaflet",
        icon: <LeafletIcon />,
      },
      {
        name: "SQLite",
        icon: <SQLiteIcon />,
      },
    ],
  },
  {
    name: "DSDelivery",
    description:
      "Projeto desenvolvido na semana DevSuperior. O projeto consiste em uma aplicação de registro e entrega de pedidos.",
    preview: "/images/dsdeliveryDemo.gif",
    repo: "https://github.com/Lenondiedrich/dsdeliver-sds2",
    demo: "https://lenondiedrichsds2.netlify.app/",
    technologies: [
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Spring",
        icon: <SpringIcon />,
      },
      {
        name: "PostgreSQL",
        icon: <PostgreIcon />,
      },
      {
        name: "Heroku",
        icon: <HerokuIcon />,
      },
    ],
  },
  {
    name: "DSMovie",
    description:
      "Projeto desenvolvido durante a Semana DevSuperior 2.0, evento organizado pela DevSuperior. O projeto consiste em uma aplicação web que exibe um catálogo de filmes e séries, permitindo que o usuário avalie os filmes.",
    preview: "/images/dsmovieDemo.gif",
    repo: "https://github.com/Lenondiedrich/ds-movie",
    demo: "https://lenon-dsmovie.netlify.app/",
    technologies: [
      {
        name: "Java",
        icon: <JavaIcon />,
      },
      {
        name: "Spring",
        icon: <SpringIcon />,
      },
      {
        name: "PostgreSQL",
        icon: <PostgreIcon />,
      },
      {
        name: "Heroku",
        icon: <HerokuIcon />,
      },
      {
        name: "Chakra UI",
        icon: <Zap size={40} />,
      },
      {
        name: "Typescript",
        icon: <TypescriptIcon />,
      },
    ],
  },
  {
    name: "BookClub",
    description:
      "Este projeto foi desenvolvido como parte de uma disciplina da universidade, o objeto era construir uma aplicação do zero, criando layout, backend e frontend, além de aprender a lidar com sprints e gerenciamento de tempo através do Azure.",
    preview: "/images/bookclub.png",
    repo: "https://github.com/Lenondiedrich/BookClub",
    technologies: [
      {
        name: "Typescript",
        icon: <TypescriptIcon />,
      },
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Nextjs",
        icon: <NextIcon />,
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindIcon />,
      },
      {
        name: "Prisma",
        icon: <PrismaIcon />,
      },
      {
        name: "NodeJS",
        icon: <NodeIcon />,
      },
      {
        name: "SQLite",
        icon: <SQLiteIcon />,
      },
    ],
  },
];
