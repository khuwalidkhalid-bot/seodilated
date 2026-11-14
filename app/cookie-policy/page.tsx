import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "The cookies used on www.seodilated.com: essential admin sign-in cookies only. No analytics, advertising or marketing cookies.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalShell
      title="Cookie Policy"
      intro="What cookies are, the very limited way www.seodilated.com uses them, and how you can control cookies in your browser."
    >
      <h2>What cookies are</h2>
      <p>
        Cookies are small text files that a website stores on your device
        when you visit. They are widely used to make websites work, to keep
        users signed in securely, and sometimes to analyse visits or show
        advertising.
      </p>

      <h2>Cookies on this website</h2>
      <p>
        We keep cookie use to the minimum. The public pages of
        www.seodilated.com do not set analytics, advertising or marketing
        cookies, and we do not use cookies to track visitors for
        advertising purposes.
      </p>
      <p>
        The only cookies connected with this website are strictly necessary
        cookies used by the admin sign-in area, so that authorised members
        of our own team can sign in and stay signed in securely while
        managing the site. If you are simply browsing the public website,
        these cookies are not relevant to you.
      </p>
      <p>
        Because these cookies are strictly necessary for a service we
        operate, they do not require consent under UK privacy law, but we
        list them here for transparency.
      </p>

      <h2>Cookie details</h2>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Essential session cookie</td>
              <td>
                Keeps an authorised administrator securely signed in to the
                site management area and protects the sign-in session.
              </td>
              <td>Strictly necessary</td>
              <td>Session / short-term</td>
            </tr>
            <tr>
              <td>Analytics, advertising and marketing cookies</td>
              <td>None are set by this website.</td>
              <td>Not used</td>
              <td>Not applicable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Managing cookies in your browser</h2>
      <p>
        You can view, block or delete cookies at any time through your
        browser settings. Most browsers also let you browse privately so
        cookies are removed when you close the window. Blocking the
        essential cookie above would prevent our team from using the admin
        sign-in area, but the public website will continue to work normally
        for visitors.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If our use of cookies changes, for example if we introduce an
        analytics tool in future, we will update this page first and, where
        the law requires it, ask for your consent before those cookies are
        set.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about cookies:{" "}
        <a href="mailto:contact@seodilated.com">
          contact@seodilated.com
        </a>{" "}
        or +44 7832 367128. For how we handle personal data more generally,
        see our Privacy Policy.
      </p>
    </LegalShell>
  );
}
