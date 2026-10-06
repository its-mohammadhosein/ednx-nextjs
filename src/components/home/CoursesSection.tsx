"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { courses, courseFilters } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState("*");

  const visibleCourses =
    activeFilter === "*" ? courses : courses.filter((course) => course.filters.includes(activeFilter));

  return (
    <section className="tj-course-section section-gap fix tj-theme-bg">
      <div className="container">
        <div className="sec-heading sec-heading-center">
          <span className="sec-subtitle"><i className="tji-subtitle" /> Top Courses</span>
          <h2 className="sec-title">Explore Courses Built For Success.</h2>
        </div>

        <div className="tj-filter-btn-wrap">
          <div className="tj_filter_btn_group">
            {courseFilters.map((filter) => (
              <button
                key={filter.value}
                className={`tj_filter_btn ${activeFilter === filter.value ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="tj-course-filter tj_filter_item_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCourses.map((course) => (
            <CourseCard course={course} key={course.slug} />
          ))}
        </div>

        <div className="course-bottom-content">
          <span><Image src="/images/icons/fire.svg" alt="" width={16} height={16} /> Popular</span>
          <p>Learn with 200+ world-class courses.</p>
          <div>
            <Link className="tj-text-btn-2" href="/courses">
              <span className="btn-text"><span>Explore more courses</span></span>
              <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
