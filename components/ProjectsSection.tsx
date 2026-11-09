"use client";

import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/site";
import type { Project } from "@/lib/types";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchProjects().then((p) => {
      if (cancelled) return;
      setProjects(p);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Hidden entirely while loading or when there are no active projects.
  if (!loaded || projects.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Recent projects</h2>
          <p>
            A selection of websites and campaigns we have worked on — every
            placement reported with a live link the client can verify.
          </p>
        </div>
        <div className="grid grid-3">
          {projects.map((p) => (
            <div className="card" key={p.id}>
              {p.category && <div className="category">{p.category}</div>}
              <h3>{p.title}</h3>
              {p.description && <p>{p.description}</p>}
              {p.result_note && (
                <div className="result-note">
                  <strong>Result:</strong> {p.result_note}
                </div>
              )}
              {p.site_url && (
                <a
                  className="project-link"
                  href={p.site_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit site →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
