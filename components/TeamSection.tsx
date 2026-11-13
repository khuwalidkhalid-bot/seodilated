"use client";

import { useEffect, useState } from "react";
import { fetchTeamMembers } from "@/lib/site";
import type { TeamMember } from "@/lib/types";
import CertBadges from "@/components/CertBadges";

export default function TeamSection({ alt = false }: { alt?: boolean }) {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchTeamMembers().then((m) => {
      if (cancelled) return;
      setMembers(m);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!loaded || members.length === 0) return null;

  return (
    <section className={alt ? "section alt" : "section"}>
      <div className="container">
        <div className="section-head">
          <h2>Meet the team</h2>
          <p>The people behind SEODilated. Specialists, not account managers.</p>
        </div>
        <div className="grid grid-3">
          {members.map((m) => (
            <div className="card" key={m.id}>
              {m.photo_url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="team-photo" src={m.photo_url} alt={m.name} />
              )}
              <h3>{m.name}</h3>
              {m.role && <div className="team-role">{m.role}</div>}
              {m.bio && <p>{m.bio}</p>}
            </div>
          ))}
        </div>
        <CertBadges />
      </div>
    </section>
  );
}
