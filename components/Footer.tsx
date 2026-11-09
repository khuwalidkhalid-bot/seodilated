import Link from "next/link";
import Year from "@/components/Year";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo">
              SEO<span>Dilated</span>
            </Link>
            <p style={{ marginTop: 14, maxWidth: 340 }}>
              SEO, guest posting and link building done properly — manual
              outreach, real websites, and full live-link reporting on every
              order.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href="mailto:khuwalid.khalid@gmail.com">
                  khuwalid.khalid@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923363308090">+92-336-3308090</a>
              </li>
              <li>
                <a href="tel:+447832367128">+44 7832 367128</a>
              </li>
              <li>
                <a
                  href="https://www.fiverr.com/ventsmagazine"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fiverr
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/khuwalid-khalid/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <Year /> SEODilated. All rights reserved.
          </span>
          <span>Guest Posts · Link Building · SEO Services</span>
        </div>
      </div>
    </footer>
  );
}
