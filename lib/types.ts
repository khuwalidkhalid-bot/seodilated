export interface Lead {
  id: string;
  name: string;
  email: string;
  website: string | null;
  service: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

export interface Client {
  id: string;
  name: string;
  email: string | null;
  company: string | null;
  country: string | null;
  notes: string | null;
  created_at: string;
}

export interface Order {
  id: string;
  client_id: string | null;
  service: string;
  site: string | null;
  price: number | null;
  status: string;
  live_link: string | null;
  delivery_date: string | null;
  created_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string | null;
  price: number | null;
  active: boolean;
  created_at: string;
}
