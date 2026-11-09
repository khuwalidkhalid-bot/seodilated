# SEODilated — Agency Website

The public website and admin dashboard for **SEODilated**, an SEO agency
specialising in guest posts, link building and search visibility (SEO, AEO,
GEO, ecommerce management, web development, WordPress development, content
writing and performance optimization).

Built with **Next.js (App Router)** and **Supabase** (database + auth).
Dark navy (`#0A1628`) and green (`#22C55E`) design, fully responsive,
English copy throughout.

## Pages

| Route       | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `/`         | Home — hero, services and projects (all live from Supabase), why-us, 4-step process, FAQ, CTA |
| `/services` | All active services, read live from the Supabase `services` table            |
| `/about`    | About text and team members, read live from Supabase                         |
| `/contact`  | Contact details (live from Supabase) plus a working enquiry form that inserts into `leads` |
| `/kk`       | Admin dashboard (Supabase Auth sign-in required)                            |

## How data flows

- **Public site** uses the Supabase **anon key**. Row Level Security allows
  anonymous visitors only to:
  - `INSERT` into `leads` (the contact form),
  - `SELECT` services where `active = true`, and
  - `SELECT` from `site_content`, `team_members`, `projects` and
    `social_links` — so the hero, about text, contact details, team,
    projects and social links (footer + contact page) shown on the site
    all come straight from the database.
- **Admin dashboard** (`/kk`) uses **Supabase Auth** (email + password).
  Signed-in (authenticated) users have full access to all tables —
  `leads`, `clients`, `orders`, `services`, `site_content`, `team_members`,
  `projects`, `social_links` — enforced by RLS policies. The dashboard
  tabs (Overview, Leads, Clients, Orders, Services, Site Content, Team,
  Projects, Social Links) edit this data, and every change is reflected
  on the live website.
- The **service_role key is never used** in this project. Keep it inside
  Supabase only.

## Environment variables

Create `.env.local` in the project root (see `.env.example`):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://gpkvkpriwpkqrpygfscr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon public key from Supabase → Project Settings → API Keys>
```

`.env.local` is git-ignored and must never be committed.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Creating the admin user

The dashboard has no public sign-up. Create the admin account once, in
Supabase:

1. Open the Supabase project → **Authentication** → **Users**.
2. Click **Add user** → enter the admin email and a strong password
   (tick "Auto Confirm User" if offered).
3. Sign in with that email and password at `/kk` on the website.

To add another admin later, repeat the same steps. Anyone with a Supabase
Auth account in this project can sign in to the dashboard, so only create
accounts for people who should have full access.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Import** the repository into the SEODilated team
   (framework preset: Next.js — no build settings need changing).
3. In the Vercel project → **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy. Every later push to the main branch deploys automatically.

## Project structure

```
app/
  layout.tsx        Root layout with header + footer
  page.tsx          Home
  services/         Services page
  about/            About page
  contact/          Contact page
  kk/               Admin dashboard (client component, Supabase Auth)
  globals.css       All styling (hand-written, no framework)
components/
  Header.tsx, Footer.tsx
  ServicesGrid.tsx  Live services grid (Supabase)
  ContactForm.tsx   Enquiry form → inserts into leads
lib/
  supabase.ts       Supabase anon client (env-based)
  types.ts          Lead / Client / Order / Service types
```
