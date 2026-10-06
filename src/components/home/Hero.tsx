import Link from "next/link";
import Image from "next/image";
import CircleProgress from "@/components/ui/CircleProgress";

export default function Hero() {
  return (
    <section className="tj-banner-section fix">
      <div className="container">
        <div className="banner-content">
          <span className="sec-subtitle"><i className="tji-subtitle" /> AI Featured COURSE</span>
          <h1 className="banner-title">Transform Future Through Online Skill Building.</h1>
          <div className="banner-desc">
            Master modern digital and tech skills through AI-powered learning paths and structured designed for 2026
            and beyond.
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
          <div className="list-area">
            <ul className="tj-list">
              <li><span className="icon"><i className="tji-check" /></span><span className="text">200k+ learners</span></li>
              <li><span className="icon"><i className="tji-check" /></span><span className="text">Recognized certificates</span></li>
              <li><span className="icon"><i className="tji-check" /></span><span className="text">30-day money back</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="banner-right">
        <div className="banner-img">
          <Image src="/images/hero/hero-img.png" alt="" width={560} height={640} />
        </div>
        <div className="banner-progress-box d-lg-block d-none">
          <h6 className="title">Learning Progress...</h6>
          <CircleProgress percent={80} />
          <span className="text"><strong>80%</strong> Completed. Great!</span>
        </div>
        <div className="banner-launched-box">
          <span className="icon"><Image src="/images/icons/idea.svg" alt="" width={24} height={24} /></span>
          <span className="text"><strong>Just Launched: </strong> “Mastering GenAI” Course (200 enrolled today!)</span>
        </div>
        <div className="tj-course-item banner-feature-course d-xl-block d-none">
          <div className="tj-course-img">
            <Link href="/courses/complete-ai-ui-ux-design-bootcamp">
              <Image src="/images/hero/hero-course-img.webp" alt="" width={360} height={220} />
            </Link>
            <div className="tj-product-badge"><span>Popular</span></div>
            <div className="tj-wishlist-btn"><button aria-label="Add to wishlist"><i className="tji-heart" /></button></div>
          </div>
          <div className="tj-course-content">
            <h3 className="title tj-fs-h6">
              <Link href="/courses/complete-ai-ui-ux-design-bootcamp">Complete AI UI/UX Design bootcamp 2026.</Link>
            </h3>
            <span className="author">
              <Link href="/instructors">
                <Image src="/images/users/user-img-8.png" alt="" width={32} height={32} /> Emmielar Josan
              </Link>
            </span>
            <div className="course-meta">
              <span><i className="tji-book" />33 Lesson</span>
              <span><i className="tji-clock" />6h 30m</span>
              <span><i className="tji-user-duo" />2.1k</span>
            </div>
            <div className="tj-course-price-wrap">
              <div className="single-rating">
                <i className="tji-star" />
                <span className="label">4.9<span>(3K+)</span></span>
              </div>
              <div className="course-price tj-fs-h6"><del>$30.00</del> $20.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-scroll">
        <a href="#scroll-target" className="scroll-down tj-scroll-btn">
          <span className="text">Scroll Down</span>
          <span className="icon"><i className="tji-arrow-down-3" /></span>
        </a>
      </div>
    </section>
  );
}
