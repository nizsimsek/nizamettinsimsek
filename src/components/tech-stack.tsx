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
  SiAngular,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import type { IconType } from "react-icons";

const icons: Record<string, { Icon: IconType; color: string }> = {
  SiJavascript: { Icon: SiJavascript, color: "#F7DF1E" },
  SiTypescript: { Icon: SiTypescript, color: "#3178C6" },
  SiReact: { Icon: SiReact, color: "#61DAFB" },
  SiAngular: { Icon: SiAngular, color: "#DD0031" },
  SiTailwindcss: { Icon: SiTailwindcss, color: "#06B6D4" },
  SiBootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  SiRedux: { Icon: SiRedux, color: "#764ABC" },
  SiFramer: { Icon: SiFramer, color: "#000" },
  SiReactQuery: { Icon: SiReactquery, color: "#FD611D" },
  SiGraphql: { Icon: SiGraphql, color: "#E10098" },
  SiNextdotjs: { Icon: SiNextdotjs, color: "#000" },
  SiGit: { Icon: SiGit, color: "#F05032" },
  SiSocketdotio: { Icon: SiSocketdotio, color: "#000" },
  SiWebrtc: { Icon: SiWebrtc, color: "#009938" },
  SiMysql: { Icon: SiMysql, color: "#3D6E93" },
  BiLogoPostgresql: { Icon: BiLogoPostgresql, color: "#336790" },
  SiDocker: { Icon: SiDocker, color: "#2460FF" },
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

function TechStackItem({
  tech,
  index,
}: {
  tech: { logo: string; title: string };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { Icon, color } = icons[tech.logo];

  return (
    <motion.li
      className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center justify-center gap-2 hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? color : "",
        scale: isHovered ? 1.05 : 1,
      }}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      <Icon aria-hidden="true" />
      {tech.title}
    </motion.li>
  );
}

export default function TechStack() {
  const { language } = useLanguage();
  const { ref } = useSectionInView("#tech-stack");

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="mb-28 max-w-212 scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>
        {language === "tr" ? "Teknolojiler" : "Tech Stack"}
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {techStackData.map((tech, index) => (
          <TechStackItem key={tech.title} tech={tech} index={index} />
        ))}
      </ul>
    </section>
  );
}
