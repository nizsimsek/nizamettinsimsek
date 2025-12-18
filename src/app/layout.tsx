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

export const metadata: Metadata = {
  title: "Nizamettin Şimşek | Full Stack Developer",
  description: "Nizamettin Şimşek is a Full Stack Developer based in Turkey.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth! overflow-x-hidden max-w-full w-full">
      <body
        suppressHydrationWarning
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden max-w-full w-full`}
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
