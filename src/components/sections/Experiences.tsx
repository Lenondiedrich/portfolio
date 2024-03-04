/* eslint-disable react/no-unescaped-entities */

import { CloudShape } from "@/public/images/CloudShape";
import { Card } from "../Card";
import { Line } from "../ui/Line";
import {
  netspacesSkills,
  superaSkills,
  weblockSkills,
} from "@/src/constants/experience";
import { useTranslations } from "next-intl";

export const Experiences = () => {
  const t = useTranslations("Experiences");

  return (
    <section
      className="relative bg-portfolio-sage dark:bg-portfolio-sky-blue min-h-[500px] size-full pb-20"
      id="experiences"
    >
      <CloudShape />

      <div className="container mx-auto px-[30px] lg:px-0 pt-24 lg:pt-[250px] space-y-10">
        <div className="flex items-center justify-between">
          <span className="font-montserrat text-portfolio-ice text-[32px] lg:text-[52px]">
            {t("title")}
          </span>

          <div className="w-full flex items-center justify-end">
            <Line color="bg-portfolio-ice" width="w-[80%]" />
            <div className="bg-portfolio-ice size-4 lg:size-8 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-none xl:grid-flow-col xl:auto-cols-[minmax(0,_500px)] gap-10">
          <Card.Root>
            <Card.Header rounded="left">
              <p className="font-montserrat font-semibold text-[24px] lg:text-[28px] text-portfolio-ice">
                netspaces
              </p>
              <Line color="bg-portfolio-ice" width="w-1/2" />
            </Card.Header>

            <Card.Body className="-mt-[40px] pt-[60px] h-full">
              <div className="flex flex-col items-start justify-start divide-portfolio-navy w-full space-y-2">
                <Card.Role>{t("netspaces.role")}</Card.Role>

                <Card.Period>{t("netspaces.period")}</Card.Period>
              </div>

              <Card.Description>{t("netspaces.description")}</Card.Description>

              <Card.TechStack techItems={netspacesSkills} />
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
                <Card.Role>{t("weblock.role")}</Card.Role>

                <Card.Period>{t("weblock.period")}</Card.Period>
              </div>

              <Card.Description>
                {t.rich("weblock.description", {
                  br: () => <br />,
                  strong: (children) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                })}
              </Card.Description>

              <Card.TechStack techItems={weblockSkills} />
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Header rounded="right">
              <Line color="bg-portfolio-ice" width="w-1/2" />
              <p className="font-montserrat font-semibold text-[24px] lg:text-[28px] text-portfolio-ice">
                Supera
              </p>
            </Card.Header>

            <Card.Body className="-mt-[40px] pt-[60px]">
              <div className="flex flex-col items-start justify-start divide-portfolio-navy w-full space-y-2">
                <Card.Role>Desenvolvedor Fullstack Júnior</Card.Role>

                <Card.Period>Jul/2021 - Fev/2022</Card.Period>
              </div>

              <Card.Description>
                {t.rich("supera.description", {
                  br: () => <br />,
                })}
              </Card.Description>

              <Card.TechStack techItems={superaSkills} />
            </Card.Body>
          </Card.Root>
        </div>
      </div>
    </section>
  );
};
