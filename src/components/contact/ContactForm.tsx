"use client";

import FlipText from "@/components/ui/FlipText";

const subjects = [
  "General question",
  "Course Information",
  "Pricing & Subscription",
  "Request a Refund",
  "Account & Login",
  "Billing & Payments",
];

/**
 * Submission handling intentionally deferred (Phase 7 is form behavior, and
 * per direction that phase won't wire up API routes/backends) — this just
 * prevents the native navigation-reload submit for now.
 */
export default function ContactForm() {
  return (
    <div className="contact-form">
      <div className="form-title-wrap">
        <h3 className="form-title">Send us a message.</h3>
        <p className="desc">Start learning free — no credit card required.</p>
      </div>
      <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <div className="form-input">
            <label className="cf-label">Full name</label>
            <input type="text" name="cfName" placeholder="Enter name" required />
          </div>
          <div className="form-input">
            <label className="cf-label">Email address</label>
            <input type="email" name="cfEmail" placeholder="Enter email" required />
          </div>
          <div className="form-input sm:col-span-2">
            <label className="cf-label">Subject</label>
            <div className="tj-select">
              <select name="cfSubject" defaultValue={subjects[0]}>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-input message-input sm:col-span-2">
            <label className="cf-label">Message</label>
            <textarea name="message" placeholder="Tell us how we can help..." />
          </div>
          <div className="form-submit sm:col-span-2">
            <button className="tj-btn-primary flip-text-wrap" type="submit">
              <FlipText>Send message</FlipText>
              <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
