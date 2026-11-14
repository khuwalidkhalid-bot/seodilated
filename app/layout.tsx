import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  OG_IMAGE_PATH,
  organizationJsonLd,
  webSiteJsonLd,
} from "@/lib/seo";

const DEFAULT_TITLE = "SEO, Guest Posts & Link Building Agency | SEODilated";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | SEODilated",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Khuwalid Khalid" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "SEO agency",
    "guest posts",
    "buy guest posts",
    "link building services",
    "manual link building",
    "managed link building",
    "niche edits",
    "AEO services",
    "answer engine optimization",
    "GEO services",
    "generative engine optimization",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
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
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationJsonLd, webSiteJsonLd]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
