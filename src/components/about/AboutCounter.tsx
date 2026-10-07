import Image from "next/image";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { target: 300, suffix: "+", label: "Live, mentored courses", bg: "tj-theme-bg-6" },
  { target: 8000, suffix: "+", label: "Online sessions", bg: "tj-theme-bg-2" },
  { target: 100, decimals: 0, suffix: "K", label: "Learners in the community", bg: "tj-theme-bg-5" },
];

const reviewAvatars = ["/images/users/user-img-1.png", "/images/users/user-img-2.png", "/images/users/user-img-3.png"];

export default function AboutCounter() {
  return (
    <section className="about-counter-section section-gap-bottom fix">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div className={`tj-counter-item tj-counter-item-2 skill-counter-item ${stat.bg}`} key={stat.label}>
              <div className="tj-counter">
                <div className="counter-number">
                  <CountUp target={stat.target} decimals={stat.decimals} />
                  <span className="suffix">{stat.suffix}</span>
                </div>
                <div className="counter-label">{stat.label}</div>
              </div>
            </div>
          ))}
          <div className="tj-reviews-item tj-theme-bg-7">
            <ul className="tj-users-list">
              {reviewAvatars.map((src) => (
                <li key={src}><Image src={src} alt="" width={52} height={52} /></li>
              ))}
              <li><span>7K+</span></li>
            </ul>
            <div className="reviews-label">2,540 Google reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
