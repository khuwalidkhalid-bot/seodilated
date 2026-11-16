import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Sends the contact-form enquiry email server-side, through the site's own
// mailbox (mail.altrixcore.com). This replaced the browser-side FormSubmit
// call on 2026-11-16: delivery no longer depends on the visitor's network
// being able to reach a third-party form service. The Supabase lead insert
// in ContactForm stays the record of truth; this route is email only.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const website = String(body.website ?? "").trim() || "-";
  const service = String(body.service ?? "").trim() || "General";
  const message = String(body.message ?? "").trim() || "-";

  if (!name || !email) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const pass = process.env.CONTACT_SMTP_PASSWORD;
  if (!pass) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "mail.altrixcore.com",
    port: 465,
    secure: true,
    auth: { user: "contact@seodilated.com", pass },
  });

  const text = [
    "New enquiry from seodilated.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Website: ${website}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: '"SEODilated Website" <contact@seodilated.com>',
      to: "contact@seodilated.com",
      replyTo: email,
      subject: `New enquiry: ${service} from ${name}`,
      text,
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
