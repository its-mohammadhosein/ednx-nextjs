export type Instructor = {
  slug: string;
  image: string;
  themeClass: string;
  name: string;
  designation: string;
  courses: string;
  students: string;
  rating: number;
};

export const instructors: Instructor[] = [
  {
    slug: "devoin-lanee",
    image: "/images/instructor/instructor-1.png",
    themeClass: "tj-theme-bg-2",
    name: "Devoin Lanee",
    designation: "Chief design director",
    courses: "18+",
    students: "10K+",
    rating: 4.9,
  },
  {
    slug: "leslie-alexander",
    image: "/images/instructor/instructor-2.png",
    themeClass: "tj-theme-bg-3",
    name: "Leslie Alexander",
    designation: "Full stack developer",
    courses: "22+",
    students: "21K+",
    rating: 4.9,
  },
  {
    slug: "robert-fox",
    image: "/images/instructor/instructor-3.png",
    themeClass: "tj-theme-bg-6",
    name: "Robert Fox",
    designation: "Data analytics",
    courses: "09+",
    students: "07K+",
    rating: 4.9,
  },
];
