export type Language = "tr" | "en";

export type LocalizedString = {
  tr: string;
  en: string;
};

export type BlogPost = {
  slug: string;
  publishedAt: string;
  tags: string[];
  title: LocalizedString;
  description: LocalizedString;
  readingTime: LocalizedString;
  content: LocalizedString;
};
