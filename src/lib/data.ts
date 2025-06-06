import { ExperienceInfo, Link, ProjectInfo, About, Home, TechStack } from "./types";

export const links: Link[] = [
    {
        titleEn: "Home",
        titleTr: "Anasayfa",
        hash: "#home",
    },
    {
        titleEn: "About",
        titleTr: "Hakkımda",
        hash: "#about",
    },
    {
        titleEn: "Experience",
        titleTr: "Deneyim",
        hash: "#experiences",
    },
    {
        titleEn: "Tech Stack",
        titleTr: "Teknolojiler",
        hash: "#tech-stack",
    },
    {
        titleEn: "Projects",
        titleTr: "Projeler",
        hash: "#projects",
    },
    {
        titleEn: "Contact",
        titleTr: "İletişim",
        hash: "#contact",
    },
];

export const homeData: Home = {
    titleEn: "Hi, I'm Nizamettin Şimşek",
    titleTr: "Merhaba, Ben Nizamettin Şimşek",
    descriptionEn: "A passionate fullstack developer with experience in building scalable web applications using modern technologies. I enjoy solving complex problems and creating user-friendly interfaces.",
    descriptionTr: "Modern teknolojileri kullanarak ölçeklenebilir web uygulamaları oluşturma deneyimim olan, karmaşık problemleri çözmek ve kullanıcı dostu arayüzler oluşturmaktan keyif alan bir yazılımcıyım.",
};

export const aboutData: About = {
    missionEn: "My mission is to deliver innovative and efficient digital experiences using technologies like Laravel, React, React Native, ExpressJS, WebSocket, TailwindCSS, and MySQL, helping businesses achieve their goals.",
    missionTr: "Misyonum, Laravel, React, React Native, ExpressJS, WebSocket, TailwindCSS ve MySQL gibi teknolojileri kullanarak yenilikçi ve verimli dijital deneyimler sunmak ve işletmelerin hedeflerine ulaşmalarına yardımcı olmaktır.",
    visionEn: "My vision is to empower businesses by creating scalable and user-friendly digital products. Whether it's crafting responsive designs or optimizing user experience, I focus on every detail to ensure your success in the digital world.",
    visionTr: "Vizyonum, işletmeleri güçlendirmek ve ölçeklenebilir ve kullanıcı dostu dijital ürünler oluşturmaktır. Herhangi bir tasarımın yanı sıra kullanıcı deneyimini optimize etmek, her ayrıntıyı dikkate alarak başarınızı garantilemektir.",
};

export const projectsData: ProjectInfo[] = [
    {
        title: "Live 2P2",
        descriptionEn:
            "Live is P2P Private Video Call Application. You are create a room and share room link your friend. You can make a private video call with your friend. It is built with ReactJS, SocketIO, WebRTC and TailwindCSS",
        techs: ["React", "SocketIO", "WebRTC", "Tailwind"],
        descriptionTr:
            "Live, P2P özel video arama uygulamasıdır. Arkadaşınızla özel bir video arama yapabilirsiniz. ReactJS, SocketIO, WebRTC ve TailwindCSS ile oluşturulmuştur.",
        imageUrl: "/Live.png",
        link: "https://livep2p.nizsimsek.dev/",
    },
    {
        title: "NFT King",
        descriptionEn:
            "NFT King is a landing page for NFT Marketplace. It is a fully responsive website that is built with React, Next.js, Tailwind CSS, NextUI and deployed on my web server.",
        descriptionTr:
            "NFT King, NFT pazarlaması için bir landing page'dir. Tam olarak yanıt veren bir web sitesidir. React, Next.js, Tailwind CSS, NextUI ve web sunucusunda dağıtılmıştır.",
        techs: ["React", "Next.js", "Tailwind", "NextUI"],
        imageUrl: "/NFTKing.png",
        link: "https://nft-hero.nizsimsek.dev/",
    },
    {
        title: "Rise Finance",
        descriptionEn:
            "Rise Finance is a landing page for Rise Financial Technology Company. It is a fully responsive website that is built with React, Next.js, Tailwind CSS and deployed on my web server.",
        descriptionTr:
            "Rise Finance, Rise Finans Teknolojisi Şirketi için bir landing page'dir. Tam olarak yanıt veren bir web sitesidir. React, Next.js, Tailwind CSS ve web sunucusunda dağıtılmıştır.",
        techs: ["React", "Next.js", "Tailwind"],
        imageUrl: "/RiseFinance.png",
        link: "https://fintech.nizsimsek.dev/",
    },
];

