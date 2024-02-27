/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  netspacesSkills,
  superaSkills,
  weblockSkills,
} from "@/constants/experience";
import { CloudShape } from "@/public/images/CloudShape";
import { CalendarDays } from "lucide-react";
import { Card } from "../Card";
import { Line } from "../ui/Line";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Experiences = () => {
  const [isDark, setIsDark] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const isDarkMode =
      theme === "system" ? systemTheme === "dark" : theme === "dark";

    setIsDark(isDarkMode);
  }, [theme, systemTheme]);

  return (
    <section
      className="relative bg-portfolio-sage dark:bg-portfolio-sky-blue min-h-[500px] size-full pb-20"
      id="experiences"
    >
      <CloudShape />

      <div className="container mx-auto px-[30px] lg:px-0 pt-24 lg:pt-[250px] space-y-10">
        <div className="flex items-center justify-between">
          <span className="font-montserrat text-portfolio-ice text-[32px] lg:text-[52px]">
            Experiência
          </span>

          <div className="w-full flex items-center justify-end">
            <Line color="bg-portfolio-ice" width="w-[80%]" />
            <div className="bg-portfolio-ice size-4 lg:size-8 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-none xl:grid-flow-col xl:auto-cols-[minmax(0,_500px)] gap-10">
          <Card.Root>
            <Card.Header rounded="right">
              <p className="font-montserrat font-semibold text-[24px] lg:text-[28px] text-portfolio-ice">
                Supera
              </p>
              <Line color="bg-portfolio-ice" width="w-1/2" />
            </Card.Header>

            <Card.Body className="-mt-[40px] pt-[60px]">
              <div className="flex flex-col items-start justify-start divide-portfolio-navy w-full space-y-2">
                <span className="font-roboto font-semibold text-[18px] lg:text-[20px] text-portfolio-navy dark:text-portfolio-ice">
                  Desenvolvedor Fullstack Júnior
                </span>

                <div className="flex items-center gap-2">
                  <CalendarDays color={isDark ? "#EBF3E8" : "#1A2F4B"} />
                  <span className="font-roboto font-light text-portfolio-navy dark:text-portfolio-ice text-[18px] lg:text-[20px]">
                    Jul/2021 - Fev/2022
                  </span>
                </div>
              </div>

              <p className="text-justify font-roboto font-light text-portfolio-deep-sky dark:text-portfolio-ice text-[18px] lg:text-[20px]">
                Trabalhei em vários projetos, sendo os principais:
                <br />
                - Um site para compra e venda de carros em que é possível
                pesquisar, filtrar, simular financiamento e ver informações
                sobre o veículo e a revenda. <br />
                - Aplicação para auxiliar pessoas a encontrarem e contratarem
                mentores. <br />
                - Plataforma para gerenciar pagamento de entregadores de app de
                delivery. <br />
                - Dashboard para gerenciamento de colheita para controle de
                produção. <br />- Sistema de parcelamento de contas via boletos
                bancários.
              </p>

              <div className="size-full flex flex-col justify-end">
                <span className="font-roboto font-light text-[20px] lg:text-[24px] text-portfolio-navy dark:text-portfolio-ice">
                  Tecnologias:
                </span>
                <div className="flex">
                  <span className="font-roboto font-bold text-portfolio-navy dark:text-portfolio-ice text-[16px]">
                    {superaSkills.map((item) => `${item} | `)}
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Line color="bg-portfolio-ice" width="w-1/2" />
              <span className="font-montserrat font-semibold text-[24px] lg:text-[28px] text-portfolio-ice  px-5">
                W3block
              </span>
              <Line color="bg-portfolio-ice" width="w-1/2" />
            </Card.Header>
            <Card.Body className="-mt-10 pt-16 h-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <span className="font-roboto font-semibold text-[18px] lg:text-[20px] text-portfolio-navy dark:text-portfolio-ice">
                  Desenvolvedor de Software
                </span>

                <div className="flex items-center gap-2">
                  <CalendarDays color={isDark ? "#EBF3E8" : "#1A2F4B"} />
                  <span className="font-roboto font-light text-portfolio-navy dark:text-portfolio-ice text-[18px] lg:text-[20px]">
                    Fev/2022 - Dez/2022
                  </span>
                </div>
              </div>

              <p className="text-justify font-roboto font-light text-portfolio-deep-sky dark:text-portfolio-ice text-[18px] lg:text-[20px]">
                Trabalhei em 3 principais projetos, sendo eles: <br />
                <strong>Tropix</strong> - Um marketplace de obras de artes,
                sendo registrados em um NFT e negociados via criptomoedas.
                <br />
                <strong>Eventix</strong> - Uma plataforma para comprar e
                revendar ingressos de eventos por meio de NFT&apos;s.
                <br />
                <strong>UI SDK</strong> - Uma biblioteca frontend com os
                componentes necessários para a integração de páginas com as
                regras de negócio da empresa.
              </p>

              <div className="flex flex-col size-full justify-end">
                <span className="font-roboto font-light text-[20px] lg:text-[24px] text-portfolio-navy dark:text-portfolio-ice">
                  Tecnologias:
                </span>
                <div className="flex">
                  <span className="font-roboto font-bold text-portfolio-navy dark:text-portfolio-ice text-[16px]">
                    {weblockSkills.map((item) => `${item} | `)}
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Header rounded="left">
              <Line color="bg-portfolio-ice" width="w-1/2" />
              <p className="font-montserrat font-semibold text-[24px] lg:text-[28px] text-portfolio-ice">
                netspaces
              </p>
            </Card.Header>

            <Card.Body className="-mt-[40px] pt-[60px] h-full">
              <div className="flex flex-col items-start justify-start divide-portfolio-navy w-full space-y-2">
                <span className="font-roboto font-semibold text-[18px] lg:text-[20px] text-portfolio-navy dark:text-portfolio-ice">
                  Desenvolvedor frontend pleno
                </span>

                <div className="flex items-center gap-2">
                  <CalendarDays color={isDark ? "#EBF3E8" : "#1A2F4B"} />
                  <span className="font-roboto font-light text-portfolio-navy dark:text-portfolio-ice text-[18px] lg:text-[20px]">
                    Fev/2023 - Atual
                  </span>
                </div>
              </div>

              <p className="text-justify font-roboto font-light text-portfolio-deep-sky dark:text-portfolio-ice text-[18px] lg:text-[20px]">
                Como Desenvolvedor Frontend Pleno, sou especializado em
                transformar designs de UX em interfaces "pixel perfect",
                garantindo que cada detalhe dos protótipos seja meticulosamente
                implementado. Utilizando CSS moderno e frameworks de UI,
                asseguro a fidelidade visual dos projetos, melhorando a estética
                e a experiência do usuário, sem comprometer funcionalidade e
                usabilidade. Meu trabalho estreita a colaboração com as equipes
                de design, focando na precisão e qualidade.
              </p>

              <div className="size-full flex flex-col justify-end">
                <span className="font-roboto font-light text-[20px] lg:text-[24px] text-portfolio-navy dark:text-portfolio-ice">
                  Tecnologias:
                </span>
                <div className="flex">
                  <span className="font-roboto font-bold text-portfolio-navy dark:text-portfolio-ice text-[16px]">
                    {netspacesSkills.map((item) => `${item} | `)}
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card.Root>
        </div>
      </div>
    </section>
  );
};
