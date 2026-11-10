/**
 * Stylised CSS/SVG mock panels used on the homepage: a live-link report,
 * a publisher database with a Domain Rating gauge, a chat mock, a
 * monitoring panel with a bar chart, a placement stepper and a wide
 * showcase report with a growth line chart. Everything is illustrative:
 * generic site descriptions, no real client data, no performance claims.
 * Chart animations are CSS-driven and triggered by the `.in` class that
 * the Reveal component adds when a panel scrolls into view.
 */

export function TriangleMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`tri-motif ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 8 L92 86 L8 86 Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M50 30 L74 74 L26 74 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
    </svg>
  );
}

type ReportRow = {
  site: string;
  dr: number;
  niche: string;
  when: string;
};

const heroRows: ReportRow[] = [
  { site: "Technology magazine", dr: 72, niche: "Technology", when: "Today" },
  { site: "Business news site", dr: 64, niche: "Business", when: "Yesterday" },
  { site: "Health and wellness blog", dr: 58, niche: "Health", when: "3 days ago" },
  { site: "Home improvement site", dr: 61, niche: "Home", when: "Last week" },
  { site: "Finance publication", dr: 70, niche: "Finance", when: "Last week" },
];

const showcaseRows: ReportRow[] = [
  { site: "Technology magazine", dr: 72, niche: "Technology", when: "Today" },
  { site: "Finance publication", dr: 70, niche: "Finance", when: "Yesterday" },
  { site: "Education resource site", dr: 66, niche: "Education", when: "2 days ago" },
  { site: "Business news site", dr: 64, niche: "Business", when: "3 days ago" },
  { site: "Home improvement site", dr: 61, niche: "Home", when: "Last week" },
  { site: "Health and wellness blog", dr: 58, niche: "Health", when: "Last week" },
];

function ReportRows({ rows }: { rows: ReportRow[] }) {
  return (
    <div>
      {rows.map((r) => (
        <div className="mock-row" key={r.site}>
          <span className="mock-site">{r.site}</span>
          <span className="dr-chip">DR {r.dr}</span>
          <span className="tag-chip">{r.niche}</span>
          <span className="status-pill">Live</span>
          <span className="mock-date">{r.when}</span>
        </div>
      ))}
    </div>
  );
}

function PanelHead({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) {
  return (
    <div className="mock-head">
      <div>
        <div className="mh-title">{title}</div>
        <div className="mh-sub">{sub}</div>
      </div>
      <span className="status-pill">All links live</span>
    </div>
  );
}

/** Wide report panel shown under the hero. */
export function HeroReportPanel() {
  return (
    <div className="mock-panel">
      <PanelHead
        title="Live-Link Report"
        sub="Every placement, verified link by link"
      />
      <ReportRows rows={heroRows} />
      <p className="mock-note">
        Sample layout. Your report lists your real placements, pages, anchor
        text and dates.
      </p>
    </div>
  );
}

/** Domain Rating gauge (animated sweep when revealed). */
function DrGauge() {
  return (
    <div className="gauge-wrap">
      <svg
        className="gauge"
        viewBox="0 0 200 122"
        role="img"
        aria-label="Domain Rating gauge, illustrative"
      >
        <path
          d="M20 102 A80 80 0 0 1 180 102"
          fill="none"
          stroke="#1e2b21"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          className="gauge-arc"
          d="M20 102 A80 80 0 0 1 180 102"
          fill="none"
          stroke="#00b341"
          strokeWidth="14"
          strokeLinecap="round"
          pathLength={1}
        />
        <g className="gauge-needle">
          <line
            x1="100"
            y1="102"
            x2="146"
            y2="63"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="100" cy="102" r="6" fill="#00b341" stroke="#0a0a0a" strokeWidth="2" />
        </g>
        <text x="14" y="120" className="gauge-tick">
          0
        </text>
        <text x="95" y="16" className="gauge-tick">
          50
        </text>
        <text x="172" y="120" className="gauge-tick">
          100
        </text>
      </svg>
      <div className="gauge-label">Domain Rating</div>
      <div className="gauge-sub">Every publisher checked before use</div>
    </div>
  );
}

/** Publisher Database feature panel: gauge + filter pills + site rows. */
export function DatabasePanel() {
  const rows = [
    { site: "Technology magazine", dr: 72, niche: "Technology" },
    { site: "Health and wellness blog", dr: 65, niche: "Health" },
    { site: "Business news site", dr: 58, niche: "Business" },
  ];
  return (
    <div className="mock-panel mini">
      <DrGauge />
      <div className="mock-filters">
        <span>DR 50+</span>
        <span>Real traffic</span>
        <span>Niche matched</span>
      </div>
      <div>
        {rows.map((r) => (
          <div className="mock-row" key={r.site}>
            <span className="mock-site">{r.site}</span>
            <span className="dr-chip">DR {r.dr}</span>
            <span className="tag-chip">{r.niche}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Real Person feature panel: chat-style mock. */
export function PersonPanel() {
  return (
    <div className="mock-panel mini">
      <div className="chat">
        <div className="bubble them">
          <span className="who">Client</span>
          Hi, any news on the guest post for our site?
        </div>
        <div className="bubble us">
          <span className="who">Your specialist</span>
          Good news, the editor approved the article this morning. It is
          scheduled to go live this week.
        </div>
        <div className="bubble them">
          <span className="who">Client</span>
          Great. Will I see the link once it is live?
        </div>
        <div className="bubble us">
          <span className="who">Your specialist</span>
          Yes, it lands in your live-link report the same day, with the exact
          page and anchor text.
        </div>
      </div>
    </div>
  );
}

/** Small animated bar chart (illustrative link checks). */
function BarChart() {
  const bars = [20, 28, 24, 36, 32, 44, 54];
  return (
    <svg
      className="barchart"
      viewBox="0 0 168 84"
      role="img"
      aria-label="Bar chart of link checks, illustrative"
    >
      <line x1="2" y1="72" x2="166" y2="72" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      {bars.map((h, i) => (
        <rect
          key={i}
          className="bar-rect"
          x={6 + i * 23}
          y={72 - h}
          width="15"
          height={h}
          rx="3"
          fill={i === bars.length - 1 ? "#00b341" : "rgba(0,179,65,0.45)"}
          style={{ transitionDelay: `${0.2 + i * 0.09}s` }}
        />
      ))}
    </svg>
  );
}

/** Monitoring & Replacement feature panel: status rows + bar chart. */
export function MonitoringPanel() {
  const rows = [
    { label: "Guest post · Technology site" },
    { label: "Niche edit · Business site" },
    { label: "Guest post · Health site" },
  ];
  return (
    <div className="mock-panel mini">
      <div className="mock-head compact">
        <div className="mh-title">Link monitoring</div>
        <span className="status-pill">All live</span>
      </div>
      <div>
        {rows.map((r) => (
          <div className="mock-row" key={r.label}>
            <span className="mock-site">{r.label}</span>
            <span className="status-pill">OK</span>
          </div>
        ))}
      </div>
      <div className="chart-box">
        <div className="chart-title">Checks running every cycle</div>
        <BarChart />
      </div>
    </div>
  );
}

/** Placement Engine feature panel: order pipeline stepper. */
export function EnginePanel() {
  const steps = [
    { lbl: "Brief", state: "done" },
    { lbl: "Content", state: "done" },
    { lbl: "Approval", state: "active" },
    { lbl: "Live", state: "todo" },
  ] as const;
  return (
    <div className="mock-panel mini">
      <div className="mock-head compact">
        <div className="mh-title">Placement pipeline</div>
        <span className="status-pill ghost">In progress</span>
      </div>
      <div className="stepper">
        {steps.map((s, i) => (
          <div className="step-seg" key={s.lbl}>
            <div className="step-dot">
              <span className={`dot ${s.state}`}>
                {s.state === "done" ? "✓" : i + 1}
              </span>
              <span className="s-lbl">{s.lbl}</span>
            </div>
            {i < steps.length - 1 && (
              <span className={`step-line${s.state === "done" ? " done" : ""}`} />
            )}
          </div>
        ))}
      </div>
      <div>
        <div className="mock-row">
          <span className="mock-site">Guest post · Technology niche</span>
          <span className="status-pill ghost">In approval</span>
        </div>
        <div className="mock-row">
          <span className="mock-site">Niche edit · Business niche</span>
          <span className="status-pill">Live</span>
        </div>
      </div>
    </div>
  );
}

/** Upward line chart with draw-in animation (illustrative). */
function LineChart() {
  return (
    <svg
      className="linechart"
      viewBox="0 0 340 150"
      role="img"
      aria-label="Upward growth line chart, illustrative"
    >
      <line x1="4" y1="40" x2="336" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="4" y1="75" x2="336" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="4" y1="110" x2="336" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <path
        className="chart-area"
        d="M4,118 C40,110 55,96 85,98 C115,100 130,74 165,70 C200,66 215,80 245,52 C275,26 305,22 336,12 L336,140 L4,140 Z"
        fill="rgba(0,179,65,0.14)"
      />
      <path
        className="chart-line"
        d="M4,118 C40,110 55,96 85,98 C115,100 130,74 165,70 C200,66 215,80 245,52 C275,26 305,22 336,12"
        fill="none"
        stroke="#00b341"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={1}
      />
      <circle className="chart-dot" cx="336" cy="12" r="4.5" fill="#00b341" />
      <text x="4" y="149" className="chart-axis">
        Start
      </text>
      <text x="308" y="149" className="chart-axis">
        Today
      </text>
    </svg>
  );
}

/** Wide showcase panel for By The Numbers: report table + growth chart. */
export function ShowcasePanel() {
  return (
    <div className="mock-panel showcase">
      <PanelHead
        title="Live-Link Report"
        sub="The report every client receives on delivery"
      />
      <div className="showcase-body">
        <div className="showcase-table">
          <ReportRows rows={showcaseRows} />
        </div>
        <div className="chart-box showcase-chart">
          <div className="chart-title">Organic growth</div>
          <LineChart />
          <p className="chart-caption">
            Illustrative curve. Real growth depends on your site, your niche
            and the plan we agree together.
          </p>
        </div>
      </div>
      <p className="mock-note">
        Sample layout. Your report lists your real placements, pages, anchor
        text and dates.
      </p>
    </div>
  );
}
