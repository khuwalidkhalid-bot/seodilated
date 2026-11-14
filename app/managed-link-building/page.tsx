import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  pageMetadata,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Managed Link Building",
  description:
    "A dedicated team runs your link building end to end: strategy, publisher sourcing, content, placement, monitoring and free 60-day replacement. Pay per placement, no retainer.",
  path: "/managed-link-building",
});

function Glyph({
  d,
  circles,
}: {
  d: string[];
  circles?: { cx: number; cy: number; r: number }[];
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {circles?.map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
      ))}
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const stats = [
  { num: "7+", lbl: "Years Experience" },
  { num: "8", lbl: "Specialist Services" },
  { num: "60-Day", lbl: "Link Replacement" },
  { num: "100%", lbl: "Manual Outreach" },
];

const risks = [
  {
    title: "Publisher chaos",
    text: "Sourcing, vetting, negotiating and chasing editors takes hours for every single placement, and the follow-ups never stop. On a managed campaign, all of that sits with us.",
  },
  {
    title: "Budget at risk",
    text: "Links get rejected mid-placement or removed after going live, and the money is already spent. We work to fix problems first, and any link that cannot be restored inside 60 days is replaced free.",
  },
  {
    title: "Quality variance",
    text: "Plenty of sites look strong on a metrics screenshot and carry no real traffic or readership. Manual checks on every site, before it is proposed, remove the guesswork.",
  },
  {
    title: "Time drain",
    text: "Running outreach alongside your actual job means campaigns stall for weeks at a time. A managed campaign keeps moving every week, whether you are watching it or not.",
  },
  {
    title: "Scaling friction",
    text: "One freelancer or a small in-house effort caps out quickly. Our team scales from a handful of placements to a monthly program without the work changing hands.",
  },
];

const serviceItems = [
  {
    title: "Strategy",
    text: "Your goals, niche, authority thresholds and schedule, agreed with you before the first placement and revisited at every monthly review.",
    icon: <Glyph d={["M12 3v3", "M12 18v3", "M3 12h3", "M18 12h3"]} circles={[{ cx: 12, cy: 12, r: 3.5 }]} />,
  },
  {
    title: "Publisher sourcing",
    text: "Sites matched from our vetted network across 15+ niches, plus fresh manual outreach when your niche needs it. You never chase a publisher.",
    icon: (
      <Glyph
        circles={[
          { cx: 5, cy: 12, r: 2.5 },
          { cx: 19, cy: 6, r: 2.5 },
          { cx: 19, cy: 18, r: 2.5 },
        ]}
        d={["M7.3 10.8 16.7 7.2", "M7.3 13.2l9.4 3.6"]}
      />
    ),
  },
  {
    title: "Content production",
    text: "Human-written articles matched to each publisher's guidelines and your brand voice. Editorial back and forth is handled by us, not dumped on you.",
    icon: <Glyph d={["M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z"]} />,
  },
  {
    title: "Placement & ordering",
    text: "Brief to live link, managed step by step. Publisher communication, negotiation and follow-ups are absorbed by our team.",
    icon: <Glyph d={["M12 3l9 5-9 5-9-5 9-5z", "M3 13l9 5 9-5"]} />,
  },
  {
    title: "Monitoring",
    text: "Every delivered link is verified and recorded in your live-link report, so you can check each placement yourself, at any time.",
    icon: (
      <Glyph
        circles={[{ cx: 12, cy: 12, r: 3 }]}
        d={["M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"]}
      />
    ),
  },
  {
    title: "Replacement",
    text: "If a placement drops or is removed within 60 days, we work to restore it, or replace it with a comparable one at no cost to you.",
    icon: <Glyph d={["M20 12a8 8 0 1 1-2.3-5.6", "M20 3v4h-4"]} />,
  },
];

