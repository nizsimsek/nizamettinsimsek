"use client";

import React from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";
import { Link } from "@/lib/types";
import { useLanguage } from "@/containers/language-context";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { language } = useLanguage();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith("/blogs") ?? false;

  const isLinkActive = (link: Link) => {
    if (link.href === "/blogs") return isBlogPage;
    if (isBlogPage) return false;
    return Boolean(link.sectionId && activeSection === link.sectionId);
  };

  return (
    <header className="hidden md:flex items-center justify-center fixed z-999 w-full mt-4">
      <motion.div
        className="flex p-1  rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/3 backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.href}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <NextLink
                aria-label={language === "tr" ? link.titleTr : link.titleEn}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 text-gray-600 hover:text-black transition dark:text-gray-400 dark:hover:text-gray-50",
                  {
                    "text-black dark:text-gray-200": isLinkActive(link),
                  }
                )}
                href={link.href}
                onClick={() => {
                  if (link.sectionId) {
                    setActiveSection(link.sectionId);
                    setTimeOfLastClick(Date.now());
                  }
                }}
              >
                {language === "tr" ? link.titleTr : link.titleEn}
                {isLinkActive(link) && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </NextLink>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
