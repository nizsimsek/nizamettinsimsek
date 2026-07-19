import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog-article";
import { getAllSlugs, getPostBySlug } from "@/lib/blogs";

const siteUrl = "https://nizamettinsimsek.com.tr";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Yazı Bulunamadı" };

  const url = `${siteUrl}/blogs/${post.slug}`;

  return {
    title: post.title.tr,
    description: post.description.tr,
    keywords: post.tags,
    authors: [{ name: "Nizamettin Şimşek", url: siteUrl }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title.tr,
      description: post.description.tr,
      url,
      publishedTime: post.publishedAt,
      authors: ["Nizamettin Şimşek"],
      tags: post.tags,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: post.title.tr,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.tr,
      description: post.description.tr,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.tr,
    description: post.description.tr,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: `${siteUrl}/opengraph-image`,
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nizamettin Şimşek",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nizamettin Şimşek",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blogs/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    inLanguage: "tr-TR",
  };

  return (
    <main className="flex flex-col items-center pt-28 md:pt-32 px-4 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <BlogArticle post={post} />
    </main>
  );
}
