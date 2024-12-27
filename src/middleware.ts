import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./lib/utils/supabase/server";

export async function middleware(request: NextRequest) {
    // await updateSession(request);

    const supabase = await createClient();

    const {
        data: { session }
    } = await supabase.auth.getSession();

    if (request.nextUrl.pathname.startsWith("/auth")) {
        if (session?.access_token) {
            return NextResponse.redirect(new URL("/letterbox", request.url));
        }
        return NextResponse.next();
    }
}

// 로그인 된 유저면 바로 홈 화면으로 리다이렉트 -> 로그인되지 않은 유저는 로그인 화면으로 리다이렉트 o
// 비회원 유저 -> 남의 트리, 로그인 화면만 접근 가능하게 x

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
    ]
};
