"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import FlipText from "@/components/ui/FlipText";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import type { Testimonial } from "@/data/testimonials";

const quote =
  "I'd bought courses for years and finished none. Edunex was different — the staircase made every step small enough to take today. Ten months later I closed my first design contract, and the certificate actually meant something in the interview.";

const testimonials: Testimonial[] = [
  { themeClass: "tj-theme-bg-2", rating: 4.6, quote, authorImage: "/images/users/user-img-1.png", authorName: "Brooklyn Simmons", designation: "Co. Founder" },
  { themeClass: "tj-theme-bg-3", rating: 4.9, quote, authorImage: "/images/users/user-img-2.png", authorName: "Cody Fisher", designation: "Co. Founder" },
  { themeClass: "tj-theme-bg-6", rating: 4.8, quote, authorImage: "/images/users/user-img-4.png", authorName: "Jenny Wilson", designation: "Co. Founder" },
];

export default function AboutTestimonials() {
  return (
    <section className="tj-testimonial-section-4 section-gap section-gap-x fix">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-5/12">
            <div className="sec-heading about-testimonial-heading">
              <span className="sec-subtitle"><i className="tji-subtitle" />Students feedback</span>
              <h2 className="sec-title">Explore our students users feedback.</h2>
              <p className="desc">
                We help people build <strong>strong, marketable creative practice</strong> — through hand-on
                projects, one-to-one mentorship, and a community.
              </p>
              <div className="btn-wrap">
                <a className="tj-btn-primary flip-text-wrap" href="#">
                  <FlipText>Start learning free</FlipText>
                  <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12">
            <div className="tj-testimonial-wrapper-4 tj__slider-wrapper">
              <Swiper className="tj-testimonial-slider-3" spaceBetween={24} slidesPerView={1}>
                {testimonials.map((t) => (
                  <SwiperSlide key={t.authorName}>
                    <TestimonialCard testimonial={t} hiredAt="NOVA" variantClassName="tj-testimonial-item-4" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
