import type { Metadata } from "next";
import Link from "next/link";
import AboutText from "@/components/AboutText";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "About — SEODilated",
  description:
    "SEODilated is led by Khuwalid Khalid, an SEO specialist with 7 years of experience, delivering SEO and digital services through his team.",
};

const teamAreas = [
  {
    title: "SEO & Link Building",
    text: "Guest posting, niche edits, manual outreach and technical SEO — the core of SEODilated since day one.",
  },
  {
    title: "Web Development",
    text: "Fast, secure websites built from scratch and tailored to your business, plus custom WordPress development and ongoing care.",
  },
  {
    title: "Design & UX/UI",
    text: "Clean, conversion-focused design for websites and online stores, so your traffic has somewhere good to land.",
  },
  {
    title: "Ecommerce Services",
    text: "Complete ecommerce management — products, content, SEO and day-to-day upkeep of your store handled by one team.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About SEODilated</h1>
          <p>
            A specialist SEO practice built on manual outreach, honest advice
            and work you can verify link by link.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <div>
              <div className="section-head" style={{ marginBottom: 20 }}>
                <h2>Meet Khuwalid Khalid</h2>
              </div>
              <AboutText />
            </div>
            <div className="card">
              <h3 style={{ marginBottom: 14 }}>At a glance</h3>
              <div className="contact-detail">
                <div className="icon">◈</div>
                <div>
                  <h4>Founder</h4>
                  <p>Khuwalid Khalid — SEO Specialist</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="icon">◈</div>
                <div>
                  <h4>Experience</h4>
                  <p>7 years in SEO and link building</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="icon">◈</div>
                <div>
                  <h4>Specialities</h4>
                  <p>Guest posts, link building, on-page &amp; technical SEO</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="icon">◈</div>
                <div>
                  <h4>Delivery</h4>
                  <p>Through an in-house team: development, WordPress, design, ecommerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>One team, end to end</h2>
            <p>
              SEODilated is more than link building. The team behind it covers
              the full life of a website.
            </p>
          </div>
          <div className="grid grid-2">
            {teamAreas.map((a) => (
              <div className="card" key={a.title}>
                <div className="icon">✓</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="section alt">
        <div className="container">
          <div className="cta-band">
            <h2>Work with us</h2>
            <p>
              Tell us about your site and your goals — the first review is
              free and honest.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
