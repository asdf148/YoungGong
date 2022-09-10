import * as supabase from "supabase";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

export const client = supabase.createClient(
  config().SUPABASE_API_URL,
  config().SUPABASE_ANON_KEY,
);
