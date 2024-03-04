import { About } from "@/src/components/sections/About";
import { Contact } from "@/src/components/sections/Contact";
import { Experiences } from "@/src/components/sections/Experiences";
import { Projects } from "@/src/components/sections/Projects";
import { Skills } from "@/src/components/sections/Skills";

export default function Portfolio() {
  return (
    <div>
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
