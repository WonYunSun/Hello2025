import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./lib/utils/supabase/server";

export async function middleware(request: NextRequest) {
    const supabase = await createClient();
    const {
        data: { session }
    } = await supabase.auth.getSession();

    const { pathname } = request.nextUrl;

    //회원가입이면 signup으로, 로그인이면 letterbox로
    if (session) {
        const { data } = await supabase.from("users").select("allow_anonymous").eq("id", session.user.id).single();
        const allow_anonymous = (data as { allow_anonymous: boolean | null })?.allow_anonymous;

        if (allow_anonymous !== null) {
            const restrictedPaths = ["/signup"];
            if (restrictedPaths.includes(pathname)) {
                return NextResponse.redirect(new URL(`/letterbox/${session.user.id}`, request.url)); // 홈으로 리다이렉트
            }
        }
    }

    // 로그인된 사용자 처리
    if (session?.access_token) {
        // 로그인된 사용자가 접근할 수 없는 경로
        const restrictedPaths = ["/auth"];
        if (restrictedPaths.includes(pathname)) {
            return NextResponse.redirect(new URL(`/letterbox/${session.user.id}`, request.url)); // 홈으로 리다이렉트
        }
    }

    // 로그인되지 않은 사용자 처리
    if (!session) {
        // 인증이 필요한 경로
        const protectedPaths = ["/settings", "/mymessages", "/unregister", "/signup"];
        if (protectedPaths.some((path) => pathname.startsWith(path))) {
            return NextResponse.redirect(new URL("/auth", request.url)); // 로그인 페이지로 리다이렉트
        }
    }

    // 로그아웃 상태에서 /auth 경로로 접근할 경우
    // if (pathname === "/auth" && !session) {
    //     return NextResponse.next(); // 로그인 페이지로 계속 유지
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"]
};
