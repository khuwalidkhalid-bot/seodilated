import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          SEO<span>Dilated</span>
        </Link>
        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/link-building">Link Building</Link>
          <Link href="/guest-posts">Guest Posts</Link>
          <Link href="/aeo">AEO</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact" className="nav-cta">
            Free Site Review
          </Link>
        </nav>
      </div>
    </header>
  );
}
