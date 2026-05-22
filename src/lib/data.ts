import {
  ExperienceInfo,
  Link,
  ProjectInfo,
  About,
  Home,
  TechStack,
} from "./types";

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
  descriptionEn:
    "A passionate fullstack developer with experience in building scalable web applications using modern technologies. I enjoy solving complex problems and creating user-friendly interfaces.",
  descriptionTr:
    "Modern teknolojileri kullanarak ölçeklenebilir web uygulamaları oluşturma deneyimi olan, karmaşık problemleri çözmek ve kullanıcı dostu arayüzler oluşturmaktan keyif alan bir yazılımcıyım.",
};

export const aboutData: About = {
  missionEn:
    "My mission is to deliver innovative and efficient digital experiences using technologies like Laravel, React, React Native, ExpressJS, WebSocket, TailwindCSS, and MySQL, helping businesses achieve their goals.",
  missionTr:
    "Misyonum, Laravel, React, React Native, ExpressJS, WebSocket, TailwindCSS ve MySQL gibi teknolojileri kullanarak yenilikçi ve verimli dijital deneyimler sunmak ve işletmelerin hedeflerine ulaşmalarına yardımcı olmaktır.",
  visionEn:
    "My vision is to empower businesses by creating scalable and user-friendly digital products. Whether it's crafting responsive designs or optimizing user experience, I focus on every detail to ensure your success in the digital world.",
  visionTr:
    "Vizyonum, işletmeleri güçlendirmek ve ölçeklenebilir ve kullanıcı dostu dijital ürünler oluşturmaktır. Herhangi bir tasarımın yanı sıra kullanıcı deneyimini optimize etmek, her ayrıntıyı dikkate alarak başarınızı garantilemektir.",
};