const startSteps = [
  {
    num: "1",
    title: "Discovery chat",
    text: "A short conversation about your site, your niche and your goals. No brief required; we build one with you.",
  },
  {
    num: "2",
    title: "Campaign plan",
    text: "Authority ranges, target niches, content angle and schedule, set out in a clear written plan for your approval.",
  },
  {
    num: "3",
    title: "Setup",
    text: "Target pages, anchor approach and your preferred level of involvement agreed, so the campaign fits how you already work.",
  },
  {
    num: "4",
    title: "Execution",
    text: "Sourcing, content, outreach and placement run continuously, with honest progress updates while the work is live.",
  },
  {
    num: "5",
    title: "Monthly review",
    text: "Results checked against the plan every month, in plain language, and the next month adjusted with you.",
  },
];

const included = [
  {
    title: "Account & Strategy",
    points: [
      "A dedicated specialist on your campaign",
      "Campaign plan agreed before placement",
      "Monthly review against your goals",
      "Hands-on, collaborative or hands-off, your choice",
    ],
  },
  {
    title: "Publisher Sourcing",
    points: [
      "Matching from a vetted network, 15+ niches",
      "Fresh outreach beyond the network when needed",
      "Every site checked by hand before proposal",
      "Publisher relationships managed for you",
    ],
  },
  {
    title: "Content",
    points: [
      "Human-written articles, never spun",
      "Matched to each publisher's guidelines",
      "Aligned with your brand voice",
      "Your own content or writer welcome",
    ],
  },
  {
    title: "Placement & Ordering",
    points: [
      "End-to-end order handling",
      "All publisher communication absorbed",
      "Anchors and targets agreed with you",
      "Go-live confirmed on every placement",
    ],
  },
  {
    title: "Monitoring & Protection",
    points: [
      "Every link verified after go-live",
      "Full live-link report you can check yourself",
      "Link attribute checked on every placement",
      "Problems flagged to us, not left with you",
    ],
  },
  {
    title: "Replacement & Reporting",
    points: [
      "Publisher resolution attempted first",
      "Free replacement within 60 days",
      "Monthly summary in plain language",
      "Honest advice when something is not working",
    ],
  },
];

const modelTiles = [
  {
    title: "Pay per placement",
    text: "No retainer and no management fee stacked on top. You approve the sites and the per-placement prices before anything is placed, and your budget goes into live links.",
  },
  {
    title: "Free 60-day replacement",
    text: "Every link is covered. If a placement drops inside 60 days and cannot be restored with the publisher, a comparable replacement is placed at no cost.",
  },
  {
    title: "Scales with you",
    text: "Start with a few placements or run a full monthly program. It is the same team, the same standards and the same reporting at either size.",
  },
];

const protection = [
  {
    title: "Manual selection",
    text: "Every site is reviewed by a person against your criteria before it is ever proposed to you.",
  },
  {
    title: "Real organic traffic",
    text: "Sites with no genuine search presence are excluded, however impressive the headline metrics look.",
  },
  {
    title: "Authority thresholds",
    text: "DR and DA are checked against the ranges agreed in your plan, and nothing below them is placed.",
  },
  {
    title: "Niche relevance",
    text: "Category fit is the baseline, not a bonus. A finance campaign does not get lifestyle placements.",
  },
  {
    title: "Editorial quality",
    text: "Real content and real readership. No link farms, no spun networks, no sites that exist only to sell links.",
  },
  {
    title: "Replacement cover",
    text: "Resolution with the publisher first; if that fails inside the 60-day window, a free like-for-like replacement.",
  },
];

