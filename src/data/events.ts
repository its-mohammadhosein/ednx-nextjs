export type Event = {
  slug: string;
  image: string;
  category: string;
  title: string;
  desc: string;
  location: string;
  time: string;
  month: string;
  date: string;
};

export const events: Event[] = [
  {
    slug: "design-better-digital-products",
    image: "/images/event/event-img-1.webp",
    category: "Design",
    title: "Design better digital products for creative problem solving.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "November",
    date: "02",
  },
  {
    slug: "prepare-for-tomorrows-careers",
    image: "/images/event/event-img-2.webp",
    category: "Design",
    title: "Prepare for tomorrow’s careers on future learning sessions.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "November",
    date: "08",
  },
  {
    slug: "unlock-professional-growth",
    image: "/images/event/event-img-3.webp",
    category: "Design",
    title: "Unlock professional growth through practical skill sessions.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "November",
    date: "23",
  },
];
