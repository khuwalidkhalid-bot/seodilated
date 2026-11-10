"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FALLBACK_SITE_CONTENT, fetchSiteContent } from "@/lib/site";
import type { SiteContent } from "@/lib/types";
import Reveal from "@/components/Reveal";
import { HeroReportPanel, TriangleMotif } from "@/components/MockPanels";

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
          <Link href="/managed-link-building" className="btn btn-outline">
            See Managed Options
          </Link>
        </div>
        <div className="hero-trust">
          <span>7 years of SEO experience</span>
          <span>100% manual outreach</span>
          <span>Full live-link report on every order</span>
          <span>Free 60-day link replacement</span>
        </div>

        <Reveal className="hero-panel-zone">
          <div className="hero-glow" aria-hidden="true" />
          <TriangleMotif className="hero-tri" />
          <HeroReportPanel />
        </Reveal>
      </div>
    </section>
  );
}
