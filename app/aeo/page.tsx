import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AEO Services | Answer Engine Optimization | SEODilated",
  description:
    "AEO (Answer Engine Optimization) services from SEODilated: structured answers, entity clarity and brand mentions that help ChatGPT, AI Overviews and answer engines surface and cite your business.",
  alternates: { canonical: "https://www.seodilated.com/aeo" },
};

const stats = [
  { num: "7+", lbl: "Years in SEO" },
  { num: "Semrush", lbl: "AI Search Certified" },
  { num: "100%", lbl: "Honest Reporting" },
  { num: "SEO + AEO", lbl: "Built Together" },
];

const shifts = [
  {
    title: "Answers replaced clicks",
    text: "A growing share of searches now end with a direct answer on the results page or inside an AI assistant. If your brand is not the source behind that answer, the click never reaches you.",
  },
  {
    title: "AI cites sources it trusts",
    text: "ChatGPT, AI Overviews and other answer engines pull from pages that state facts clearly, from brands mentioned consistently across the web, and from sites with real authority.",
  },
  {
    title: "Your competitors are visible",
    text: "Ask an AI assistant the questions your customers ask. The brands it names are winning business you never see. AEO is the work of becoming one of those brands.",
  },
];

const included = [
  { title: "Question and visibility audit", text: "The real questions your customers ask AI assistants and answer engines, tested live, with an honest record of who gets cited today and why you do not." },
  { title: "Structured answer content", text: "Your key pages rewritten so answers are stated clearly and early, in clean sections and definitions that answer engines can lift and cite with confidence." },
  { title: "Entity and brand clarity", text: "Your business name, services, facts and descriptions made consistent across your site and key profiles, so engines connect the answer to the right brand." },
  { title: "Brand mentions on third-party sites", text: "Mentions of your brand placed on relevant websites through guest posts and outreach, building the wider presence answer engines draw their answers from." },
  { title: "Existing content upgrades", text: "Your current pages reviewed and reworked for answer visibility first. New pages are only recommended where a valuable question has no page that could answer it." },
  { title: "Visibility reporting in plain language", text: "A clear summary of what was changed, which questions each page now targets, where your brand is mentioned, and how you appear in answers at handover." },
];

const steps = [
  { num: "1", title: "Audit the answers", text: "We list the questions that matter in your niche and check how ChatGPT, AI Overviews and answer boxes respond to them today, and who they cite." },
  { num: "2", title: "Plan the content", text: "Questions are mapped to existing pages or new ones, entity gaps are fixed, and the answer structure each page needs is agreed with you." },
  { num: "3", title: "Rewrite and build mentions", text: "Pages are reworked into structured, quotable answers, and supporting brand mention placements run alongside on relevant third-party sites." },
  { num: "4", title: "Recheck and refine", text: "The same questions are tested again, changes are reported honestly, and the next round of questions and mentions is agreed with you." },
];

const vsCards = [
  {
    kicker: "Traditional SEO",
    title: "Rank in the list.",
    points: [
      "Goal: your page ranks in the search results list",
      "Optimises pages, keywords and backlinks",
      "Success measured in rankings and organic clicks",
      "Still essential, it is the foundation AEO builds on",
    ],
  },
  {
    kicker: "AEO",
    title: "Be the answer itself.",
    points: [
      "Goal: your brand is quoted inside the direct answer",
      "Optimises answer structure, entities and mentions",
      "Success measured in citations and brand visibility in AI answers",
      "Works alongside SEO and link building, not instead of them",
    ],
  },
];

