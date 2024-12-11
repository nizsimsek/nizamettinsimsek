import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
    {
        title: "Home",
        hash: "#home",
    },
    {
        title: "About",
        hash: "#about",
    },
    {
        title: "Projects",
        hash: "#projects",
    },
    {
        title: "Skills",
        hash: "#skills",
    },
    {
        title: "Contact",
        hash: "#contact",
    },
];

export const projectsData: ProjectInfo[] = [
    {
        title: "Live 2P2",
        description:
            "Live is P2P Private Video Call Application. You are create a room and share room link your friend. You can make a private video call with your friend. It is built with ReactJS, SocketIO, WebRTC and TailwindCSS",
        tags: ["React", "SocketIO", "WebRTC", "Tailwind"],
        imageUrl: "/Live.png",
        link: "https://livep2p.nizamettinsimsek.com.tr/",
    },
    {
        title: "NFT King",
        description:
            "NFT King is a landing page for NFT Marketplace. It is a fully responsive website that is built with React, Next.js, Tailwind CSS, NextUI and deployed on my web server.",
        tags: ["React", "Next.js", "Tailwind", "NextUI"],
        imageUrl: "/NFTKing.png",
        link: "https://nft-hero.nizamettinsimsek.com.tr/",
    },
    {
        title: "Rise Finance",
        description:
            "Rise Finance is a landing page for Rise Financial Technology Company. It is a fully responsive website that is built with React, Next.js, Tailwind CSS and deployed on my web server.",
        tags: ["React", "Next.js", "Tailwind"],
        imageUrl: "/RiseFinance.png",
        link: "https://fintech.nizamettinsimsek.com.tr/",
    },
];

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Tailwind",
    "Redux",
    "Framer Motion",
    "Next.js",
    "Node.js",
    "ExpressJs",
    "Laravel",
    "Git",
    "WebSocket",
    "WebRTC",
    "MySQL",
    "PostgreSQL",
];
