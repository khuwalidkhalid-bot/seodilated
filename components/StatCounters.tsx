"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { v: 7, suffix: "+", lbl: "Years Experience" },
  { v: 8, suffix: "", lbl: "Specialist Services" },
  { v: 60, suffix: "-Day", lbl: "Link Replacement" },
  { v: 100, suffix: "%", lbl: "Manual Outreach" },
];

/** The four honest stats. The real values render by default, in the server
 *  HTML and on first paint, so the section never shows zeros. The count-up
 *  is only a progressive enhancement that plays when the grid scrolls into
 *  view; if it never runs, the true numbers stay on screen. */
export default function StatCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [vals, setVals] = useState<number[]>(STATS.map((s) => s.v));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const duration = 1400;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setVals(STATS.map((s) => Math.round(s.v * eased)));
          if (p < 1) requestAnimationFrame(tick);
        };
        setVals(STATS.map(() => 0));
        requestAnimationFrame(tick);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
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
