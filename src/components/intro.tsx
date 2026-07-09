"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSectionInView } from "@/lib/useInView";
import { useActiveSectionContext } from "@/containers/active-section";
import { Mail } from "lucide-react";
import { BsFiletypePdf } from "react-icons/bs";
import { useLanguage } from "@/containers/language-context";
import { homeData } from "@/lib/data";

export default function Intro() {
  const { language } = useLanguage();
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-300 text-center mb-32 sm:mb-40 scroll-mt-400"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
            className="max-w-72 sm:max-w-md"
          >
            <Image
              src="/work-hero.webp"
              width={288}
              height={288}
              alt="Nizamettin Şimşek - Frontend Developer"
              quality={80}
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 288px, 384px"
              className="rounded-full object-cover shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium leading-normal! ">
            {language === "tr" ? homeData.titleTr : homeData.titleEn}
          </span>
          <p className="text-lg max-w-3xl">
            {language === "tr" ? homeData.descriptionTr : homeData.descriptionEn}
          </p>
        </h1>
      </motion.div>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
          onClick={() => {
            setActiveSection("#contact");
            setTimeOfLastClick(Date.now());
          }}
          aria-label={language === "tr" ? "İletişim" : "Contact"}
        >
          {language === "tr" ? "İletişim" : "Contact"} <Mail aria-hidden="true" />
        </Link>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/90"
          href="https://www.linkedin.com/in/nizsimsek/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={language === "tr" ? "LinkedIn Profilimi Görüntüle" : "View My LinkedIn Profile"}
        >
          <FaLinkedin aria-hidden="true" />
        </a>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/90"
          href="https://www.github.com/nizsimsek/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={language === "tr" ? "GitHub Profilimi Görüntüle" : "View My GitHub Profile"}
        >
          <FaGithub aria-hidden="true" />
        </a>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/90"
          href="/nizamettinsimsekcv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={language === "tr" ? "CV'yi İndir" : "Download Resume"}
        >
          <BsFiletypePdf aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
