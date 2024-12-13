"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/containers/theme-context";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/containers/language-context";

export default function ThemeSwitch() {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const switchVariants = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    hover: { scale: 1.2 },
    hidden: { scale: 0.5, opacity: 0, y: 50 },
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <AnimatePresence>
          {isHovered && (
            <motion.button
              aria-label={language === "tr" ? "Tema Değiştir" : "Switch Theme"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={switchVariants}
              transition={{ duration: 0.3 }}
              className="hidden  md:flex items-center justify-center w-[2rem] h-[2rem] bg-white  drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full dark:bg-gray-950"
            >
              <p className="text-sm font-semibold">
                {theme === "light" ? <Sun /> : <Moon />}
              </p>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          aria-label={language === "tr" ? "Tema Değiştir" : "Switch Theme"}
          className="bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950"
          variants={switchVariants}
          initial="visible"
          whileHover="hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleTheme}
        >
          <p className="font-semibold">
            {theme === "light" ? <Moon /> : <Sun />}
          </p>
        </motion.button>
      </div>
    </div>
  );
}
