import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import Reveal from "@/components/Reveal";
import StatCounters from "@/components/StatCounters";
import {
  DatabasePanel,
  EnginePanel,
  MonitoringPanel,
  PersonPanel,
  ShowcasePanel,
  TriangleMotif,
} from "@/components/MockPanels";

function Glyph({ d, circles }: { d: string[]; circles?: { cx: number; cy: number; r: number }[] }) {
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

const platformFeatures = [
  {
    title: "Vetted Publisher Network",
    text: "Real, high-authority websites across 15+ niches. Every site is checked before use, then matched to your site by relevance and authority, never picked at random from a list.",
    panel: <DatabasePanel />,
  },
  {
    title: "A Real Person On Your Campaign",
    text: "You deal directly with the specialist running your order. Questions go to the person doing the work, not into a ticket queue answered by a bot.",
    panel: <PersonPanel />,
  },
  {
    title: "Monitoring & Replacement",
    text: "Every live link is reported to you and checked after delivery. If a link drops within 60 days, it is replaced free with a comparable placement.",
    panel: <MonitoringPanel />,
  },
  {
    title: "Placement, Managed For You",
    text: "Brief, content, outreach, publisher approval and go-live are handled by our team from start to finish, with honest progress updates while the work runs.",
    panel: <EnginePanel />,
  },
];

const steps = [
  {
    num: "1",
    title: "Define the target",
    text: "Share your site, your niche and your goals. We review your current link profile and match publishers to it by relevance and authority, with a clear quote before anything starts.",
  },
  {
    num: "2",
    title: "We execute the placement",
    text: "Our team handles the content, the manual outreach and the publisher approval, then places your link inside a relevant article on the chosen website.",
  },
  {
    num: "3",
    title: "Track and replace",
    text: "You receive a full live-link report you can verify yourself. Every link is covered by our free 60-day replacement if it drops or is removed.",
  },
];

const managedPoints = [
  "Strategy, site matching and placement handled for you",
  "Content and manual outreach included",
  "Live-link report on every batch",
  "60-day replacement cover on every link",
];

const singlePoints = [
  "Guest posts and niche edits on vetted sites",
  "Pick by niche and authority",
  "No subscription, no minimum order",
  "Full live-link report with every placement",
];

const whyCards = [
  {
    title: "Manual outreach only",
    text: "Every placement is earned by contacting real website owners and editors directly. No automation tools, no bulk spam, no shortcuts that put your site at risk.",
    icon: (
      <Glyph
        d={["M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z"]}
      />
    ),
  },
  {
    title: "Honest review before you pay",
    text: "We look at your site first and tell you plainly what will help and what will not. If a service is a poor fit for your goals, we say so before you spend anything.",
    icon: (
      <Glyph
        circles={[{ cx: 12, cy: 12, r: 3 }]}
        d={["M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"]}
      />
    ),
  },
  {
    title: "Verified link by link",
    text: "We check every placement ourselves before it reaches your report, so what you are told you received is exactly what is live on the page.",
    icon: (
      <Glyph
        circles={[{ cx: 12, cy: 12, r: 9 }]}
        d={["M8.5 12.5l2.5 2.5 4.5-5"]}
      />
    ),
  },
  {
    title: "Replacement guarantee",
    text: "If a placement drops or is removed within 60 days of delivery, we replace it with a comparable one at no cost to you. The risk sits with us, not with you.",
    icon: <Glyph d={["M20 12a8 8 0 1 1-2.3-5.6", "M20 3v4h-4"]} />,
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

      {/* 2. The Platform */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">The Platform</span>
              <h2>Link building, consolidated.</h2>
              <p>
                One service covers the whole job: finding the right websites,
                producing the content, placing the link and standing behind it
                after it goes live.
              </p>
            </div>
          </Reveal>
          <div className="feature-grid">
            {platformFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 110}>
                <div className="feature-block">
                  {f.panel}
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">What We Do</span>
              <h2>Our services</h2>
              <p>
                Eight specialist services covering the work that actually gets
                a site found and trusted: guest posts, link building, search
                optimisation, content and the website itself. Every engagement
                starts with a free, honest review of your site.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <ServicesGrid limit={6} />
          </Reveal>
          <div style={{ marginTop: 34, textAlign: "center" }}>
            <Link href="/services" className="btn btn-outline">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">How It Works</span>
              <h2>From brief to live link, in three steps.</h2>
              <p>
                A simple, transparent process. You always know what stage your
                order is at.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-3">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 110}>
                <div className="card">
                  <div className="step-circle">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Two ways in */}
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Two Ways In</span>
              <h2>Managed campaigns. Or single placements.</h2>
              <p>
                The same vetted websites and the same team either way. Only the
                amount of work you hand over changes.
              </p>
            </div>
          </Reveal>
          <div className="options-grid">
            <Reveal>
              <div className="option-card featured">
                <div className="opt-kicker">Managed Campaigns</div>
                <h3>Our team runs it end to end.</h3>
                <ul className="option-list">
                  {managedPoints.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary">
                  Start a campaign
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="option-card">
                <div className="opt-kicker">Single Placements</div>
                <h3>Pay per placement.</h3>
                <ul className="option-list">
                  {singlePoints.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link href="/services" className="btn btn-outline">
                  Contact for price
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Why SEODilated */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Why SEODilated</span>
              <h2>Built on manual work, not automation.</h2>
              <p>
                Plenty of sellers will sell you links. Here is how we work
                differently, and why it matters for your site.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-4">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="card">
                  <div className="icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Projects (hidden while empty) */}
      <ProjectsSection />

      {/* 8. Team */}
      <TeamSection alt />

      {/* 9. By the numbers */}
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">By The Numbers</span>
              <h2>The short version.</h2>
            </div>
          </Reveal>
          <StatCounters />
          <Reveal className="showcase-zone">
            <ShowcasePanel />
          </Reveal>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Common Questions</span>
              <h2>Direct answers, before you ask.</h2>
              <p>
                Straight answers to the questions we hear most often. Anything
                else, just ask.
              </p>
            </div>
          </Reveal>
          <div className="faq-list faq-center">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section slim">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <TriangleMotif className="cta-tri" />
              <h2>Two ways in. One team behind both.</h2>
              <p>
                Start with a single placement or hand us the whole campaign.
                Either way it begins with a free, honest review of your site
                and a clear quote, with no obligation.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Get My Free Review
                </Link>
                <Link href="/managed-link-building" className="btn btn-outline">
                  See Managed Options
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
