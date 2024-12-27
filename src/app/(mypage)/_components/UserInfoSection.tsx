"use client";
import { InputForm } from "@/components/common";
import { Session } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import googleLogo from "@/assets/images/google-logo.svg";
import kakaoLogo from "@/assets/images/kakao-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import Image from "next/image";
import ToggleSetting from "./ToggleSetting";
import { UserTable } from "@/lib/types/usertable";
import { useUserStore } from "@/stores/userStore";

type UserInfoSectionProps = {
    session: Session | null;
};

type LogoMap = {
    [key: string]: string;
};

const logos: LogoMap = {
    google: googleLogo,
    kakao: kakaoLogo,
    github: githubLogo
};

const UserInfoSection: React.FC<UserInfoSectionProps> = ({ session }) => {
    const { userTable, fetchUserData, updateUser, signOut } = useUserStore();
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (session) {
            fetchUserData(session.user.id);
        }
    }, [session, fetchUserData]);

    useEffect(() => {
        if (userTable) {
            setInputValue(userTable.username || "");
        }
    }, [userTable]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleNicknameChange = async () => {
        if (!session) return;

        if (inputValue.trim() === "") {
            setErrorMessage("닉네임을 입력해주세요.");
            return;
        }

        await updateUser({ username: inputValue });
        setErrorMessage("");
    };

    if (!session) {
        return <>오류</>;
    }

    const socialLogins: string[] = session.user.app_metadata.providers || [];
    const socialLogin = socialLogins[socialLogins.length - 1] || "google";

    const handleToggle = async (field: keyof UserTable) => {
        if (!userTable) return;

        const updatedValue = !userTable[field];
        await updateUser({ [field]: updatedValue });
    };

    return (
        <>
            <section className="mt-10 pb-5 border-b-[1px] border-textDark">
                <div className="flex justify-between">
                    <p className="text-[28px] font-bold tracking-tight">
                        {userTable ? <span className="text-primary">{userTable.username}</span> : "오류"}님 안녕하세요
                    </p>
                    <button
                        type="button"
                        className="font-bold"
                        onClick={async () => {
                            await signOut();
                        }}
                    >
                        로그아웃
                    </button>
                </div>
                <p>
                    <Image src={logos[socialLogin]} alt="" width={16} height={16} className="inline-block mr-1" />
                    {`${socialLogin} 로그인 중`}
                </p>
            </section>

            <section className="mt-7 pb-7 border-b-[1px] border-gray-300">
                <div className="mb-3 flex justify-between">
                    <p className="text-[20px] font-bold tracking-tight">닉네임</p>
                    <button type="button" className="font-bold" onClick={handleNicknameChange}>
                        변경
                    </button>
                </div>
                <InputForm type="text" full={true} value={inputValue} handleChange={handleInputChange} maxLength={8} />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </section>

            <section className="pt-7 pb-7">
                <div className="mb-3 flex justify-between">
                    <p className="text-[20px] font-bold tracking-tight">내 편지함 설정</p>
                </div>
                <ul className="p-5 border-[1px] bg-background border-beige rounded-[5px]">
                    <ToggleSetting
                        label="메시지를 남길 수 있는 사람"
                        value={userTable?.allow_anonymous || false}
                        trueLabel="모두"
                        falseLabel="회원만"
                        onToggle={() => handleToggle("allow_anonymous")}
                    />
                    <ToggleSetting
                        label="받은 편지 개수 전체 공개"
                        value={userTable?.count_visibility || false}
                        trueLabel="공개"
                        falseLabel="비공개"
                        onToggle={() => handleToggle("count_visibility")}
                    />
                    <ToggleSetting
                        label="받은 편지 내용"
                        value={userTable?.letter_visibility || false}
                        trueLabel="보이기"
                        falseLabel="숨기기"
                        onToggle={() => handleToggle("letter_visibility")}
                    />
                </ul>
            </section>
        </>
    );
};

export default UserInfoSection;
