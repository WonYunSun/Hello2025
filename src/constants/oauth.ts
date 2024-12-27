import googleLogo from "@/assets/images/google-logo.svg"
import kakaoLogo from "@/assets/images/kakao-logo.svg"
import githubLogo from "@/assets/images/github-logo.svg"

export type Provider = "google" | "kakao" | "github"

export type ProviderConfig = {
    label: string;
    bgColor: string;
    textColor: string;
    logo: string;
    logoClass?: string;
    queryParams?: Record<string, string>;
}

export const PROVIDER_CONFIG: Record<Provider, ProviderConfig> = {
    google: {
        label: "Google 계정으로 시작",
        bgColor: "bg-white",
        textColor: "text-[#666666]",
        logo: googleLogo,
        queryParams: {
            prompt: "consent select_account"
        }
    },
    kakao: {
        label: "Kakao 계정으로 시작",
        bgColor: "bg-[#ffeb00]",
        textColor: "text-[#333333]",
        logo: kakaoLogo,
    },
    github: {
        label: "Github 계정으로 시작",
        bgColor: "bg-[#181717]",
        textColor: "text-white",
        logo: githubLogo,
        logoClass: "invert",
    },
}


