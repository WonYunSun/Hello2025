import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// 로그인된 사용자가 접근할 수 없는 경로
const restrictedPaths = ["/auth"];
// 인증이 필요한 경로
const protectedPaths = ["/settings", "/mymessages", "/unregister", "/signup"];

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
                    supabaseResponse = NextResponse.next({
                        request
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                }
            }
        }
    );

    // IMPORTANT: Avoid writing any logic between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    const {
        data: { user }
    } = await supabase.auth.getUser();

    const { pathname } = request.nextUrl.clone();

    //회원가입이면 signup으로, 로그인이면 letterbox로
    if (user) {
        const { data } = await supabase.from("users").select("allow_anonymous").eq("id", user.id).single();
        const allow_anonymous = (data as { allow_anonymous: boolean | null })?.allow_anonymous;

        if (allow_anonymous !== null) {
            if (restrictedPaths.includes(pathname)) {
                return NextResponse.redirect(new URL(`/letterbox/${user.id}`, request.url)); // 홈으로 리다이렉트
            }
        }
    }

    // 로그인된 사용자 처리
    if (user) {
        // 로그인된 사용자가 접근할 수 없는 경로
        if (restrictedPaths.includes(pathname) || pathname === "/") {
            return NextResponse.redirect(new URL(`/letterbox/${user.id}`, request.url)); // 홈으로 리다이렉트
        }
    }

    // 로그인되지 않은 사용자 처리
    if (!user) {
        // 인증이 필요한 경로
        if (protectedPaths.some((path) => pathname.startsWith(path)) || pathname === "/") {
            return NextResponse.redirect(new URL("/auth", request.url)); // 로그인 페이지로 리다이렉트
        }
    }

    return supabaseResponse;
}
