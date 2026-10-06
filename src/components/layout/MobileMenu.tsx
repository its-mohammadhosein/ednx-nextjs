"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems, socialLinks } from "@/lib/nav-data";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <div className={`body-overlay ${isOpen ? "opened" : ""}`} onClick={onClose} />
      <div className={`hamburger-area ${isOpen ? "opened" : ""}`}>
        <div className="hamburger_bg" />
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo" onClick={onClose}>
                  <Image src="/images/logos/logo.png" alt="Edunex" width={120} height={34} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn" onClick={onClose} aria-label="Close menu">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="hamburger-text d-none d-lg-block">
              <p>
                Developing personalize our customer journeys to increase satisfaction &amp; loyalty of our
                expansion recognized by industry leaders.
              </p>
            </div>

            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search now</h5>
              <div className="hamburger_search">
                <form action="/search">
                  <button type="submit" aria-label="Search">
                    <i className="tji-search" />
                  </button>
                  <input type="search" autoComplete="off" name="s" placeholder="Search here..." />
                </form>
              </div>
            </div>

            <div className="hamburger_menu">
              <div className="mobile_menu">
                <nav>
                  <ul>
                    {navItems.map((item) => (
                      <li key={item.href} className={item.children ? "has-dropdown" : ""}>
                        {item.children ? (
                          <>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenItem(openItem === item.href ? null : item.href);
                              }}
                            >
                              {item.label}
                            </a>
                            {openItem === item.href && (
                              <ul className="sub-menu">
                                {item.children.map((child) => (
                                  <li key={child.href}>
                                    <Link href={child.href} onClick={onClose}>
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <Link href={item.href} onClick={onClose}>
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone:</span>
                  <a className="contact-link" href="tel:+1(009)544-7818">+1 (009) 544-7818</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email:</span>
                  <a className="contact-link" href="mailto:support@edunex.com">support@edunex.com</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location:</span>
                  <span className="contact-link">189 Congress, Suite 300 TX 78701, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow us</h5>
            <div className="social-links">
              <ul className="tj-socials">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      <i className={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
