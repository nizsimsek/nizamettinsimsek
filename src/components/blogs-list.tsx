"use client";

import Link from "next/link";
import BlogCard from "@/components/blog-card";
import { BlogPost } from "@/lib/blog-types";
import { useLanguage } from "@/containers/language-context";

type BlogsListProps = {
  posts: BlogPost[];
};

export default function BlogsList({ posts }: BlogsListProps) {
  const { language } = useLanguage();

  return (
    <main className="flex flex-col items-center pt-28 md:pt-32 px-4 pb-20">
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-medium mb-4">Blog</h1>
        <p className="text-gray-900 dark:text-white/90 leading-relaxed">
          {language === "tr"
            ? "Frontend, full-stack geliştirme, gerçek zamanlı sistemler ve startup deneyimlerime dair teknik yazılar."
            : "Technical articles on frontend, full-stack development, real-time systems, and my startup experiences."}
        </p>
        <Link
          href="/"
          className="inline-block mt-4 text-sm text-gray-600 dark:text-white/60 hover:underline"
        >
          {language === "tr" ? "← Ana sayfaya dön" : "← Back to home"}
        </Link>
      </div>

      <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
