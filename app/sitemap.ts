import type { MetadataRoute } from "next";
import { publishedPosts } from "@/lib/blog";

export const revalidate = 3600;

const base = "https://www.seodilated.com";

const serviceSlugs = [
  "seo",
  "advance-seo",
  "aeo",
  "geo",
  "complete-ecommerce-management",
  "web-development",
  "wordpress-development",
  "content-writing",
  "social-media-marketing",
  "performance-optimization",
  "application-development",
  "advance-ai-software-development",
];

const staticPages: { path: string; lastModified: string; priority: number }[] = [
  { path: "/", lastModified: "2026-11-14", priority: 1.0 },
  { path: "/services", lastModified: "2026-11-14", priority: 0.9 },
  { path: "/link-building", lastModified: "2026-11-14", priority: 0.9 },
  { path: "/guest-posts", lastModified: "2026-11-14", priority: 0.9 },
  { path: "/websites", lastModified: "2026-11-15", priority: 0.9 },
  { path: "/blog", lastModified: "2026-11-15", priority: 0.8 },
  { path: "/aeo", lastModified: "2026-11-14", priority: 0.9 },
  { path: "/managed-link-building", lastModified: "2026-11-14", priority: 0.8 },
  { path: "/about", lastModified: "2026-11-14", priority: 0.7 },
  { path: "/contact", lastModified: "2026-11-14", priority: 0.7 },
  { path: "/privacy-policy", lastModified: "2026-11-10", priority: 0.3 },
  { path: "/terms-and-conditions", lastModified: "2026-11-10", priority: 0.3 },
  { path: "/cookie-policy", lastModified: "2026-11-10", priority: 0.3 },
  { path: "/refund-policy", lastModified: "2026-11-10", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date("2026-11-14"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = publishedPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedDate ?? p.publishDate),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: new Date(p.lastModified),
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...servicePages,
    ...blogPages,
  ];
}
