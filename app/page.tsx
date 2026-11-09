import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";

const stats = [
  { num: "7+", lbl: "Years Experience" },
  { num: "8", lbl: "Specialist Services" },
  { num: "60-Day", lbl: "Link Replacement" },
  { num: "100%", lbl: "Manual Outreach" },
];

const whyUs = [
  {
    title: "Real, high-authority websites",
    text: "Your links are placed on genuine, established websites with real content and real readers, not on networks built purely to sell links. Each site is checked before your content goes anywhere near it.",
  },
  {
    title: "Manual outreach only",
    text: "Every placement is earned by contacting real website owners and editors directly. No automation tools, no bulk spam and no shortcuts that could put your site at risk.",
  },
  {
    title: "Verified link by link",
    text: "We check every placement ourselves before it reaches your report, so what you are told you received is exactly what is live on the page.",
  },
  {
    title: "An honest review before you pay",
    text: "We look at your site first and tell you plainly what will help and what will not. If a service is a poor fit for your goals, we say so before you spend anything.",
  },
  {
    title: "Niche-relevant placements",
    text: "Links come from websites in or close to your niche, placed inside relevant articles, so they read naturally to visitors and make sense to search engines.",
  },
  {
    title: "Free 60-day link replacement",
    text: "If a placement drops or is removed within 60 days of delivery, we replace it with a comparable one at no cost to you. Your order keeps its value.",
  },
];

const deliverables = [
  {
    title: "Full live-link report",
    text: "The exact URL of every placement, delivered in one report you can open and check yourself at any time.",
  },
  {
    title: "Anchor text control",
    text: "You choose or approve the anchor text for your links, kept natural, varied and relevant to the page it points to.",
  },
  {
    title: "Niche-relevant placement",
    text: "Every link sits inside relevant content on a website that genuinely fits your subject area.",
  },
  {
    title: "Dofollow where the site allows",
    text: "We aim for dofollow links on every order. If a site only allows another attribute, you know before it goes live.",
  },
  {
    title: "Progress updates",
    text: "You hear from us while the order runs, with honest updates on outreach and placements, not just at the end.",
  },
  {
    title: "60-day replacement guarantee",
    text: "Any link that drops or is removed within 60 days of delivery is replaced free of charge.",
  },
];

const steps = [
  {
    num: "01",
    title: "Share your site and goals",
    text: "Send us your website URL, your niche and what you want to achieve, whether that is stronger authority, support for a key page or better visibility overall. A short message is enough to start.",
  },
  {
    num: "02",
    title: "Honest review and site matching",
    text: "We review your site and its current link profile, tell you plainly what would help, and match your goals to suitable websites from our vetted publisher list, with a clear quote before any work begins.",
  },
  {
    num: "03",
    title: "Manual outreach and placement",
    text: "Our team contacts site owners directly, arranges the content and places your links inside relevant articles. Every step is done by hand, the way real editorial links are earned.",
  },
  {
    num: "04",
    title: "Live-link report and aftercare",
    text: "You receive a report with the live URL of every placement, ready to verify yourself. After delivery we stay available for questions, and any link that drops within 60 days is replaced free.",
  },
];

const pricingPoints = [
  {
    title: "Priced per placement",
    text: "You see exactly which websites are suggested and what each placement costs before you commit to anything.",
  },
  {
    title: "Matched to your budget",
    text: "Tell us what you can spend and we will suggest the strongest suitable sites that fit it, honestly and without padding.",
  },
  {
    title: "Free review, no obligation",
    text: "The site review and the quote cost nothing. If the plan is not right for you, you are free to walk away.",
  },
];

const faqs = [
  {
    q: "How long will my order take?",
    a: "It depends on the service and the websites involved, because real outreach runs on the publisher's schedule, not ours. Before you pay, we agree a realistic delivery window for your exact order, and we send progress updates while the work runs. If a publisher is slow, you will hear it from us directly.",
  },
  {
    q: "Are the links dofollow?",
    a: "Most placements are dofollow, and that is what we aim for on every order. Some websites only allow nofollow or sponsored attributes as a matter of policy. Where that is the case, we tell you before the link goes live, so there are no surprises in your report.",
  },
  {
    q: "What do I get when my order is finished?",
    a: "A full live-link report with the exact URL of every placement, the page your link appears on and the anchor text used. You can open each link and verify it yourself, at any time, without taking our word for anything.",
  },
  {
    q: "What happens if a link drops or gets removed?",
    a: "Tell us within 60 days of delivery and we will replace it free of charge with a comparable placement. Links can occasionally disappear when a site changes hands or restructures, and our guarantee means that risk sits with us, not with you.",
  },
  {
    q: "Which niches do you work with?",
    a: "We place content across a wide range of niches, including business, technology, health, home improvement, finance, education and lifestyle. If your niche is a restricted or unusual one, tell us upfront and we will give you a straight answer on whether we can help.",
  },
  {
    q: "How do I get started?",
    a: "Send us your website URL and a short note about your goals through the contact page. We review your site free of charge, tell you honestly what would help, and send a clear quote. Nothing is charged and nothing is started until you approve it.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section slim alt">
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Our services</h2>
            <p>
              Eight specialist services covering the work that actually gets a
              site found and trusted: guest posts, link building, search
              optimisation, content and the website itself. Every engagement
              starts with a free, honest review of your site.
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
              differently, and why it matters for your site.
            </p>
          </div>
          <div className="grid grid-3">
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
            <h2>What you get with every order</h2>
            <p>
              Whichever service you choose, the same standards apply. This is
              the minimum you can expect from every single order.
            </p>
          </div>
          <ul className="check-list">
            {deliverables.map((d) => (
              <li className="check-item" key={d.title}>
                <span className="check-icon">✓</span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>How it works</h2>
            <p>
              A simple, transparent process from first message to final
              report. You always know what stage your order is at.
            </p>
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

      <ProjectsSection />

      <TeamSection alt />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Straightforward pricing, no fake packages</h2>
            <p>
              We do not sell padded packages with invented discounts. Pricing
              depends on the websites your links are placed on, your niche
              and how much work your goals need, so every quote is built
              around your actual order. Tell us your goals and your budget,
              and we will come back with real sites and real prices.
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
          <div style={{ marginTop: 34 }}>
            <Link href="/contact" className="btn btn-primary">
              Contact for Price
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
            <p>
              Straight answers to the questions we hear most often. Anything
              else, just ask.
            </p>
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
            <h2>Get a free, honest review of your site</h2>
            <p>
              Send us your website and tell us where you want it to go. We
              will look at your link profile, your niche and your goals, then
              tell you plainly what we would do and what it would cost. No
              obligation and no pressure.
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
