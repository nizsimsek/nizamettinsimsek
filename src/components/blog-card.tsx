"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/blog-types";
import { useLanguage } from "@/containers/language-context";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
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
    <article className="bg-white max-w-2xl w-full border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 p-6 sm:p-8 text-left">
      <time
        dateTime={post.publishedAt}
        className="text-sm text-gray-500 dark:text-white/50"
      >
        {formattedDate} · {post.readingTime[language]}
      </time>
      <h2 className="text-2xl font-semibold mt-2 mb-3">
        <Link
          href={`/blogs/${post.slug}`}
          className="hover:underline underline-offset-4"
        >
          {post.title[language]}
        </Link>
      </h2>
      <p className="text-gray-900 dark:text-white/90 leading-relaxed text-sm sm:text-base">
        {post.description[language]}
      </p>
      <ul className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className="bg-black/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Link
        href={`/blogs/${post.slug}`}
        className="inline-block mt-5 text-sm font-medium text-gray-700 dark:text-white/80 hover:underline"
      >
        {language === "tr" ? "Devamını oku →" : "Read more →"}
      </Link>
    </article>
  );
}
