import Link from "next/link";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { target: 300, suffix: "+", label: "Online courses" },
  { target: 100, suffix: "+", label: "Expert Instructors" },
  { target: 180, suffix: "K", label: "Online Learners" },
];

// One-off layout (title+breadcrumb beside stat counters) distinct enough
// from PageBanner's two variants that it isn't worth forcing a third one in
// for this single use.
export default function CoursesPageHeader() {
  return (
    <section className="tj-page-header">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <div className="tj-page-header-content">
            <h1 className="tj-page-title">Our Courses</h1>
            <div className="tj-page-link">
              <span><i className="tji-home" /></span>
              <span><Link href="/">Home</Link></span>
              <span><i className="tji-arrow-right-4" /></span>
              <span><span>Courses</span></span>
            </div>
          </div>
          <div className="tj-counter-wrapper tj-counter-wrapper-3">
            {stats.map((stat) => (
              <div className="tj-counter-item tj-counter-item-3" key={stat.label}>
                <div className="tj-counter">
                  <div className="counter-number">
                    <CountUp target={stat.target} />
                    <span className="suffix">{stat.suffix}</span>
                  </div>
                  <div className="counter-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
