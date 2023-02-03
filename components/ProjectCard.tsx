import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "../const/projects";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";
import { ProjectDescription } from "./ProjectDescription";
import { useTheme } from "next-themes";

export const ProjectCard = ({
  Cover,
  description,
  name,
  repoUrl,
  stack,
  demoUrl,
  videoDemo,
}: Project) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const coverIsString = typeof Cover === "string";

  const toggleHover = () => {
    setIsHovering(!isHovering);
  };

  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          className="w-full max-w-[380px] h-[180px] relative flex items-center justify-center rounded-lg border dark:border-green-500 border-background shadow-sm dark:shadow-green-500 shadow-background cursor-pointer active:scale-90 transition ease-in-out"
        >
          {coverIsString ? (
            <Image
              src={Cover}
              alt="Project cover image"
              className="rounded-lg z-0 object-cover"
              fill
            />
          ) : (
            <Cover
              size={80}
              color={theme === "dark" ? "#22c55e" : "#16161a"}
              className="z-0"
            />
          )}

          {isHovering ? (
            <div className="text-background animate-fade-in-down bottom-2 font-semibold font-Inter w-full h-full max-w-[200px] max-h-[50px] p-1 rounded-lg bg-green-500 z-20 absolute flex items-center justify-center">
              {name}
            </div>
          ) : null}
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-full h-full backdrop-blur-md bg-black/5 fixed inset-0" />
          <Dialog.Content className="fixed w-full p-10 dark:bg-zinc-900 bg-green-300 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 font-Inter">
            <Dialog.Close>
              <AiOutlineClose
                size={24}
                aria-label="Fechar"
                className="absolute right-6 top-6 dark:text-zinc-400 text-background dark:hover:text-zinc-200 hover:text-background/50"
              />
            </Dialog.Close>
            <Dialog.Title className="dark:text-mainText text-background font-bold text-center text-3xl">
              {name}
            </Dialog.Title>
            <ProjectDescription
              name={name}
              Cover={Cover}
              description={description}
              repoUrl={repoUrl}
              stack={stack}
              demoUrl={demoUrl}
              videoDemo={videoDemo}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
