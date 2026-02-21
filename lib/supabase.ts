import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(
  "https://hrftazyrazrjadalvzty.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyZnRhenlyYXpyamFkYWx2enR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMzM2ODcsImV4cCI6MjA4NjkwOTY4N30.Tma3HNRO7Hei-N4pPHGNYvpJNxYzCsSIresT3ujw2-w",
);
