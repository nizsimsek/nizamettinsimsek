"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import Experience from "./experience-card";
import { useLanguage } from "@/containers/language-context";

export default function Experiences() {
  const { language } = useLanguage();
  const { ref } = useSectionInView("#experiences", 0.1);

  return (
    <section ref={ref} id="experiences" className="scroll-mt-28 mb-28">
      <SectionHeading>
        {language === "tr" ? "Deneyim" : "Experience"}
      </SectionHeading>
      <div>
        {experiencesData.map((exp, index) => (
          <Experience {...exp} key={index} />
        ))}
      </div>
    </section>
  );
}
