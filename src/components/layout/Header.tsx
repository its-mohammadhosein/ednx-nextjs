"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/nav-data";

const PROMO_END_DATE = new Date("2026-12-30T12:00:00");

function useCountdown(target: Date) {
  const [remaining, setRemaining] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setRemaining({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return remaining;
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export default function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isTopbarOpen, setIsTopbarOpen] = useState(true);
  const countdown = useCountdown(PROMO_END_DATE);

  useEffect(() => {
    // Matches the template's own threshold ("Default header sticky only for
    // first 145px" in assets/js/main.js) — the original also swapped in a
    // cloned "duplicate" header past 640px, a pre-React DOM trick to avoid
    // reflow that has no equivalent need here; one sticky header covers it.
    const onScroll = () => setIsSticky(window.scrollY > 145);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header-area header-1 ${isSticky ? "header-fixed sticky" : ""}`}
    >
      {isTopbarOpen && (
        <div className="header-top d-lg-block d-none">
          <div className="bg-noise" />
          <div className="container-fluid">
            <div className="header-top-content">
              <div className="countdown">
                <div className="countdown-container days">
                  <span className="countdown-value">{pad(countdown.d)}</span>
                  <span className="countdown-heading">d</span>
                </div>
                <span className="divider">:</span>
                <div className="countdown-container hours">
                  <span className="countdown-value">{pad(countdown.h)}</span>
                  <span className="countdown-heading">h</span>
                </div>
                <span className="divider">:</span>
                <div className="countdown-container minutes">
                  <span className="countdown-value">{pad(countdown.m)}</span>
                  <span className="countdown-heading">m</span>
                </div>
                <span className="divider">:</span>
                <div className="countdown-container seconds">
                  <span className="countdown-value">{pad(countdown.s)}</span>
                  <span className="countdown-heading">s</span>
                </div>
              </div>
              <p className="topbar-text">
                <Image src="/images/icons/fire.svg" alt="" width={16} height={16} />
                ENDS SATURDAY • Get 50% Off annual Pro membership
              </p>
              <Link href="/contact">Claim offer</Link>
            </div>
          </div>
          <div className="topbar-close">
            <button className="close-btn" onClick={() => setIsTopbarOpen(false)} aria-label="Dismiss offer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 1L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="header-bottom">
        <div className="container-fluid">
          <div className="header-wrapper">
            <div className="site_logo">
              <Link className="logo" href="/">
                <Image src="/images/logos/logo.png" alt="Edunex" width={140} height={40} />
              </Link>
            </div>

            <div className="menu-area d-none d-lg-inline-flex align-items-center">
              <nav className="mainmenu">
                <ul>
                  {navItems.map((item) => (
                    <li key={item.href} className={item.children ? "has-dropdown" : ""}>
                      <Link href={item.href}>{item.label}</Link>
                      {item.children && (
                        <ul className="sub-menu">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href}>{child.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="header-right-item d-inline-flex">
              <div className="header-search-box d-lg-block d-none">
                <form action="/search">
                  <button type="submit" aria-label="Search">
                    <i className="tji-search" />
                  </button>
                  <input type="search" autoComplete="off" name="s" placeholder="Search for here..." />
                </form>
              </div>
              <div className="header-cart">
                <Link className="cart-btn" href="/cart">
                  <i className="tji-cart-bag" />
                  <span className="cart-count">02</span>
                </Link>
              </div>
              <div className="header-user d-lg-none">
                <Link className="user-btn" href="/login">
                  <i className="tji-user" />
                </Link>
              </div>
              <div className="header-button d-xl-flex d-none">
                <Link
                  className="tj-btn-primary tj-btn-primary-border tj-btn-primary-border-sm flip-text-wrap"
                  href="/login"
                >
                  <span className="btn-text">Log in</span>
                </Link>
              </div>
            </div>

            <button className="menu_btn mobile_menu_bar d-lg-none" onClick={onOpenMenu} aria-label="Open menu">
              <span className="bars">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
