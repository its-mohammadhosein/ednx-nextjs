"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { pricingPlans } from "@/data/pricing-plans";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const yearlyRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0, height: 0 });

  // Replicates main.js's activeBgAnimation(): measure the active toggle
  // button and slide a highlight pill under it.
  useLayoutEffect(() => {
    const active = (isYearly ? yearlyRef : monthlyRef).current;
    const container = containerRef.current;
    if (!active || !container) return;
    const rect = active.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setBgStyle({ left: rect.left - containerRect.left - 1, width: rect.width, height: rect.height });
  }, [isYearly]);

  return (
    <section className="tj-pricing-section-2 section-gap-bottom fix">
      <div className="container">
        <div className="sec-heading sec-heading-center">
          <span className="sec-subtitle"><i className="tji-subtitle" /> Chose pricing plan</span>
          <h2 className="sec-title">Choose Best Coaching Online plans.</h2>
          <div className="price-switcher price-switcher-light price-switcher-lg tj-active-bg-container" ref={containerRef}>
            <button
              ref={monthlyRef}
              className={`price-toggle-btn monthly tj-active-bg-item ${isYearly ? "" : "active"}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              ref={yearlyRef}
              className={`price-toggle-btn yearly tj-active-bg-item ${isYearly ? "active" : ""}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
            <div className="tj-active-bg" style={bgStyle} />
          </div>
        </div>
        <div className="pricing-item-wrapper">
          {pricingPlans.map((plan) => (
            <PricingCard plan={plan} isYearly={isYearly} key={plan.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
