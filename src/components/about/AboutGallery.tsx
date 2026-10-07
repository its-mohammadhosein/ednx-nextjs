import Image from "next/image";

const features = [
  {
    icon: "tji-user-duo",
    title: "Expert-Led learning",
    desc: "Connect with experienced mentors and coaches who help you achieve personal growth, career success.",
  },
  {
    icon: "tji-book-2",
    title: "Personalized paths",
    desc: "Connect with experienced mentors and coaches who help you achieve personal growth, career success.",
  },
];

export default function AboutGallery() {
  return (
    <section className="tj-about-section-4 section-gap-bottom fix">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="about-3-gallery">
              <div className="about-3-gallery-col">
                <div className="about-3-img about-3-img-1">
                  <Image src="/images/about/h3-about-grid-1.png" alt="Student learning with headphones" width={260} height={300} />
                </div>
                <div className="about-3-img about-3-img-2">
                  <Image src="/images/about/h3-about-grid-3.png" alt="Happy student" width={260} height={200} />
                </div>
              </div>
              <div className="about-3-gallery-col about-3-gallery-col-wide">
                <div className="about-3-img about-3-img-3">
                  <Image src="/images/about/h3-about-grid-2.png" alt="Student attending an online class" width={320} height={360} />
                </div>
                {/* Note: the template's own about-3-course-card background
                    (h3-about-grid-bg.png) is another dead asset reference,
                    same as footer-bg.png and career-path-arrow*.svg before
                    it — omitted rather than inventing a replacement. */}
                <div className="about-3-course-card">
                  <span className="about-3-course-icon"><Image src="/images/icons/tj-award.png" alt="" width={32} height={32} /></span>
                  <h4 className="about-3-course-title">Business growth strate masterclass 2026.</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="about-3-content">
              <div className="sec-heading">
                <span className="sec-subtitle"><i className="tji-subtitle" /> About Academy</span>
                <h2 className="sec-title">Transforming knowledge into career opportunities through <span>Edunex.</span></h2>
              </div>
              <div className="about-3-feature-list">
                {features.map((feature) => (
                  <div className="about-3-feature" key={feature.title}>
                    <div className="about-3-feature-head">
                      <span className="about-3-feature-icon"><i className={feature.icon} /></span>
                      <h3 className="about-3-feature-title tj-fs-h5">{feature.title}</h3>
                    </div>
                    <p className="about-3-feature-desc">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
