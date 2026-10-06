import CountUp from "@/components/ui/CountUp";

const counters = [
  { icon: "tji-user-duo", target: 8000, suffix: "+", label: "Active Students" },
  { icon: "tji-book-2", target: 300, suffix: "+", label: "Quality Courses" },
  { icon: "tji-user-check", target: 100, suffix: "+", label: "Expert Instructors" },
  { icon: "tji-star-2", target: 99.9, decimals: 1, suffix: "%", label: "Satisfaction Rate" },
];

export default function Counter() {
  return (
    <div className="tj-counter-section fix">
      <div className="bg-noise" />
      <div className="container">
        <div className="tj-counter-wrapper">
          {counters.map((item) => (
            <div className="tj-counter-item" key={item.label}>
              <div className="tj-counter">
                <div className="counter-icon"><i className={item.icon} /></div>
                <div className="counter-number">
                  <CountUp target={item.target} decimals={item.decimals} />
                  <span className="suffix">{item.suffix}</span>
                </div>
                <div className="counter-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
