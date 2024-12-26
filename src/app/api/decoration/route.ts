import { NextResponse } from "next/server";
import { createClient } from "@/lib/utils/supabase/server";

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
