"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Service } from "@/lib/types";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service");
  const prefilled = useRef(false);
  const [services, setServices] = useState<Service[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<
    { kind: "success" | "error"; text: string } | null
  >(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("services")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: true });
      if (data) setServices(data as Service[]);
    })();
  }, []);

  // Prefill from /contact?service=<title> (e.g. a "Contact for price" button):
  // preselect the matching service and draft the price-enquiry message. Runs
  // once, as soon as the services list is available; with no (or an unknown)
  // param the form is left exactly as it was.
  useEffect(() => {
    if (prefilled.current || !requestedService || services.length === 0) {
      return;
    }
    const wanted = requestedService.trim().toLowerCase();
    const match =
      services.find((s) => s.title === requestedService) ??
      services.find((s) => s.title.toLowerCase() === wanted);
    if (!match) return;
    prefilled.current = true;
    setService(match.title);
    setMessage(
      (current) =>
        current ||
        `Hi, I would like to know the price for the ${match.title} service.`,
    );
  }, [services, requestedService]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setResult(null);

    const { error } = await supabase.from("leads").insert({
      name: name.trim(),
      email: email.trim(),
      website: website.trim() || null,
      service: service || null,
      message: message.trim() || null,
    });

    setSending(false);

    if (error) {
      setResult({
        kind: "error",
        text: "Something went wrong while sending your message. Please email us directly at contact@seodilated.com and we will get right back to you.",
      });
      return;
    }

    setResult({
      kind: "success",
      text: "Thank you — your message has been received. We will review your site and reply shortly.",
    });
    setName("");
    setEmail("");
    setWebsite("");
    setService("");
    setMessage("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-name">Your name *</label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email *</label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-website">Website</label>
          <input
            id="cf-website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://yourwebsite.com"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-service">Service you are interested in</label>
          <select
            id="cf-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your site, your niche and what you are looking for…"
        />
      </div>
      {result && <div className={`msg ${result.kind}`}>{result.text}</div>}
      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
