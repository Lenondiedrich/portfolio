import brazilFlag from "../assets/brazil.svg";
import usaFlag from "../assets/usa.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BsTranslate } from "react-icons/bs";
import { useTranslation } from "next-i18next";

export const LocaleSwitch = () => {
  const router = useRouter();

  const { i18n } = useTranslation();

  const { language } = i18n;

  const styles = {
    languageItemStyle:
      "flex items-center gap-2 mt-2 rounded-lg p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-offset-2",
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="dark:text-mainText text-background border-transparent transition-colors border hover:border-background dark:hover:border-green-500 flex items-center gap-2 font-Inter rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-offset-2 focus:ring-offset-0 dark:focus:ring-offset-background font-bold">
          <BsTranslate /> {language.toUpperCase()}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="z-50 dark:bg-white bg-green-200 rounded-lg text-background p-4 relative shadow-lg will-change-transform transition-all animate-fade-in-down"
        >
          <div className="w-5 h-5 dark:bg-white bg-green-200 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2" />
          <DropdownMenu.Item
            className={styles.languageItemStyle}
            onClick={() => router.push("/", "/", { locale: "pt-BR" })}
          >
            <Image
              src={brazilFlag}
              alt="Brazilian flag"
              width={30}
              height={30}
              className="rounded-lg"
            />
            <span className="font-Inter">PT-BR</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={styles.languageItemStyle}
            onClick={() => router.push("/", "/", { locale: "en" })}
          >
            <Image
              src={usaFlag}
              alt="USA flag"
              width={30}
              height={30}
              className="rounded-lg"
            />
            <span className="font-Inter">EN-US</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