export const projectsData: ProjectInfo[] = [
  {
    title: "DNSEye",
    descriptionEn:
      "DNSEye is an AI-powered DNS log analysis and threat detection platform. It identifies anomalies in outbound DNS traffic, traces malicious queries to their origins, and automates incident response through smart rule-based engines.",
    descriptionTr:
      "DNSEye, yapay zeka destekli bir DNS log analiz ve tehdit tespit platformudur. Giden DNS trafiğindeki anormallikleri tespit eder, kötü amaçlı sorguları kaynağına kadar izler ve akıllı kural tabanlı motorlar aracılığıyla olay müdahalesini otomatize eder.",
    techs: ["Angular", "TypeScript", "RxJS"],
    imageUrl: "/dnssense.ico",
    link: "https://www.dnssense.com/dnseye",
  },
  {
    title: "DNSDome",
    descriptionEn:
      "DNSDome is a DNS-layer cybersecurity product that protects all network devices against malware, phishing, ransomware, and zero-day threats using AI-based detection and a plug-and-play deployment model.",
    descriptionTr:
      "DNSDome, yapay zeka tabanlı tespit ve tak-çalıştır dağıtım modeliyle tüm ağ cihazlarını kötü amaçlı yazılım, kimlik avı, fidye yazılımı ve sıfırıncı gün tehditlerine karşı koruyan bir DNS katmanı siber güvenlik ürünüdür.",
    techs: ["Angular", "TypeScript", "RxJS"],
    imageUrl: "/dnssense.ico",
    link: "https://www.dnssense.com/dnsdome",
  },
  {
    title: "ÇokNet",
    descriptionEn:
      "Çoknet is a multi-role digital education and management platform for students, administrators, and institutions.",
    descriptionTr:
      "Çoknet, öğrenci, admin ve kurum kullanıcılarını kapsayan çok rollü bir dijital eğitim ve yönetim platformudur.",
    techs: [
      "React",
      "TypeScript",
      "React Query",
      "Hasura",
      "Zustand",
      "GraphQL",
      "TailwindCSS",
      "Docker",
    ],
    imageUrl: "/coknet.png",
    link: "https://cok.net.tr/",
  },
  {
    title: "Qulak Platform",
    descriptionEn:
      "Qulak is a secure online exam and digital education platform featuring real-time chat and video conferencing built with WebRTC and WebSocket.",
    descriptionTr:
      "Qulak, WebRTC ve WebSocket tabanlı gerçek zamanlı iletişim özelliklerine sahip, güvenli online sınav ve dijital eğitim platformudur.",
    techs: ["React", "Laravel", "WebSocket", "WebRTC", "MySQL", "PostgreSQL"],
    imageUrl: "/qulak.png",
    link: "https://qulak.com/",
  },
  {
    title: "CommuneNow",
    descriptionEn:
      "CommuneNow is a language learning platform based on real-time voice and text communication, built for web and mobile using React, Node.js, WebRTC, and Socket.IO.",
    descriptionTr:
      "CommuneNow, web ve mobil platformlar için React ve Node.js kullanılarak geliştirilen, WebRTC ve Socket.IO tabanlı gerçek zamanlı iletişim odaklı bir dil öğrenme platformudur.",
    techs: ["React", "Node.js", "Express.js", "WebRTC", "Socket.IO", "MySQL"],
    imageUrl: "/communenow.png",
    link: "https://communenow.com/",
  },
  {
    title: "Live P2P",
    descriptionEn:
      "Live P2P is a private peer-to-peer video calling application focused on secure and low-latency real-time communication.",
    descriptionTr:
      "Live P2P, güvenli ve düşük gecikmeli iletişim sunan, P2P tabanlı özel bir video arama uygulamasıdır.",
    techs: ["React", "SocketIO", "WebRTC", "Tailwind"],
    imageUrl: "/live-p2p.png",
    link: "https://live-p2p.nizsimsek.dev/",
  },
  {
    title: "NFT King",
    descriptionEn:
      "NFT King is a responsive landing page for an NFT marketplace concept, built with React, Next.js, TailwindCSS, and NextUI.",
    descriptionTr:
      "NFT King, React, Next.js, TailwindCSS ve NextUI kullanılarak geliştirilmiş, NFT pazar yeri konseptine ait duyarlı bir landing page projesidir.",
    techs: ["React", "Next.js", "Tailwind", "NextUI"],
    imageUrl: "/nft-king.png",
    link: "https://nft-hero.nizsimsek.dev/",
  },
  {
    title: "Rise Finance",
    descriptionEn:
      "Rise Finance is a responsive landing page built for a financial technology company using React, Next.js, and TailwindCSS.",
    descriptionTr:
      "Rise Finance, React, Next.js ve TailwindCSS kullanılarak geliştirilmiş, bir finans teknolojisi şirketi için hazırlanan duyarlı bir landing page projesidir.",
    techs: ["React", "Next.js", "Tailwind"],
    imageUrl: "/rise-finance.png",
    link: "https://rise.nizsimsek.dev/",
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
    logo: "SiAngular",
    title: "Angular",
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
    logo: "SiReactQuery",
    title: "React Query",
  },
  {
    logo: "SiGraphql",
    title: "GraphQL",
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
  {
    logo: "SiDocker",
    title: "Docker",
  },
];

export const experiencesData: ExperienceInfo[] = [
  {
    isOdd: true,
    titleEn: "Frontend Developer (Freelance)",
    titleTr: "Frontend Developer (Freelance)",
    company: "DNSSense",
    companyUrl: "https://www.dnssense.com/",
    companyLogo: "/dnssense.svg",
    durationEn: "Feb 2026 - Apr 2026",
    durationTr: "Şubat 2026 - Nisan 2026",
    descriptionEn:
      "At DNSSense, I worked as a freelance Frontend Developer for 3 months on DNS-based cybersecurity products. I contributed to the DNSEye and DNSDome projects, developing and improving user-facing features with Angular. I collaborated closely with the product team to deliver clean, maintainable UI components aligned with security-focused workflows.",
    descriptionTr:
      "DNSSense’te 3 aylık freelance Frontend Developer olarak görev aldım. DNS tabanlı siber güvenlik ürünlerinin geliştirilmesine katkı sağladım. DNSEye ve DNSDome projelerinde Angular kullanarak kullanıcı arayüzü özellikleri geliştirdim ve iyileştirdim. Ürün ekibiyle yakın iş birliği yaparak güvenlik odaklı iş akışlarına uygun, temiz ve sürdürülebilir bileşenler oluşturdum.",
    techs: ["Angular", "TypeScript", "RxJS", "Git"],
  },
  {
    isOdd: false,
    titleEn: "Full-Stack Developer",
    titleTr: "Full-Stack Developer",
    company: "KCTEK",
    companyUrl: "https://www.qulak.com/",
    companyLogo: "/qulak-logo.png",
    durationEn: "Jan 2022 - Feb 2026",
    durationTr: "Ocak 2022 - Şubat 2026",
    descriptionEn:
      "At KCTEK, I worked as a Full Stack Developer on digital education and secure online exam platforms actively used in production environments. I contributed to critical modules such as cheating detection, user activity tracking, and secure exam workflows. I redesigned data flows between frontend and backend systems, built sustainable and maintainable architectures using Laravel, and actively participated in technical architecture and product-level decision-making processes.",
    descriptionTr:
      "KCTEK’te dijital eğitim ve güvenli online sınav platformları üzerinde Full Stack Developer olarak çalıştım. Production ortamlarında aktif olarak kullanılan sistemlerde uçtan uca geliştirme sorumlulukları aldım. Kopya tespiti, kullanıcı aktivite takibi ve sınav güvenliği gibi kritik modüllerin geliştirilmesinde görev aldım. Frontend ve backend arasındaki veri akışlarını yeniden tasarladım, Laravel tabanlı servislerde sürdürülebilir ve bakımı kolay mimariler oluşturdum. Teknik mimari ve ürün karar süreçlerine aktif katkı sağladım.",
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
      "PostgreSQL",
    ],
  },
  {
    isOdd: true,
    titleEn: "Frontend Developer",
    titleTr: "Frontend Developer",
    company: "MAYADEM",
    companyUrl: "https://www.mayadem.com/",
    companyLogo: "/mayadem.jpeg",
    durationEn: "Mar 2025 - Dec 2025",
    durationTr: "Mart 2025 - Aralık 2025",
    descriptionEn:
      "At Mayadem, I worked as a Frontend Developer on a multi-role digital education platform serving students, administrators, and institutions. My focus was on building scalable and maintainable frontend architectures. I developed performance-oriented user interfaces using React and TypeScript, optimized data fetching and caching with React Query, and designed reusable component structures to improve both development efficiency and user experience. I also actively participated in code reviews and frontend-related technical decision-making processes.",
    descriptionTr:
      "Mayadem’de öğrenci, admin ve kurum kullanıcılarını kapsayan çok rollü bir dijital eğitim platformu üzerinde Frontend Developer olarak çalıştım. Ölçeklenebilir ve sürdürülebilir frontend mimarileri geliştirmeye odaklandım. React ve TypeScript kullanarak performans odaklı kullanıcı arayüzleri oluşturdum. React Query ile veri yönetimini optimize ederek API çağrılarını azalttım ve tekrar kullanılabilir bileşen yapıları tasarladım. Ekip içinde code review süreçlerine ve frontend tarafındaki teknik karar mekanizmalarına aktif olarak katıldım.",
    techs: [
      "React",
      "TypeScript",
      "React Query",
      "Hasura",
      "Zustand",
      "GraphQL",
      "Docker",
      "TailwindCSS",
    ],
  },
  // {
  //   isOdd: false,
  //   titleEn: "Full-Stack Developer & DevOps (Freelance)",
  //   titleTr: "Full-Stack Developer & DevOps (Freelance)",
  //   company: "KIPS DIGITAL",
  //   companyUrl: "https://www.kips.com.tr/",
  //   companyLogo: "/kips.png",
  //   durationEn: "Feb 2023 - Aug 2024",
  //   durationTr: "Şubat 2023 - Ağustos 2024",
  //   descriptionEn: "As a freelance developer, I enhanced the infrastructure of the Kips E-Commerce platform using Laravel, Nginx, MySQL, and Docker. I improved loading times, increasing uptime by 10%, reduced deployment times by 20%, and decreased error rates by 15%, resulting in a more consistent and reliable release cycle.",
  //   descriptionTr: "Freelance geliştirici olarak Kips E-Ticaret platformunda Laravel, Nginx, MySQL ve Docker kullanarak altyapıyı geliştirdim. Yükleme sürelerini hızlandırarak uptime oranını %10 artırdım, dağıtım sürelerini %20 kısalttım ve hata oranını %15 düşürerek daha tutarlı ve güvenilir bir sürüm döngüsü sağladım.",
  //   techs: ["Laravel", "Nginx", "MySQL", "Docker", "Ubuntu", "Git", "Rest API"],
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
    descriptionEn:
      "During my high school internship at Kayseri Chamber of Commerce, I supported internal IT operations and web-related tasks. I assisted with updating website content and made basic interface adjustments using HTML, CSS, and JavaScript. I also managed content on WordPress-based pages and provided office-level technical support to help ensure smooth daily IT operations.",
    descriptionTr:
      "Kayseri Ticaret Odası’nda lise stajım süresince kurum içi IT süreçlerine ve web odaklı çalışmalara destek verdim. Web sitesindeki içeriklerin güncellenmesine katkı sağladım ve HTML, CSS ve temel JavaScript kullanarak arayüz düzenlemeleri yaptım. Ayrıca WordPress tabanlı sayfalarda içerik yönetimi gerçekleştirdim ve ofis içi teknik destek sağlayarak günlük IT operasyonlarının daha verimli ilerlemesine yardımcı oldum.",
    techs: [],
  },
];
