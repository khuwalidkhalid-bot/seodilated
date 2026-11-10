import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Refund & Replacement Policy | SEODilated",
  description:
    "How refunds and replacements work at SEODilated: your choice if a placement cannot be delivered, and free 60-day replacement for delivered links.",
};

export default function RefundPolicyPage() {
  return (
    <LegalShell
      title="Refund & Replacement Policy"
      intro="Clear, simple rules for what happens if a placement cannot be delivered, and how delivered links are protected."
    >
      <h2>Our approach</h2>
      <p>
        SEODilated provides digital SEO services: guest posts, niche edits,
        press releases and wider SEO services, arranged individually for
        each order and agreed in writing before work starts. Because every
        order is arranged for a specific client and website, this policy
        explains exactly where you stand if something cannot be delivered
        as agreed.
      </p>

      <h2>If a placement cannot be delivered</h2>
      <p>
        If a placement you have paid for cannot be delivered, for example
        because the publisher declines the content or withdraws the
        placement, you choose one of the following, at no extra cost to
        you:
      </p>
      <ul>
        <li>
          a replacement placement of comparable quality, matched to the
          same requirements as the original; or
        </li>
        <li>a full refund for that placement.</li>
      </ul>

      <h2>Delivered links: replacement, not refund</h2>
      <p>
        Every delivered link is reported to you in your live-link report
        and is covered by our free 60-day replacement. If a delivered link
        is removed, or is changed to a nofollow or sponsored link, within
        60 days of the date it went live, we will replace it free of charge
        with a placement of comparable quality.
      </p>
      <p>
        For links that have been delivered and reported, the remedy under
        this policy is replacement rather than a refund. The same
        exclusions as in our Terms &amp; Conditions apply: the replacement
        does not cover links affected by changes to your own website, or by
        changes you asked us to make to the content or anchor text after
        publication.
      </p>

      <h2>Content writing</h2>
      <p>
        Where an order includes content writing, the content is delivered
        as agreed in the written order terms. If we fail to deliver content
        that was agreed and paid for, the same options apply: we will put
        it right, or refund the undelivered element.
      </p>

      <h2>How to request a refund or replacement</h2>
      <p>
        Email{" "}
        <a href="mailto:khuwalid.khalid@gmail.com">
          khuwalid.khalid@gmail.com
        </a>{" "}
        with your order details and, for a link issue, the URL of the
        placement concerned. We will check the placement, confirm which
        option applies and agree the next step with you.
      </p>

      <h2>Refund processing time</h2>
      <p>
        Approved refunds are processed within 14 days, normally back to the
        original payment method. Depending on your payment provider, the
        money may take a little longer to appear in your account after we
        have processed it.
      </p>

      <h2>Contact us</h2>
      <p>
        SEODilated
        <br />
        Email:{" "}
        <a href="mailto:khuwalid.khalid@gmail.com">
          khuwalid.khalid@gmail.com
        </a>
        <br />
        Phone: <a href="tel:+447832367128">+44 7832 367128</a>
      </p>
    </LegalShell>
  );
}
