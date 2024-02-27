import { Line } from "./ui/Line";

export const SoftSkills = () => {
  return (
    <>
      <div className="flex items-center justify-between pt-10">
        <span className="font-montserrat text-portfolio-navy dark:text-portfolio-ice text-[32px] lg:text-[52px] w-full text-left">
          Soft Skills
        </span>
        <div className="w-full flex items-center justify-end">
          <Line width="w-[80%]" />
          <div className="bg-portfolio-navy dark:bg-portfolio-ice size-4 lg:size-8 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {softskills.map((skill, index) => (
          <SoftSkillCard key={skill.title} {...skill} number={index + 1} />
        ))}
      </div>
    </>
  );
};

const SoftSkillCard = ({
  number,
  title,
  description,
  color,
}: {
  number: number;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-14">
        <p
          className={`font-montserrat font-extrabold text-[64px] leading-none ${color}`}
        >
          {number}.
        </p>
        <div className={`h-2 w-full ${color}`} />
      </div>
      <span className="text-[32px] font-montserrat font-medium text-portfolio-navy dark:text-portfolio-ice tracking-tighter">
        {title}
      </span>
      <p className="font-roboto text-justify text-portfolio-navy dark:text-portfolio-ice">
        {description}
      </p>
    </div>
  );
};

const softskills = [
  {
    title: "Aprendizagem Rápida",
    color: "text-blue-600",
    description:
      "Tenho a capacidade de absorver novas informações e habilidades de forma eficiente e eficaz. Essa habilidade me permite enfrentar desafios desconhecidos com confiança e adaptar-me rapidamente a mudanças.",
  },
  {
    title: "Comunicação",
    color: "text-green-600",
    description:
      "Como desenvolvedor, a comunicação é uma habilidade fundamental, especialmente quando se trata de colaborar com equipes multidisciplinares. Ser eficaz na documentação de código e na utilização de ferramentas de controle de versão, como Git, facilita a colaboração com outros desenvolvedores e contribui para o sucesso dos projetos.",
  },
  {
    title: "Resolução de Problemas",
    color: "text-yellow-600",
    description:
      "A resolução de problemas é uma habilidade que me permite identificar, analisar e resolver problemas de forma eficaz e eficiente. Isso me permite encontrar soluções para desafios complexos e contribuir com o time para uma entrega de qualidade.",
  },
];
