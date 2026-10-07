import Link from "next/link";
import FlipText from "@/components/ui/FlipText";

const categories = [
  { icon: "tji-categories-1", bg: "tj-theme-bg-2", title: "Graphic design", count: "06 courses" },
  { icon: "tji-categories-2", bg: "tj-theme-bg-3", title: "Web development", count: "06 courses" },
  { icon: "tji-categories-3", bg: "tj-theme-bg-4", title: "Digital marketing", count: "04 courses" },
  { icon: "tji-categories-4", bg: "tj-theme-bg", title: "AI and ML", count: "10 courses" },
  { icon: "tji-categories-5", bg: "tj-theme-bg-5", title: "Business strategy", count: "06 courses" },
  { icon: "tji-categories-6", bg: "tj-theme-bg-6", title: "Financial planning", count: "06 courses" },
  { icon: "tji-categories-7", bg: "tj-theme-bg-7", title: "Content writing", count: "05 courses" },
  { icon: "tji-categories-8", bg: "tj-theme-bg-8", title: "Data analytics", count: "09 courses" },
];

export default function Categories() {
  return (
    <section className="tj-categories-section section-gap-bottom fix">
      <div className="container">
        <div className="sec-heading">
          <span className="sec-subtitle"><i className="tji-subtitle" /> Chose categories</span>
          <div className="sec-heading-inner">
            <div className="sec-heading-inner-left">
              <h2 className="sec-title">Browse Categories.</h2>
              <p className="desc">Choose from thousands courses across multiple.</p>
            </div>
            <div>
              <Link className="tj-btn-primary flip-text-wrap" href="/courses">
                <FlipText>Start learning free</FlipText>
                <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div className={`tj-categories-item ${cat.bg}`} key={cat.title}>
              <div className="tj-categories-icon"><i className={cat.icon} /></div>
              <div className="tj-categories-content">
                <h3 className="title tj-fs-h5"><Link href="/courses">{cat.title}</Link></h3>
                <div className="courses">{cat.count}</div>
                <div className="btn-area tj-border-top">
                  <Link className="tj-text-btn flip-text-wrap" href="/courses">
                    <FlipText>Start learning</FlipText>
                    <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
