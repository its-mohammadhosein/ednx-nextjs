"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FlipText from "@/components/ui/FlipText";
import { privacySections } from "@/data/privacy-sections";

// The source TOC links only 7 of the page's 8 sections — "How we share
// information" isn't listed there either, confirmed against the original
// markup rather than an omission here.
const tocIds = [
  "information-we-collect",
  "how-we-use-your-data",
  "what-we-never-do",
  "cookies-tracking",
  "data-security",
  "your-rights",
  "children-updates",
];
const tocItems = tocIds.map((id) => privacySections.find((s) => s.id === id)!);

export default function PrivacyToc() {
  const [activeId, setActiveId] = useState(tocIds[0]);

  // Replaces main.js's GSAP ScrollTrigger-based scrollspy with a plain
  // IntersectionObserver — same outcome (highlight the section in view),
  // without pulling GSAP's ScrollTrigger plugin in for one feature.
  useEffect(() => {
    const targets = privacySections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-130px 0px -70% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tj-privacy-sidebar">
      <div className="tj-privacy-toc">
        <h3 className="toc-title">On this page</h3>
        <ul className="toc-list">
          {tocItems.map((item) => (
            <li className={activeId === item.id ? "active" : ""} key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {item.tocLabel}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="tj-privacy-help">
        <div className="help-icon"><Image src="/images/icons/support.png" alt="Support" width={48} height={48} /></div>
        <h4 className="help-title">Questions about privacy?</h4>
        <p className="help-desc">Our data protection team replies within one business day.</p>
        <a className="tj-btn-primary flip-text-wrap tj-btn-full" href="/contact">
          <FlipText>Book session</FlipText>
          <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
        </a>
      </div>
    </div>
  );
}
