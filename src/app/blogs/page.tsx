import type { Metadata } from "next";
import BlogsList from "@/components/blogs-list";
import { getAllPosts } from "@/lib/blogs";

const siteUrl = "https://nizamettinsimsek.com.tr";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Nizamettin Şimşek'in yazılım, frontend geliştirme, WebRTC, React Query, Next.js SEO ve startup deneyimlerini paylaştığı teknik blog.",
  alternates: {
    canonical: `${siteUrl}/blogs`,
  },
  openGraph: {
    title: "Blog | Nizamettin Şimşek",
    description:
      "Frontend, full-stack ve startup deneyimlerine dair teknik yazılar.",
    url: `${siteUrl}/blogs`,
  },
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return <BlogsList posts={posts} />;
}
