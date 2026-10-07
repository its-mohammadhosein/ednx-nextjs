export type Coach = {
  slug: string;
  image: string;
  name: string;
  designation: string;
  rating: number;
  sessions: string;
  pricePerHour: string;
};

export const coaches: Coach[] = [
  { slug: "devoin-lanee", image: "/images/instructor/instructor-4.webp", name: "Devoin Lanee", designation: "Chief design director", rating: 4.9, sessions: "200", pricePerHour: "$20" },
  { slug: "dianne-russell", image: "/images/instructor/instructor-5.webp", name: "Dianne Russell", designation: "Chief design director", rating: 4.9, sessions: "210", pricePerHour: "$18" },
  { slug: "marvin-mckinney", image: "/images/instructor/instructor-6.webp", name: "Marvin McKinney", designation: "Chief design director", rating: 4.9, sessions: "180", pricePerHour: "$25" },
  { slug: "darrell-steward", image: "/images/instructor/instructor-7.webp", name: "Darrell Steward", designation: "Chief design director", rating: 4.9, sessions: "170", pricePerHour: "$15" },
  { slug: "edward-collins", image: "/images/instructor/instructor-9.webp", name: "Edward Collins", designation: "Chief design director", rating: 4.9, sessions: "180", pricePerHour: "$25" },
  { slug: "carrol-john", image: "/images/instructor/instructor-10.webp", name: "Carrol John", designation: "Chief design director", rating: 4.9, sessions: "170", pricePerHour: "$15" },
];
