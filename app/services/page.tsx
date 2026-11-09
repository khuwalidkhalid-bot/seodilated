import type { Metadata } from "next";
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | SEODilated",
  description:
    "Guest posts, niche edits, press releases and managed link building from SEODilated. Vetted publishers, manual outreach, pay per placement, full live-link reporting.",
};

const chips = [
  "Vetted publishers",
  "Manual outreach",
  "Human-written content",
  "Live-link report",
  "60-day replacement",
  "Direct specialist contact",
];

const placementTypes = [
  {
    title: "Guest Posts",
    text: "A full article written around your niche and published on a real website, with your link placed naturally inside the content. The backbone of most campaigns, and the placement we recommend most often.",
  },
  {
    title: "Niche Edits",
    text: "Your link placed into an existing, already published article that is relevant to your niche. The page already has history and context, so edits are often the fastest way to add a quality link.",
  },
  {
    title: "Press Releases",
    text: "Your news written up properly and distributed as a press release, building brand mentions and links across news-style websites. Best for launches, announcements and brand visibility.",
  },
];

const tiers = [
  {
    title: "General",
    points: ["Niche and topic relevance", "Country and language", "Link type and placement", "New post or existing page"],
  },
  {
    title: "Metrics",
    points: ["Ahrefs DR", "Moz DA", "Organic traffic", "Referring domains"],
  },
  {
    title: "Quality",
    points: ["Manual editorial review", "Real traffic check", "No link farms or networks", "Site history checked"],
  },
];

const pricingPoints = [
  {
    title: "No subscription",
    text: "There is no monthly fee for access and no setup charge. You only ever pay for placements you have approved.",
  },
  {
    title: "No minimum order",
    text: "One guest post or a full monthly program, the process is the same. Start small, check the report, then scale.",
  },
  {
    title: "Quote before you pay",
    text: "Every placement is priced per site and quoted in full before work starts. The figure you approve is the figure you pay.",
  },
];

const steps = [
  {
    num: "1",
    title: "Share your site and goals",
    text: "Send your URL, your niche and what you want the links to do. We review your site and your current link profile free of charge.",
  },
  {
    num: "2",
    title: "We match and quote",
    text: "We match vetted publishers to your site by relevance and authority, then send a clear per-placement quote for your approval.",
  },
  {
    num: "3",
    title: "Content and placement",
    text: "Content is written or checked, outreach is handled by our team, and your link goes live inside a relevant article.",
  },
  {
    num: "4",
    title: "Live-link report",
    text: "You receive the exact URL of every placement to verify yourself. Every link is covered by our free 60-day replacement.",
  },
];

const faqs = [
  {
    q: "Can I buy guest posts directly?",
    a: "Yes. Tell us your niche, your target pages and the kind of sites you want, and we will match vetted publishers to your brief and quote each placement individually. You approve every site before anything is placed.",
  },
  {
    q: "Is there a subscription or a minimum order?",
    a: "No. There is no subscription, no setup fee and no minimum order. You pay per placement, whether that is a single guest post or an ongoing monthly program.",
  },
  {
    q: "Who writes the content?",
    a: "Our team writes it, by hand, matched to the publisher's guidelines and your brand voice. If you already have content or your own writer, you can supply the article instead and we will check it against the publisher's rules before placing it.",
  },
  {
    q: "How long does a placement take?",
    a: "It depends on the publisher, because real editorial sites work to their own schedules. Before you pay, we agree a realistic delivery window for your exact order and keep you updated while it runs.",
  },
  {
    q: "What do I receive when the work is done?",
    a: "A full live-link report with the exact URL of every placement, the page it sits on and the anchor text used. You can open and verify every link yourself, at any time.",
  },
  {
    q: "What happens if a link drops?",
    a: "If a placement is removed or drops within 60 days of delivery, tell us and we will work to restore it or replace it free with a comparable placement. The risk sits with us, not with you.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Link Building Services</span>
          <h1>Every placement, run as one workflow.</h1>
          <p>
            Sourcing, content, outreach, placement and reporting are usually
            scattered across sellers and spreadsheets. Here they sit in one
            service, run by one team, with every link reported back to you.
          </p>
          <div className="chips">
            {chips.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Our services</h2>
            <p>
              Eight specialist services, from guest posts and link building to
              the website itself. Prices are quoted per placement, so use the
              Contact for price button on any service and we will come back
              with an honest quote.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Placement types */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Placement Types</span>
            <h2>Three ways a link gets placed.</h2>
            <p>
              Most campaigns mix all three. We will tell you honestly which
              mix fits your site and your goals.
            </p>
          </div>
          <div className="grid grid-3">
            {placementTypes.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matching criteria */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Site Matching</span>
            <h2>Matched to your site, not picked from a pile.</h2>
            <p>
              Every publisher we propose is checked against three tiers of
              criteria before it reaches your quote.
            </p>
          </div>
          <div className="grid grid-3">
            {tiers.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <ul className="option-list">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content production */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Content Production</span>
            <h2>A placement is only as good as the article carrying it.</h2>
            <p>
              Weak content gets rejected by good publishers and ignored by
              readers. Two ways to handle it, both human.
            </p>
          </div>
          <div className="options-grid">
            <div className="option-card featured">
              <div className="opt-kicker">Written For You</div>
              <h3>Our team writes it.</h3>
              <ul className="option-list">
                <li>Written by hand, never spun or bulk generated</li>
                <li>Matched to each publisher's editorial guidelines</li>
                <li>Your anchor text and target page agreed first</li>
                <li>Aligned with your brand voice and tone</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Contact for price
              </Link>
            </div>
            <div className="option-card">
              <div className="opt-kicker">Bring Your Own</div>
              <h3>You supply the article.</h3>
              <ul className="option-list">
                <li>Send your own copy or use your own writer</li>
                <li>We check it against the publisher's rules first</li>
                <li>Honest feedback if it needs changes to pass</li>
                <li>Placement and reporting handled exactly the same</li>
              </ul>
              <Link href="/contact" className="btn btn-outline">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing model */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <h2>Pay per placement. Nothing else.</h2>
            <p>
              Link prices vary by site, niche and authority, so we do not
              publish a flat rate that would mislead you. The model itself is
              fixed and simple.
            </p>
          </div>
          <div className="grid grid-3">
            {pricingPoints.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Four steps from enquiry to live link.</h2>
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

      {/* Managed band */}
      <section className="section slim">
        <div className="container">
          <div className="cta-band">
            <h2>Interested in a managed approach?</h2>
            <p>
              If you would rather not run placements yourself, our managed
              service takes over strategy, sourcing, content and reporting,
              and runs your campaign month to month.
            </p>
            <Link href="/managed-link-building" className="btn btn-primary">
              Explore Managed Link Building
            </Link>
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
            <h2>Ready when you are.</h2>
            <p>
              Send us your site and your goals. The first review is free, the
              quote is itemised per placement, and nothing starts until you
              approve it.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get My Free Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
