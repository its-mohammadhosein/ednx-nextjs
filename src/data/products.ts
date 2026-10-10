export type Product = {
  slug: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
};

export const products: Product[] = [
  { slug: "personal-holding-earbud", image: "/images/product/product-1.webp", title: "Personal holding earbud", price: 28, originalPrice: 40 },
  { slug: "macbook-air-m5-15-inch", image: "/images/product/product-2.webp", title: "MacBook Air M5 15-Inch", price: 250, originalPrice: 300 },
  { slug: "fast-charging-cable", image: "/images/product/product-3.webp", title: "Fast charging cable", price: 28, originalPrice: 40 },
  { slug: "cool-mini-usb-fan", image: "/images/product/product-4.webp", title: "Cool mini USB fan", price: 40 },
  { slug: "full-leather-bag-pack", image: "/images/product/product-5.webp", title: "Full leather bag pack", price: 230 },
  { slug: "hi-fi-wireless-headphones", image: "/images/product/product-6.webp", title: "Hi-Fi wireless headphones", price: 160, originalPrice: 300 },
  { slug: "room-fragrance-device", image: "/images/product/product-7.webp", title: "Room fragrance device", price: 70, originalPrice: 180 },
  { slug: "sleek-sound-earbuds", image: "/images/product/product-8.webp", title: "Sleek sound earbuds", price: 25, originalPrice: 60 },
  { slug: "mini-boom-speaker", image: "/images/product/product-9.webp", title: "Mini boom speaker", price: 50, originalPrice: 170 },
];
