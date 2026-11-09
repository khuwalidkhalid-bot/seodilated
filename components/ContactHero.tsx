"use client";

import { useEffect, useState } from "react";
import { FALLBACK_SITE_CONTENT, fetchSiteContent } from "@/lib/site";
import type { SiteContent } from "@/lib/types";

export default function ContactHero() {
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

  const email = content.contact_email ?? FALLBACK_SITE_CONTENT.contact_email!;

  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Contact SEODilated</span>
        <h1>Hi, I&apos;m Khuwalid. Let&apos;s map your campaign.</h1>
        <p>
          I founded SEODilated and I have spent 7 years in SEO and link
          building. Every first conversation here starts with me personally,
          not a sales team and not a form that disappears into a queue.
        </p>
        <p style={{ marginTop: 14 }}>
          Send the form below and I will review your site myself, or email me
          directly at <a href={`mailto:${email}`}>{email}</a>.
        </p>
      </div>
    </section>
  );
}
