"use client";
import { InputForm } from "@/components/common";
import { Session } from "@supabase/supabase-js";
import React, { useState } from "react";
import googleLogo from "@/assets/images/google-logo.svg";
import kakaoLogo from "@/assets/images/kakao-logo.svg";
import Image from "next/image";

interface UserInfoSectionProps {
    session: Session | null;
}

const UserInfoSection: React.FC<UserInfoSectionProps> = ({ session }: UserInfoSectionProps) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    if (!session) {
        return <>오류</>;
    }

    const { user } = session;
    const userInfo = user.user_metadata;

    return (
        <>
            <section className="mt-10 pb-5 border-b-[1px] border-textDark">
                <div className="flex justify-between">
                    <p className="text-[28px] font-bold tracking-tight">
                        {user ? <span className="text-primary">{userInfo.name}</span> : "오류"}님 안녕하세요
                    </p>
                    <button type="button" className="font-bold">
                        로그아웃
                    </button>
                </div>
                <p>
                    {user ? (
                        user.app_metadata.provider === "google" ? (
                            <>
                                <Image
                                    src={googleLogo}
                                    alt="Google Logo"
                                    width={16}
                                    height={16}
                                    className="inline-block mr-1"
                                />
                                {`${user.app_metadata.provider} 로그인 중`}
                            </>
                        ) : (
                            <>
                                <Image
                                    src={kakaoLogo}
                                    alt="Kakao Logo"
                                    width={16}
                                    height={16}
                                    className="inline-block mr-1"
                                />
                                {`${user.app_metadata.provider} 로그인 중`}
                            </>
                        )
                    ) : (
                        "로그인 필요"
                    )}
                </p>
            </section>

            <section className="mt-7 pb-7 border-b-[1px] border-gray-300">
                <div className="mb-3 flex justify-between">
                    <p className="text-[20px] font-bold tracking-tight">닉네임</p>
                    <button type="button" className="font-bold">
                        변경
                    </button>
                </div>
                <InputForm type="text" full={true} value={inputValue} handleChange={handleInputChange} maxLength={8} />
            </section>
        </>
    );
};

export default UserInfoSection;
