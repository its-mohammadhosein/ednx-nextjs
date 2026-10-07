"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

/**
 * Replaces the template's Bootstrap-JS accordion (data-bs-toggle="collapse")
 * with plain React state — one open item at a time, first one open by
 * default, matching the original markup's initial "show" state.
 */
export default function FaqAccordion({ items, id }: { items: FaqItem[]; id: string }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="tj-faq-wrapper">
      <div className="tj-faq" id={id}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="tj-accordion-item" key={item.question}>
              <button
                className={`tj-accordion-title ${isOpen ? "" : "collapsed"}`}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {item.question}
              </button>
              <div className={isOpen ? "block" : "hidden"}>
                <div className="accordion-body tj-accordion-content">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
