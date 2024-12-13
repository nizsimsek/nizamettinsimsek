import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
      <Experiences />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
