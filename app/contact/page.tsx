import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact — SEODilated",
  description:
    "Contact SEODilated for SEO, guest posting and link building services. Free, honest site review with every enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Tell us about your website and what you are trying to achieve. We
            will review your site honestly and reply with a clear plan — no
            obligation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <ContactDetails />

          <div className="card">
            <h3 style={{ marginBottom: 6 }}>Send a message</h3>
            <p style={{ color: "var(--muted)", marginBottom: 22 }}>
              Fill in the form and your enquiry will come straight to us. We
              usually reply with an initial review of your site.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
