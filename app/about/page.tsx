import type { Metadata } from "next";
import Link from "next/link";
import AboutText from "@/components/AboutText";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "About | SEODilated",
  description:
    "SEODilated is led by Khuwalid Khalid, an SEO specialist with 7 years of experience. Manual outreach, honest advice, and link building you can verify link by link.",
};

const problems = [
  {
    title: "Publishers you could not trust",
    text: "Last-minute editorial changes, follow-ups that stalled for weeks, and placements that were promised but never went live.",
  },
  {
    title: "Quality you could not verify",
    text: "Sites that looked authoritative on a screenshot but carried no real traffic, no real readers and no real editorial standards.",
  },
  {
    title: "No ownership when links dropped",
    text: "A link removed a month after delivery became your problem, even though the budget for it was already gone.",
  },
  {
    title: "Support that ended at the invoice",
    text: "Plenty of sellers are responsive right up until payment clears. After that, questions went into a void.",
  },
  {
    title: "Lists sold as strategy",
    text: "A spreadsheet of websites is not a campaign. Fit, relevance and sequencing were missing, and the results showed it.",
  },
];

const built = [
  {
    title: "One service, two ways to use it",
    text: "Order single placements when you need them, or hand the whole campaign to the managed team. Same vetted network, same standards, your choice.",
  },
  {
    title: "Built to scale",
    text: "A single guest post and a monthly program run through the exact same process. Volume can grow without the quality dropping or the work changing hands.",
  },
  {
    title: "Manually vetted, by design",
    text: "Every publisher is checked by a person, content is written by humans, and every placement is priced and agreed before work starts. Standards held, not advertised.",
  },
  {
    title: "Real support, from a named person",
    text: "You talk directly to the specialist running your work, and every link delivered is covered by our free 60-day replacement. Service that continues after the invoice.",
  },
];

const principles = [
  {
    num: "1",
    title: "We absorb the friction",
    text: "Publisher chasing, negotiation and follow-ups are the slow, messy part of link building. That work stays on our side, so your side stays simple.",
    motto: "You get the links. We take the legwork.",
  },
  {
    num: "2",
    title: "Manual beats automated",
    text: "Every placement starts with a real conversation with a real editor. No bulk tools, no spun content, no networks dressed up as outreach.",
    motto: "Real outreach, real editors, real sites.",
  },
  {
    num: "3",
    title: "Honesty before payment",
    text: "Every engagement starts with a review of your site. If a service will not help you, you hear that from us before you spend anything, not after.",
    motto: "If it will not help, we tell you first.",
  },
  {
    num: "4",
    title: "Proof over promises",
    text: "Rankings cannot be promised honestly, so we do not promise them. What we guarantee is the work itself: placed, reported and open to your own checking.",
    motto: "Every link reported. Every link checkable.",
  },
  {
    num: "5",
    title: "Stand behind the work",
    text: "A placement is not finished when it goes live. If it drops within 60 days, we restore it or replace it free. The risk sits with us.",
    motto: "If a link drops, we put it right.",
  },
];

const stats = [
  { num: "7+", lbl: "Years Experience" },
  { num: "8", lbl: "Specialist Services" },
  { num: "60-Day", lbl: "Link Replacement" },
  { num: "100%", lbl: "Manual Outreach" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About SEODilated</span>
          <h1>Link building for businesses that check the work.</h1>
          <div style={{ maxWidth: 680 }}>
            <AboutText />
          </div>
        </div>
      </section>

      {/* Why SEODilated exists */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why SEODilated Exists</span>
            <h2>Link building was not built for careful buyers.</h2>
            <p>
              Five failure points anyone who has bought links seriously has
              run into. They are what SEODilated was set up to remove.
            </p>
          </div>
          <div className="grid grid-3">
            {problems.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we built */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Built</span>
            <h2>So we built the alternative.</h2>
            <p>
              One service that owns the hard parts of link building end to
              end, run by people who hold the standard on every order.
            </p>
          </div>
          <div className="grid grid-2">
            {built.map((b) => (
              <div className="card" key={b.title}>
                <div className="icon">✓</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Believe</span>
            <h2>Five principles behind everything we deliver.</h2>
          </div>
          <div className="grid grid-3">
            {principles.map((p) => (
              <div className="card" key={p.num}>
                <div className="step-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <p className="motto">&ldquo;{p.motto}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (DB-driven) */}
      <TeamSection />

      {/* By the numbers */}
      <section className="section slim">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">By The Numbers</span>
            <h2>The short version.</h2>
          </div>
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

      {/* Final CTA */}
      <section className="section slim">
        <div className="container">
          <div className="cta-band">
            <h2>See what we built.</h2>
            <p>
              Browse the services, look at the managed option, or talk to us
              about your campaign. Either way, it starts with a free and
              honest review of your site.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
