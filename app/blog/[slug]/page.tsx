import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";

export const instant = false;
import {
  blogPosts,
  getPublishedPost,
  publishedPosts,
  formatBlogDate,
} from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import {
  pageMetadata,
  blogPostingJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  await connection();
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    image: post.image,
    imageWidth: 1200,
    imageHeight: 675,
  });
}

const paraStyle: React.CSSProperties = {
  color: "var(--muted)",
  fontSize: "1.06rem",
  lineHeight: 1.75,
  marginBottom: 18,
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connection();
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();

  const more = publishedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          blogPostingJsonLd({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.publishDate,
            dateModified: post.updatedDate,
            category: post.category,
            image: post.image,
          }),
          faqJsonLd(post.faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <p style={{ marginTop: 18, fontSize: "0.95rem" }}>
            By Khuwalid Khalid, SEO Specialist ·{" "}
            {formatBlogDate(post.publishDate)}
            {post.updatedDate
              ? ` · Updated ${formatBlogDate(post.updatedDate)}`
              : ""}{" "}
            · {post.readingMinutes} min read
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="section" style={{ paddingTop: 36, paddingBottom: 0 }}>
        <div className="container">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="blog-hero-img"
            width={1200}
            height={675}
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Intro: the answer first (AEO) */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            {post.intro.map((para, i) => (
              <p key={i} style={paraStyle}>
                {para}
              </p>
            ))}
          </div>
          <div className="card" style={{ maxWidth: 760, marginTop: 10 }}>
            <span className="eyebrow">Key Takeaways</span>
            <ul className="check-list" style={{ marginTop: 14 }}>
              {post.keyTakeaways.map((t) => (
                <li className="check-item" key={t}>
                  <span className="check-icon">✓</span>
                  <div>
                    <p>{t}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Body sections */}
      {post.sections.map((sec) => (
        <section className="section" key={sec.heading}>
          <div className="container">
            <div className="section-head">
              <h2>{sec.heading}</h2>
            </div>
            <div style={{ maxWidth: 760 }}>
              {sec.paragraphs.map((para, i) => (
                <p key={i} style={paraStyle}>
                  {para}
                </p>
              ))}
              {sec.bullets ? (
                <ul className="check-list">
                  {sec.bullets.map((b) => (
                    <li className="check-item" key={b}>
                      <span className="check-icon">✓</span>
                      <div>
                        <p>{b}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      {/* FAQs */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Frequently asked questions.</h2>
          </div>
          <div className="faq-list">
            {post.faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sources: external references behind this guide */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Sources</span>
            <h2>References behind this guide.</h2>
            <p>
              We check our guides against primary sources and established
              industry research. These are the references used for this
              article, so you can verify anything here yourself.
            </p>
          </div>
          <ul className="check-list">
            {post.sources.map((s) => (
              <li className="check-item" key={s.url}>
                <span className="check-icon">✓</span>
                <div>
                  <p>
                    <a href={s.url} target="_blank" rel="noopener">
                      {s.label}
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Want this handled for you?</h2>
              <p>
                This guide is part of what our team does every day for
                clients. If it raised questions about your own site, start
                with a free, honest review.
              </p>
            </div>
            <div className="cta-actions">
              <Link href={post.relatedService.href} className="btn btn-primary">
                {post.relatedService.label}
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Free site review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More from the blog */}
      {more.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Keep Reading</span>
              <h2>More from the blog.</h2>
            </div>
            <div className="grid grid-3">
              {more.map((p) => (
                <div className="card" key={p.slug}>
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="blog-card-img"
                    width={1200}
                    height={675}
                    loading="lazy"
                  />
                  <span className="eyebrow">{p.category}</span>
                  <h3 style={{ marginTop: 10 }}>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p>{p.excerpt}</p>
                  <p style={{ marginTop: 12, fontSize: "0.9rem" }}>
                    {formatBlogDate(p.publishDate)} · {p.readingMinutes} min
                    read
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
