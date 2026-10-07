import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import PricingSection from "@/components/pricing/PricingSection";
import ClientLogos from "@/components/home/ClientLogos";

export const metadata: Metadata = {
  title: "Pricing - Edunex",
  description: "Education LMS and Online course template",
};

export default function PricingPage() {
  return (
    <>
      <PageBanner crumbs={[{ label: "Pricing" }]} title="Flexible Pricing" />
      <PricingSection />
      <ClientLogos />
    </>
  );
}
