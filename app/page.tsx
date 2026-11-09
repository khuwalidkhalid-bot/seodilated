import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";

const whyUs = [
  {
    title: "Manual outreach only",
    text: "Every placement is earned through real outreach to real website owners. No link farms, no PBNs, no automated spam — the kind of links that last.",
  },
  {
    title: "Real, established websites",
    text: "Guest posts are placed on genuine sites with real content and real audiences in your niche, reviewed before your article ever goes live.",
  },
  {
    title: "Honest review before you pay",
    text: "We review your site first and tell you plainly what will help and what will not. If a service is not a good fit for your site, we will say so.",
  },
  {
    title: "Full live-link reporting",
    text: "You receive a complete report with the live URL of every placement, so you can verify each link yourself. No hidden work, no vague summaries.",
  },
];

const steps = [
  {
    num: "01",
    title: "Review",
    text: "We look at your website, your niche and your current link profile, and give you an honest assessment of what you actually need.",
  },
  {
    num: "02",
    title: "Plan",
    text: "You get a clear plan: which services, which types of sites, and what it will cost. No pressure, no inflated promises.",
  },
  {
    num: "03",
    title: "Execute",
    text: "Our team handles outreach, content and placement — guest posts written for your niche and published on relevant, real websites.",
  },
  {
    num: "04",
    title: "Report",
    text: "You receive a full report with every live link, so you can check each placement yourself and track progress over time.",
  },
];

const faqs = [
  {
    q: "What does SEODilated actually do?",
    a: "We are an SEO agency focused on off-page SEO: guest posting, link building and niche edits, alongside on-page and technical SEO services, answer engine optimisation (AEO), ecommerce management, web development and content writing. If it helps your site get found and trusted, it is probably in our service list.",
  },
  {
    q: "Do you guarantee first-page rankings?",
    a: "No — and you should be careful with any agency that does. Rankings depend on your niche, your competition and your site as a whole. What we guarantee is the work itself: real placements on real websites, delivered as agreed and reported with live links you can verify.",
  },
  {
    q: "What kind of websites do you place guest posts on?",
    a: "Real, established websites with genuine content and audiences, matched to your niche. We work from a vetted list of publishers and check each site before placing your content — no link farms or automated networks.",
  },
  {
    q: "How will I know what was delivered?",
    a: "Every order comes with a full live-link report: the exact URLs where your content and links were published. You can open each one and check it yourself, at any time.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just your website URL and a short message about your goals. We will review your site honestly first — if we do not think a service will help you, we will tell you before you spend anything.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="hero-badge">SEO · Guest Posts · Link Building</span>
          <h1>
            Grow your search visibility with{" "}
            <span className="accent">links that actually count.</span>
          </h1>
          <p className="lead">
            SEODilated is a specialist SEO agency for guest posts, manual link
            building and search visibility. Real websites, honest advice, and a
            full live-link report on every single order.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Get a Free Site Review
            </Link>
            <Link href="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What we do</h2>
            <p>
              Focused SEO services, delivered by a specialist and his team —
              from guest posts and link building to full search visibility
              work.
            </p>
          </div>
          <ServicesGrid limit={6} />
          <div style={{ marginTop: 34 }}>
            <Link href="/services" className="btn btn-outline">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Why choose SEODilated</h2>
            <p>
              Plenty of sellers will sell you links. Here is how we work
              differently.
            </p>
          </div>
          <div className="grid grid-2">
            {whyUs.map((item) => (
              <div className="card" key={item.title}>
                <div className="icon">✓</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How it works</h2>
            <p>A simple, transparent process from first message to final report.</p>
          </div>
          <div className="grid grid-4">
            {steps.map((s) => (
              <div className="card" key={s.num}>
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
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

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Not sure what your site needs?</h2>
            <p>
              Send us your website and we will review it honestly — and tell you
              exactly what we would do, before you spend anything.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
