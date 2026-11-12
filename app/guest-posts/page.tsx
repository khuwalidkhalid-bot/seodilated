import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guest Posts Service | Buy Guest Posts on Real Sites | SEODilated",
  description:
    "Buy guest posts on real, high-authority websites with SEODilated. Human-written articles, manual outreach, dofollow placements, full live-link report and free 60-day replacement.",
  alternates: { canonical: "https://www.seodilated.com/guest-posts" },
};

const stats = [
  { num: "7+", lbl: "Years Experience" },
  { num: "15+", lbl: "Niches Covered" },
  { num: "100%", lbl: "Human-Written Content" },
  { num: "60-Day", lbl: "Link Replacement" },
];

const benefits = [
  {
    title: "Authority that compounds",
    text: "A guest post on a trusted site in your niche passes real authority to your pages and helps your whole domain compete, not just one URL.",
  },
  {
    title: "Relevant referral traffic",
    text: "The article sits in front of a real audience in your niche. Good placements bring readers who can actually become customers, not just a link in a report.",
  },
  {
    title: "Brand presence in your niche",
    text: "Your brand appears as a contributor on sites your customers already read. That visibility builds trust before anyone reaches your website.",
  },
  {
    title: "Natural, editorial links",
    text: "Your link sits inside a full article written for that publisher, placed in relevant copy. It reads as editorial because it is editorial.",
  },
];

const included = [
  { title: "Publisher matched to your niche", text: "Sites selected by relevance, authority and real traffic, then sent to you for approval before any placement starts." },
  { title: "Human-written article", text: "A full article written by hand for that specific publisher, matched to their guidelines, word count and tone, with your link placed naturally." },
  { title: "Anchor and target agreed first", text: "Target page and anchor text are agreed with you before writing, so the placement supports the page you actually want to rank." },
  { title: "Editorial handling end to end", text: "Submission, publisher revisions and follow-ups are handled by our team. You do not chase editors or rewrite drafts." },
  { title: "Live link, verified by us", text: "Every placement is opened and checked after go-live: link present, attribute correct, article live on the right page." },
  { title: "Full report and 60-day cover", text: "You receive the exact live URL in your report, and the placement is covered by our free 60-day replacement if it drops." },
];

const steps = [
  { num: "1", title: "Tell us your niche and targets", text: "Share your site, the pages you want to support and the kind of sites you want. We review your site free before matching." },
  { num: "2", title: "Approve your publishers", text: "We send matched sites with their authority and traffic picture and a per-placement price. You approve only the sites you want." },
  { num: "3", title: "We write and place", text: "The article is written for each publisher, checked editorially, submitted and followed through until it is live with your link inside." },
  { num: "4", title: "Verify your live links", text: "You receive the full live-link report with the exact URL of every guest post, ready for you to open and verify yourself." },
];

const niches = [
  "Business and Marketing",
  "Technology and SaaS",
  "Health and Wellness",
  "Home Improvement",
  "Finance and Legal",
  "Education",
  "Lifestyle and Travel",
  "Ecommerce and Retail",
  "Real Estate",
  "Sports and Entertainment",
  "Food and Hospitality",
  "Automotive",
];

const faqs = [
  {
    q: "What exactly is a guest post?",
    a: "A guest post is a full article written for another website in your niche and published under that site, with a link back to your site placed naturally inside the content. Done properly, it earns you authority, relevant readers and brand visibility at the same time.",
  },
  {
    q: "Can I approve the sites and the content first?",
    a: "Yes, on both. You approve every publisher before placement, and if you want to see or approve the article before it is submitted, we build that into the process. Many clients approve the first pieces and then let the agreed pattern run.",
  },
  {
    q: "Do you write the article or can I supply it?",
    a: "Either works. Our team writes most guest posts by hand, matched to each publisher. If you have your own writer or ready content, send it and we will check it against the publisher's guidelines honestly before placing it.",
  },
  {
    q: "How much does a guest post cost?",
    a: "It depends on the site: authority, traffic and niche all change the price, so a single flat rate would be misleading. Every site is quoted individually before you pay, there is no minimum order, and you only pay for placements you approved.",
  },
  {
    q: "How long does a guest post take to go live?",
    a: "Real publishers work to their own editorial schedules, so timing varies by site. Before you pay, we agree a realistic delivery window for your exact order and keep you updated while it runs. If a publisher goes quiet, you hear it from us, and we push or re-place.",
  },
  {
    q: "Are the links permanent and dofollow?",
    a: "Placements are intended to be permanent and most are dofollow. If a link is removed within 60 days of delivery and cannot be restored, we replace it free. Where a publisher only allows a nofollow or sponsored attribute, we tell you before the link goes live.",
  },
];

export default function GuestPostsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Guest Posting Service</span>
          <h1>Guest posts on real sites your customers actually read.</h1>
          <p>
            Human-written articles placed through manual outreach on vetted,
            high-authority websites in your niche. You approve the sites
            first, we handle writing and placement, and you verify every
            live link yourself.
          </p>
          <div className="chips">
            {["Sites approved by you", "Written by humans", "Dofollow placements", "Live-link report"].map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
          <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact?service=Guest%20Posts" className="btn btn-primary">Contact for price</Link>
            <Link href="/link-building" className="btn btn-outline">Link Building</Link>
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
            <span className="eyebrow">Why Guest Posts Work</span>
            <h2>One placement, four kinds of value.</h2>
            <p>A well-placed guest post is not just a link. It is authority, audience and brand trust arriving in a single placement.</p>
          </div>
          <div className="grid grid-2">
            {benefits.map((b) => (
              <div className="card" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Is Included</span>
            <h2>Every guest post order includes all of this.</h2>
            <p>Publisher sourcing, writing, placement, verification and reporting sit in one price per placement, quoted before you pay.</p>
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
            <h2>From brief to live guest post in four steps.</h2>
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
            <span className="eyebrow">Niches We Place In</span>
            <h2>Publishers across 15+ niches.</h2>
            <p>These are the areas we place in most often. If your niche is unusual or restricted, ask us and you will get a straight answer on whether we can help.</p>
          </div>
          <div className="chips">
            {niches.map((n) => (
              <span className="chip" key={n}>{n}</span>
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
              <h3><Link href="/link-building">Link Building</Link></h3>
              <p>Guest posts plus niche edits and a full quality-checked link program for your site, with per-placement pricing.</p>
            </div>
            <div className="card">
              <h3><Link href="/managed-link-building">Managed Link Building</Link></h3>
              <p>Prefer a monthly program run for you? Strategy, content and placements handled end to end by our team.</p>
            </div>
            <div className="card">
              <h3><Link href="/aeo">AEO</Link></h3>
              <p>Make your brand the answer AI assistants give, with structured content and mentions on the sites they read.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Asked about guest posts.</h2>
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
            <h2>Tell us your niche. We will match the sites.</h2>
            <p>Send your site and the pages you want to support. We will come back with matched publishers and an honest per-placement quote, with no minimum order.</p>
            <Link href="/contact?service=Guest%20Posts" className="btn btn-primary">Get Matched Sites</Link>
          </div>
        </div>
      </section>
    </>
  );
}
