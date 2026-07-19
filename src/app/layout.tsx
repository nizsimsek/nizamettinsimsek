import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "@/containers/providers";
import ThemeSwitch from "@/components/theme-switch";
import Navbar from "@/components/navbar";
import LanguageSwitch from "@/components/language-switch";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://nizamettinsimsek.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nizamettin Şimşek | Frontend Developer",
    template: "%s | Nizamettin Şimşek",
  },
  description:
    "Nizamettin Şimşek is Frontend Developer at Let Wash in Palo Alto, architecting and building multi-role SaaS with React, Vite, and TypeScript.",
  keywords: [
    "Nizamettin Şimşek",
    "Frontend Developer",
    "Let Wash",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Yazılım Geliştirici",
    "Frontend Geliştirici",
  ],
  authors: [{ name: "Nizamettin Şimşek", url: siteUrl }],
  creator: "Nizamettin Şimşek",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Nizamettin Şimşek",
    title: "Nizamettin Şimşek | Frontend Developer",
    description:
      "Frontend Developer at Let Wash. Architecting and building a multi-role SaaS web platform with React, Vite, and TypeScript.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nizamettin Şimşek - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nizamettin Şimşek | Frontend Developer",
    description:
      "Frontend Developer at Let Wash. Architecting and building a multi-role SaaS web platform with React, Vite, and TypeScript.",
    images: ["/opengraph-image"],
    creator: "@ilahinizo",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Nizamettin Şimşek",
      description:
        "Portfolio of Nizamettin Şimşek, Frontend Developer at Let Wash.",
      inLanguage: "tr-TR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Nizamettin Şimşek | Frontend Developer",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      inLanguage: "tr-TR",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nizamettin Şimşek",
      alternateName: ["Nizamettin Simsek", "Niz Şimşek", "nizsimsek"],
      url: siteUrl,
      image: `${siteUrl}/work.png`,
      jobTitle: "Frontend Developer",
      description:
        "Frontend Developer at Let Wash, architecting and building a multi-role SaaS web platform for Root, Carwash Owner, Carwash Admin, and Washer in Palo Alto with React, Vite, and TypeScript.",
      sameAs: [
        "https://www.linkedin.com/in/nizsimsek/",
        "https://www.github.com/nizsimsek/",
        "https://x.com/ilahinizo",
        "https://www.letwash.com/",
      ],
      mainEntityOfPage: { "@id": `${siteUrl}/#profilepage` },
      worksFor: [
        {
          "@type": "Organization",
          name: "Let Wash",
          url: "https://www.letwash.com/",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Palo Alto",
            addressRegion: "CA",
            addressCountry: "US",
          },
        },
        {
          "@type": "Organization",
          name: "DNSSense",
          url: "https://www.dnssense.com/",
        },
        {
          "@type": "Organization",
          name: "Mayadem",
          url: "https://www.mayadem.com/",
        },
        {
          "@type": "Organization",
          name: "KCTEK",
          url: "https://www.qulak.com/",
        },
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Laravel",
        "Angular",
        "Node.js",
        "WebRTC",
        "WebSocket",
        "TailwindCSS",
        "Docker",
        "MySQL",
        "PostgreSQL",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "TR",
      },
      nationality: {
        "@type": "Country",
        name: "Turkey",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth! overflow-x-hidden max-w-full w-full">
      <head>
        <link
          rel="preload"
          as="image"
          href="/work-hero.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${sora.variable} font-Sora flex flex-col bg-gray-100 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden max-w-full w-full`}
      >
        <div className="bg-[#fbe2e3] absolute -top-24 flex-1 -z-10 right-44 h-125 w-125 rounded-full blur-[10rem] sm:w-275 dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute -top-4 -z-10  flex-1 -left-140 h-125 w-200 rounded-full blur-[10rem] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20 dark:bg-[#676394]"></div>
        <Providers>
          <Navbar />
          {children}
          <ThemeSwitch />
          <LanguageSwitch />
        </Providers>
      </body>
    </html>
  );
}
