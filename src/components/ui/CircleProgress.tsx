"use client";

import { useEffect, useState } from "react";

// Circumference matches the fixed stroke-dasharray: 320 set in home.css for .circle-big .progress
const CIRCUMFERENCE = 320;

export default function CircleProgress({ percent }: { percent: number }) {
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOffset(CIRCUMFERENCE - (CIRCUMFERENCE * percent) / 100));
    return () => cancelAnimationFrame(id);
  }, [percent]);

  return (
    <div className="circle-big" data-percent={percent}>
      <span>{percent}%</span>
      <svg>
        <circle className="bg" cx="52" cy="52" r="46" />
        <circle className="progress" cx="52" cy="52" r="46" style={{ strokeDashoffset: offset }} />
      </svg>
    </div>
  );
}
