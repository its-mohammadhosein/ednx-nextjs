const steps = [
  { icon: "tji-search", bg: "tj-theme-bg-2", title: "Search Skill", desc: "Find the perfect course with ease. Browse thousands of expert-led courses." },
  { icon: "tji-book", bg: "tj-theme-bg-3", title: "Chose course", desc: "Select the course that fits your needs. Compare course details, instructor profiles." },
  { icon: "tji-book-3", bg: "tj-theme-bg-6", title: "Learn at your pace", desc: "Study anytime, anywhere. Access lessons on your own schedule and progress." },
  { icon: "tji-check-2", bg: "tj-theme-bg", title: "Get certificate", desc: "Showcase your achievement. Earn a verified certificate upon successful completion." },
];

export default function CareerPath() {
  return (
    <section className="tj-career-path-section section-gap fix">
      <div className="container">
        <div className="sec-heading sec-heading-center">
          <span className="sec-subtitle"><i className="tji-subtitle" /> Career paths</span>
          <h2 className="sec-title">Structured Paths for Future Careers</h2>
        </div>

        {/* Note: the template's connector-arrow graphics between steps
            (career-path-arrow.svg / career-path-arrow-start.svg) are another
            dead asset reference in the original bundle — omitted, same as
            the footer-bg.png gap noted in Phase 3. */}
        <div className="tj-career-path-wrapper">
          {steps.map((step, i) => (
            <div className="tj-career-path-item" key={step.title}>
              <div className="sl-no">{String(i + 1).padStart(2, "0")}.</div>
              <div className="tj-career-path-item-inner">
                <div className={`tj-career-path-icon ${step.bg}`}><i className={step.icon} /></div>
                <div className="tj-career-path-content">
                  <h3 className="title tj-fs-h6">{step.title}</h3>
                  <p className="desc">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
