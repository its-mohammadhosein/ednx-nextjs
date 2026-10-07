"use client";

import ActiveFilterChips from "./ActiveFilterChips";

/**
 * Presentational only — search/category/price/level/rating/instructor
 * selects and the active-filter chips match the source markup but aren't
 * wired to real filtering logic (no backend/search to filter against yet,
 * and this is a separate UI from the home page's isotope-style tag filter).
 * Revisit if/when real course search is built.
 */
export default function CoursesToolbar({
  isListView,
  onToggleView,
}: {
  isListView: boolean;
  onToggleView: (isList: boolean) => void;
}) {
  return (
    <>
      <div className="tj-course-filter-wrap">
        <div className="tj-top-filter">
          <div className="tj-filter-widget">
            <div className="search-box">
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <input type="search" name="search" placeholder="Search course, topic, instructor..." />
                <button type="submit" aria-label="Search"><i className="tji-search" /></button>
              </form>
            </div>
          </div>
          <div className="tj-filter-widget">
            <div className="tj-select">
              <select defaultValue="Categories">
                <option>Categories</option>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
                <option>AI & ML</option>
                <option>Business</option>
                <option>Writing</option>
                <option>Data science</option>
              </select>
            </div>
          </div>
          <div className="tj-filter-widget">
            <div className="tj-select">
              <select defaultValue="Prices">
                <option>Prices</option>
                <option>All</option>
                <option>Free</option>
                <option>Paid</option>
              </select>
            </div>
          </div>
          <div className="tj-filter-widget">
            <div className="tj-select">
              <select defaultValue="Levels">
                <option>Levels</option>
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
            </div>
          </div>
          <div className="tj-filter-widget">
            <div className="tj-select">
              <select defaultValue="Rating">
                <option>Rating</option>
                <option>4.5 & up</option>
                <option>4.0 & up</option>
                <option>3.5 & up</option>
                <option>3.0 & up</option>
              </select>
            </div>
          </div>
          <div className="tj-filter-widget">
            <div className="tj-select">
              <select defaultValue="Instructor">
                <option>Instructor</option>
                <option>Emmielar</option>
                <option>Ronald</option>
                <option>Floyd</option>
                <option>Devon</option>
                <option>Annette</option>
                <option>Ralph</option>
              </select>
            </div>
          </div>
          <div className="tj-filter-widget">
            <div className="filter-reset">
              <button className="tj-reset"><i className="tji-reset" />Reset filters</button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="tj-show-results">
            <span className="course-show">Showing <strong>1-6</strong> of <strong>300</strong> course</span>
          </div>
          <div className="tj-course-view-wrap">
            <div className="tj-course-ordering">
              <div className="select-label">Sort by</div>
              <div className="tj-select">
                <select defaultValue="New">
                  <option>New</option>
                  <option>Popular</option>
                  <option>Trending</option>
                </select>
              </div>
            </div>
            <div className="tj-course-switch">
              <button className={`grid-view ${isListView ? "" : "active"}`} onClick={() => onToggleView(false)} aria-label="Grid view">
                <i className="tji-grid-2" />
              </button>
              <button className={`list-view ${isListView ? "active" : ""}`} onClick={() => onToggleView(true)} aria-label="List view">
                <i className="tji-list" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ActiveFilterChips />
    </>
  );
}
