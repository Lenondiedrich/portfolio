import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experiences } from "@/components/sections/Experiences";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div>
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
