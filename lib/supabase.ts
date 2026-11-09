import { createClient } from "@supabase/supabase-js";

// Public (anon) Supabase client. Safe to use in the browser: the anon key is
// restricted by Row Level Security — anonymous visitors can only submit
// leads and read active services. Admin data access requires a signed-in
// Supabase Auth session.
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
