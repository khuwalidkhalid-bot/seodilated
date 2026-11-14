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
  title: "Link Building Services",
  description:
    "Manual link building services from SEODilated: guest posts, niche edits and authority links on real, vetted websites. Full live-link report and free 60-day replacement on every placement.",
  path: "/link-building",
});

const stats = [
  { num: "7+", lbl: "Years Experience" },
  { num: "15+", lbl: "Niches Covered" },
  { num: "60-Day", lbl: "Link Replacement" },
  { num: "100%", lbl: "Manual Outreach" },
];

const types = [
  {
    title: "Guest Posts",
    text: "A full, human-written article published on a real website in your niche, with your link placed naturally inside the content. The most natural and scalable way to build authority.",
    href: "/guest-posts",
    cta: "Explore Guest Posts",
  },
  {
    title: "Niche Edits",
    text: "Your link placed into an existing, already indexed article that is relevant to your niche. The page already has history, context and traffic, so edits add authority fast.",
    href: "/contact?service=Link%20Building",
    cta: "Ask about niche edits",
  },
  {
    title: "Managed Link Building",
    text: "Strategy, sourcing, content, placement and reporting run end to end by our team every month. You approve the plan, we handle the publisher chaos.",
    href: "/managed-link-building",
    cta: "See Managed Service",
  },
];

const checks = [
  {
    title: "Real organic traffic",
    text: "Every site is checked for genuine search traffic and a real readership. Sites that exist only to sell links are excluded, however strong the metrics look.",
  },
  {
    title: "Authority that holds up",
    text: "DR, DA, referring domains and traffic trends are checked together. No single metric decides, and nothing below your agreed threshold is ever proposed.",
  },
  {
    title: "Niche relevance first",
    text: "Category fit is the baseline, not a bonus. A finance site does not get lifestyle placements, and a local business does not get random global links.",
  },
  {
    title: "Editorial quality",
    text: "Real content, real authors and a site that is actively maintained. No link farms, no spun networks, no private blog networks.",
  },
  {
    title: "Link profile safety",
    text: "Anchor text, velocity and your existing profile are reviewed before placement, so new links strengthen you instead of creating a pattern that looks forced.",
  },
  {
    title: "Manual review, every time",
    text: "A person reviews every site by hand before it reaches your quote. Lists are not copied from a spreadsheet and sent on trust.",
  },
];

const included = [
  { title: "Free site and link profile review", text: "We review your site, your current links and your competitors before quoting, and tell you honestly what you need and what you do not." },
  { title: "Publisher sourcing and vetting", text: "Sites matched from our vetted network across 15+ niches, plus fresh manual outreach when your niche needs something specific." },
  { title: "Human-written content included", text: "Articles written by hand for each publisher, matched to their guidelines and your brand voice. Your own content is welcome too." },
  { title: "Placement and publisher handling", text: "Negotiation, follow-ups, editorial back and forth and go-live confirmation are all handled by our team." },
  { title: "Full live-link report", text: "The exact URL, host page and anchor text of every placement, so you can open and verify each link yourself." },
  { title: "Free 60-day replacement", text: "If a link drops or is removed within 60 days and cannot be restored with the publisher, we replace it free with a comparable placement." },
];

const steps = [
  { num: "1", title: "Review and strategy", text: "Share your site and goals. We review your link profile, research your niche and agree authority ranges, niches and anchor approach with you." },
  { num: "2", title: "Site matching and quote", text: "We match vetted publishers to your brief and send a clear, per-placement quote. You approve every site before anything is placed." },
  { num: "3", title: "Content and outreach", text: "Content is written or checked, outreach is handled manually, and your link is placed inside a relevant article on the approved site." },
  { num: "4", title: "Report and protect", text: "You receive the full live-link report. Every link is verified after go-live and covered by the 60-day replacement promise." },
];

