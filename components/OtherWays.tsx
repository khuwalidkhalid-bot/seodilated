"use client";

import { useEffect, useState } from "react";
import {
  FALLBACK_SOCIAL_LINKS,
  FALLBACK_SITE_CONTENT,
  fetchSiteContent,
  fetchSocialLinks,
} from "@/lib/site";
import type { SiteContent, SocialLink } from "@/lib/types";

export default function OtherWays() {
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
  const waNumber = phone.replace(/\D/g, "");
  const linkedIn =
    socialLinks.find((l) =>
      l.platform.toLowerCase().includes("linkedin")
    ) ?? socialLinks[0];

  return (
    <div className="grid grid-3">
      <div className="card">
        <div className="icon">✉</div>
        <h3>Email directly</h3>
        <p>
          Prefer email to a form? Write any time. Replies come from Khuwalid
          personally, with an initial look at your site included.
        </p>
        <a
          href={`mailto:${email}`}
          className="btn btn-outline btn-small card-cta"
        >
          {email}
        </a>
      </div>
      {linkedIn && (
        <div className="card">
          <div className="icon">in</div>
          <h3>{linkedIn.platform}</h3>
          <p>
            Connect or send a message on {linkedIn.platform}. A good route
            if you want to see who you are dealing with first.
          </p>
          <a
            href={linkedIn.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-small card-cta"
          >
            Open {linkedIn.platform}
          </a>
        </div>
      )}
      <div className="card">
        <div className="icon">☎</div>
        <h3>WhatsApp</h3>
        <p>
          Message us on WhatsApp at {phone}. Best for a quick question
          before you commit to a full enquiry.
        </p>
        <a
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-small card-cta"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
