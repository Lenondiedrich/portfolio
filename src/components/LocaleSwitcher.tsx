"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState, useTransition } from "react";

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState("pt");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    pathname.includes("pt") ? setLocale("pt") : setLocale("en");
  }, [pathname]);

  const getFlagPath = () => {
    const selectedLocale = pathname.includes("pt") ? "pt" : "en";
    return selectedLocale === "pt" ? "/flags/brasil.svg" : "/flags/usa.svg";
  };

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      const getNewPath = (locale: string) => {
        const segments = pathname.split("/");
        const localeIndex = segments.findIndex((seg: string) => ["en", "pt"].includes(seg));

        if (localeIndex !== -1) {
          segments[localeIndex] = locale;
        } else {
          segments.splice(1, 0, locale);
        }

        return segments.join("/");
      };

      router.replace(getNewPath(nextLocale));
    });
  }

  return (
    <label
      className={clsx(
        "relative text-portfolio-navy dark:text-portfolio-ice flex items-center",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <div>
        <Image src={getFlagPath()} alt="flag image" width={40} height={15} />
        <p className="sr-only">{locale}</p>
      </div>
      <select
        className="inline-flex appearance-none bg-transparent dark:bg-portfolio-navy py-3 pl-2 pr-6"
        value={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {[
          { value: "en", label: "English" },
          { value: "pt", label: "Português" },
        ].map((cur) => (
          <option key={cur.value} value={cur.value}>
            {cur.label}
          </option>
        ))}
      </select>
      <ChevronDown />
    </label>
  );
}
