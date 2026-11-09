import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

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
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>Direct contact</h3>
            <div className="contact-detail">
              <div className="icon">✉</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:khuwalid.khalid@gmail.com">
                  khuwalid.khalid@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon">☎</div>
              <div>
                <h4>Phone / WhatsApp</h4>
                <a href="tel:+923363308090">+92-336-3308090</a>
                <br />
                <a href="tel:+447832367128">+44 7832 367128</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon">◈</div>
              <div>
                <h4>Fiverr</h4>
                <a
                  href="https://www.fiverr.com/ventsmagazine"
                  target="_blank"
                  rel="noreferrer"
                >
                  fiverr.com/ventsmagazine
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon">in</div>
              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/khuwalid-khalid/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/khuwalid-khalid
                </a>
              </div>
            </div>
          </div>

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
