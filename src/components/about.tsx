"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";
import { useLanguage } from "@/containers/language-context";
import { aboutData } from "@/lib/data";

export default function About() {
  const { language } = useLanguage();
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>
            {language === "tr" ? "Hakkımda" : "About Me"}
          </SectionHeading>
        </Fade>
        <div className="grid xl:grid-cols-2 lg:text-start">
          <div className="flex-1">
            <div className="text-lg mt-3">
              <div className="flex justify-start flex-col">
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">
                    {language === "tr" ? "Misyonum" : "My Mission"}
                  </h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-900 dark:text-white/90">
                    {language === "tr"
                      ? aboutData.missionTr
                      : aboutData.missionEn}
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">
                    {language === "tr" ? "Vizyonum" : "My Vision"}
                  </h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-900 dark:text-white/90">
                    {language === "tr"
                      ? aboutData.visionTr
                      : aboutData.visionEn}
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div>
            <Fade
              direction="right"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Image
                src="/about.png"
                width="600"
                height="600"
                alt="portrait"
                quality="75"
                loading="lazy"
                sizes="(max-width: 600px) 100vw, 600px"
                className="rounded-full mt-8 object-cover"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