const faqs = [
  {
    q: "What is a managed link building service?",
    a: "It means a dedicated team runs your link building for you: strategy, publisher selection, content, placement, monitoring and replacement. You set the goals and the budget; the operational work, and the publisher friction that comes with it, sits with the team.",
  },
  {
    q: "How is this different from ordering single placements?",
    a: "Single placements are one-off orders you direct yourself. A managed campaign is continuous: we plan the month with you, source and place links every week, report as we go, and review progress monthly. The websites, the team and the standards are the same either way.",
  },
  {
    q: "Is there a monthly minimum or a retainer?",
    a: "No. There is no retainer and no management fee. Monthly programs are sized to your goals and priced per placement, agreed in your campaign plan before the month starts. You can pause or stop at the end of any month.",
  },
  {
    q: "Who runs my campaign day to day?",
    a: "Khuwalid Khalid, the founder, leads strategy and is your direct contact throughout. Behind him, the team handles publisher sourcing, content writing and placement, so one campaign gets specialist attention at every layer.",
  },
  {
    q: "Do I stay in control of the strategy?",
    a: "Yes. Goals, niches, authority thresholds and budget are set with you in the campaign plan, and nothing is placed outside it. If you want to approve every site before placement, we build that in. If you would rather be hands-off, the monthly review keeps you informed.",
  },
  {
    q: "What happens if a link is rejected or removed?",
    a: "We act on it, and you are never the one chasing the publisher. Resolution with the publisher is attempted first and usually works. If a link cannot be restored within 60 days of delivery, we replace it free with a comparable placement.",
  },
];

export default function ManagedPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Managed Link Building",
            description:
              "A dedicated team runs your link building end to end: strategy, publisher sourcing, content, placement, monitoring and free 60-day replacement. Pay per placement, no retainer.",
            path: "/managed-link-building",
            serviceType: "Managed Link Building",
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Managed Link Building", path: "/managed-link-building" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Managed Link Building</span>
          <h1>Your link building team, without hiring one.</h1>
          <p>
            Strategy, sourcing, content, placement, monitoring and
            replacement, run end to end by a specialist team. You set the
            goals and approve the plan; the publisher chaos stays on our
            side.
          </p>
          <div style={{ marginTop: 30 }}>
            <Link href="/contact" className="btn btn-primary">
              Book a Discovery Chat
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section slim">
        <div className="container">
          <div className="stat-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why managed exists */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Managed Exists</span>
            <h2>The five headaches this service takes off your plate.</h2>
            <p>
              Link building is easy to start and hard to run well. These are
              the operational problems that land on anyone doing it
              themselves, and what a managed campaign absorbs.
            </p>
          </div>
          <div className="grid grid-3">
            {risks.map((r) => (
              <div className="card" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The service */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The Service</span>
            <h2>Every layer of the campaign, covered.</h2>
            <p>
              Not an agency layer over someone else's work. One team runs
              every operational layer between your brief and a live,
              verified link.
            </p>
          </div>
          <div className="grid grid-3">
            {serviceItems.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we start */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How We Start</span>
            <h2>Built with you, not handed to you.</h2>
            <p>
              Every managed engagement begins with a conversation, not a
              pitch. We map your situation together and design the campaign
              around it.
            </p>
          </div>
          <div className="grid grid-3">
            {startSteps.map((s) => (
              <div className="card" key={s.num}>
                <div className="step-circle">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What&apos;s Included</span>
            <h2>Every operational layer. One scope.</h2>
            <p>
              Included at every level, from a first month to a long-running
              program. No surcharges for the parts that make it work.
            </p>
          </div>
          <div className="grid grid-3">
            {included.map((g) => (
              <div className="card" key={g.title}>
                <h3>{g.title}</h3>
                <ul className="option-list">
                  {g.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The model */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The Model</span>
            <h2>Your budget is your link budget.</h2>
            <p>
              Three tiles are the whole pricing model. Everything else is
              detail we agree in your plan.
            </p>
          </div>
          <div className="grid grid-3">
            {modelTiles.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget protection */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How We Protect Your Budget</span>
            <h2>Checked before placement. Covered after it.</h2>
            <p>
              Two layers of defence on every placement: strict checks before
              a link is made, and a replacement promise after it goes live.
            </p>
          </div>
          <div className="grid grid-3">
            {protection.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Direct answers, before you ask.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section slim">
        <div className="container">
          <div className="cta-band">
            <h2>Start with a conversation, not a contract.</h2>
            <p>
              Tell us about your site, your niche and where you want to be.
              You will leave the first chat with a clear sense of what a
              campaign would look like, whether you start with us or not.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Discovery Chat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
