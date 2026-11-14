import type { Metadata } from "next";
import { Suspense } from "react";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import ContactHero from "@/components/ContactHero";
import OtherWays from "@/components/OtherWays";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Talk to Khuwalid Khalid, founder of SEODilated, about your link building campaign. Free, honest site review with every enquiry.",
  path: "/contact",
});

const nextSteps = [
  {
    num: "1",
    title: "Send the form",
    text: "Tell us your website and what you are trying to achieve. Two minutes, and no prepared brief is needed.",
  },
  {
    num: "2",
    title: "Honest review of your site",
    text: "We look at your site, your current links and your niche, and tell you plainly what would help and what would not.",
  },
  {
    num: "3",
    title: "A clear plan with prices",
    text: "You receive matched sites and a per-placement price for each one, in writing, before you commit to anything.",
  },
  {
    num: "4",
    title: "The same person throughout",
    text: "The person you start with is the person who runs your campaign. No handoff to a stranger after you sign up.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            type: "ContactPage",
            name: "Contact SEODilated",
            description:
              "Talk to Khuwalid Khalid, founder of SEODilated, about your link building campaign. Free, honest site review with every enquiry.",
            path: "/contact",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactHero />

      {/* What happens next */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Happens Next</span>
            <h2>A conversation, not a pitch.</h2>
            <p>
              Here is exactly what happens after you get in touch, so there
              are no surprises in either direction.
            </p>
          </div>
          <div className="grid grid-4">
            {nextSteps.map((s) => (
              <div className="card" key={s.num}>
                <div className="step-circle">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + direct contact */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <ContactDetails />

          <div className="card">
            <h3 style={{ marginBottom: 6 }}>Send a message</h3>
            <p style={{ color: "var(--muted)", marginBottom: 22 }}>
              Fill in the form and your enquiry comes straight to us. If you
              arrived from a service page, that service is already selected
              and the first line of your message is drafted for you.
            </p>
            <Suspense fallback={<p className="empty-note">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Other Ways</span>
            <h2>Three other ways to reach us.</h2>
            <p>
              If the form is not the right route for your question, one of
              these will be.
            </p>
          </div>
          <OtherWays />
        </div>
      </section>
    </>
  );
}
