"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Year from "@/components/Year";
import {
  FALLBACK_SOCIAL_LINKS,
  FALLBACK_SITE_CONTENT,
  fetchSiteContent,
  fetchSocialLinks,
} from "@/lib/site";
import type { SiteContent, SocialLink } from "@/lib/types";

export default function Footer() {
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
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo">
              SEO<span>Dilated</span>
            </Link>
            <p style={{ marginTop: 14, maxWidth: 340 }}>
              SEO, guest posting and link building done properly: manual
              outreach, real websites, and a full live-link report on every
              order.
            </p>
            <div className="social-row">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services">All Services</Link>
              </li>
              <li>
                <Link href="/services">Guest Posts</Link>
              </li>
              <li>
                <Link href="/services">Niche Edits</Link>
              </li>
              <li>
                <Link href="/services">Press Releases</Link>
              </li>
              <li>
                <Link href="/managed-link-building">Managed Link Building</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/managed-link-building">Managed Link Building</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <a href={phoneHref}>{phone}</a>
              </li>
              <li>
                <Link href="/contact">Free site review</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <Year /> SEODilated. All rights reserved.
          </span>
          <span>Guest Posts · Link Building · SEO Services</span>
        </div>
      </div>
    </footer>
  );
}
