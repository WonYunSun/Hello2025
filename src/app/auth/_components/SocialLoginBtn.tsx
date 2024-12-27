"use client";

import Image from "next/image";

import { createClient } from "@/lib/utils/supabase/client";
import { Provider, PROVIDER_CONFIG } from "@/constants/oauth";


type SocialLoginBtnProps = {
    provider: Provider;
}

const SocialLoginBtn = ({provider}: SocialLoginBtnProps) => {
    const handleLogin = async () => {
        const supabase = await createClient();
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/signup`,
                    queryParams: PROVIDER_CONFIG[provider].queryParams
                }
            });

            if (error) {
                console.error(`${provider} 로그인 오류:`, error.message);
            }
        } catch (err) {
            console.error("오류 발생:", err);
        }
    };

    return (
        <button
            onClick={handleLogin}
            className={`w-4/6 h-10 md:h-12 border text-sm md:text-base ${PROVIDER_CONFIG[provider].bgColor} ${PROVIDER_CONFIG[provider].textColor} font-medium border-[#dddddd] rounded-md flex items-center gap-8 md:gap-20`}
        >
            <Image src={PROVIDER_CONFIG[provider].logo} width={24} height={24} alt={`${provider}Logo`} className={`ml-8 ${PROVIDER_CONFIG[provider].logoClass}`} />
            <span>{PROVIDER_CONFIG[provider].label}</span>
        </button>
    );
};

export default SocialLoginBtn;
