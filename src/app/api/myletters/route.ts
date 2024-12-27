import { createClient } from "@/lib/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const supabase = await createClient();
    const {
        data: { user: userData }
    } = await supabase.auth.getUser();

    if (!userData) {
        return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    }

    // 유저 정보를 먼저 가져오기
    let { data: user, error: userError } = await supabase
        .from("users")
        .select("username")
        .eq("id", userData.id)
        .single();

    if (userError) {
        console.error("유저 정보 가져오기 오류:", userError);
        return NextResponse.json({ error: userError.message }, { status: 500 });
    }

    // 편지 데이터를 가져오기
    let { data: letters, error: letterError } = await supabase.from("letters").select("*").eq("sender_id", userData.id);

    if (letterError) {
        console.error("편지 데이터 가져오기 오류:", letterError);
        return NextResponse.json({ error: letterError.message }, { status: 500 });
    }

    const responseData = {
        username: user?.username || null,
        letters: letters || []
    };

    return NextResponse.json(responseData);
}
