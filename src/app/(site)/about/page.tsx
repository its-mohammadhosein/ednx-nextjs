import type { Metadata } from "next";
import "swiper/css";
import PageBanner from "@/components/layout/PageBanner";
import FlipText from "@/components/ui/FlipText";
import AboutVideo from "@/components/about/AboutVideo";
import AboutCounter from "@/components/about/AboutCounter";
import AboutGallery from "@/components/about/AboutGallery";
import ClientLogos from "@/components/home/ClientLogos";
import AboutInstructors from "@/components/about/AboutInstructors";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutFaq from "@/components/about/AboutFaq";

export const metadata: Metadata = {
  title: "About Us - Edunex",
  description: "Education LMS and Online course template",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        variant="rich"
        crumbs={[{ label: "About us" }]}
        subtitle="About our Platform"
        title={<>Empowering Our Learner into <span>Career-focused</span> Online Education.</>}
        description="Master modern digital and tech skills through AI-powered learning paths and structured designed for 2026 and beyond. Master modern digital and tech skills through."
      >
        <a className="tj-btn-primary flip-text-wrap" href="/courses">
          <FlipText>Start learning free</FlipText>
          <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
        </a>
        <a className="tj-btn-primary tj-btn-primary-light flip-text-wrap" href="/courses">
          <FlipText>Explore courses</FlipText>
          <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
        </a>
      </PageBanner>
      <AboutVideo />
      <AboutCounter />
      <AboutGallery />
      <ClientLogos heading={<>Trusted more than <span>2000+</span> companies and millions of online learners.</>} />
      <AboutInstructors />
      <AboutTestimonials />
      <AboutFaq />
    </>
  );
}
