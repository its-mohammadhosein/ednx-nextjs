"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";
import CoursesToolbar from "./CoursesToolbar";

export default function CoursesGrid() {
  const [isListView, setIsListView] = useState(false);

  return (
    <section className="tj-course-section section-gap-bottom fix">
      <div className="container">
        <CoursesToolbar isListView={isListView} onToggleView={setIsListView} />

        {/* flex, not grid: .list-view-active (template.css) sets .course-col
            { width: 100% } to force full-row stacking in list mode, which
            only works against a flex-wrap row — a CSS Grid parent would
            ignore a grid item's own width and keep it constrained to its
            grid-cols track. The grid-mode basis-* classes are applied only
            when NOT in list view: flex-basis (what basis-* sets) wins over
            width on a flex item's main axis per the flexbox spec, so
            leaving them on would silently defeat list-view-active's
            width:100% regardless of selector specificity. */}
        <div className={`tj-course-wrapper flex flex-wrap gap-6 ${isListView ? "list-view-active" : ""}`}>
          {courses.map((course) => (
            <div
              className={`course-col ${isListView ? "" : "basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"}`}
              key={course.slug}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="course-pagination-area flex flex-wrap items-center justify-between gap-3">
          <div className="tj-show-results">
            <span className="course-show">Showing <strong>1-6</strong> of <strong>300</strong> course</span>
          </div>
          <div className="tj-pagination">
            <span aria-current="page" className="page-numbers current">1</span>
            <a className="page-numbers" href="#">2</a>
            <a className="page-numbers" href="#">3</a>
            <a className="next page-numbers" href="#"><i className="tji-arrow-right-3" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
