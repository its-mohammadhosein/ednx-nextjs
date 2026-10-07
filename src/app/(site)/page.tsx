import type { Metadata } from "next";
import "swiper/css";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import Categories from "@/components/home/Categories";
import CoursesSection from "@/components/home/CoursesSection";
import About from "@/components/home/About";
import Counter from "@/components/home/Counter";
import Testimonials from "@/components/home/Testimonials";
import Events from "@/components/home/Events";
import Instructors from "@/components/home/Instructors";
import CareerPath from "@/components/home/CareerPath";
import BlogPreview from "@/components/home/BlogPreview";

export const metadata: Metadata = {
  title: "Edunex - Education LMS & Online course",
  description: "Education LMS and Online course template",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Categories />
      <CoursesSection />
      <About />
      <Counter />
      <Testimonials />
      <Events />
      <Instructors />
      <CareerPath />
      <BlogPreview />
    </>
  );
}
