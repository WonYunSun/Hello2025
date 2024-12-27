import { NextResponse } from "next/server";
import { createClient } from "@/lib/utils/supabase/server";

export async function GET(request: Request) {
    const supabase = await createClient();
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("uid");
        if (!userId) {
            return NextResponse.json({ error: "UID is required" }, { status: 400 });
        }

        const { data: username, error } = await supabase.from("users").select("username").eq("id", userId).single();
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json(username.username, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const supabase = await createClient();
    try {
        const payload = await request.json();
        const { data, error } = await supabase.from("letters").insert([payload]).select();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}
