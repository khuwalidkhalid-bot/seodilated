"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { v: 7, suffix: "+", lbl: "Years Experience" },
  { v: 8, suffix: "", lbl: "Specialist Services" },
  { v: 60, suffix: "-Day", lbl: "Link Replacement" },
  { v: 100, suffix: "%", lbl: "Manual Outreach" },
];

/** The four honest stats, counting up the first time they scroll into view. */
export default function StatCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [vals, setVals] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        if (
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          setVals(STATS.map((s) => s.v));
          return;
        }
        const duration = 1600;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setVals(STATS.map((s) => Math.round(s.v * eased)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="stat-grid" ref={ref}>
      {STATS.map((s, i) => (
        <div className="stat-card" key={s.lbl}>
          <div className="num">
            {vals[i]}
            {s.suffix}
          </div>
          <div className="lbl">{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}
