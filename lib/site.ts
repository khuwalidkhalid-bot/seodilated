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
  hero_badge: "SEO · Guest Posts · Link Building",
  hero_title: "Grow your search visibility with links that actually count.",
  hero_subtitle:
    "SEODilated is a specialist SEO agency for guest posts, manual link building and search visibility. Real websites, honest advice, and a full live-link report on every single order.",
  about_text:
    "SEODilated is led by Khuwalid Khalid, an SEO specialist with 7 years of experience in search engine optimisation, guest posting and link building. Over that time he has run outreach campaigns for agencies and businesses across a wide range of niches, always with the same rule: real websites, real placements, and a full report the client can check.\n\nHis approach is deliberately straightforward. Every new enquiry starts with an honest review of your site. If a service will help, you will get a clear plan and a fair price. If it will not, you will be told that too — before you spend anything.\n\nToday, SEODilated delivers through a wider team covering web development, WordPress, design and ecommerce — so the same people who grow your traffic can also build and maintain the site it lands on.",
  contact_email: "khuwalid.khalid@gmail.com",
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
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/khuwalid-khalid/",
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