const faqs = [
  {
    q: "What is AEO (Answer Engine Optimization)?",
    a: "AEO is optimising your content and brand presence so answer engines and AI assistants, like ChatGPT, Google AI Overviews and featured answer boxes, surface and cite your business when they reply directly to a user's question, instead of only listing links.",
  },
  {
    q: "How is AEO different from SEO and GEO?",
    a: "SEO focuses on ranking your pages in a list of results. AEO focuses on being the source a direct answer quotes. GEO is the close cousin focused on citations inside fully generated AI answers. In practice the work overlaps heavily, and we will tell you honestly which focus fits your situation. Our detailed GEO service sits alongside this one.",
  },
  {
    q: "Can you guarantee my brand will appear in AI answers?",
    a: "No, and you should be wary of anyone who promises it. AI systems choose sources dynamically. What we can do is remove the reasons you are currently overlooked: unclear answers, inconsistent brand facts and a thin presence on the sites these systems read, then report honestly what we observe.",
  },
  {
    q: "Does AEO replace my SEO and link building?",
    a: "No. Answer engines lean on the same trust and authority signals as traditional search. AEO works best on top of sound pages and a credible link profile. That is why we deliver it together with SEO, guest posts and link building, not as a replacement for them.",
  },
  {
    q: "What will I actually receive?",
    a: "A question map showing the customer questions you should own, your key pages rewritten with structured answers, a report of every brand mention placed with its live URL, and a visibility summary showing how your brand appears in answer results at handover.",
  },
  {
    q: "How much does AEO cost?",
    a: "It depends on how many questions and pages are in scope and how much mention work your brand needs, so we quote after the audit rather than publishing a flat rate. The audit findings and the quote come first, and nothing starts until you approve them.",
  },
];

export default function AeoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">AEO: Answer Engine Optimization</span>
          <h1>Be the answer AI gives, not a link below it.</h1>
          <p>
            Your customers now ask ChatGPT, AI Overviews and answer boxes
            directly, and those systems quote one trusted source. AEO
            structures your content, brand facts and mentions so that
            source is you.
          </p>
          <div className="chips">
            {["Question-led content", "Entity clarity", "Brand mentions", "Semrush AI Search certified"].map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
          <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact?service=AEO" className="btn btn-primary">Contact for price</Link>
            <Link href="/services/aeo" className="btn btn-outline">AEO Service Detail</Link>
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
            <span className="eyebrow">Why AEO, Why Now</span>
            <h2>Search changed. The answer is the new ranking.</h2>
            <p>Three shifts made AEO a service in its own right, separate from the SEO work that still matters underneath it.</p>
          </div>
          <div className="grid grid-3">
            {shifts.map((s) => (
              <div className="card" key={s.title}>
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
            <span className="eyebrow">SEO vs AEO</span>
            <h2>Same foundation. Different finish line.</h2>
          </div>
          <div className="options-grid">
            <div className="option-card">
              <div className="opt-kicker">{vsCards[0].kicker}</div>
              <h3>{vsCards[0].title}</h3>
              <ul className="option-list">
                {vsCards[0].points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
              <Link href="/services/seo" className="btn btn-outline">See SEO Service</Link>
            </div>
            <div className="option-card featured">
              <div className="opt-kicker">{vsCards[1].kicker}</div>
              <h3>{vsCards[1].title}</h3>
              <ul className="option-list">
                {vsCards[1].points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
              <Link href="/contact?service=AEO" className="btn btn-primary">Start with an Audit</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Is Included</span>
            <h2>Everything inside an AEO engagement.</h2>
            <p>Audit, content, entity work and mentions in one scope, led by a specialist certified by Semrush in AI Search Essentials and Off-Page SEO.</p>
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
            <h2>Four steps to answer visibility.</h2>
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
              <h3><Link href="/services/geo">GEO</Link></h3>
              <p>Generative Engine Optimization: citations inside fully generated answers from AI Overviews and ChatGPT style results.</p>
            </div>
            <div className="card">
              <h3><Link href="/link-building">Link Building</Link></h3>
              <p>The authority underneath AEO: guest posts and niche edits on real, vetted websites with full live-link reporting.</p>
            </div>
            <div className="card">
              <h3><Link href="/guest-posts">Guest Posts</Link></h3>
              <p>The placements that build both rankings and brand mentions, written by humans and placed through manual outreach.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Asked about AEO.</h2>
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
            <h2>Find out what AI says about your market.</h2>
            <p>Tell us your niche and we will show you what answer engines currently say to your customers, who they cite instead of you, and what it would take to change that.</p>
            <Link href="/contact?service=AEO" className="btn btn-primary">Request an AEO Audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
