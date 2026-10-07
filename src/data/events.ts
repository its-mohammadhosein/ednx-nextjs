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

// Dates/order here match event.html (the dedicated listing building the
// full 6-event set) rather than index.html's teaser, which used slightly
// different dates for the same first 3 events — an inconsistency in the
// source template itself (confirmed, not a porting error). Treated this
// page as authoritative rather than preserving two conflicting copies.
export const events: Event[] = [
  {
    slug: "design-better-digital-products",
    image: "/images/event/event-img-1.webp",
    category: "Design",
    title: "Design better digital products for creative problem solving.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "Nov",
    date: "03",
  },
  {
    slug: "prepare-for-tomorrows-careers",
    image: "/images/event/event-img-2.webp",
    category: "Design",
    title: "Prepare for tomorrow’s careers on future learning sessions.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "Nov",
    date: "07",
  },
  {
    slug: "unlock-professional-growth",
    image: "/images/event/event-img-3.webp",
    category: "Design",
    title: "Unlock professional growth through practical skill sessions.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "Nov",
    date: "09",
  },
  {
    slug: "build-future-ready-careers",
    image: "/images/event/event-img-4.webp",
    category: "Design",
    title: "Build future-ready careers with industry-focused learning.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "Nov",
    date: "14",
  },
  {
    slug: "turn-creative-ideas-into-real-world",
    image: "/images/event/event-img-5.webp",
    category: "Design",
    title: "Turn creative ideas into real-world digital experiences.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "Dec",
    date: "02",
  },
  {
    slug: "master-in-demand-skills",
    image: "/images/event/event-img-6.webp",
    category: "Design",
    title: "Master in-demand skills through hands-on expert workshops.",
    desc: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "Dec",
    date: "23",
  },
];
