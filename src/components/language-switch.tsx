"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/containers/language-context";
import Image from "next/image";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const switchVariants = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    hover: { scale: 1.2 },
    hidden: { scale: 0.5, opacity: 0, y: 50 },
  };

  return (
    <div className="fixed bottom-5 left-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <AnimatePresence>
          {isHovered && (
            <motion.button
              aria-label={language === "tr" ? "Dil Değiştir" : "Switch Language"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={switchVariants}
              transition={{ duration: 0.3 }}
              className="hidden md:flex items-center justify-center w-[2rem] h-[2rem] bg-white  drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full dark:bg-gray-950"
            >
              <p className="text-sm font-semibold">
                {language === "tr" ? (
                  <Image
                    src="/tr.png"
                    alt="Turkish"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    src="/en.png"
                    alt="English"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
              </p>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          aria-label={language === "tr" ? "Dil Değiştir" : "Switch Language"}
          className="bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950"
          variants={switchVariants}
          initial="visible"
          whileHover="hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleLanguage}
        >
          <p className="font-semibold">
            {language === "tr" ? (
              <Image
                src="/en.png"
                alt="Turkish"
                width={36}
                height={36}
                className="rounded-full"
              />
            ) : (
              <Image
                src="/tr.png"
                alt="English"
                width={36}
                height={36}
                className="rounded-full"
              />
            )}
          </p>
        </motion.button>
      </div>
    </div>
  );
}