export const techStackData: TechStack[] = [
    {
        logo: "SiJavascript",
        title: "JavaScript",
    },
    {
        logo: "SiTypescript",
        title: "TypeScript",
    },
    {
        logo: "SiReact",
        title: "React",
    },
    {
        logo: "SiReact",
        title: "React Native",
    },
    {
        logo: "SiTailwindcss",
        title: "Tailwind",
    },
    {
        logo: "SiBootstrap",
        title: "Bootstrap",
    },
    {
        logo: "SiRedux",
        title: "Redux",
    },
    {
        logo: "SiFramer",
        title: "Framer Motion",
    },
    {
        logo: "SiNextdotjs",
        title: "Next.js",
    },
    {
        logo: "SiGit",
        title: "Git",
    },
    {
        logo: "SiSocketdotio",
        title: "WebSocket",
    },
    {
        logo: "SiWebrtc",
        title: "WebRTC",
    },
    {
        logo: "SiMysql",
        title: "MySQL",
    },
    {
        logo: "BiLogoPostgresql",
        title: "PostgreSQL",
    },
];

export const experiencesData: ExperienceInfo[] = [
    {
        isOdd: true,
        titleEn: "Full-Stack Developer (Remote)",
        titleTr: "Full-Stack Developer (Remote)",
        company: "KCTEK",
        companyUrl: "https://www.qulak.com/",
        companyLogo: "/qulak.webp",
        durationEn: "Jan 2022 - Present",
        durationTr: "Ocak 2022 - Halen",
        descriptionEn: "Worked on the Qulak Platform using technologies such as ReactJS, Laravel, WebSocket, and WebRTC to develop Digital Learning, Secure Online Exams, and Real-Time Chat & Video Conference modules. These efforts improved platform performance, scalability, and user experience. Additionally, I achieved a noticeable increase in user interaction and system stability.",
        descriptionTr: "Qulak Platformu üzerinde ReactJS, Laravel, WebSocket ve WebRTC gibi teknolojilerle çalışarak Dijital Öğrenme, Güvenli Online Sınavlar ve Gerçek Zamanlı Sohbet & Video Konferans modüllerini geliştirdim. Bu çalışmalarla platform performansını artırarak ölçeklenebilirliği ve kullanıcı deneyimini iyileştirdim. Ayrıca, kullanıcı etkileşiminde ve sistem stabilitesinde gözle görülür bir artış sağladım.",
        techs: [
            "JavaScript",
            "TypeScript",
            "React",
            "Tailwind",
            "Bootstrap",
            "Redux",
            "Laravel",
            "Git",
            "WebSocket",
            "WebRTC",
            "MySQL",
            "PostgreSQL"
        ],
    },
    // {
    //     isOdd: false,
    //     titleEn: "Full-Stack Developer & DevOps (Remote)",
    //     titleTr: "Full-Stack Developer & DevOps (Remote)",
    //     company: "KIPS DIGITAL",
    //     companyUrl: "https://www.kips.com.tr/",
    //     companyLogo: "/kips.png",
    //     durationEn: "Feb 2023 - Aug 2024",
    //     durationTr: "Şubat 2023 - Ağustos 2024",
    //     descriptionEn: "As an outsourced developer, I enhanced the infrastructure of the Kips E-Commerce platform using Laravel, Nginx, MySQL, and Docker. I improved loading times, increasing uptime by 10%, reduced deployment times by 20%, and decreased error rates by 15%, resulting in a more consistent and reliable release cycle.",
    //     descriptionTr: "Outsource geliştirici olarak Kips E-Ticaret platformunda Laravel, Nginx, MySQL ve Docker kullanarak altyapıyı geliştirdim. Yükleme sürelerini hızlandırarak uptime oranını %10 artırdım, dağıtım sürelerini %20 kısalttım ve hata oranını %15 düşürerek daha tutarlı ve güvenilir bir sürüm döngüsü sağladım.",
    //     techs: ["Laravel", "Nginx", "MySQL", "Docker", "Ubuntu", "Git", "Rest API"],
    // },
    {
        isOdd: false,
        titleEn: "Information Technology Internship",
        titleTr: "Bilgi Teknolojileri Stajyeri",
        company: "KAYSERİ TİCARET ODASI",
        companyUrl: "https://www.kayserito.tr/",
        companyLogo: "/kto.png",
        durationEn: "Sep 2017 - Jun 2018",
        durationTr: "Eylül 2017 - Haziran 2018",
        descriptionEn: "Regularly updated the Chamber of Commerce's website to ensure content accuracy and relevance, contributing to a 5-10% increase in visitor engagement. Shared news and event announcements related to Chamber activities on social media platforms, increasing participation by 15-20%. Additionally, provided technical support to improve office efficiency.",
        descriptionTr: "Ticaret Odası'nın web sitesini düzenli olarak güncelleyerek içerik doğruluğunu ve güncelliğini sağladım, bu da ziyaretçi etkileşiminde %5-10 artışa katkı sağladı. Sosyal medya platformlarında Oda faaliyetlerine ilişkin haber ve etkinlik duyuruları paylaşarak katılımı %15-20 artırdım. Ayrıca, teknik destek sağlayarak ofis verimliliğini iyileştirdim.",
        techs: [],
    }
];