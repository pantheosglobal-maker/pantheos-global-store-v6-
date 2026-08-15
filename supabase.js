const SUPABASE_URL =
"https://gwlyvkbyrdjzrobrrdun.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3bHl2a2J5cmRqenJvYnJyZHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4MDk1MTUsImV4cCI6MjEwMjM4NTUxNX0.Rku6-9M5GDc3mG2Cb6zZJmUh-_rJd4O96kcXsUI1nyI";

const supabase =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);
