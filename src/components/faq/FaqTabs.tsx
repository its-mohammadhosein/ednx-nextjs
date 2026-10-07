"use client";

import { useState } from "react";
import FaqAccordion, { type FaqItem } from "./FaqAccordion";

/**
 * The template repeats the exact same 5 Q&A verbatim under every tab
 * (confirmed against the source — not a porting shortcut), so one item
 * set is reused per tab rather than inventing distinct per-category copy.
 */
const answer =
  "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.";

const items: FaqItem[] = [
  { question: "Can I host live coaching sessions?", answer },
  { question: "How do clients book coaching sessions?", answer },
  { question: "Can I sell courses and coaching programs?", answer },
  { question: "Does the platform support progress tracking?", answer },
  { question: "Do I need technical skills to get started?", answer },
];

const tabs = ["General", "Courses", "Payments", "Accounts", "Support"];

/** Replaces Bootstrap's JS tabs (data-bs-toggle="tab") with React state. */
export default function FaqTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tj-faq-wrapper-3">
      <div className="flex justify-center">
        <ul className="nav nav-tabs tj-faq-tab flex flex-wrap list-none" role="tablist">
          {tabs.map((tab, index) => (
            <li className="nav-item" role="presentation" key={tab}>
              <button
                className={`nav-link ${activeTab === index ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade show active" role="tabpanel">
          <FaqAccordion items={items} id={`tjAccordion-${activeTab}`} variantClassName="tj-faq-3" key={activeTab} />
        </div>
      </div>
    </div>
  );
}
