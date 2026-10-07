import Link from "next/link";
import Image from "next/image";
import type { PricingPlan } from "@/data/pricing-plans";

export default function PricingCard({ plan, isYearly }: { plan: PricingPlan; isYearly: boolean }) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div className={`pricing-item pricing-item-light pricing-item-lg ${plan.popular ? "pricing-item-popular" : ""}`}>
      <div className="pricing-item-inner">
        {plan.popular && (
          <div className="pricing-badge">
            <span className="pricing-badge-icon"><Image src="/images/icons/fire.svg" alt="" width={16} height={16} /></span>
            <span className="pricing-badge-text">Most popular</span>
          </div>
        )}
        <div className="pricing-header">
          <h3 className="package-title">{plan.title}</h3>
          <div className="package-desc">{plan.desc}</div>
          <div className="package-price">
            <span className="tj-currency">$</span>
            <span className="tj-price">{price}</span>
            <span className="tj-period">/ month</span>
          </div>
          <Link
            className={`tj-btn-primary-2 tj-btn-full ${plan.popular ? "" : "tj-btn-primary-2-blur"}`}
            href="/pricing"
          >
            <span className="btn-inner">
              <span className="btn-text"><span>Chose plan</span></span>
              <span className="btn-icon"><span><i className="tji-arrow-right-2" /></span></span>
            </span>
          </Link>
        </div>
        <div className="pricing-footer">
          <div className="pricing-features-title">Included</div>
          <ul className="pricing-features">
            {plan.features.map((feature) => (
              <li key={feature}><i className="tji-check" />{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
