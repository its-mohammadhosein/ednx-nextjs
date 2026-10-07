export type BlogPost = {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  desc?: string;
  filters?: string[];
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
    category: "Learning",
    date: "Feb - 20 - 2026",
    title: "Why online learning is the future of our education.",
  },
  {
    slug: "how-to-choose-the-right-online-course",
    image: "/images/blog/blog-img-3.webp",
    category: "Career",
    date: "Feb - 20 - 2026",
    title: "How to choose the right online course for your goals.",
  },
  {
    slug: "top-10-benefits-of-learning-new-skills-online",
    image: "/images/blog/blog-img-4.webp",
    category: "Design",
    date: "Feb - 20 - 2026",
    title: "Top 10 benefits of learning new skills online free.",
    desc: "Online education offers flexibility, affordability, & access to world-class instructors.",
    filters: ["learning", "design"],
  },
  {
    slug: "from-beginner-to-expert-your-learning-journey",
    image: "/images/blog/blog-img-5.webp",
    category: "Skills",
    date: "Feb - 20 - 2026",
    title: "From beginner to expert: Your learning journey starts.",
    desc: "Every expert was once a beginner. The right learning path, consistent practice.",
    filters: ["design", "marketing"],
  },
  {
    slug: "best-online-courses-to-boost-your-resume",
    image: "/images/blog/blog-img-6.webp",
    category: "Design",
    date: "Feb - 20 - 2026",
    title: "The best online courses to boost your resume forever.",
    desc: "Employers value candidates who continuously improve their skills discovered.",
    filters: ["skills", "career"],
  },
  {
    slug: "how-online-certifications-help-advance-career",
    image: "/images/blog/blog-img-7.webp",
    category: "Learning",
    date: "Feb - 20 - 2026",
    title: "How online certifications can help advance your career.",
    desc: "Professional certifications can showcase your expertise and help you stand out.",
    filters: ["learning", "skills"],
  },
  {
    slug: "common-mistakes-online-learners-should-avoid",
    image: "/images/blog/blog-img-8.webp",
    category: "Marketing",
    date: "Feb - 20 - 2026",
    title: "10 common mistakes online learners should avoid in 2026.",
    desc: "Success in online learning requires more than simply enrolling in a course.",
    filters: ["design", "career", "marketing"],
  },
  {
    slug: "why-online-course-marketplace-is-perfect",
    image: "/images/blog/blog-img-9.webp",
    category: "Career",
    date: "Feb - 20 - 2026",
    title: "Why online course marketplace Is the perfect place to learn.",
    desc: "Finding quality education shouldn't be difficult. Our marketplace brings together.",
    filters: ["learning", "career"],
  },
];

export const blogFilters = [
  { label: "All", value: "*" },
  { label: "Career", value: "career" },
  { label: "Learning", value: "learning" },
  { label: "Skills", value: "skills" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
];
