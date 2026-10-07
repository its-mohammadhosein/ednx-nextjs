import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import FaqTabs from "@/components/faq/FaqTabs";

export const metadata: Metadata = {
  title: "FAQs - Edunex",
  description: "Education LMS and Online course template",
};

export default function FaqPage() {
  return (
    <>
      <PageBanner crumbs={[{ label: "FAQs" }]} title="FAQs" />
      <section className="tj-faq-section-4 section-gap-bottom fix">
        <div className="container">
          <div className="sec-heading sec-heading-center">
            <span className="sec-subtitle"><i className="tji-subtitle" /> Support center</span>
            <h2 className="sec-title">Browse FAQs to Get Quick answers.</h2>
          </div>
          <FaqTabs />
        </div>
      </section>
    </>
  );
}
