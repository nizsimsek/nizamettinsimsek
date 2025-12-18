"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { techStackData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { useLanguage } from "@/containers/language-context";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiFramer,
  SiGraphql,
  SiNextdotjs,
  SiGit,
  SiSocketdotio,
  SiWebrtc,
  SiMysql,
  SiReactquery,
  SiDocker,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const icons: { [key: string]: { component: React.JSX.Element; color: string } } = {
  SiJavascript: {
    component: <SiJavascript />,
    color: "#F7DF1E",
  },
  SiTypescript: {
    component: <SiTypescript />,
    color: "#3178C6",
  },
  SiReact: {
    component: <SiReact />,
    color: "#61DAFB",
  },
  SiTailwindcss: {
    component: <SiTailwindcss />,
    color: "#06B6D4",
  },
  SiBootstrap: {
    component: <SiBootstrap />,
    color: "#7952B3",
  },
  SiRedux: {
    component: <SiRedux />,
    color: "#764ABC",
  },
  SiFramer: {
    component: <SiFramer />,
    color: "#000",
  },
  SiReactQuery: {
    component: <SiReactquery />,
    color: "#FD611D",
  },
  SiGraphql: {
    component: <SiGraphql />,
    color: "#E10098",
  },
  SiNextdotjs: {
    component: <SiNextdotjs />,
    color: "#000",
  },
  SiGit: {
    component: <SiGit />,
    color: "#F05032",
  },
  SiSocketdotio: {
    component: <SiSocketdotio />,
    color: "#000",
  },
  SiWebrtc: {
    component: <SiWebrtc />,
    color: "#009938",
  },
  SiMysql: {
    component: <SiMysql />,
    color: "#3D6E93",
  },
  BiLogoPostgresql: {
    component: <BiLogoPostgresql />,
    color: "#336790",
  },
  SiDocker: {
    component: <SiDocker />,
    color: "#2460FF",
  },
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
        {techStackData.map((tech, index) => {
          const [isHovered, setIsHovered] = useState(false);
          return (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center justify-center gap-2 hover:cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                color: isHovered ? icons[tech.logo].color : "",
                scale: isHovered ? 1.05 : 1,
              }}
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {icons[tech.logo].component}
              {tech.title}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
