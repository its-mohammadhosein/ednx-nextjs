export type Testimonial = {
  themeClass: string;
  rating: number;
  quote: string;
  authorImage: string;
  authorName: string;
  designation: string;
};

export const testimonials: Testimonial[] = [
  {
    themeClass: "tj-theme-bg-2",
    rating: 4.6,
    quote:
      "The platform transformed complex analytics into simple actions, helping our team make faster, smarter deep technical expertise daily.",
    authorImage: "/images/users/user-img-1.png",
    authorName: "Brooklyn Simmons",
    designation: "Co. Founder",
  },
  {
    themeClass: "tj-theme-bg-3",
    rating: 4.9,
    quote:
      "Our team reduced manual reporting time drastically and now focuses on strategy instead of repetitive data tasks thanks to AI insights.",
    authorImage: "/images/users/user-img-2.png",
    authorName: "Cody Fisher",
    designation: "Co. Founder",
  },
  {
    themeClass: "tj-theme-bg-6",
    rating: 4.8,
    quote:
      "We improved marketing performance significantly using AI-driven recommendations that optimize campaigns, consistent results.",
    authorImage: "/images/users/user-img-4.png",
    authorName: "Jenny Wilson",
    designation: "Co. Founder",
  },
  {
    themeClass: "tj-theme-bg-7",
    rating: 4.7,
    quote:
      "The platform transformed complex analytics into simple actions, helping our team make faster, smarter deep technical expertise daily.",
    authorImage: "/images/users/user-img-3.png",
    authorName: "Bessie Cooper",
    designation: "Co. Founder",
  },
];
