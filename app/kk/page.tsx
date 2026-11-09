"use client";

import { useCallback, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import type {
  Client,
  Lead,
  Order,
  Project,
  Service,
  SiteContent,
  SocialLink,
  TeamMember,
} from "@/lib/types";

type Tab =
  | "overview"
  | "leads"
  | "clients"
  | "orders"
  | "services"
  | "site"
  | "team"
  | "projects"
  | "social";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "leads", label: "Leads" },
  { key: "clients", label: "Clients" },
  { key: "orders", label: "Orders" },
  { key: "services", label: "Services" },
  { key: "site", label: "Site Content" },
  { key: "team", label: "Team" },
  { key: "projects", label: "Projects" },
  { key: "social", label: "Social Links" },
];

const LEAD_STATUSES = ["new", "contacted", "closed"];
const ORDER_STATUSES = ["pending", "in-progress", "delivered"];

function fmtDate(value: string | null | undefined) {
  if (!value) return "—";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? value : d.toLocaleDateString();
}

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("overview");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [notice, setNotice] = useState<
    { kind: "success" | "error"; text: string } | null
  >(null);

  // ---------- Auth ----------
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setAuthLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const emptySiteForm = {
    hero_badge: "",
    hero_title: "",
    hero_subtitle: "",
    about_text: "",
    contact_email: "",
    contact_phone: "",
  };
  const [siteForm, setSiteForm] = useState(emptySiteForm);
  const [siteSaving, setSiteSaving] = useState(false);

  // ---------- Data loading ----------
  const loadAll = useCallback(async () => {
    setDataLoading(true);
    const [l, c, o, s, tm, pr, sc, sl] = await Promise.all([
      supabase.from("leads").select("*").order("created_at", { ascending: false }),
      supabase.from("clients").select("*").order("created_at", { ascending: false }),
      supabase.from("orders").select("*").order("created_at", { ascending: false }),
      supabase.from("services").select("*").order("created_at", { ascending: true }),
      supabase
        .from("team_members")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: true }),
      supabase
        .from("projects")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: true }),
      supabase.from("site_content").select("*").eq("id", 1).maybeSingle(),
      supabase
        .from("social_links")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: true }),
    ]);
    if (l.data) setLeads(l.data as Lead[]);
    if (c.data) setClients(c.data as Client[]);
    if (o.data) setOrders(o.data as Order[]);
    if (s.data) setServices(s.data as Service[]);
    if (tm.data) setTeamMembers(tm.data as TeamMember[]);
    if (pr.data) setProjects(pr.data as Project[]);
    if (sl.data) setSocialLinks(sl.data as SocialLink[]);
    if (sc.data) {
      const row = sc.data as SiteContent;
      setSiteForm({
        hero_badge: row.hero_badge ?? "",
        hero_title: row.hero_title ?? "",
        hero_subtitle: row.hero_subtitle ?? "",
        about_text: row.about_text ?? "",
        contact_email: row.contact_email ?? "",
        contact_phone: row.contact_phone ?? "",
      });
    }
    const firstError =
      l.error ||
      c.error ||
      o.error ||
      s.error ||
      tm.error ||
      pr.error ||
      sc.error ||
      sl.error;
    if (firstError) {
      setNotice({
        kind: "error",
        text: `Could not load some data: ${firstError.message}`,
      });
    }
    setDataLoading(false);
  }, []);

  useEffect(() => {
    if (session) loadAll();
  }, [session, loadAll]);

  function flash(kind: "success" | "error", text: string) {
    setNotice({ kind, text });
  }

  // ---------- Login ----------
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginBusy, setLoginBusy] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginBusy(true);
    setLoginError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail.trim(),
      password: loginPassword,
    });
    setLoginBusy(false);
    if (error) setLoginError(error.message);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setSession(null);
  }

  // ---------- Leads ----------
  async function setLeadStatus(id: string, status: string) {
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);
    if (error) return flash("error", `Lead update failed: ${error.message}`);
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    flash("success", "Lead status updated.");
  }

  async function deleteLead(id: string) {
    if (!window.confirm("Delete this lead permanently?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) return flash("error", `Delete failed: ${error.message}`);
    setLeads((prev) => prev.filter((l) => l.id !== id));
    flash("success", "Lead deleted.");
  }

  // ---------- Clients ----------
  const emptyClient = { name: "", email: "", company: "", country: "", notes: "" };
  const [clientForm, setClientForm] = useState(emptyClient);
  const [editingClientId, setEditingClientId] = useState<string | null>(null);

  async function saveClient(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      name: clientForm.name.trim(),
      email: clientForm.email.trim() || null,
      company: clientForm.company.trim() || null,
      country: clientForm.country.trim() || null,
      notes: clientForm.notes.trim() || null,
    };
    const { error } = editingClientId
      ? await supabase.from("clients").update(payload).eq("id", editingClientId)
      : await supabase.from("clients").insert(payload);
    if (error) return flash("error", `Client save failed: ${error.message}`);
    setClientForm(emptyClient);
    setEditingClientId(null);
    flash("success", editingClientId ? "Client updated." : "Client added.");
    loadAll();
  }

  function editClient(c: Client) {
    setEditingClientId(c.id);
    setClientForm({
      name: c.name ?? "",
      email: c.email ?? "",
      company: c.company ?? "",
      country: c.country ?? "",
      notes: c.notes ?? "",
    });
  }

  async function deleteClient(id: string) {
    if (!window.confirm("Delete this client permanently?")) return;
    const { error } = await supabase.from("clients").delete().eq("id", id);
    if (error) return flash("error", `Delete failed: ${error.message}`);
    flash("success", "Client deleted.");
    loadAll();
  }

  // ---------- Orders ----------
  const emptyOrder = {
    client_id: "",
    service: "",
    site: "",
    price: "",
    status: "pending",
    live_link: "",
    delivery_date: "",
  };
  const [orderForm, setOrderForm] = useState(emptyOrder);
  const [editingOrderId, setEditingOrderId] = useState<string | null>(null);

  async function saveOrder(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      client_id: orderForm.client_id || null,
      service: orderForm.service.trim(),
      site: orderForm.site.trim() || null,
      price: orderForm.price === "" ? null : Number(orderForm.price),
      status: orderForm.status,
      live_link: orderForm.live_link.trim() || null,
      delivery_date: orderForm.delivery_date || null,
    };
    const { error } = editingOrderId
      ? await supabase.from("orders").update(payload).eq("id", editingOrderId)
      : await supabase.from("orders").insert(payload);
    if (error) return flash("error", `Order save failed: ${error.message}`);
    setOrderForm(emptyOrder);
    setEditingOrderId(null);
    flash("success", editingOrderId ? "Order updated." : "Order added.");
    loadAll();
  }

  function editOrder(o: Order) {
    setEditingOrderId(o.id);
    setOrderForm({
      client_id: o.client_id ?? "",
      service: o.service ?? "",
      site: o.site ?? "",
      price: o.price != null ? String(o.price) : "",
      status: o.status ?? "pending",
      live_link: o.live_link ?? "",
      delivery_date: o.delivery_date ?? "",
    });
  }

  async function deleteOrder(id: string) {
    if (!window.confirm("Delete this order permanently?")) return;
    const { error } = await supabase.from("orders").delete().eq("id", id);
    if (error) return flash("error", `Delete failed: ${error.message}`);
    flash("success", "Order deleted.");
    loadAll();
  }

  // ---------- Services ----------
  const emptyService = { title: "", description: "", price: "", active: true };
  const [serviceForm, setServiceForm] = useState(emptyService);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);

  async function saveService(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      title: serviceForm.title.trim(),
      description: serviceForm.description.trim() || null,
      price: serviceForm.price === "" ? null : Number(serviceForm.price),
      active: serviceForm.active,
    };
    const { error } = editingServiceId
      ? await supabase.from("services").update(payload).eq("id", editingServiceId)
      : await supabase.from("services").insert(payload);
    if (error) return flash("error", `Service save failed: ${error.message}`);
    setServiceForm(emptyService);
    setEditingServiceId(null);
    flash("success", editingServiceId ? "Service updated." : "Service added.");
    loadAll();
  }

  function editService(s: Service) {
    setEditingServiceId(s.id);
    setServiceForm({
      title: s.title ?? "",
      description: s.description ?? "",
      price: s.price != null ? String(s.price) : "",
      active: s.active,
    });
  }

  async function deleteService(id: string) {
    if (!window.confirm("Delete this service permanently?")) return;
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) return flash("error", `Delete failed: ${error.message}`);
    flash("success", "Service deleted.");
    loadAll();
  }

  // ---------- Site Content ----------
  async function saveSiteContent(e: React.FormEvent) {
    e.preventDefault();
    setSiteSaving(true);
    const payload = {
      hero_badge: siteForm.hero_badge.trim() || null,
      hero_title: siteForm.hero_title.trim() || null,
      hero_subtitle: siteForm.hero_subtitle.trim() || null,
      about_text: siteForm.about_text.trim() || null,
      contact_email: siteForm.contact_email.trim() || null,
      contact_phone: siteForm.contact_phone.trim() || null,
      updated_at: new Date().toISOString(),
    };
    const { data, error } = await supabase
      .from("site_content")
      .update(payload)
      .eq("id", 1)
      .select();
    setSiteSaving(false);
    if (error) {
      return flash("error", `Site content save failed: ${error.message}`);
    }
    if (!data || data.length === 0) {
      return flash(
        "error",
        "Site content save failed: no site_content row with id 1 was updated."
      );
    }
    flash(
      "success",
      "Site content saved — the changes are live on the website now."
    );
  }

  // ---------- Team ----------
  const emptyTeamMember = {
    name: "",
    role: "",
    bio: "",
    photo_url: "",
    sort_order: "0",
    active: true,
  };
  const [teamForm, setTeamForm] = useState(emptyTeamMember);
  const [editingTeamId, setEditingTeamId] = useState<string | null>(null);

  async function saveTeamMember(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      name: teamForm.name.trim(),
      role: teamForm.role.trim() || null,
      bio: teamForm.bio.trim() || null,
      photo_url: teamForm.photo_url.trim() || null,
      sort_order: Number(teamForm.sort_order) || 0,
      active: teamForm.active,
    };
    const { error } = editingTeamId
      ? await supabase.from("team_members").update(payload).eq("id", editingTeamId)
      : await supabase.from("team_members").insert(payload);
    if (error) return flash("error", `Team member save failed: ${error.message}`);
    setTeamForm(emptyTeamMember);
    setEditingTeamId(null);
    flash(
      "success",
      editingTeamId ? "Team member updated." : "Team member added."
    );
    loadAll();
  }

  function editTeamMember(m: TeamMember) {
    setEditingTeamId(m.id);
    setTeamForm({
      name: m.name ?? "",
      role: m.role ?? "",
      bio: m.bio ?? "",
      photo_url: m.photo_url ?? "",
      sort_order: String(m.sort_order ?? 0),
      active: m.active,
    });
  }

  async function deleteTeamMember(id: string) {
    if (!window.confirm("Delete this team member permanently?")) return;
    const { error } = await supabase.from("team_members").delete().eq("id", id);
    if (error) return flash("error", `Delete failed: ${error.message}`);
    flash("success", "Team member deleted.");
    loadAll();
  }

  // ---------- Projects ----------
  const emptyProject = {
    title: "",
    description: "",
    category: "",
    site_url: "",
    result_note: "",
    sort_order: "0",
    active: true,
  };
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  async function saveProject(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      title: projectForm.title.trim(),
      description: projectForm.description.trim() || null,
      category: projectForm.category.trim() || null,
      site_url: projectForm.site_url.trim() || null,
      result_note: projectForm.result_note.trim() || null,
      sort_order: Number(projectForm.sort_order) || 0,
      active: projectForm.active,
    };
    const { error } = editingProjectId
      ? await supabase.from("projects").update(payload).eq("id", editingProjectId)
      : await supabase.from("projects").insert(payload);
    if (error) return flash("error", `Project save failed: ${error.message}`);
    setProjectForm(emptyProject);
    setEditingProjectId(null);
    flash("success", editingProjectId ? "Project updated." : "Project added.");
    loadAll();
  }

  function editProject(p: Project) {
    setEditingProjectId(p.id);
    setProjectForm({
      title: p.title ?? "",
      description: p.description ?? "",
      category: p.category ?? "",
      site_url: p.site_url ?? "",
      result_note: p.result_note ?? "",
      sort_order: String(p.sort_order ?? 0),
      active: p.active,
    });
  }

  async function deleteProject(id: string) {
    if (!window.confirm("Delete this project permanently?")) return;
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) return flash("error", `Delete failed: ${error.message}`);
    flash("success", "Project deleted.");
    loadAll();
  }

  // ---------- Social Links ----------
  const emptySocialLink = {
    platform: "",
    url: "",
    sort_order: "0",
    active: true,
  };
  const [socialForm, setSocialForm] = useState(emptySocialLink);
  const [editingSocialId, setEditingSocialId] = useState<string | null>(null);

  async function saveSocialLink(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      platform: socialForm.platform.trim(),
      url: socialForm.url.trim(),
      sort_order: Number(socialForm.sort_order) || 0,
      active: socialForm.active,
    };
    const { error } = editingSocialId
      ? await supabase
          .from("social_links")
          .update(payload)
          .eq("id", editingSocialId)
      : await supabase.from("social_links").insert(payload);
    if (error)
      return flash("error", `Social link save failed: ${error.message}`);
    setSocialForm(emptySocialLink);
    setEditingSocialId(null);
    flash(
      "success",
      editingSocialId ? "Social link updated." : "Social link added."
    );
    loadAll();
  }

  function editSocialLink(link: SocialLink) {
    setEditingSocialId(link.id);
    setSocialForm({
      platform: link.platform ?? "",
      url: link.url ?? "",
      sort_order: String(link.sort_order ?? 0),
      active: link.active,
    });
  }

  async function deleteSocialLink(id: string) {
    if (!window.confirm("Delete this social link permanently?")) return;
    const { error } = await supabase.from("social_links").delete().eq("id", id);
    if (error) return flash("error", `Delete failed: ${error.message}`);
    flash("success", "Social link deleted.");
    loadAll();
  }

  // ---------- Render ----------
  if (authLoading) {
    return (
      <div className="admin-wrap">
        <p className="loading-note">Loading…</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="admin-wrap">
        <div className="admin-login">
          <h1>Admin Sign In</h1>
          <p>
            This is the SEODilated dashboard&apos;s own sign-in. Enter the
            admin email and password created for this website.
          </p>
          <form className="form" onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="admin-email">Email</label>
              <input
                id="admin-email"
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@example.com"
              />
            </div>
            <div className="field">
              <label htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>
            {loginError && <div className="msg error">{loginError}</div>}
            <button type="submit" className="btn btn-primary" disabled={loginBusy}>
              {loginBusy ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const newLeads = leads.filter((l) => l.status === "new").length;
  const clientName = (id: string | null) =>
    clients.find((c) => c.id === id)?.name ?? "—";

  return (
    <div className="admin-wrap">
      <div className="admin-topbar">
        <h1>SEODilated Dashboard</h1>
        <div>
          <span className="user-email">{session.user.email}</span>
          <button className="btn btn-outline btn-small" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>

      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`tab-btn${tab === t.key ? " active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {notice && (
        <div className={`msg ${notice.kind}`} style={{ marginBottom: 20 }}>
          {notice.text}
        </div>
      )}
      {dataLoading && <p className="empty-note">Refreshing data…</p>}

      {tab === "overview" && (
        <>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="num">{leads.length}</div>
              <div className="lbl">Total Leads</div>
            </div>
            <div className="stat-card">
              <div className="num">{newLeads}</div>
              <div className="lbl">New Leads</div>
            </div>
            <div className="stat-card">
              <div className="num">{clients.length}</div>
              <div className="lbl">Clients</div>
            </div>
            <div className="stat-card">
              <div className="num">{orders.length}</div>
              <div className="lbl">Orders</div>
            </div>
          </div>
          <div className="panel">
            <h2>Recent Leads</h2>
            {leads.length === 0 ? (
              <p className="empty-note">No leads yet.</p>
            ) : (
              <div className="table-scroll">
                <table className="data">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Service</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.slice(0, 5).map((l) => (
                      <tr key={l.id}>
                        <td>{l.name}</td>
                        <td>{l.email}</td>
                        <td>{l.service ?? "—"}</td>
                        <td>
                          <span className={`status-pill ${l.status}`}>
                            {l.status}
                          </span>
                        </td>
                        <td>{fmtDate(l.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {tab === "leads" && (
        <div className="panel">
          <h2>Leads</h2>
          {leads.length === 0 ? (
            <p className="empty-note">No leads yet.</p>
          ) : (
            <div className="table-scroll">
              <table className="data">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Service</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((l) => (
                    <tr key={l.id}>
                      <td>{l.name}</td>
                      <td>{l.email}</td>
                      <td>{l.website ?? "—"}</td>
                      <td>{l.service ?? "—"}</td>
                      <td style={{ maxWidth: 260 }}>{l.message ?? "—"}</td>
                      <td>
                        <select
                          value={l.status}
                          onChange={(e) => setLeadStatus(l.id, e.target.value)}
                        >
                          {LEAD_STATUSES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>{fmtDate(l.created_at)}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-small"
                          onClick={() => deleteLead(l.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {tab === "clients" && (
        <>
          <div className="panel">
            <h2>{editingClientId ? "Edit Client" : "Add Client"}</h2>
            <form className="form" onSubmit={saveClient}>
              <div className="form-grid">
                <div className="field">
                  <label>Name *</label>
                  <input
                    required
                    value={clientForm.name}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, name: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    value={clientForm.email}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, email: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input
                    value={clientForm.company}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, company: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Country</label>
                  <input
                    value={clientForm.country}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, country: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="field">
                <label>Notes</label>
                <textarea
                  style={{ minHeight: 80 }}
                  value={clientForm.notes}
                  onChange={(e) =>
                    setClientForm({ ...clientForm, notes: e.target.value })
                  }
                />
              </div>
              <div className="row-actions">
                <button type="submit" className="btn btn-primary btn-small">
                  {editingClientId ? "Update Client" : "Add Client"}
                </button>
                {editingClientId && (
                  <button
                    type="button"
                    className="btn btn-outline btn-small"
                    onClick={() => {
                      setEditingClientId(null);
                      setClientForm(emptyClient);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="panel">
            <h2>Clients</h2>
            {clients.length === 0 ? (
              <p className="empty-note">No clients yet.</p>
            ) : (
              <div className="table-scroll">
                <table className="data">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Country</th>
                      <th>Notes</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((c) => (
                      <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>{c.email ?? "—"}</td>
                        <td>{c.company ?? "—"}</td>
                        <td>{c.country ?? "—"}</td>
                        <td style={{ maxWidth: 220 }}>{c.notes ?? "—"}</td>
                        <td>
                          <div className="row-actions">
                            <button
                              className="btn btn-outline btn-small"
                              onClick={() => editClient(c)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-small"
                              onClick={() => deleteClient(c.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {tab === "orders" && (
        <>
          <div className="panel">
            <h2>{editingOrderId ? "Edit Order" : "Add Order"}</h2>
            <form className="form" onSubmit={saveOrder}>
              <div className="form-grid">
                <div className="field">
                  <label>Client</label>
                  <select
                    value={orderForm.client_id}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, client_id: e.target.value })
                    }
                  >
                    <option value="">Select a client…</option>
                    {clients.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label>Service *</label>
                  <input
                    required
                    value={orderForm.service}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, service: e.target.value })
                    }
                    placeholder="e.g. Guest Post"
                  />
                </div>
                <div className="field">
                  <label>Site (publication)</label>
                  <input
                    value={orderForm.site}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, site: e.target.value })
                    }
                    placeholder="e.g. example.com"
                  />
                </div>
                <div className="field">
                  <label>Price</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={orderForm.price}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, price: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Status</label>
                  <select
                    value={orderForm.status}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, status: e.target.value })
                    }
                  >
                    {ORDER_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label>Delivery date</label>
                  <input
                    type="date"
                    value={orderForm.delivery_date}
                    onChange={(e) =>
                      setOrderForm({
                        ...orderForm,
                        delivery_date: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="field">
                <label>Live link</label>
                <input
                  value={orderForm.live_link}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, live_link: e.target.value })
                  }
                  placeholder="https://…"
                />
              </div>
              <div className="row-actions">
                <button type="submit" className="btn btn-primary btn-small">
                  {editingOrderId ? "Update Order" : "Add Order"}
                </button>
                {editingOrderId && (
                  <button
                    type="button"
                    className="btn btn-outline btn-small"
                    onClick={() => {
                      setEditingOrderId(null);
                      setOrderForm(emptyOrder);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="panel">
            <h2>Orders</h2>
            {orders.length === 0 ? (
              <p className="empty-note">No orders yet.</p>
            ) : (
              <div className="table-scroll">
                <table className="data">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Service</th>
                      <th>Site</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Live Link</th>
                      <th>Delivery</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o) => (
                      <tr key={o.id}>
                        <td>{clientName(o.client_id)}</td>
                        <td>{o.service}</td>
                        <td>{o.site ?? "—"}</td>
                        <td>
                          {o.price != null
                            ? `$${Number(o.price).toLocaleString()}`
                            : "—"}
                        </td>
                        <td>
                          <span className={`status-pill ${o.status}`}>
                            {o.status}
                          </span>
                        </td>
                        <td style={{ maxWidth: 200, wordBreak: "break-all" }}>
                          {o.live_link ? (
                            <a
                              href={o.live_link}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: "var(--accent)" }}
                            >
                              {o.live_link}
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td>{fmtDate(o.delivery_date)}</td>
                        <td>
                          <div className="row-actions">
                            <button
                              className="btn btn-outline btn-small"
                              onClick={() => editOrder(o)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-small"
                              onClick={() => deleteOrder(o.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {tab === "services" && (
        <>
          <div className="panel">
            <h2>{editingServiceId ? "Edit Service" : "Add Service"}</h2>
            <form className="form" onSubmit={saveService}>
              <div className="form-grid">
                <div className="field">
                  <label>Title *</label>
                  <input
                    required
                    value={serviceForm.title}
                    onChange={(e) =>
                      setServiceForm({ ...serviceForm, title: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Price (leave empty to hide)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={serviceForm.price}
                    onChange={(e) =>
                      setServiceForm({ ...serviceForm, price: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="field">
                <label>Description</label>
                <textarea
                  style={{ minHeight: 80 }}
                  value={serviceForm.description}
                  onChange={(e) =>
                    setServiceForm({
                      ...serviceForm,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <label className="checkbox-field" style={{ paddingTop: 0 }}>
                <input
                  type="checkbox"
                  checked={serviceForm.active}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, active: e.target.checked })
                  }
                />
                Active (visible on the public site)
              </label>
              <div className="row-actions">
                <button type="submit" className="btn btn-primary btn-small">
                  {editingServiceId ? "Update Service" : "Add Service"}
                </button>
                {editingServiceId && (
                  <button
                    type="button"
                    className="btn btn-outline btn-small"
                    onClick={() => {
                      setEditingServiceId(null);
                      setServiceForm(emptyService);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="panel">
            <h2>Services</h2>
            {services.length === 0 ? (
              <p className="empty-note">No services yet.</p>
            ) : (
              <div className="table-scroll">
                <table className="data">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Active</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((s) => (
                      <tr key={s.id}>
                        <td>{s.title}</td>
                        <td style={{ maxWidth: 320 }}>{s.description ?? "—"}</td>
                        <td>
                          {s.price != null
                            ? `$${Number(s.price).toLocaleString()}`
                            : "—"}
                        </td>
                        <td>{s.active ? "Yes" : "No"}</td>
                        <td>
                          <div className="row-actions">
                            <button
                              className="btn btn-outline btn-small"
                              onClick={() => editService(s)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-small"
                              onClick={() => deleteService(s.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {tab === "site" && (
        <div className="panel">
          <h2>Site Content</h2>
          <p style={{ color: "var(--muted)", marginBottom: 20, fontSize: "0.95rem" }}>
            Everything here appears on the live website. Saving updates the
            homepage hero, the About page text, and the email/phone shown in
            the footer and on the Contact page.
          </p>
          <form className="form" onSubmit={saveSiteContent}>
            <div className="field">
              <label>Hero badge (small line above the main heading)</label>
              <input
                value={siteForm.hero_badge}
                onChange={(e) =>
                  setSiteForm({ ...siteForm, hero_badge: e.target.value })
                }
                placeholder="SEO · Guest Posts · Link Building"
              />
            </div>
            <div className="field">
              <label>Hero title (main homepage heading)</label>
              <textarea
                style={{ minHeight: 70 }}
                value={siteForm.hero_title}
                onChange={(e) =>
                  setSiteForm({ ...siteForm, hero_title: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label>Hero subtitle (text under the heading)</label>
              <textarea
                style={{ minHeight: 90 }}
                value={siteForm.hero_subtitle}
                onChange={(e) =>
                  setSiteForm({ ...siteForm, hero_subtitle: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label>About text (About page — separate paragraphs with a blank line)</label>
              <textarea
                style={{ minHeight: 180 }}
                value={siteForm.about_text}
                onChange={(e) =>
                  setSiteForm({ ...siteForm, about_text: e.target.value })
                }
              />
            </div>
            <div className="form-grid">
              <div className="field">
                <label>Contact email</label>
                <input
                  type="email"
                  value={siteForm.contact_email}
                  onChange={(e) =>
                    setSiteForm({ ...siteForm, contact_email: e.target.value })
                  }
                />
              </div>
              <div className="field">
                <label>Contact phone</label>
                <input
                  value={siteForm.contact_phone}
                  onChange={(e) =>
                    setSiteForm({ ...siteForm, contact_phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row-actions">
              <button
                type="submit"
                className="btn btn-primary btn-small"
                disabled={siteSaving}
              >
                {siteSaving ? "Saving…" : "Save Site Content"}
              </button>
            </div>
          </form>
        </div>
      )}

      {tab === "team" && (
        <>
          <div className="panel">
            <h2>{editingTeamId ? "Edit Team Member" : "Add Team Member"}</h2>
            <form className="form" onSubmit={saveTeamMember}>
              <div className="form-grid">
                <div className="field">
                  <label>Name *</label>
                  <input
                    required
                    value={teamForm.name}
                    onChange={(e) =>
                      setTeamForm({ ...teamForm, name: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Role</label>
                  <input
                    value={teamForm.role}
                    onChange={(e) =>
                      setTeamForm({ ...teamForm, role: e.target.value })
                    }
                    placeholder="e.g. Founder & SEO Specialist"
                  />
                </div>
                <div className="field">
                  <label>Photo URL (optional)</label>
                  <input
                    value={teamForm.photo_url}
                    onChange={(e) =>
                      setTeamForm({ ...teamForm, photo_url: e.target.value })
                    }
                    placeholder="https://…"
                  />
                </div>
                <div className="field">
                  <label>Sort order</label>
                  <input
                    type="number"
                    step="1"
                    value={teamForm.sort_order}
                    onChange={(e) =>
                      setTeamForm({ ...teamForm, sort_order: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="field">
                <label>Bio</label>
                <textarea
                  style={{ minHeight: 80 }}
                  value={teamForm.bio}
                  onChange={(e) =>
                    setTeamForm({ ...teamForm, bio: e.target.value })
                  }
                />
              </div>
              <label className="checkbox-field" style={{ paddingTop: 0 }}>
                <input
                  type="checkbox"
                  checked={teamForm.active}
                  onChange={(e) =>
                    setTeamForm({ ...teamForm, active: e.target.checked })
                  }
                />
                Active (visible on the public site)
              </label>
              <div className="row-actions">
                <button type="submit" className="btn btn-primary btn-small">
                  {editingTeamId ? "Update Team Member" : "Add Team Member"}
                </button>
                {editingTeamId && (
                  <button
                    type="button"
                    className="btn btn-outline btn-small"
                    onClick={() => {
                      setEditingTeamId(null);
                      setTeamForm(emptyTeamMember);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="panel">
            <h2>Team</h2>
            {teamMembers.length === 0 ? (
              <p className="empty-note">No team members yet.</p>
            ) : (
              <div className="table-scroll">
                <table className="data">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Bio</th>
                      <th>Photo</th>
                      <th>Order</th>
                      <th>Active</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((m) => (
                      <tr key={m.id}>
                        <td>{m.name}</td>
                        <td>{m.role ?? "—"}</td>
                        <td style={{ maxWidth: 260 }}>{m.bio ?? "—"}</td>
                        <td>{m.photo_url ? "Yes" : "—"}</td>
                        <td>{m.sort_order}</td>
                        <td>{m.active ? "Yes" : "No"}</td>
                        <td>
                          <div className="row-actions">
                            <button
                              className="btn btn-outline btn-small"
                              onClick={() => editTeamMember(m)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-small"
                              onClick={() => deleteTeamMember(m.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {tab === "projects" && (
        <>
          <div className="panel">
            <h2>{editingProjectId ? "Edit Project" : "Add Project"}</h2>
            <form className="form" onSubmit={saveProject}>
              <div className="form-grid">
                <div className="field">
                  <label>Title *</label>
                  <input
                    required
                    value={projectForm.title}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, title: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Category</label>
                  <input
                    value={projectForm.category}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        category: e.target.value,
                      })
                    }
                    placeholder="e.g. Guest Posting"
                  />
                </div>
                <div className="field">
                  <label>Site URL</label>
                  <input
                    value={projectForm.site_url}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        site_url: e.target.value,
                      })
                    }
                    placeholder="https://…"
                  />
                </div>
                <div className="field">
                  <label>Sort order</label>
                  <input
                    type="number"
                    step="1"
                    value={projectForm.sort_order}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        sort_order: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="field">
                <label>Description</label>
                <textarea
                  style={{ minHeight: 80 }}
                  value={projectForm.description}
                  onChange={(e) =>
                    setProjectForm({
                      ...projectForm,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="field">
                <label>Result note (e.g. traffic or ranking outcome)</label>
                <textarea
                  style={{ minHeight: 60 }}
                  value={projectForm.result_note}
                  onChange={(e) =>
                    setProjectForm({
                      ...projectForm,
                      result_note: e.target.value,
                    })
                  }
                />
              </div>
              <label className="checkbox-field" style={{ paddingTop: 0 }}>
                <input
                  type="checkbox"
                  checked={projectForm.active}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, active: e.target.checked })
                  }
                />
                Active (visible on the public site)
              </label>
              <div className="row-actions">
                <button type="submit" className="btn btn-primary btn-small">
                  {editingProjectId ? "Update Project" : "Add Project"}
                </button>
                {editingProjectId && (
                  <button
                    type="button"
                    className="btn btn-outline btn-small"
                    onClick={() => {
                      setEditingProjectId(null);
                      setProjectForm(emptyProject);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="panel">
            <h2>Projects</h2>
            {projects.length === 0 ? (
              <p className="empty-note">
                No projects yet. Projects you add appear on the homepage.
              </p>
            ) : (
              <div className="table-scroll">
                <table className="data">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Site</th>
                      <th>Order</th>
                      <th>Active</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((p) => (
                      <tr key={p.id}>
                        <td>{p.title}</td>
                        <td>{p.category ?? "—"}</td>
                        <td style={{ maxWidth: 260 }}>{p.description ?? "—"}</td>
                        <td style={{ maxWidth: 180, wordBreak: "break-all" }}>
                          {p.site_url ? (
                            <a
                              href={p.site_url}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: "var(--accent)" }}
                            >
                              {p.site_url}
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td>{p.sort_order}</td>
                        <td>{p.active ? "Yes" : "No"}</td>
                        <td>
                          <div className="row-actions">
                            <button
                              className="btn btn-outline btn-small"
                              onClick={() => editProject(p)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-small"
                              onClick={() => deleteProject(p.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {tab === "social" && (
        <>
          <div className="panel">
            <h2>{editingSocialId ? "Edit Social Link" : "Add Social Link"}</h2>
            <form className="form" onSubmit={saveSocialLink}>
              <div className="form-grid">
                <div className="field">
                  <label>Platform *</label>
                  <input
                    required
                    value={socialForm.platform}
                    onChange={(e) =>
                      setSocialForm({ ...socialForm, platform: e.target.value })
                    }
                    placeholder="e.g. LinkedIn"
                  />
                </div>
                <div className="field">
                  <label>URL *</label>
                  <input
                    required
                    value={socialForm.url}
                    onChange={(e) =>
                      setSocialForm({ ...socialForm, url: e.target.value })
                    }
                    placeholder="https://…"
                  />
                </div>
                <div className="field">
                  <label>Sort order</label>
                  <input
                    type="number"
                    step="1"
                    value={socialForm.sort_order}
                    onChange={(e) =>
                      setSocialForm({
                        ...socialForm,
                        sort_order: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <label className="checkbox-field" style={{ paddingTop: 0 }}>
                <input
                  type="checkbox"
                  checked={socialForm.active}
                  onChange={(e) =>
                    setSocialForm({ ...socialForm, active: e.target.checked })
                  }
                />
                Active (visible on the public site)
              </label>
              <div className="row-actions">
                <button type="submit" className="btn btn-primary btn-small">
                  {editingSocialId ? "Update Social Link" : "Add Social Link"}
                </button>
                {editingSocialId && (
                  <button
                    type="button"
                    className="btn btn-outline btn-small"
                    onClick={() => {
                      setEditingSocialId(null);
                      setSocialForm(emptySocialLink);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="panel">
            <h2>Social Links</h2>
            {socialLinks.length === 0 ? (
              <p className="empty-note">
                No social links yet. Links you add appear in the site footer
                and on the contact page.
              </p>
            ) : (
              <div className="table-scroll">
                <table className="data">
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>URL</th>
                      <th>Order</th>
                      <th>Active</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {socialLinks.map((link) => (
                      <tr key={link.id}>
                        <td>{link.platform}</td>
                        <td style={{ maxWidth: 260, wordBreak: "break-all" }}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "var(--accent)" }}
                          >
                            {link.url}
                          </a>
                        </td>
                        <td>{link.sort_order}</td>
                        <td>{link.active ? "Yes" : "No"}</td>
                        <td>
                          <div className="row-actions">
                            <button
                              className="btn btn-outline btn-small"
                              onClick={() => editSocialLink(link)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-small"
                              onClick={() => deleteSocialLink(link.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
