"use client";

import Link from "next/link";
import BlogContent from "@/components/blog-content";
import { BlogPost } from "@/lib/blog-types";
import { useLanguage } from "@/containers/language-context";

type BlogArticleProps = {
  post: BlogPost;
};

export default function BlogArticle({ post }: BlogArticleProps) {
  const { language } = useLanguage();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    language === "tr" ? "tr-TR" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article className="max-w-2xl w-full">
      <Link
        href="/blogs"
        className="text-sm text-gray-600 dark:text-white/60 hover:underline"
      >
        {language === "tr" ? "← Tüm yazılar" : "← All posts"}
      </Link>

      <header className="mt-6 mb-10 text-center">
        <time
          dateTime={post.publishedAt}
          className="text-sm text-gray-500 dark:text-white/50"
        >
          {formattedDate} · {post.readingTime[language]}
        </time>
        <h1 className="text-3xl sm:text-4xl font-medium mt-3 mb-4 leading-tight">
          {post.title[language]}
        </h1>
        <p className="text-gray-900 dark:text-white/90 leading-relaxed">
          {post.description[language]}
        </p>
        <ul className="flex flex-wrap justify-center gap-2 mt-5">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="bg-black/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <BlogContent content={post.content[language]} />

      <footer className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 text-center">
        <p className="text-sm text-gray-600 dark:text-white/60 mb-4">
          Nizamettin Şimşek — Co-founder & Frontend Developer
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <Link href="/blogs" className="hover:underline">
            {language === "tr" ? "Diğer yazılar" : "Other posts"}
          </Link>
          <Link href="/#contact" className="hover:underline">
            {language === "tr" ? "İletişim" : "Contact"}
          </Link>
        </div>
      </footer>
    </article>
  );
}
