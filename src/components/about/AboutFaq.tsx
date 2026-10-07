import Image from "next/image";
import FlipText from "@/components/ui/FlipText";
import FaqAccordion, { type FaqItem } from "@/components/faq/FaqAccordion";

const answer =
  "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.";

const faqItems: FaqItem[] = [
  { question: "Can I host live coaching sessions?", answer },
  { question: "How do clients book coaching sessions?", answer },
  { question: "Can I sell courses and coaching programs?", answer },
  { question: "Does the platform support progress tracking?", answer },
  { question: "Do I need technical skills to get started?", answer },
];

export default function AboutFaq() {
  return (
    <section className="tj-faq-section section-gap fix">
      <div className="container">
        <div className="sec-heading tj-faq-heading">
          <h2 className="sec-title sec-title-faq">FAQS</h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <div className="lg:w-5/12 xl:w-4/12">
            <div className="support-box">
              <div className="support-icon">
                <Image src="/images/icons/support.png" alt="" width={48} height={48} />
              </div>
              <div className="support-content">
                <h3 className="support-title tj-fs-h4">Need support?</h3>
                <p className="support-desc">Connect with experienced mentors and coaches who help you achieve.</p>
              </div>
              <div className="support-btn">
                <a className="tj-btn-primary flip-text-wrap" href="/contact">
                  <FlipText>Find a coach</FlipText>
                  <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 xl:w-8/12">
            <div className="tj-faq-wrapper">
              <FaqAccordion items={faqItems} id="tjAccordion01" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
