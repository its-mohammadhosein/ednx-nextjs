export type PricingPlan = {
  slug: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    slug: "starter",
    title: "Starter plan",
    desc: "Perfect for individuals beginning.",
    monthlyPrice: 29,
    yearlyPrice: 22,
    features: [
      "2 coaching sessions / month",
      "Group coaching access",
      "Goal setting resources",
      "Session recordings",
      "Email support",
      "Progress tracking",
    ],
  },
  {
    slug: "professional",
    title: "Professional plan",
    desc: "Ideal for professionals seeking.",
    monthlyPrice: 79,
    yearlyPrice: 69,
    popular: true,
    features: [
      "6 Coaching sessions / month",
      "1-on-1 coaching",
      "Priority email support",
      "Progress reports",
      "Community access",
      "Session recordings",
    ],
  },
  {
    slug: "elite",
    title: "Elite plan",
    desc: "Designed for leaders and individuals.",
    monthlyPrice: 149,
    yearlyPrice: 129,
    features: [
      "Unlimited coaching sessions",
      "Dedicated personal coach",
      "Customized growth strategy",
      "Weekly performance reviews",
      "Priority scheduling",
      "Direct messaging support",
    ],
  },
];
