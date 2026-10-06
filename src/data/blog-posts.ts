export type BlogPost = {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-online-learning-is-transforming-career-paths",
    image: "/images/blog/blog-img-1.webp",
    category: "Design",
    date: "Feb - 20 - 2026",
    title: "How online learning is transforming modern career paths.",
  },
  {
    slug: "why-online-learning-is-the-future",
    image: "/images/blog/blog-img-2.webp",
    category: "Design",
    date: "Feb - 20 - 2026",
    title: "Why online learning is the future of our education.",
  },
  {
    slug: "how-to-choose-the-right-online-course",
    image: "/images/blog/blog-img-3.webp",
    category: "Design",
    date: "Feb - 20 - 2026",
    title: "How to choose the right online course for your goals.",
  },
];