const faqs = [
  {
    q: "What is link building and why does my site need it?",
    a: "Link building is earning links from other websites to yours. Search engines treat those links as evidence that your site is trusted and worth ranking. Without them, even well-written pages struggle to outrank competitors who have stronger authority. The work is not about volume, it is about relevant links from real sites.",
  },
  {
    q: "Are your links dofollow?",
    a: "Most placements are dofollow, and that is what we aim for on every order. Some quality publishers only allow nofollow or sponsored attributes as a matter of policy. Where that is the case, we tell you before the link goes live, so there are no surprises in your report.",
  },
  {
    q: "How much does link building cost?",
    a: "Prices vary by site, niche and authority, so we do not publish a flat rate that would mislead you. Every placement is quoted per site before work starts, you approve the price first, and there is no subscription, no setup fee and no minimum order.",
  },
  {
    q: "How many links do I need per month?",
    a: "That depends on your niche, your competitors and your current profile, which is exactly what the free review answers. Some sites need a handful of strong placements, others need a steady monthly program. We will give you an honest range, not the biggest number we can sell.",
  },
  {
    q: "Is this safe for my site?",
    a: "The process is built around safety: manual outreach only, real websites with real traffic, niche relevance, sensible anchors and natural pacing. We do not use automation, link farms or networks, and we will flag it honestly if your existing profile has risky links that need attention first.",
  },
  {
    q: "What happens if a link is removed?",
    a: "Tell us within 60 days of delivery. We try to restore it with the publisher first, and if it cannot be restored, we replace it free with a comparable placement. The risk sits with us, not with you.",
  },
];

export default function LinkBuildingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Link Building Services",
            description:
              "Manual link building services from SEODilated: guest posts, niche edits and authority links on real, vetted websites. Full live-link report and free 60-day replacement on every placement.",
            path: "/link-building",
            serviceType: "Link Building",
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Link Building", path: "/link-building" },
          ]),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Link Building Services</span>
          <h1>Link building on real websites, done manually.</h1>
          <p>
            Guest posts and niche edits placed through genuine outreach on
            vetted, high-authority websites. Every site is checked by hand,
            every link is reported live, and every placement is covered for
            60 days.
          </p>
          <div className="chips">
            {["Manual outreach only", "Real traffic checked", "Full live-link report", "60-day replacement"].map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
          <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact?service=Link%20Building" className="btn btn-primary">Contact for price</Link>
            <Link href="/guest-posts" className="btn btn-outline">Guest Posts</Link>
          </div>
        </div>
      </section>

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

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Link Types</span>
            <h2>Three ways we build your links.</h2>
            <p>Most campaigns mix guest posts and niche edits. If you want it fully handled, the managed service runs the whole program for you.</p>
          </div>
          <div className="grid grid-3">
            {types.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <Link href={t.href} className="learn-more">{t.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Quality Checks</span>
            <h2>Checked before placement. Covered after it.</h2>
            <p>A link is only worth buying if the site behind it is real. These six checks run on every publisher before it is ever proposed to you.</p>
          </div>
          <div className="grid grid-3">
            {checks.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Is Included</span>
            <h2>Everything inside a link building order.</h2>
            <p>No stripped-back version and no upsell ladder. This is the full scope, agreed with you before work starts.</p>
          </div>
          <ul className="check-list">
            {included.map((item) => (
              <li className="check-item" key={item.title}>
                <span className="check-icon">✓</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Four steps, brief to live link.</h2>
          </div>
          <div className="grid grid-4">
            {steps.map((s) => (
              <div className="card" key={s.num}>
                <div className="step-circle">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Keep Exploring</span>
            <h2>Related services.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3><Link href="/guest-posts">Guest Posts</Link></h3>
              <p>Full articles written and published on real sites in your niche, with your link placed naturally inside the content.</p>
            </div>
            <div className="card">
              <h3><Link href="/aeo">AEO</Link></h3>
              <p>Answer Engine Optimization: be the source AI assistants and answer boxes quote, not just a blue link below them.</p>
            </div>
            <div className="card">
              <h3><Link href="/managed-link-building">Managed Link Building</Link></h3>
              <p>Hand the whole campaign to our team: strategy, sourcing, content, placement, monitoring and monthly reviews.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Asked about link building.</h2>
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

      <section className="section slim">
        <div className="container">
          <div className="cta-band">
            <h2>Start with a free, honest review.</h2>
            <p>Send us your site and your goals. We will review your link profile, tell you plainly what would help, and quote per placement before anything starts.</p>
            <Link href="/contact?service=Link%20Building" className="btn btn-primary">Get My Free Review</Link>
          </div>
        </div>
      </section>
    </>
  );
}
