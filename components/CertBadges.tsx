/** Trust badges: certifications the founder actually holds, shown with the
 *  official brand mark. Semrush: SEO Essentials plus the combined Off-Page
 *  SEO & AI Search Essentials certificate (valid May 2026 to May 2027). */
export default function CertBadges() {
  return (
    <div className="cert-row" aria-label="Certifications">
      <div className="cert-badge">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/semrush.svg" alt="Semrush" className="cert-logo" />
        <div className="cert-text">
          <span className="cert-name">Semrush Certified</span>
          <span className="cert-sub">
            SEO Essentials · Off-Page SEO · AI Search Essentials
          </span>
        </div>
      </div>
    </div>
  );
}
