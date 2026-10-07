"use client";

import FlipText from "@/components/ui/FlipText";
import StarRating from "@/components/ui/StarRating";

const expertise = [
  { label: "Design", count: 62, checked: true },
  { label: "Development", count: 48 },
  { label: "AI & Machine learning", count: 34 },
  { label: "Marketing", count: 29 },
  { label: "Business", count: 25 },
  { label: "Data science", count: 21 },
];

const ratings = [
  { rating: 4.5, label: "4.5 & up", checked: true },
  { rating: 4, label: "4.0 & up" },
  { rating: 3.5, label: "3.5 & up" },
  { rating: 3, label: "3.0 & up" },
];

/**
 * Presentational, same decision as CoursesToolbar — not wired to real
 * filtering. The price range is a static visual rather than a functional
 * dual-handle slider: the original pulls in the entire jQuery UI library
 * (widget/position/slider — tens of KB) for this one control, which isn't
 * worth the dependency for a non-functional demo filter.
 */
export default function InstructorsFilterSidebar() {
  return (
    <div className="tj-filter-sidebar">
      <div className="filter-sidebar-top">
        <div className="filter-title"><span><i className="tji-filter" /></span>Filter</div>
        <div className="filter-reset">
          <button className="tj-reset"><i className="tji-reset" />Reset filters</button>
        </div>
      </div>

      <div className="tj-filter-widget tj-filter-widget-search">
        <div className="search-box">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="search" name="search" placeholder="Search filter..." />
            <button type="submit" aria-label="Search"><i className="tji-search" /></button>
          </form>
        </div>
      </div>

      <div className="tj-filter-widget tj-filter-widget-categories">
        <h3 className="filter-widget-title">Expertise</h3>
        {expertise.map((item) => (
          <div className="filter-check-item" key={item.label}>
            <label>
              <input type="checkbox" name="category" defaultChecked={item.checked} />
              <span>{item.label}</span>
            </label>
            <span className="count">{item.count}</span>
          </div>
        ))}
      </div>

      <div className="tj-filter-widget tj-filter-widget-price">
        <h3 className="filter-widget-title">Rate per hour</h3>
        <div className="price-label">
          <span className="from">$0</span> &mdash; <span className="to">$135</span>
        </div>
        {/* The slider track itself is dropped — its visuals come entirely
            from jQuery UI's own ui-slider base CSS (never imported), so an
            empty track div here would render as nothing anyway. */}
        <div className="price-slider-wrapper">
          <div className="price-slider-amount">
            <span>Free</span>
            <span>$135+</span>
          </div>
        </div>
      </div>

      <div className="tj-filter-widget tj-filter-widget-rating">
        <h3 className="filter-widget-title">Rating</h3>
        {ratings.map((item) => (
          <div className="filter-check-item" key={item.label}>
            <label>
              <input type="checkbox" name="rating" defaultChecked={item.checked} />
              <StarRating rating={item.rating} label={item.label} />
            </label>
          </div>
        ))}
      </div>

      <div className="tj-filter-btn-area">
        <button className="tj-btn-primary tj-btn-full flip-text-wrap"><FlipText>Apply</FlipText></button>
        <button className="tj-btn-primary tj-btn-primary-border flip-text-wrap"><FlipText>Reset</FlipText></button>
      </div>
    </div>
  );
}
