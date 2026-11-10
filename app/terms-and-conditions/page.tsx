import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms & Conditions | SEODilated",
  description:
    "The terms that govern SEODilated's guest post, niche edit, press release and SEO services, including delivery, the 60-day replacement and governing law.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      intro="The terms that govern your use of www.seodilated.com and any services you order from SEODilated."
    >
      <h2>1. About these terms</h2>
      <p>
        These terms apply to the website www.seodilated.com and to all
        services supplied by SEODilated (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;). By using the website or placing an order with us,
        you agree to these terms. If you do not agree, please do not use the
        website or order services.
      </p>

      <h2>2. Our services</h2>
      <p>
        SEODilated provides search engine optimisation services, in
        particular guest posts, niche edits and press releases, together
        with wider SEO services. Placements are arranged on third-party
        websites through manual outreach. We are not affiliated with the
        websites on which placements appear.
      </p>

      <h2>3. Enquiries and quotes</h2>
      <p>
        We do not publish prices on this website. Every enquiry is quoted
        individually, based on the websites, metrics and requirements
        involved. A quote is provided in writing (usually by email) and is
        an invitation to proceed, not a completed order. If any detail of a
        quote is unclear, ask us before ordering.
      </p>

      <h2>4. Orders and payment</h2>
      <p>
        For every order, the key terms, including what is included, the
        price, the payment arrangements and the estimated timescale, are
        agreed with you in writing before any work starts. Work begins once
        those terms have been agreed. Please check the written order terms
        carefully, as they form part of our agreement with you alongside
        these terms.
      </p>

      <h2>5. Delivery and the live-link report</h2>
      <p>
        Every order is delivered with a full live-link report listing each
        placement and its live URL, so you can check every link yourself.
        Placements depend on third-party publishers, so timescales we give
        are good-faith estimates rather than guaranteed deadlines. We will
        keep you updated if a placement takes longer than expected, and our{" "}
        refund and replacement policy explains your options if a placement
        cannot be delivered.
      </p>

      <h2>6. The 60-day replacement</h2>
      <p>
        If a link we delivered is removed, or is changed to a nofollow or
        sponsored link, within 60 days of the date it went live, tell us and
        we will replace it free of charge with a placement of comparable
        quality.
      </p>
      <p>The replacement does not apply where:</p>
      <ul>
        <li>
          the link stopped working or was removed because of changes you
          made to your own website, for example removing, moving or
          substantially changing the page the link points to; or
        </li>
        <li>
          the link was removed because of changes you asked us to make to
          the published content or anchor text after the placement went
          live.
        </li>
      </ul>

      <h2>7. No guaranteed rankings</h2>
      <p>
        We do not guarantee, and no part of our service should be read as
        guaranteeing, any particular search engine ranking, traffic level
        or business outcome. Search results are controlled by the search
        engines and are affected by many factors outside our control. What
        we commit to is the work itself: placements delivered as agreed and
        reported in full, covered by the replacement described above.
      </p>

      <h2>8. Your responsibilities</h2>
      <ul>
        <li>
          You are responsible for ensuring that your website, and any
          content or material you provide to us, is lawful and does not
          infringe anyone else&apos;s rights.
        </li>
        <li>
          You must give us accurate information about your requirements, so
          placements can be matched to your site correctly.
        </li>
        <li>
          You must not ask us to place links for websites or content that
          breach applicable law or the policies of the publishers involved.
        </li>
      </ul>

      <h2>9. Intellectual property</h2>
      <p>
        The content of this website, including text, design and branding,
        belongs to SEODilated or its licensors and must not be copied or
        reused without our permission. Articles and content we create for a
        paid order are provided for use with that placement and in
        connection with your own website.
      </p>

      <h2>10. Liability</h2>
      <p>
        Nothing in these terms excludes or limits any liability that cannot
        be excluded or limited under English law, including liability for
        death or personal injury caused by negligence, or for fraud or
        fraudulent misrepresentation.
      </p>
      <p>
        Subject to that, we are not liable for indirect or consequential
        losses, including loss of profit, revenue, traffic or search
        rankings, and our total liability in connection with any order is
        limited to the amount you paid for that order. We are not
        responsible for the ongoing availability or content of third-party
        publisher websites, beyond the replacement commitment in section 6.
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The version published
        on this page applies to orders placed after the update takes
        effect; the terms agreed in writing for an existing order continue
        to apply to that order.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These terms, and any dispute arising from them or from our
        services, are governed by the law of England and Wales, and the
        courts of England and Wales have jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href="mailto:contact@seodilated.com">
          contact@seodilated.com
        </a>{" "}
        or +44 7832 367128.
      </p>
    </LegalShell>
  );
}
