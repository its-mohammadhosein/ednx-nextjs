import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/lib/nav-data";
import FlipText from "@/components/ui/FlipText";

const programLinks = [
  { label: "Financial planning", href: "/courses/financial-planning" },
  { label: "Web development", href: "/courses/web-development" },
  { label: "Digital marketing", href: "/courses/digital-marketing" },
  { label: "Graphic design", href: "/courses/graphic-design" },
  { label: "Business strategy", href: "/courses/business-strategy" },
  { label: "Content writing", href: "/courses/content-writing" },
];

const resourceLinks = [
  { label: "Contact us", href: "/contact" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Recognitions", href: "/about" },
  { label: "Careers", href: "/contact" },
  { label: "Course", href: "/courses" },
  { label: "News", href: "/blog" },
];

const userAvatars = [
  "/images/users/user-img-1.png",
  "/images/users/user-img-2.png",
  "/images/users/user-img-6.png",
  "/images/users/user-img-3.png",
  "/images/users/user-img-5.png",
  "/images/users/user-img-4.png",
];

export default function Footer() {
  return (
    <footer className="footer-section footer-1 section-gap-top">
      <div className="footer-inner">
        <div className="footer-cta">
          <div className="container">
            <div className="cta-area">
              <div className="sec-heading sec-heading-center">
                <span className="sec-subtitle">
                  <i className="tji-subtitle" /> Chose categories
                </span>
                <h2 className="sec-title">Transform Future Using Online.</h2>
                <div className="btn-area">
                  <Link className="tj-btn-primary flip-text-wrap" href="/courses">
                    <FlipText>Start learning free</FlipText>
                    <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                  </Link>
                  <Link className="tj-btn-primary tj-btn-primary-light flip-text-wrap" href="/courses">
                    <FlipText>Explore courses</FlipText>
                    <span className="btn-icon"><i className="tji-arrow-right-2" /></span>
                  </Link>
                </div>
              </div>
              {userAvatars.map((src, i) => (
                <div className={`cta-user-img cta-user-${i + 1}`} key={src}>
                  <Image src={src} alt="" width={48} height={48} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note: the template's own `footer-bg.png` background reference is a
            dead asset path (file doesn't exist in the source template either),
            so the bg-img layer is intentionally omitted here. */}
        <div className="footer-main-wrapper">
          <div className="footer-main-area">
            <div className="container">
              <div className="footer-widget-wrapper">
                <div className="footer-widget footer-widget-subscribe">
                  <h3 className="title">Subscribe for Latest Learning Update.</h3>
                  <div className="subscribe-form">
                    <form action="#">
                      <span className="icon"><i className="tji-envelope" /></span>
                      <input type="email" name="email" placeholder="Enter email" />
                      <button type="submit" aria-label="Subscribe"><i className="tji-arrow-right-2" /></button>
                      <label htmlFor="agree">
                        <input id="agree" type="checkbox" /> agree to our{" "}
                        <Link href="/privacy-policy">Terms & Condition?</Link>
                      </label>
                    </form>
                  </div>
                </div>

                <div className="footer-widget footer-widget-nav-menu">
                  <div className="title">Programs</div>
                  <ul>
                    {programLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}><span>{link.label}</span></Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer-widget footer-widget-nav-menu">
                  <div className="title">Resources</div>
                  <ul>
                    {resourceLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}><span>{link.label}</span></Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer-widget footer-widget-contact">
                  <div className="title">Contact us</div>
                  <div className="footer-contact">
                    <div className="footer-info">189 Congress, Suite 300 TX 78701, USA</div>
                    <a href="tel:+1(009)544-7818" className="footer-info">+1 (009) 544-7818</a>
                    <a href="mailto:hello@edunex.com" className="footer-info">hello@edunex.com</a>
                  </div>
                  <div className="footer-socials">
                    <ul className="tj-socials tj-socials-dark">
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
          </div>

          <div className="tj-copyright-area">
            <div className="tj-copyright-wrap">
              <div className="container">
                <div className="tj-copyright-content-area">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image src="/images/logos/logo-2.png" alt="Edunex" width={120} height={34} />
                    </Link>
                  </div>
                  <div className="tj-copyright-text-wrapper">
                    <div className="tj-copyright-text">
                      <p>
                        &copy;<span>2026</span>{" "}
                        <a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank" rel="noreferrer">
                          Edunex
                        </a>
                        . All rights reserved
                      </p>
                    </div>
                  </div>
                  <div className="download-buttons">
                    <a href="https://play.google.com/store">
                      <Image src="/images/footer/play-store.svg" alt="Google Play" width={135} height={40} />
                    </a>
                    <a href="https://www.apple.com/app-store">
                      <Image src="/images/footer/app-store.svg" alt="App Store" width={135} height={40} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
