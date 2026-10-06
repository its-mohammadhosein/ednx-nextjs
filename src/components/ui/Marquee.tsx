import type { ReactNode } from "react";

/**
 * Replaces the template's custom rAF-driven marquee script (data-scroll-speed)
 * with a plain CSS animation: render the item list twice back to back and
 * scroll the track left by exactly one copy's width, looping seamlessly.
 */
export default function Marquee({ children, durationSeconds = 30 }: { children: ReactNode; durationSeconds?: number }) {
  return (
    <div className="tj-marquee-wrapper-track">
      <div className="marquee-track" style={{ animationDuration: `${durationSeconds}s` }}>
        <div className="tj-marquee">{children}</div>
        <div className="tj-marquee" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
