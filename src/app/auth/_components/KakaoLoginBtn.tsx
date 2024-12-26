"use client";

import Image from "next/image";

import { createClient } from "@/lib/utils/supabase/client";
import kakaoLogo from "@/assets/images/kakao-logo.svg"

const KakaoLoginBtn = () => {
    const handleKakaoLogin = async () => {
        const supabase = await createClient();
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "kakao",
                options: {
                    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/signup`,
                }
            });

            if (error) {
                console.error("Kakao 로그인 오류:", error.message);
            }
        } catch (err) {
            console.error("오류 발생:", err);
        }
    };

    return (
        <button
            onClick={handleKakaoLogin}
            className="w-4/6 h-10 md:h-12 border text-sm md:text-base bg-[#FFEB00] font-medium text-[#333333] border-[#dddddd] rounded-md flex items-center gap-8 md:gap-20"
        >
            <Image src={kakaoLogo} width={24} height={24} alt="googleLogo" className="ml-8" />
            <span>Kakao 계정으로 시작</span>
        </button>
    );
};

export default KakaoLoginBtn;
