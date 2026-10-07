import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import InstructorsFilterSidebar from "@/components/instructors/InstructorsFilterSidebar";
import InstructorCardCompact from "@/components/instructors/InstructorCardCompact";
import ActiveFilterChips from "@/components/courses/ActiveFilterChips";
import { coaches } from "@/data/coaches";

export const metadata: Metadata = {
  title: "Expert Instructor - Edunex",
  description: "Education LMS and Online course template",
};

export default function InstructorsPage() {
  return (
    <>
      <PageBanner crumbs={[{ label: "Instructor" }]} title="Expert Instructor" />
      <section className="tj-course-section section-gap-bottom fix">
        <div className="container">
          <div className="tj-course-filter-wrap">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="tj-show-results">
                <span className="course-show">Showing <strong>1-6</strong> of <strong>300</strong> instructor</span>
              </div>
              <div className="tj-course-view-wrap">
                <div className="tj-course-ordering">
                  <div className="select-label">Sort by</div>
                  <div className="tj-select">
                    <select defaultValue="Top rated">
                      <option>Top rated</option>
                      <option>Newest</option>
                      <option>Highest Rated</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-8">
            <div className="lg:w-1/4 xl:w-1/4">
              <InstructorsFilterSidebar />
            </div>
            <div className="lg:w-3/4 xl:w-3/4">
              <ActiveFilterChips />
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {coaches.map((coach) => (
                  <InstructorCardCompact coach={coach} key={coach.slug} />
                ))}
              </div>
              <div className="course-pagination-area flex flex-wrap items-center justify-between gap-3">
                <div className="tj-show-results">
                  <span className="course-show">Showing <strong>1-6</strong> of <strong>300</strong> instructor</span>
                </div>
                <div className="tj-pagination">
                  <span aria-current="page" className="page-numbers current">1</span>
                  <a className="page-numbers" href="#">2</a>
                  <a className="page-numbers" href="#">3</a>
                  <a className="next page-numbers" href="#"><i className="tji-arrow-right-3" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
