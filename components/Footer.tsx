import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="dark:text-mainText text-background font-bold font-Inter mt-20 -mb-10 text-center">
      {t("footer")}
    </div>
  );
};
