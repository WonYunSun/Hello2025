import { NextResponse } from "next/server";
import { createClient } from "@/lib/utils/supabase/server";

export async function GET(request: Request) {
    const supabase = await createClient();
    try {
        const userId = "ebe62c44-7bec-4762-910f-2f00686504cf"; // TODO : 임시 uid
        const { data: username, error } = await supabase.from("users").select("username").eq("id", userId).single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ username }, { status: 200 });
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
