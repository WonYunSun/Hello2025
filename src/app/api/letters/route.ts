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
    let { data: user, error: userError } = await supabase.from("users").select("username").eq("id", userId).single();
    console.log(user);
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

    // 편지가 없는 경우에도 유저 이름을 포함시켜 반환
    const responseData = {
        username: user?.username || null, // 유저 이름이 없으면 null
        letters: letter || [] // 편지가 없으면 빈 배열 반환
    };

    return NextResponse.json(responseData);
}
