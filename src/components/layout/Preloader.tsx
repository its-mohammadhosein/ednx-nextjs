"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  if (isLoaded) return null;

  return (
    <div className="preloader is-loading">
      <div className="loading-container">
        <div className="loading" />
        <div id="loading-icon">
          <Image src="/images/logos/logo-icon.png" alt="Loading" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}
