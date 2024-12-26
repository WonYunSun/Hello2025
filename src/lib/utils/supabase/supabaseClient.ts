import { createClient as createBrowserClient } from "./client";
import { createClient as createServerClient } from "./server";

export const supabase = typeof window === "undefined" ? createServerClient() : createBrowserClient();