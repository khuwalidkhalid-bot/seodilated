import Link from "next/link";
import Reveal from "@/components/Reveal";
import { serviceDetails } from "@/lib/serviceDetails";

/**
 * "Services in detail" homepage section: every service gets an equally
 * weighted detailed block (summary, key included points and both calls to
 * action), built from the same data as the individual service pages.
 */
export default function ServiceDetailsSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Services In Detail</span>
            <h2>Every service, explained properly.</h2>
            <p>
              No one line descriptions. Here is what each service actually
              involves, what is included, and where to read the full detail
              before you ask for a price.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid grid-2">
            {serviceDetails.map((s) => (
              <div className="card" key={s.slug}>
                <h3>{s.title}</h3>
                <p
                  style={{
                    color: "var(--body)",
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  {s.tagline}
                </p>
                <p>{s.summary}</p>
                <ul className="option-list">
                  {s.included.slice(0, 4).map((item) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href={`/contact?service=${encodeURIComponent(s.title)}`}
                    className="btn btn-primary btn-small"
                  >
                    Contact for price
                  </Link>
                  <Link
                    href={`/services/${s.slug}`}
                    className="learn-more"
                    style={{ marginTop: 0 }}
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
