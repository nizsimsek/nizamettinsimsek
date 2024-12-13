import Image from "next/image";
import { ExperienceInfo } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "@/containers/language-context";

type ExperienceProps = ExperienceInfo;

export default function Experience({
  company,
  companyUrl,
  companyLogo,
  durationEn,
  durationTr,
  titleEn,
  titleTr,
  descriptionEn,
  descriptionTr,
  techs,
  isOdd,
}: ExperienceProps) {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const xProgress = useTransform(scrollYProgress, [0, 1], [isOdd ? -250 : 250, 0]);

  const openWebsiteNewPage = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        x: xProgress,
      }}
      className="group mb-6 sm:mb-8 last:mb-0 hover:cursor-pointer overflow-hidden"
      onClick={() => openWebsiteNewPage(companyUrl)}
    >
      <section className="bg-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full">
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 min-w-14 min-h-14 relative overflow-hidden flex items-center justify-center">
              <Image
                src={companyLogo}
                alt={company}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl w-fit font-semibold">
                {language === "tr" ? titleTr : titleEn}
              </h3>
              <h3 className="flex gap-1 text-lg w-fit font-semibold items-center border-b-2 border-b-white/0 group-hover:border-b-black dark:border-b-white/0 dark:group-hover:border-b-white/100">
                <FaExternalLinkAlt className="hidden group-hover:block text-sm" />
                {company}
              </h3>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-white/50 mt-2">
            {language === "tr" ? durationTr : durationEn}
          </p>
          <p className="mt-2 leading-relaxed text-gray-900 dark:text-white/90">
            {language === "tr" ? descriptionTr : descriptionEn}
          </p>
          {/* <ul className="flex flex-wrap !mt-4 gap-2 sm:mt-auto">
            {techs.map((tech, index) => (
              <li
                key={index}
                className="bg-black/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90"
              >
                {tech}
              </li>
            ))}
          </ul> */}
        </div>
      </section>
    </motion.div>
  );
}
