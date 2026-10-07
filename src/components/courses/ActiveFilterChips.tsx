// Same four demo chips appear verbatim on both courses.html and
// instructor.html — confirmed against the source, not assumed.
const activeFilters = ["Design", "Development", "4.5 & up", "Discounted"];

export default function ActiveFilterChips() {
  return (
    <div className="course-active-filters-wrap">
      <div className="course-active-filters">
        <span>Active:</span>
        {activeFilters.map((filter) => (
          <span className="filter-active" key={filter}>
            {filter}<span className="close"><i className="tji-close" /></span>
          </span>
        ))}
      </div>
    </div>
  );
}
