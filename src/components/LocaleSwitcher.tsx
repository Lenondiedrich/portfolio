import clsx from "clsx";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { usePathname, useRouter } from "../navigation";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const LocaleSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const getFlagPath = () => {
    if (locale === "pt") {
      return "/flags/brasil.svg";
    } else {
      return "/flags/usa.svg";
    }
  };

  const changeLocale = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: selectedLocale }
      );
    });
  };

  return (
    <label
      className={clsx(
        "relative text-portfolio-navy dark:text-portfolio-ice flex items-center",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <div className="">
        <Image src={getFlagPath()} alt="flag image" width={40} height={15} />
        <p className="sr-only ">{locale}</p>
      </div>
      <select
        className="inline-flex appearance-none bg-transparent dark:bg-portfolio-navy py-3 pl-2 pr-6"
        defaultValue={locale}
        disabled={isPending}
        onChange={changeLocale}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
      <ChevronDown className="pointer-events-none" />
    </label>
  );
};

export default LocaleSwitcher;
