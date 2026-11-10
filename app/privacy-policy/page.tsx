import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy | SEODilated",
  description:
    "How SEODilated collects, uses and protects personal data under UK GDPR, what rights you have, and how to contact us or the ICO.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="How we collect, use and protect your personal data when you use www.seodilated.com or work with SEODilated."
    >
      <h2>Who we are</h2>
      <p>
        SEODilated is the data controller of the personal data described in
        this policy. We provide SEO services, including guest posts, niche
        edits, press releases and wider SEO services, through our website at
        www.seodilated.com.
      </p>
      <p>
        If you have any questions about this policy or how we handle your
        data, contact us at{" "}
        <a href="mailto:contact@seodilated.com">
          contact@seodilated.com
        </a>{" "}
        or on +44 7832 367128.
      </p>

      <h2>What personal data we collect</h2>
      <p>
        <strong>Enquiry data.</strong> When you send our contact form, we
        collect your name, email address, website, the service you are
        interested in and your message. The same applies if you contact us
        directly by email or phone.
      </p>
      <p>
        <strong>Order data.</strong> When you place an order, we keep our
        communications with you and the details needed to deliver the work:
        your target website and pages, anchor text, content requirements,
        the placements arranged for you and the live links we report back.
      </p>
      <p>
        <strong>Technical data.</strong> Like most websites, our hosting
        provider processes basic technical information when you visit, such
        as your IP address, browser type and the pages you view. This is
        used to run the site securely and reliably.
      </p>
      <p>
        We do not ask for, and you should not send us, special category data
        or payment card details through the contact form.
      </p>

      <h2>How we use your data</h2>
      <ul>
        <li>To reply to enquiries and provide quotes.</li>
        <li>To deliver the services you order, including arranging placements and sending your live-link report.</li>
        <li>To manage your order, including the free 60-day link replacement where it applies.</li>
        <li>To keep business records and meet our legal and accounting obligations.</li>
        <li>To keep the website secure and working properly.</li>
      </ul>
      <p>We never sell your personal data.</p>

      <h2>Our lawful bases under UK GDPR</h2>
      <p>
        <strong>Contract:</strong> most of what we do with enquiry and order
        data is necessary to take steps at your request before an order, and
        to perform our agreement with you once you order.
      </p>
      <p>
        <strong>Legitimate interests:</strong> we rely on our legitimate
        interests to run and protect our business, keep records of work
        delivered and respond to follow-up questions, where those interests
        do not override your rights.
      </p>
      <p>
        <strong>Consent:</strong> where we ever rely on consent, we will ask
        for it clearly first, and you can withdraw it at any time.
      </p>
      <p>
        <strong>Legal obligation:</strong> we keep certain records because
        the law requires us to, for example for tax and accounting purposes.
      </p>

      <h2>Who we share data with</h2>
      <p>
        We use a small number of service providers to run the business: our
        website hosting provider (Vercel) and our database provider
        (Supabase), which store the contact form submissions and order
        records described above. They process data on our instructions.
      </p>
      <p>
        When a placement goes ahead, the publisher receives the article
        content and the link details needed to publish it. We do not share
        your contact details with publishers unless it is needed for your
        order and you know about it. We may disclose data if the law
        requires it.
      </p>

      <h2>International transfers</h2>
      <p>
        Some of our providers may store or process data outside the United
        Kingdom. Where that happens, the transfer is protected by
        appropriate safeguards recognised by UK data protection law, such as
        UK adequacy regulations or the UK International Data Transfer
        Agreement.
      </p>

      <h2>How long we keep data</h2>
      <p>
        We keep enquiry data for as long as it is relevant to dealing with
        your enquiry and for a reasonable period afterwards. Order records
        are kept for as long as needed to deliver the service, honour the
        60-day replacement, and meet our accounting and legal duties. Data
        that is no longer needed is deleted or anonymised.
      </p>

      <h2>Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>have inaccurate data corrected (rectification);</li>
        <li>have your data erased in certain circumstances;</li>
        <li>restrict how we use your data in certain circumstances;</li>
        <li>receive your data in a portable format in certain circumstances;</li>
        <li>object to processing based on legitimate interests;</li>
        <li>withdraw consent at any time, where consent is the basis we rely on.</li>
      </ul>
      <p>
        To use any of these rights, email{" "}
        <a href="mailto:contact@seodilated.com">
          contact@seodilated.com
        </a>
        . We will respond within one month, and in most cases there is no
        charge.
      </p>

      <h2>Cookies</h2>
      <p>
        This website does not use advertising or marketing cookies. The only
        cookies used are essential ones connected with the admin sign-in
        area. See our <Link href="/cookie-policy">Cookie Policy</Link> for
        details.
      </p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how we have handled your data, please
        contact us first at{" "}
        <a href="mailto:contact@seodilated.com">
          contact@seodilated.com
        </a>{" "}
        and we will try to put it right. You also have the right to complain
        to the Information Commissioner&apos;s Office (ICO), the UK data
        protection regulator, at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The current version
        will always be published on this page with its last updated date.
      </p>

      <h2>Contact us</h2>
      <p>
        SEODilated
        <br />
        Email:{" "}
        <a href="mailto:contact@seodilated.com">
          contact@seodilated.com
        </a>
        <br />
        Phone: <a href="tel:+447832367128">+44 7832 367128</a>
        <br />
        Website: www.seodilated.com
      </p>
    </LegalShell>
  );
}
