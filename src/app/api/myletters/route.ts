// api/myletters.ts
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

    // 유저 정보를 가져오기
    const { data: user, error: userError } = await supabase
        .from("users")
        .select("username")
        .eq("id", userData.id)
        .single();

    if (userError) {
        console.error("유저 정보 가져오기 오류:", userError);
        return NextResponse.json({ error: userError.message }, { status: 500 });
    }

    // 편지 데이터와 수신자 정보를 가져오기
    const { data: letters, error: letterError } = await supabase
        .from("letters")
        .select("id, content, recipient_id, sender_id") // 필요한 필드 선택
        .eq("sender_id", userData.id);

    if (letterError) {
        console.error("편지 데이터 가져오기 오류:", letterError);
        return NextResponse.json({ error: letterError.message }, { status: 500 });
    }

    // 수신자 이름을 가져오기
    const recipientIds = letters.map((letter) => letter.recipient_id);
    const { data: recipients, error: recipientError } = await supabase
        .from("users")
        .select("id, username")
        .in("id", recipientIds);

    if (recipientError) {
        console.error("수신자 정보 가져오기 오류:", recipientError);
        return NextResponse.json({ error: recipientError.message }, { status: 500 });
    }

    // 수신자 이름을 편지에 추가
    const lettersWithNames = letters.map((letter) => {
        const recipient = recipients.find((user) => user.id === letter.recipient_id);
        return {
            ...letter,
            receiver_name: recipient?.username || "Unknown" // 수신자 이름 추가
        };
    });

    const responseData = {
        username: user?.username || null,
        letters: lettersWithNames || []
    };

    return NextResponse.json(responseData);
}
