import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WebsitesMarketplace from "@/components/WebsitesMarketplace";
import { pageMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guest Post Websites Marketplace: 14,000+ Sites",
  description:
    "Browse 14,000+ real websites that accept guest posts, with DR, traffic and per-site prices shown upfront. Human-written article and live-link report included.",
  path: "/websites",
});

const faqs = [
  {
    q: "What does the price of a website include?",
    a: "One price per placement: a human-written article matched to the publisher, submission and editorial handling, the live dofollow placement, and a full live-link report you can verify yourself. There are no separate writing or handling fees on top.",
  },
  {
    q: "Are these real websites with real traffic?",
    a: "Yes. Every site in the marketplace is an active publisher with a real audience. The DR and traffic figures shown come from Ahrefs data in our publisher records, and the list is refreshed from those records every day, including price changes.",
  },
  {
    q: "How do I order a guest post on a site I like?",
    a: "Click Order next to any website and send the short form. We confirm the publisher is still accepting your niche, agree the target page and anchor text with you, then write and place the article. You only pay for placements you approved.",
  },
  {
    q: "What if a link is removed after it goes live?",
    a: "Every placement is covered by our free 60-day replacement: if a link drops within 60 days and cannot be restored, we replace it free. Publisher notes on each site, such as turnaround time or content restrictions, are shown in the Details on its row.",
  },
  {
    q: "Can I get a shortlist matched to my niche instead of browsing?",
    a: "Yes. Send us your site and targets through the contact page and we will send a shortlist matched to your niche, budget and the pages you want to support, with honest advice on which sites fit best.",
  },
];

export default function WebsitesPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Websites", path: "/websites" },
          ]),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Websites Marketplace</span>
          <h1>Discover high-authority websites for your next guest post.</h1>
          <p>
            Search any domain or browse by niche. Every website below is an
            active publisher with its DR, real traffic and price shown up
            front, refreshed daily. Pick your sites, click Order, and we
            handle the article, placement and live-link report.
          </p>
          <div className="chips">
            {[
              "14,000+ websites",
              "Prices shown up front",
              "Dofollow placements",
              "60-day link replacement",
            ].map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <WebsitesMarketplace />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How Ordering Works</span>
            <h2>From shortlist to live link in four steps.</h2>
          </div>
          <div className="grid grid-4">
            {[
              {
                num: "1",
                title: "Pick your websites",
                text: "Search or filter the marketplace by niche, DR, traffic and budget. Note the publisher notes on each row before you decide.",
              },
              {
                num: "2",
                title: "Send the order",
                text: "Click Order on the sites you want and tell us your target pages. We confirm availability and agree anchors with you first.",
              },
              {
                num: "3",
                title: "We write and place",
                text: "A human-written article is prepared for each publisher, submitted, and followed through until it is live with your link inside.",
              },
              {
                num: "4",
                title: "Verify your links",
                text: "You receive the exact live URL of every placement in a full report, covered by our free 60-day replacement.",
              },
            ].map((s) => (
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
            <span className="eyebrow">Common Questions</span>
            <h2>Asked about the marketplace.</h2>
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
            <h2>Not sure which sites fit your niche?</h2>
            <p>
              Send us your website and the pages you want to support. We will
              send a matched shortlist with honest per-placement quotes, with
              no minimum order.
            </p>
            <Link
              href="/contact?service=Guest%20Posts"
              className="btn btn-primary"
            >
              Get a Matched Shortlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
