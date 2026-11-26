import type { Metadata } from "next";
import { connection } from "next/server";

export const instant = false;
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import {
  BLOG_CATEGORIES,
  publishedPosts,
  formatBlogDate,
  type BlogPost,
} from "@/lib/blog";

export const metadata: Metadata = pageMetadata({
  title: "Blog: SEO, Link Building & AI Search Guides",
  description:
    "SEO, link building, guest posting and AI search guides from SEODilated: practical, honest articles on rankings, backlinks, AEO and GEO, published daily.",
  path: "/blog",
});

function PostCard({ post }: { post: BlogPost }) {
  return (
    <div className="card">
      <img
        src={post.image}
        alt={post.imageAlt}
        className="blog-card-img"
        width={1200}
        height={675}
        loading="lazy"
      />
      <span className="eyebrow">{post.category}</span>
      <h3 style={{ marginTop: 10 }}>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <p style={{ marginTop: 12, fontSize: "0.9rem" }}>
        {formatBlogDate(post.publishDate)} · {post.readingMinutes} min read
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="btn btn-outline"
        style={{ marginTop: 14 }}
      >
        Read the guide
      </Link>
    </div>
  );
}

export default async function BlogIndexPage() {
  await connection();
  const posts = publishedPosts();
  const byCategory = BLOG_CATEGORIES.map((cat) => ({
    cat,
    posts: posts.filter((p) => p.category === cat),
  })).filter((g) => g.posts.length > 0);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">The SEODilated Blog</span>
          <h1>SEO and link building, explained honestly.</h1>
          <p>
            One practical guide every day on SEO, link building, guest posting
            and AI search. Written from real client work, checked against the
            sources we link in every article, and free of the recycled advice
            you have already read ten times.
          </p>
          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="btn btn-outline"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Latest</span>
            <h2>Newest guides first.</h2>
          </div>
          {posts.length === 0 ? (
            <p style={{ color: "var(--muted)", maxWidth: 640 }}>
              The first guides are being published now, one per day. Please
              check back tomorrow, or look at our{" "}
              <Link href="/services">services</Link> in the meantime.
            </p>
          ) : (
            <div className="grid grid-3">
              {posts.slice(0, 6).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {byCategory.map(({ cat, posts: catPosts }) => (
        <section
          className="section"
          key={cat}
          id={cat.toLowerCase().replace(/\s+/g, "-")}
        >
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Category</span>
              <h2>{cat}</h2>
            </div>
            <div className="grid grid-3">
              {catPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Reading is step one. Ranking is the job.</h2>
              <p>
                If you would rather have this work done for you, our team runs
                SEO, guest posting and link building campaigns for businesses
                in the UK, the US and worldwide.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/services" className="btn btn-primary">
                See the services
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Free site review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
