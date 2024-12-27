import { createClient } from "@/lib/utils/supabase/server";
import { NextResponse } from "next/server";

// 해당 유저의 편지와 username을 최상단에 배치한 형태로 반환하는 API
export async function GET(request: Request) {
    const supabase = await createClient();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    if (!userId) {
        return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    }

    // 유저 정보를 먼저 가져오기
    let { data: user, error: userError } = await supabase
        .from("users")
        .select("username, allow_anonymous, count_visibility, letter_visibility")
        .eq("id", userId)
        .single();

    if (userError) {
        console.log(userError);
        return NextResponse.json({ error: userError.message }, { status: 500 });
    }

    // 편지 데이터를 가져오기
    let { data: letter, error: letterError } = await supabase.from("letters").select("*").eq("recipient_id", userId);

    if (letterError) {
        console.error("Failed to fetch letters:", letterError);
        return NextResponse.json({ error: letterError.message }, { status: 500 });
    }

    const responseData = {
        user: user || null,
        letters: letter || []
    };

    return NextResponse.json(responseData);
}
