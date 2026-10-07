"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { instructors } from "@/data/instructors";
import FlipText from "@/components/ui/FlipText";

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
                <div className={`tj-instructor-item ${instructor.themeClass}`}>
                  <div className="tj-instructor-img">
                    <Link href={`/instructors/${instructor.slug}`}>
                      <Image src={instructor.image} alt={instructor.name} width={280} height={320} />
                    </Link>
                  </div>
                  <div className="tj-instructor-content">
                    <span className="tj-badge">Top rated</span>
                    <div className="name-area">
                      <h3 className="name"><Link href={`/instructors/${instructor.slug}`}>{instructor.name}</Link></h3>
                      <span className="designation">{instructor.designation}</span>
                    </div>
                    <div className="tj-instructor-info tj-border-top">
                      <div className="info-item">
                        <span className="title">{instructor.courses}</span>
                        <span className="text">Course</span>
                      </div>
                      <div className="info-item">
                        <span className="title">{instructor.students}</span>
                        <span className="text">Student</span>
                      </div>
                      <div className="info-item">
                        <div className="single-rating">
                          <i className="tji-star" />
                          <span className="label">{instructor.rating}</span>
                        </div>
                        <span className="text">Rating</span>
                      </div>
                    </div>
                    <div className="btn-area">
                      <Link className="tj-btn-primary tj-btn-full flip-text-wrap" href={`/instructors/${instructor.slug}`}>
                        <FlipText>See profile</FlipText>
                        <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
