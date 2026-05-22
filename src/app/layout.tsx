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
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://nizsimsek.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nizamettin Şimşek | Full Stack Developer",
    template: "%s | Nizamettin Şimşek",
  },
  description:
    "Nizamettin Şimşek is a Full Stack Developer based in Turkey, specializing in React, Next.js, TypeScript, Laravel, and modern web technologies. Available for freelance and full-time opportunities.",
  keywords: [
    "Nizamettin Şimşek",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Laravel",
    "Web Developer Turkey",
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
    title: "Nizamettin Şimşek | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and Laravel. Building scalable and user-friendly web applications.",
    images: [
      {
        url: "/work.png",
        width: 1200,
        height: 630,
        alt: "Nizamettin Şimşek - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nizamettin Şimşek | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and Laravel.",
    images: ["/work.png"],
    creator: "@nizsimsek",
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
    },
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
      rel: "apple-touch-icon",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nizamettin Şimşek",
  url: "https://nizsimsek.dev",
  image: "https://nizsimsek.dev/work.png",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, and Laravel. Building scalable and user-friendly web applications.",
  sameAs: [
    "https://www.linkedin.com/in/nizsimsek/",
    "https://www.github.com/nizsimsek/",
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
  nationality: {
    "@type": "Country",
    name: "Turkey",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth! overflow-x-hidden max-w-full w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${sora.variable} font-Sora flex flex-col bg-gray-100 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden max-w-full w-full`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-[10]  flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
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
