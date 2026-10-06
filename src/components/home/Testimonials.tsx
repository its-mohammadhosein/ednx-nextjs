"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { testimonials } from "@/data/testimonials";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="tj-testimonial-section section-gap fix">
      <div className="container">
        <div className="sec-heading">
          <span className="sec-subtitle"><i className="tji-subtitle" />Students feedback</span>
          <div className="sec-heading-inner">
            <h2 className="sec-title">Explore our students users feedback.</h2>
            <div className="slider-navigation">
              <button className="slider-prev slider-prev-1" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous">
                <span className="anim-icon"><i className="tji-arrow-left-3" /><i className="tji-arrow-left-3" /></span>
              </button>
              <button className="slider-next slider-next-1" onClick={() => swiperRef.current?.slideNext()} aria-label="Next">
                <span className="anim-icon"><i className="tji-arrow-right-3" /><i className="tji-arrow-right-3" /></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid testimonial-container">
        <div className="tj__slider-wrapper">
          <Swiper
            className="tj-testimonial-slider"
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.authorName}>
                <div className={`tj-testimonial-item ${t.themeClass}`}>
                  <div className="tj-testimonial-top">
                    <div className="tj-quote"><i className="tji-quote" /></div>
                    <StarRating rating={t.rating} />
                  </div>
                  <div className="desc"><p>“{t.quote}”</p></div>
                  <div className="tj-testimonial-bottom">
                    <div className="author-wrap">
                      <div className="author-avatar">
                        <Image src={t.authorImage} alt="" width={48} height={48} />
                      </div>
                      <div className="author-info">
                        <h3 className="name tj-fs-h6">{t.authorName}</h3>
                        <span className="designation">{t.designation}</span>
                      </div>
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
