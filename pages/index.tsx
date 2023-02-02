import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRef } from "react";

export default function Home() {
  const skillsRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="dark:bg-background bg-green-600 h-full bg-texture dark:bg-blend-normal bg-blend-difference pb-20">
      <Header
        contactRef={contactRef}
        experiencesRef={experiencesRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
      />
      <AboutMe />
      <Skills skillsRef={skillsRef} />
      <Experiences experiencesRef={experiencesRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "")),
    },
  };
};
