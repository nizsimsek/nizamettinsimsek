"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { techStackData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { useLanguage } from "@/containers/language-context";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiFramer,
  SiNextdotjs,
  SiGit,
  SiSocketdotio,
  SiWebrtc,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const icons: { [key: string]: JSX.Element } = {
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiReact: <SiReact />,
  SiTailwindcss: <SiTailwindcss />,
  SiBootstrap: <SiBootstrap />,
  SiRedux: <SiRedux />,
  SiFramer: <SiFramer />,
  SiNextdotjs: <SiNextdotjs />,
  SiGit: <SiGit />,
  SiSocketdotio: <SiSocketdotio />,
  SiWebrtc: <SiWebrtc />,
  SiMysql: <SiMysql />,
  SiPostgresql: <SiPostgresql />,
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function TechStack() {
  const { language } = useLanguage();
  const { ref } = useSectionInView("#tech-stack");

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>
        {language === "tr" ? "Teknolojiler" : "Tech Stack"}
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {techStackData.map((tech, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center justify-center gap-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {icons[tech.logo]}
            {tech.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
