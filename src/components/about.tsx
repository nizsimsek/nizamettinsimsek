"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import { useLanguage } from "@/containers/language-context";
import { aboutData } from "@/lib/data";

export default function About() {
  const { language } = useLanguage();
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-180 text-center leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
        <SectionHeading>
          {language === "tr" ? "Hakkımda" : "About Me"}
        </SectionHeading>
        <div className="grid xl:grid-cols-2 lg:text-start">
          <div className="flex-1">
            <div className="text-lg mt-3">
              <div className="flex justify-start flex-col">
                <h3 className="font-bold mt-6">
                  {language === "tr" ? "Misyonum" : "My Mission"}
                </h3>
                <p className="mt-2 leading-relaxed text-sm text-gray-900 dark:text-white/90">
                  {language === "tr"
                    ? aboutData.missionTr
                    : aboutData.missionEn}
                </p>
                <h3 className="font-bold mt-6">
                  {language === "tr" ? "Vizyonum" : "My Vision"}
                </h3>
                <p className="mt-2 leading-relaxed text-sm text-gray-900 dark:text-white/90">
                  {language === "tr"
                    ? aboutData.visionTr
                    : aboutData.visionEn}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/about-hero.webp"
              width={380}
              height={380}
              alt="Nizamettin Şimşek - Hakkımda"
              quality={80}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 380px"
              className="rounded-full mt-8 object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
