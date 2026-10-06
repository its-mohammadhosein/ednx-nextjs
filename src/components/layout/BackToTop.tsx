"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 1200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`back-to-top-wrapper ${isVisible ? "back-to-top-btn-show" : ""}`}>
      <button
        id="back-to-top"
        type="button"
        className="back-to-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <span className="back-to-top-icon"><i className="tji-arrow-up-2" /></span>
      </button>
    </div>
  );
}
