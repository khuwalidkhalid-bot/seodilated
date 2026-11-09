import type { Metadata } from "next";
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services — SEODilated",
  description:
    "SEO, AEO, GEO, ecommerce management, web development, WordPress development, content writing and performance optimization services from SEODilated.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Every service is delivered by our own team and reported in full.
            Pricing depends on your site and your goals — use the Contact for
            price button on any service and we will send you an honest quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>Need something specific?</h2>
            <p>
              If your project does not fit neatly into one service, tell us
              about it — we will give you a straight answer on whether we can
              help.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
