import type { ReactNode } from "react";

export default function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <p className="legal-updated">Last updated: 10 November 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="legal-prose">{children}</div>
        </div>
      </section>
    </>
  );
}
