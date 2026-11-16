import { supabase } from "@/lib/supabase";
import type {
  Project,
  SiteContent,
  SocialLink,
  TeamMember,
} from "@/lib/types";

// Fallback content — matches the values seeded in the `site_content` table.
// Used if the database query fails, so the public site never looks broken.
export const FALLBACK_SITE_CONTENT: SiteContent = {
  id: 1,
  hero_badge: "SEO · AI Search · Web Development · Ecommerce",
  hero_title: "One team for your search rankings, website and online growth.",
  hero_subtitle:
    "SEODilated is a full-service digital agency: SEO and AI search optimization, guest posting and link building, web and software development, ecommerce management, content writing and social media marketing. Real websites, honest advice, and a full live-link report on every link building order.",
  about_text:
    "SEODilated is a full-service digital agency led by Khuwalid Khalid, an SEO specialist with 7 years of experience. The agency covers SEO and AI search optimization (AEO and GEO), guest posting and link building, web development, WordPress development, application development, complete ecommerce management, content writing, social media marketing and performance optimization, all delivered by one in-house team.\n\nHis approach is deliberately straightforward. Every new enquiry starts with an honest review of your site. If a service will help, you will get a clear plan and a fair price. If it will not, you will be told that too, before you spend anything.\n\nBecause the same team grows your traffic and builds the website it lands on, strategy, development and marketing stay joined up: one plan, one team, and reporting you can check.",
  contact_email: "contact@seodilated.com",
  contact_phone: "+44 7832 367128",
  updated_at: null,
};

export async function fetchSiteContent(): Promise<SiteContent> {
  const { data, error } = await supabase
    .from("site_content")
    .select("*")
    .eq("id", 1)
    .maybeSingle();
  if (error || !data) return FALLBACK_SITE_CONTENT;
  // Merge: keep the fallback for any field the row leaves null/empty.
  const merged: SiteContent = { ...FALLBACK_SITE_CONTENT };
  const row = data as SiteContent;
  (Object.keys(FALLBACK_SITE_CONTENT) as (keyof SiteContent)[]).forEach(
    (key) => {
      const value = row[key];
      if (value !== null && value !== undefined && value !== "") {
        (merged as unknown as Record<string, unknown>)[key] = value;
      }
    }
  );
  return merged;
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error || !data) return [];
  return data as TeamMember[];
}

// Fallback social links — used only if the `social_links` query fails.
export const FALLBACK_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "fallback-linkedin",
    platform: "LinkedIn Company",
    url: "https://www.linkedin.com/company/seodilated",
    sort_order: 1,
    active: true,
    created_at: "",
  },
];

export async function fetchSocialLinks(): Promise<SocialLink[]> {
  const { data, error } = await supabase
    .from("social_links")
    .select("*")
    .eq("active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error || !data) return FALLBACK_SOCIAL_LINKS;
  return data as SocialLink[];
}

export async function fetchProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error || !data) return [];
  return data as Project[];
}
