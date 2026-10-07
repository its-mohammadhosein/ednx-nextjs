import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import PrivacyToc from "@/components/privacy/PrivacyToc";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Edunex",
  description: "Education LMS and Online course template",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner crumbs={[{ label: "Privacy policy" }]} title="Privacy Policy" />
      {/* Note: source markup includes "fix" (overflow:hidden) on this
          section, used elsewhere to contain decorative absolutely-positioned
          shapes. Omitted here deliberately — nothing on this page needs that
          containment, and overflow:hidden on an ancestor breaks the plain
          CSS position:sticky sidebar below (the original avoided this by
          pinning the sidebar via GSAP transforms instead of CSS sticky). */}
      <section className="tj-privacy-section section-gap-bottom">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="sticky top-[130px]">
                <PrivacyToc />
              </div>
            </div>
            <div className="lg:col-span-8">
              <PrivacyContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
