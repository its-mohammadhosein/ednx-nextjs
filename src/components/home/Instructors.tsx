"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { instructors } from "@/data/instructors";
import InstructorCard from "@/components/instructors/InstructorCard";

export default function Instructors() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="tj-instructor-section section-gap fix">
      <div className="container">
        <div className="sec-heading">
          <span className="sec-subtitle"><i className="tji-subtitle" />Meet our Experts</span>
          <div className="sec-heading-inner">
            <h2 className="sec-title">Learn From Our Expert on Instructors.</h2>
            <div className="slider-navigation">
              <button className="slider-prev slider-prev-2" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous">
                <span className="anim-icon"><i className="tji-arrow-left-3" /><i className="tji-arrow-left-3" /></span>
              </button>
              <button className="slider-next slider-next-2" onClick={() => swiperRef.current?.slideNext()} aria-label="Next">
                <span className="anim-icon"><i className="tji-arrow-right-3" /><i className="tji-arrow-right-3" /></span>
              </button>
            </div>
          </div>
        </div>

        <div className="tj__slider-wrapper">
          <Swiper
            className="tj-instructor-slider"
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          >
            {instructors.map((instructor) => (
              <SwiperSlide key={instructor.slug}>
                <InstructorCard instructor={instructor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
