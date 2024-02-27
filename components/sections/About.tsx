import { DownloadCloud, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "../ui/Button";
import { Line } from "../ui/Line";

export const About = () => {
  return (
    <main
      className="size-full min-h-[800px] py-32 relative overflow-hidden"
      id="about"
    >
      <Image
        src="/images/picture.jpg"
        alt="image"
        height={600}
        width={600}
        className="rounded-s-full absolute lg:animate-slide-left transition-transform top-[280px] lg:top-[150px] right-0 lg:-mr-[1000px] size-[350px] lg:size-[400px] xl:size-[600px]"
      />

      <div className="container mx-auto px-[30px]">
        <h1 className="font-montserrat font-semibold text-[28px] md:text-[32px] lg:text-[52px] text-portfolio-sage dark:text-portfolio-seafoam leading-none">
          Olá!
        </h1>
        <h1 className="font-montserrat font-semibold text-[28px] md:text-[32px] lg:text-[52px] text-portfolio-sage dark:text-portfolio-seafoam leading-tight tracking-tight">
          Me chamo Lenon e sou
          <br />
          <div className="font-montserrat font-semibold text-[28px] md:text-[32px] lg:text-[52px] text-portfolio-ice bg-gradient-to-r from-portfolio-sage dark:from-blue-700 to-portfolio-seafoam dark:to-blue-500 skew-x-12 w-[380px] lg:w-[610px]">
            <div className="-skew-x-12">desenvolvedor fullstack</div>
          </div>
        </h1>

        <div className="w-full max-w-[450px] lg:max-w-[620px] mt-[450px] md:mt-12 relative">
          <div className="bg-portfolio-pale-mint dark:bg-portfolio-navy w-full p-5 rounded-t-full rounded-br-full flex items-center justify-between z-20 relative">
            <span className="font-montserrat font-semibold text-[24px] lg:text-[28px] text-portfolio-deep-sky dark:text-portfolio-ice">
              SOBRE MIM
            </span>{" "}
            <Line width="w-1/2" />
          </div>

          <div className="relative flex flex-col items-center -mt-[45px] pt-[60px] px-5 pb-5 border-x-4 border-b-8 border-portfolio-pale-mint dark:border-portfolio-navy bg-portfolio-ice dark:bg-portfolio-deep-ice shadow-xl font-roboto font-light text-portfolio-deep-sky dark:text-portfolio-ice text-[16px] lg:text-[20px] z-10 space-y-10">
            <p className="text-justify">
              Sou um desenvolvedor fullstack com uma trajetória iniciada aos 16
              anos, apaixonado por tecnologia e formado em{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong> pela
              UNISINOS.
              <br />
              <br />
              Atualmente, atuo na posição de desenvolvedor frontend pleno na
              netspaces, onde aplico meus conhecimentos nas tecnologias{" "}
              <strong>Typescript</strong>, <strong>React</strong>, e{" "}
              <strong>Next.js</strong>, para criar interfaces dinâmicas e
              responsivas.
              <br />
              <br />
              Estou sempre em busca de novos desafios e tecnologias para
              aprimorar minhas capacidades e contribuir com soluções inovadoras.
            </p>

            <div className="flex items-center justify-between size-full">
              <a href="/files/curriculum.pdf" target="_blank">
                <Button>
                  <DownloadCloud color="#EBF3E8" />
                  Currículo
                </Button>
              </a>
              <div className="space-x-4">
                <SocialButton href="https://github.com/Lenondiedrich">
                  <Github className="stroke-white group-hover:stroke-black transition-colors duration-300" />
                </SocialButton>
                <SocialButton href="https://www.linkedin.com/in/lenon-diedrich-da-silva-b1a6291b8/">
                  <Linkedin className="stroke-white group-hover:stroke-blue-400 transition-colors duration-300" />
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const SocialButton = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a href={href} target="_blank">
      <button className="bg-portfolio-sage dark:bg-portfolio-navy  hover:bg-portfolio-sage/80 dark:hover:bg-portfolio-navy/80 p-2 rounded-full duration-300 transition-colors size-10 group">
        {children}
      </button>
    </a>
  );
};
