"use client";

import { events } from "@/data/events";

const categories = [
  { label: "Career", count: 3 },
  { label: "Learning", count: 2 },
  { label: "Skills", count: 3 },
  { label: "Design", count: 6 },
  { label: "Marketing", count: 4 },
];

const tags = ["Career", "Business", "Finance", "Growth", "Digital", "Transform", "Tech", "Data", "Innovation", "Drive"];

// Source links categories/tags to blog-details.html, not an events page —
// left as-is (same deliberate choice as other dead demo hrefs) rather than
// invented into a filter this page doesn't actually implement.
export default function EventsSidebar() {
  return (
    <div className="tj_wpost_sidebar">
      <div className="tj_wpost_widget tj_widget_search">
        <h4 className="widget_title">Search here</h4>
        <div className="search-box">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="search" name="search" placeholder="Search..." />
            <button type="submit" aria-label="Search"><i className="tji-search" /></button>
          </form>
        </div>
      </div>

      <div className="tj_wpost_widget tj_widget_categories">
        <h4 className="widget_title">Categories</h4>
        <ul>
          {categories.map((cat) => (
            <li key={cat.label}>
              <a href="/blog">{cat.label}<span className="number">({String(cat.count).padStart(2, "0")})</span></a>
            </li>
          ))}
        </ul>
      </div>

      <div className="tj_wpost_widget tj_related_events">
        <h4 className="widget_title">Related events</h4>
        <ul>
          {events.slice(0, 3).map((event) => (
            <li key={event.slug}>
              <div className="event-date">
                <span className="date">{event.date}</span>
                <span className="month">{event.month}</span>
              </div>
              <div className="event-content">
                <h6 className="event-title"><a href={`/events/${event.slug}`}>{event.title.slice(0, 30)}...</a></h6>
                <div className="event-meta"><span>Sat • {event.time.split(" - ")[0]}</span></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="tj_wpost_widget widget_tag_cloud">
        <h4 className="widget_title">Tags</h4>
        <nav>
          <div className="tagcloud">
            {tags.map((tag) => (
              <a href="/blog" key={tag}>{tag}</a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
