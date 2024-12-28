import { NextResponse } from "next/server";
import { createClient } from "@/lib/utils/supabase/server";

export async function GET() {
    const supabase = await createClient();
    const {
        data: { session }
    } = await supabase.auth.getSession();

    try {
        if (session) {
            const { data } = await supabase.from("users").select("allow_anonymous").eq("id", session.user.id).single();
            const allow_anonymous = (data as { allow_anonymous: boolean | null })?.allow_anonymous;

            return NextResponse.json(allow_anonymous, { status: 200 });
        }
    } catch (err) {
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}
