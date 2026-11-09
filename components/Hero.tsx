"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FALLBACK_SITE_CONTENT, fetchSiteContent } from "@/lib/site";
import type { SiteContent } from "@/lib/types";

export default function Hero() {
  const [content, setContent] = useState<SiteContent>(FALLBACK_SITE_CONTENT);

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent().then((c) => {
      if (!cancelled) setContent(c);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="hero">
      <div className="container">
        {content.hero_badge && (
          <span className="hero-badge">{content.hero_badge}</span>
        )}
        <h1>{content.hero_title}</h1>
        <p className="lead">{content.hero_subtitle}</p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Get a Free Site Review
          </Link>
          <Link href="/services" className="btn btn-outline">
            View Services
          </Link>
        </div>
        <div className="hero-trust">
          <span>7 years of SEO experience</span>
          <span>100% manual outreach</span>
          <span>Full live-link report on every order</span>
          <span>Free 60-day link replacement</span>
        </div>
      </div>
    </section>
  );
}
