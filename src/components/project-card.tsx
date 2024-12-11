import Image from "next/image";
import { ProjectInfo } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1 ", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const openWebsiteNewPage = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 hover:cursor-pointer"
      onClick={() => openWebsiteNewPage(link)}
    >
      <section className="bg-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-72">
          <h3 className="flex gap-1 text-2xl w-fit font-semibold items-center border-b-2 border-b-white/0 group-hover:border-b-black dark:border-b-white/0 dark:group-hover:border-b-white/100">
            <FaExternalLinkAlt className="hidden group-hover:block text-lg" />
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-900 dark:text-white/90">
            {description}
          </p>
          <ul className="flex flex-wrap !mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I Worked"
          quality={95}
          width={400}
          height={100}
          className="absolute hidden sm:block top-8 -right-28 rounded-t-lg transition group-hover:scale-110 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3 group-even:right-[initial] group-even:-left-32"
        />
      </section>
    </motion.div>
  );
}
