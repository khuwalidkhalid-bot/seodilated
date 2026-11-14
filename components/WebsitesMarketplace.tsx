"use client";

import { Fragment, useEffect, useMemo, useState } from "react";

type Site = {
  s: string;
  p: number;
  d: number;
  t: number;
  c: string;
  n: string;
  l: string;
  r: string;
};

const PAGE_SIZE = 50;

function fmtTraffic(t: number): string {
  if (t >= 1_000_000)
    return (t / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (t >= 1_000) return (t / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(t);
}

export default function WebsitesMarketplace() {
  const [sites, setSites] = useState<Site[] | null>(null);
  const [error, setError] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [minDr, setMinDr] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState("dr");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    fetch("/websites.json")
      .then((r) => r.json())
      .then((d) => setSites(d as Site[]))
      .catch(() => setError(true));
  }, []);

  const cats = useMemo(() => {
    if (!sites) return [] as [string, number][];
    const m = new Map<string, number>();
    sites.forEach((s) => m.set(s.n, (m.get(s.n) || 0) + 1));
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [sites]);

  const filtered = useMemo(() => {
    if (!sites) return [] as Site[];
    const needle = q.trim().toLowerCase();
    const out = sites.filter(
      (s) =>
        (cat === "All" || s.n === cat) &&
        s.d >= minDr &&
        (maxPrice === 0 || s.p <= maxPrice) &&
        (needle === "" || s.s.toLowerCase().includes(needle))
    );
    return [...out].sort((a, b) =>
      sort === "dr"
        ? b.d - a.d || b.t - a.t
        : sort === "traffic"
          ? b.t - a.t
          : sort === "price-asc"
            ? a.p - b.p
            : b.p - a.p
    );
  }, [sites, q, cat, minDr, maxPrice, sort]);

  useEffect(() => {
    setPage(1);
  }, [q, cat, minDr, maxPrice, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const cur = Math.min(page, pages);
  const rows = filtered.slice((cur - 1) * PAGE_SIZE, cur * PAGE_SIZE);

  const pageNums = useMemo(() => {
    const out: number[] = [];
    const start = Math.max(1, Math.min(cur - 2, pages - 4));
    for (let i = start; i <= Math.min(pages, start + 4); i++) out.push(i);
    return out;
  }, [cur, pages]);

  if (error) {
    return (
      <div className="market-box">
        <p style={{ color: "var(--muted)" }}>
          The website list could not be loaded right now. Please refresh the
          page, or contact us and we will send you the current list for your
          niche.
        </p>
      </div>
    );
  }

  if (!sites) {
    return (
      <div className="market-box">
        <p style={{ color: "var(--muted)" }}>Loading websites…</p>
      </div>
    );
  }

  return (
    <div>
      <div className="chips" style={{ marginBottom: 22 }}>
        <button
          type="button"
          className={"chip chip-btn" + (cat === "All" ? " chip-on" : "")}
          onClick={() => setCat("All")}
        >
          All niches ({sites.length.toLocaleString()})
        </button>
        {cats.slice(0, 11).map(([name, count]) => (
          <button
            type="button"
            key={name}
            className={"chip chip-btn" + (cat === name ? " chip-on" : "")}
            onClick={() => setCat(name)}
          >
            {name} ({count.toLocaleString()})
          </button>
        ))}
      </div>

      <div className="market-filters">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search any domain, e.g. forbes.com"
          className="market-input"
          aria-label="Search by domain"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="market-select"
          aria-label="Filter by niche"
        >
          <option value="All">All niches</option>
          {cats.map(([name, count]) => (
            <option key={name} value={name}>
              {name} ({count.toLocaleString()})
            </option>
          ))}
        </select>
        <select
          value={minDr}
          onChange={(e) => setMinDr(Number(e.target.value))}
          className="market-select"
          aria-label="Minimum DR"
        >
          <option value={0}>Any DR</option>
          <option value={30}>DR 30+</option>
          <option value={50}>DR 50+</option>
          <option value={70}>DR 70+</option>
          <option value={80}>DR 80+</option>
          <option value={90}>DR 90+</option>
        </select>
        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="market-select"
          aria-label="Maximum price"
        >
          <option value={0}>Any price</option>
          <option value={50}>Up to $50</option>
          <option value={100}>Up to $100</option>
          <option value={250}>Up to $250</option>
          <option value={500}>Up to $500</option>
          <option value={1000}>Up to $1,000</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="market-select"
          aria-label="Sort results"
        >
          <option value="dr">Sort: Highest DR</option>
          <option value="traffic">Sort: Most traffic</option>
          <option value="price-asc">Sort: Price, low to high</option>
          <option value="price-desc">Sort: Price, high to low</option>
        </select>
      </div>

      <p className="market-count">
        {filtered.length.toLocaleString()} websites
        {cat !== "All" ? ` in ${cat}` : ""} · prices include the article,
        placement and live-link report
      </p>

      <div className="market-box">
        <div className="market-scroll">
          <table className="market-table">
            <thead>
              <tr>
                <th>Website</th>
                <th>DR</th>
                <th>Traffic</th>
                <th>Main audience</th>
                <th>Niche</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s) => (
                <Fragment key={s.s}>
                  <tr>
                    <td>
                      <span className="market-site">{s.s}</span>
                      {s.r ? (
                        <button
                          type="button"
                          className="market-details-btn"
                          onClick={() => setOpen(open === s.s ? null : s.s)}
                        >
                          {open === s.s ? "Hide details" : "Details"}
                        </button>
                      ) : null}
                    </td>
                    <td>
                      <span className="market-dr">{s.d}</span>
                    </td>
                    <td>{fmtTraffic(s.t)}</td>
                    <td>{s.c || "Global"}</td>
                    <td>{s.n}</td>
                    <td>
                      <span className="market-price">
                        ${s.p.toLocaleString()}
                      </span>
                    </td>
                    <td>
                      <a
                        className="btn btn-primary btn-small"
                        href={`/contact?service=${encodeURIComponent("Guest Post: " + s.s)}`}
                      >
                        Order
                      </a>
                    </td>
                  </tr>
                  {open === s.s && s.r ? (
                    <tr key={s.s + "-details"} className="market-details-row">
                      <td colSpan={7}>
                        <strong>Publisher notes:</strong> {s.r}
                        {s.l ? (
                          <>
                            {" "}
                            · <strong>Language:</strong> {s.l}
                          </>
                        ) : null}{" "}
                        · Dofollow placement
                      </td>
                    </tr>
                  ) : null}
                </Fragment>
              ))}
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ color: "var(--muted)" }}>
                    No websites match those filters. Try a lower DR, a higher
                    price limit, or a different niche.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>

      <div className="market-pager">
        <button
          type="button"
          className="btn btn-outline btn-small"
          disabled={cur <= 1}
          onClick={() => setPage(cur - 1)}
        >
          Previous
        </button>
        {pageNums.map((n) => (
          <button
            type="button"
            key={n}
            className={
              "btn btn-small " + (n === cur ? "btn-primary" : "btn-outline")
            }
            onClick={() => setPage(n)}
          >
            {n}
          </button>
        ))}
        <span className="market-pageinfo">
          Page {cur} of {pages.toLocaleString()}
        </span>
        <button
          type="button"
          className="btn btn-outline btn-small"
          disabled={cur >= pages}
          onClick={() => setPage(cur + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
