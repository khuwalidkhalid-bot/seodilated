"use client";

import { useEffect, useState } from "react";
import { FALLBACK_SITE_CONTENT, fetchSiteContent } from "@/lib/site";

export default function AboutText() {
  const [aboutText, setAboutText] = useState<string>(
    FALLBACK_SITE_CONTENT.about_text ?? ""
  );

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent().then((c) => {
      if (!cancelled && c.about_text) setAboutText(c.about_text);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const paragraphs = aboutText
    .split(/\n\s*\n|\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          style={{
            color: "var(--muted)",
            marginBottom: i === paragraphs.length - 1 ? 0 : 16,
          }}
        >
          {p}
        </p>
      ))}
    </>
  );
}
