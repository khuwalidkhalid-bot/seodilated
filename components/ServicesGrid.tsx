"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Service } from "@/lib/types";

export default function ServicesGrid({ limit }: { limit?: number }) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: true });
      if (cancelled) return;
      if (error) {
        setFailed(true);
      } else {
        setServices((data as Service[]) ?? []);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <p className="empty-note">Loading services…</p>;
  }

  if (failed) {
    return (
      <p className="empty-note">
        Our service list could not be loaded right now. Please contact us and
        we will send you the full list with prices.
      </p>
    );
  }

  if (services.length === 0) {
    return (
      <p className="empty-note">
        New services are being added. Please contact us for the current list.
      </p>
    );
  }

  const shown = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid grid-3">
      {shown.map((s) => (
        <div className="card" key={s.id}>
          <div className="icon">◆</div>
          <h3>{s.title}</h3>
          {s.description && <p>{s.description}</p>}
          <Link
            href={`/contact?service=${encodeURIComponent(s.title)}`}
            className="btn btn-primary btn-small card-cta"
          >
            Contact for price
          </Link>
        </div>
      ))}
    </div>
  );
}
