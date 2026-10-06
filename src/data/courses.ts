export type Course = {
  slug: string;
  image: string;
  badge: string;
  category: string;
  filters: string[];
  level: string;
  title: string;
  authorName: string;
  authorImage: string;
  lessons: string;
  duration: string;
  students: string;
  rating: number;
  ratingCount: string;
  price: string;
  originalPrice?: string;
};

export const courses: Course[] = [
  {
    slug: "professional-full-stack-web-development",
    image: "/images/course/course-img-1.webp",
    badge: "Popular",
    category: "Development",
    filters: ["development", "design"],
    level: "Intermediate",
    title: "Professional full-stack web development course.",
    authorName: "Emmielar Josan",
    authorImage: "/images/users/user-img-8.png",
    lessons: "33 Lesson",
    duration: "6h 30m",
    students: "2.1k",
    rating: 4.9,
    ratingCount: "3K+",
    price: "$20.00",
    originalPrice: "$30.00",
  },
  {
    slug: "business-growth-strategy-masterclass",
    image: "/images/course/course-img-2.webp",
    badge: "New",
    category: "Business",
    filters: ["business", "ai-ml", "data-science"],
    level: "Beginner",
    title: "Business growth and strategy masterclass 2026.",
    authorName: "Ronald Richards",
    authorImage: "/images/users/user-img-7.png",
    lessons: "26 Lesson",
    duration: "3h 20m",
    students: "12.4K",
    rating: 4.7,
    ratingCount: "2K+",
    price: "$10.00",
    originalPrice: "$20.00",
  },
  {
    slug: "complete-ui-ux-design-with-ai-prompt",
    image: "/images/course/course-img-3.webp",
    badge: "Trending",
    category: "Design",
    filters: ["design", "ai-ml"],
    level: "All levels",
    title: "Complete UI/UX Design with AI prompt in 2026.",
    authorName: "Floyd Miles",
    authorImage: "/images/users/user-img-4.png",
    lessons: "12 Lesson",
    duration: "2h 30m",
    students: "30.1K",
    rating: 4.8,
    ratingCount: "10K+",
    price: "$18.00",
    originalPrice: "$26.00",
  },
  {
    slug: "ai-machine-learning-for-beginners",
    image: "/images/course/course-img-4.webp",
    badge: "Free",
    category: "AI & ML",
    filters: ["business", "ai-ml", "data-science"],
    level: "All levels",
    title: "AI & Machine learning course for beginner.",
    authorName: "Devon Lane",
    authorImage: "/images/users/user-img-3.png",
    lessons: "12 Lesson",
    duration: "2h 30m",
    students: "30.6K",
    rating: 4.9,
    ratingCount: "12K+",
    price: "Free",
  },
  {
    slug: "complete-future-graphic-design-masterclass",
    image: "/images/course/course-img-5.webp",
    badge: "Popular",
    category: "Design",
    filters: ["design", "development"],
    level: "Advance",
    title: "Complete future graphic design masterclass.",
    authorName: "Annette Black",
    authorImage: "/images/users/user-img-1.png",
    lessons: "18 Lesson",
    duration: "5h 10m",
    students: "22.4K",
    rating: 4.6,
    ratingCount: "16K+",
    price: "$20.00",
    originalPrice: "$30.00",
  },
  {
    slug: "complete-data-science-training-programming",
    image: "/images/course/course-img-6.webp",
    badge: "New",
    category: "Data Science",
    filters: ["data-science", "business"],
    level: "Intermediate",
    title: "Complete data science training programming.",
    authorName: "Ralph Edwards",
    authorImage: "/images/users/user-img-2.png",
    lessons: "12 Lesson",
    duration: "2h 20m",
    students: "8.3K",
    rating: 4.7,
    ratingCount: "2K+",
    price: "$9.00",
    originalPrice: "$20.00",
  },
];

export const courseFilters = [
  { label: "All", value: "*" },
  { label: "Design", value: "design" },
  { label: "Development", value: "development" },
  { label: "Business", value: "business" },
  { label: "AI & ML", value: "ai-ml" },
  { label: "Data science", value: "data-science" },
];
