import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us - Edunex",
  description: "Education LMS and Online course template",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner crumbs={[{ label: "Contact us" }]} title="Contact us" />
      <section className="tj-contact-section section-gap-bottom">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
          <div className="map-area">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d34245.64001997674!2d-73.85739292030802!3d40.653793634481424!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1785402593015!5m2!1sen!2sbd"
                title="Map"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
