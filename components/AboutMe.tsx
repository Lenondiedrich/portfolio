import { useTranslation } from "next-i18next";
import Image from "next/image";
import { RefObject } from "react";
import profileImage from "../assets/profileImage.jpg";

const buttonStyle =
  "dark:text-mainText border-2 dark:border-green-500 dark:bg-background text-background border-background p-[10px] sm:p-4 transition-colors rounded-full active:scale-95 dark:hover:bg-green-500 dark:hover:text-zinc-800 hover:bg-background hover:text-mainText";

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8 flex flex-col items-center justify-center gap-8">
      <Image
        alt="profileImage"
        src={profileImage.src}
        height={300}
        width={300}
        data-taos-offset="300"
        className="rounded-full m-4 border-4 dark:border-green-600 border-background"
      />

      <p className="dark:text-mainText text-background text-center font-Inter text-4xl">
        {t("aboutMe>title")}
        <span className="dark:bg-green-500 dark:text-background text-mainText bg-background rounded-lg">
          {t("aboutMe>highlightedText")}
        </span>
        {t("aboutMe>endOfTitle")}
      </p>

      <div className="flex flex-col items-center w-full lg:w-[800px] font-Inter gap-4 p-4 animate-fade-in-right">
        <h3 className="dark:text-mainText text-background font-bold text-2xl">
          {t("aboutMe")}
        </h3>
        <p className="dark:text-paragraph text-zinc-900 font-medium text-lg text-justify">
          {t("aboutMe>description")}
        </p>
      </div>
      <div className="text-mainText flex items-center justify-center text-center gap-4 font-Inter font-bold">
        <a className={buttonStyle} href="/curriculum.pdf" download>
          {t("aboutMe>downloadCV")}
        </a>
        <button className={buttonStyle}>{t("aboutMe>contact")}</button>
      </div>
    </div>
  );
};
