import { links } from "./data";

export type SectionName = (typeof links)[number]["hash"];

export type Home = {
    titleEn: string;
    titleTr: string;
    descriptionEn: string;
    descriptionTr: string;
}

export type About = {
    missionEn: string;
    missionTr: string;
    visionEn: string;
    visionTr: string;
};

export type ProjectInfo = {
    title: string;
    descriptionEn: string;
    descriptionTr: string;
    techs: string[];
    imageUrl: string;
    link: string;
}

export type TechStack = {
    logo: string;
    title: string;
}

export type ExperienceInfo = {
    isOdd: boolean;
    company: string;
    companyUrl: string;
    companyLogo: string;
    durationEn: string;
    durationTr: string;
    titleEn: string;
    titleTr: string;
    descriptionEn: string;
    descriptionTr: string;
    techs: string[];
}

export type Link = {
    titleTr: string;
    titleEn: string;
    hash: string;
};
