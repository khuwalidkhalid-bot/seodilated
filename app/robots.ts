import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Crawling rules. Search engines and AI answer engines are explicitly
 * welcome (GEO/AEO visibility); the admin dashboard is kept out.
 */
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/kk", "/kk/"] },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
