import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="tj-about-section section-gap fix">
      <div className="container">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-8">
          <div className="xl:w-1/2">
            <div className="about-img-area">
              <div className="about-img">
                <Image src="/images/about/about-img.webp" alt="" width={560} height={480} />
              </div>
              <div className="learners-box">
                <ul className="tj-users-list">
                  <li><Image src="/images/users/user-img-1.png" alt="" width={52} height={52} /></li>
                  <li><Image src="/images/users/user-img-2.png" alt="" width={52} height={52} /></li>
                  <li><Image src="/images/users/user-img-3.png" alt="" width={52} height={52} /></li>
                  <li><span>7K+</span></li>
                </ul>
                <div className="text">Join <span>180,000+</span> learners already on their path</div>
              </div>
              <div className="shape tj-bounce"><Image src="/images/shapes/dotted-shape.svg" alt="" width={40} height={40} /></div>
            </div>
          </div>
          <div className="xl:w-1/2">
            <div className="sec-heading about-heading">
              <span className="sec-subtitle"><i className="tji-subtitle" />About our Platform</span>
              <h2 className="sec-title">Transforming knowledge into career opportunities through <span>Edunex.</span></h2>
            </div>
            <div className="about-content">
              <p className="desc">
                Master modern digital and tech skills through AI-powered learning paths and structured designed for
                2026 and beyond. Master modern digital and tech skills through.
              </p>
              <div className="about-list">
                <ul className="tj-list">
                  <li><span className="icon"><i className="tji-check" /></span><span className="text">Expert learning programs.</span></li>
                  <li><span className="icon"><i className="tji-check" /></span><span className="text">Relevant course content.</span></li>
                  <li><span className="icon"><i className="tji-check" /></span><span className="text">Flexible learning experience.</span></li>
                  <li><span className="icon"><i className="tji-check" /></span><span className="text">Lifetime access to courses.</span></li>
                </ul>
              </div>
              <div className="btn-area">
                <Link className="tj-btn-primary flip-text-wrap" href="/courses">
                  <span className="btn-text">Start learning free</span>
                  <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                </Link>
                <Link className="tj-btn-primary tj-btn-primary-light flip-text-wrap" href="/courses">
                  <span className="btn-text">Explore courses</span>
                  <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
