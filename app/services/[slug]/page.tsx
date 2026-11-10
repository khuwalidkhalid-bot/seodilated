import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceDetail,
  serviceDetails,
} from "@/lib/serviceDetails";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return {};
  return {
    title: `${detail.title} | SEODilated`,
    description: detail.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  const contactHref = `/contact?service=${encodeURIComponent(detail.title)}`;
  const others = serviceDetails.filter((s) => s.slug !== detail.slug);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Service</span>
          <h1>{detail.title}</h1>
          <p>{detail.tagline}</p>
          <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href={contactHref} className="btn btn-primary">
              Contact for price
            </Link>
            <Link href="/services" className="btn btn-outline">
              All services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Overview</span>
            <h2>What this service is.</h2>
          </div>
          <div style={{ maxWidth: 760 }}>
            {detail.intro.map((para, i) => (
              <p
                key={i}
                style={{
                  color: "var(--muted)",
                  fontSize: "1.08rem",
                  lineHeight: 1.7,
                  marginBottom: i === detail.intro.length - 1 ? 0 : 18,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What&apos;s Included</span>
            <h2>Everything inside {detail.title}.</h2>
            <p>
              No stripped back version and no upsell ladder. This is the full
              scope of the service, agreed with you before work starts.
            </p>
          </div>
          <ul className="check-list">
            {detail.included.map((item) => (
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

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Four steps, start to finish.</h2>
          </div>
          <div className="grid grid-4">
            {detail.steps.map((s, i) => (
              <div className="card" key={s.title}>
                <div className="step-circle">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What You Receive</span>
            <h2>What lands in your hands.</h2>
            <p>
              Every engagement ends with concrete deliverables you can open,
              check and keep, not a verbal summary.
            </p>
          </div>
          <div className="grid grid-2">
            {detail.deliverables.map((d) => (
              <div className="card" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
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
            <h2>Asked about {detail.title}.</h2>
          </div>
          <div className="faq-list">
            {detail.faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section slim">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Keep Exploring</span>
            <h2>Other services in detail.</h2>
          </div>
          <div className="grid grid-4">
            {others.map((s) => (
              <div className="card" key={s.slug}>
                <h3>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </h3>
                <p>{s.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section slim">
        <div className="container">
          <div className="cta-band">
            <h2>{detail.title}, scoped honestly.</h2>
            <p>{detail.ctaLine}</p>
            <Link href={contactHref} className="btn btn-primary">
              Contact for price
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
