"use client";

import { useState } from "react";
import { blogPosts, blogFilters } from "@/data/blog-posts";
import BlogCard from "./BlogCard";

// Only the 6 posts with a `filters` field belong to this filterable grid —
// the first 3 are the page header's separate "latest" preview.
const filterablePosts = blogPosts.filter((post) => post.filters);

export default function BlogFilterGrid() {
  const [activeFilter, setActiveFilter] = useState("*");

  const visiblePosts =
    activeFilter === "*" ? filterablePosts : filterablePosts.filter((post) => post.filters?.includes(activeFilter));

  return (
    <section className="tj-blog-section section-gap-bottom fix">
      <div className="container">
        <div className="sec-heading sec-heading-center">
          <span className="sec-subtitle"><i className="tji-subtitle" />Latest blogs</span>
          <h2 className="sec-title">Explore Latest Blog and Insights.</h2>
        </div>

        <div className="tj-filter-btn-wrap">
          <div className="tj_filter_btn_group">
            {blogFilters.map((filter) => (
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
          {visiblePosts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>

        <div className="tj-pagination justify-center">
          <span aria-current="page" className="page-numbers current">1</span>
          <a className="page-numbers" href="#">2</a>
          <a className="page-numbers" href="#">3</a>
          <a className="next page-numbers" href="#"><i className="tji-arrow-right-3" /></a>
        </div>
      </div>
    </section>
  );
}
