import dynamic from "next/dynamic";
import Intro from "@/components/intro";

const About = dynamic(() => import("@/components/about"));
const Experiences = dynamic(() => import("@/components/experiences"));
const TechStack = dynamic(() => import("@/components/tech-stack"));
const Projects = dynamic(() => import("@/components/projects"));
const Contact = dynamic(() => import("@/components/contact"));

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
