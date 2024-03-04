import { useTranslations } from "next-intl";

export const TechStack = ({ techItems }: { techItems: string[] }) => {
  const t = useTranslations("Experiences");

  return (
    <div className="size-full flex flex-col justify-end">
      <span className="font-roboto font-light text-[20px] lg:text-[24px] text-portfolio-navy dark:text-portfolio-ice">
        {t("techs")}
      </span>
      <div className="flex">
        <span className="font-roboto font-bold text-portfolio-navy dark:text-portfolio-ice text-[16px]">
          {techItems.map((item) => `${item} | `)}
        </span>
      </div>
    </div>
  );
};
