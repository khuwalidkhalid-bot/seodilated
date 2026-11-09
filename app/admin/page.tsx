"use client";

import { useCallback, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import type { Client, Lead, Order, Service } from "@/lib/types";

type Tab = "overview" | "leads" | "clients" | "orders" | "services";

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

  // ---------- Data loading ----------
  const loadAll = useCallback(async () => {
    setDataLoading(true);
    const [l, c, o, s] = await Promise.all([
      supabase.from("leads").select("*").order("created_at", { ascending: false }),
      supabase.from("clients").select("*").order("created_at", { ascending: false }),
      supabase.from("orders").select("*").order("created_at", { ascending: false }),
      supabase.from("services").select("*").order("created_at", { ascending: true }),
    ]);
    if (l.data) setLeads(l.data as Lead[]);
    if (c.data) setClients(c.data as Client[]);
    if (o.data) setOrders(o.data as Order[]);
    if (s.data) setServices(s.data as Service[]);
    const firstError = l.error || c.error || o.error || s.error;
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
        {(["overview", "leads", "clients", "orders", "services"] as Tab[]).map(
          (t) => (
            <button
              key={t}
              className={`tab-btn${tab === t ? " active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          )
        )}
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
                              style={{ color: "var(--green)" }}
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
    </div>
  );
}
