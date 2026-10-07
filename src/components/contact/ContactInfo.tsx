import FlipText from "@/components/ui/FlipText";

const items = [
  {
    icon: "tji-envelope",
    title: "Email us",
    desc: "For anything, anytime",
    link: { href: "mailto:hello@edunex.com", label: "hello@edunex.com" },
  },
  {
    icon: "tji-phone-call",
    title: "Call us",
    desc: "Mon-Fri, 9am-6pm CT.",
    link: { href: "tel:14155550132", label: "+1 (415) 555-0132" },
  },
];

export default function ContactInfo() {
  return (
    <div className="tj-contact-area">
      <div className="sec-heading">
        <span className="sec-subtitle"><i className="tji-subtitle" /> Get in touch</span>
        <h2 className="sec-title">Get in Touch.</h2>
        <p className="desc">
          Pick whichever channel suits you — we&apos;re quick on all of them. Master modern digital and tech skills
          through.
        </p>
      </div>
      <div className="contact-item-wrap">
        {items.map((item) => (
          <div className="contact-item style-2" key={item.title}>
            <div className="contact-icon"><i className={item.icon} /></div>
            <div className="contact-content">
              <h3 className="contact-title">{item.title}</h3>
              <p>{item.desc}</p>
              <a className="contact-link" href={item.link.href}>{item.link.label}</a>
            </div>
          </div>
        ))}
        <div className="contact-item style-2">
          <div className="contact-icon"><i className="tji-location" /></div>
          <div className="contact-content">
            <h3 className="contact-title">Visit us</h3>
            <p>189 Congress, Suite 300 TX 78701, USA</p>
            <a className="tj-text-btn flip-text-wrap" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/atM8DyLTPi25AwLDA">
              <FlipText>Get directions</FlipText>
              <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
