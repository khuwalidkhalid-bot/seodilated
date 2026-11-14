import type { Metadata } from "next";

/**
 * Central SEO / GEO configuration for SEODilated.
 * Every page builds its metadata from here so titles, descriptions,
 * canonicals, Open Graph and structured data stay consistent.
 */

export const SITE_URL = "https://www.seodilated.com";
export const SITE_NAME = "SEODilated";
export const SITE_DESCRIPTION =
  "SEODilated is an SEO agency specialising in guest posts, manual link building and search visibility. Real websites, honest reviews, full live-link reporting.";
export const CONTACT_EMAIL = "contact@seodilated.com";
export const CONTACT_PHONE = "+44 7832 367128";
export const OG_IMAGE_PATH = "/seodilated-cover.png";
export const LOGO_PATH = "/seodilated-icon.png";

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/seodilated",
  "https://www.facebook.com/profile.php?id=61596369578420",
];

export const SERVICE_NAMES = [
  "SEO",
  "AEO (Answer Engine Optimization)",
  "GEO (Generative Engine Optimization)",
  "Complete Ecommerce Management",
  "Web Development",
  "WordPress Development",
  "Content Writing",
  "Performance Optimization",
  "Guest Posting",
  "Link Building",
];

/** Build a complete Metadata object for one page. `title` is the short
 *  page title; the root layout template appends "| SEODilated". */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      url,
      title: fullTitle,
      description,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1944,
          height: 960,
          alt: "SEODilated: SEO, guest posts and link building agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

/* ---------------- Structured data (JSON-LD) ---------------- */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_PATH}`,
  image: `${SITE_URL}${OG_IMAGE_PATH}`,
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  slogan: "Guest posts and link building done properly.",
  founder: {
    "@type": "Person",
    name: "Khuwalid Khalid",
    jobTitle: "SEO Specialist",
    description:
      "SEO specialist with 7 years of experience in guest posting, link building and search visibility. Semrush certified in SEO Essentials, Off-Page SEO and AI Search Essentials.",
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    "Worldwide",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    contactType: "sales",
    availableLanguage: ["English"],
  },
  sameAs: SOCIAL_PROFILES,
  knowsAbout: SERVICE_NAMES,
  makesOffer: SERVICE_NAMES.map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
};

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: serviceType ?? name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function webPageJsonLd({
  type,
  name,
  description,
  path,
}: {
  type: "WebPage" | "AboutPage" | "ContactPage";
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}
