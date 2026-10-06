"use client";

import { useState, type ReactNode } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import Preloader from "./Preloader";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Preloader />
      <BackToTop />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <main id="primary" className="site-main">
        {children}
      </main>
      <Footer />
    </>
  );
}
