import { NextResponse } from "next/server";

import { adminAuthClient } from "@/lib/utils/supabase/admin";
import { createClient } from "@/lib/utils/supabase/server";

export async function DELETE(request: Request) {
    try {
        const supabase = await createClient();
        const {
            data: { session }
        } = await supabase.auth.getSession();

        if (!session) {
            return NextResponse.json({ error: "유저가 확인되지 않습니다." });
        }

        const { error } = await adminAuthClient.deleteUser(session.user.id);

        if (error) throw error;

        return NextResponse.json({ message: "회원 탈퇴 성공" });
    } catch (error: any) {
        console.error("회원 탈퇴 오류", error.message);
        return NextResponse.json({ error: error.message });
    }
}
