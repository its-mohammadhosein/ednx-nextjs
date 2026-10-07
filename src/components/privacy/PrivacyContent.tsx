import FlipText from "@/components/ui/FlipText";
import { privacySections } from "@/data/privacy-sections";

const highlights = [
  { icon: "tji-check", bg: "tj-theme-bg-2", title: "Minimal collection", desc: "Only the data needed to run your courses — nothing." },
  { icon: "tji-cross", bg: "tj-theme-bg-7", title: "Never sold", desc: "Your personal data is never sold or rented to parties." },
  { icon: "tji-settings", bg: "tj-theme-bg-4", title: "You're in control", desc: "Export or delete everything from settings, anytime." },
];

export default function PrivacyContent() {
  return (
    <div className="tj-privacy-content">
      <div className="privacy-meta">
        <span className="meta-badge"><i className="tji-guarantee" /> GDPR &amp; CCPA compliant</span>
        <span className="meta-updated">Last updated: <strong>June 1, 2026</strong> • Version 4.2</span>
      </div>

      <p className="privacy-intro">
        Your trust matters to us. This policy explains — in plain language — what data Edunex collects, why we
        collect it, and the choices you have. The short version: we collect only what we need to run your learning
        experience, we never sell your data, and you stay in control.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 privacy-highlights">
        {highlights.map((h) => (
          <div className={`highlight-card ${h.bg}`} key={h.title}>
            <span className="highlight-icon"><i className={h.icon} /></span>
            <h5 className="highlight-title">{h.title}</h5>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>

      {privacySections.map((section) => (
        <div className="privacy-block" id={section.id} key={section.id} style={{ scrollMarginTop: 130 }}>
          <h3 className="block-title">{section.title}</h3>
          {section.paragraph && <p>{section.paragraph}</p>}
          {section.list && (
            <ul className="privacy-list">
              {section.list.map((item) => (
                <li key={item.term}>
                  <i className="tji-check" />
                  <span><strong>{item.term}</strong> {item.rest}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="privacy-cta">
        <div className="cta-text">
          <h3 className="cta-title">Still have questions?</h3>
          <p>Reach our Data Protection Officer at privacy@edunex.com or write to 189 Congress, Suite 300, TX 78701, USA.</p>
        </div>
        <a className="tj-btn-primary tj-btn-primary-light flip-text-wrap" href="mailto:privacy@edunex.com">
          <FlipText>Email privacy team</FlipText>
          <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
        </a>
      </div>
    </div>
  );
}
