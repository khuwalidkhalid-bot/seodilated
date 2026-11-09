"use client";

import { useEffect, useState } from "react";
import {
  FALLBACK_SOCIAL_LINKS,
  FALLBACK_SITE_CONTENT,
  fetchSiteContent,
  fetchSocialLinks,
} from "@/lib/site";
import type { SiteContent, SocialLink } from "@/lib/types";

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

function platformIcon(platform: string) {
  return platform.trim().slice(0, 2).toLowerCase() || "↗";
}

export default function ContactDetails() {
  const [content, setContent] = useState<SiteContent>(FALLBACK_SITE_CONTENT);
  const [socialLinks, setSocialLinks] =
    useState<SocialLink[]>(FALLBACK_SOCIAL_LINKS);

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent().then((c) => {
      if (!cancelled) setContent(c);
    });
    fetchSocialLinks().then((links) => {
      if (!cancelled) setSocialLinks(links);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const email = content.contact_email ?? FALLBACK_SITE_CONTENT.contact_email!;
  const phone = content.contact_phone ?? FALLBACK_SITE_CONTENT.contact_phone!;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <div className="card">
      <h3 style={{ marginBottom: 8 }}>Direct contact</h3>
      <div className="contact-detail">
        <div className="icon">✉</div>
        <div>
          <h4>Email</h4>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className="contact-detail">
        <div className="icon">☎</div>
        <div>
          <h4>Phone / WhatsApp</h4>
          <a href={phoneHref}>{phone}</a>
        </div>
      </div>
      {socialLinks.map((link) => (
        <div className="contact-detail" key={link.id}>
          <div className="icon">{platformIcon(link.platform)}</div>
          <div>
            <h4>{link.platform}</h4>
            <a href={link.url} target="_blank" rel="noreferrer">
              {displayUrl(link.url)}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
