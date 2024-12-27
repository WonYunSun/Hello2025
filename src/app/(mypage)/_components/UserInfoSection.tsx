"use client";
import { InputForm } from "@/components/common";
import { Session } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import googleLogo from "@/assets/images/google-logo.svg";
import kakaoLogo from "@/assets/images/kakao-logo.svg";
import Image from "next/image";
import { createClient } from "@/lib/utils/supabase/client";
import { User } from "@/lib/types/user";
import ToggleSetting from "./ToggleSetting";

type UserInfoSectionProps = {
    session: Session | null;
};

const UserInfoSection: React.FC<UserInfoSectionProps> = ({ session }) => {
    const [userData, setUserData] = useState<User | null>(null);
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const supabase = createClient();

    useEffect(() => {
        const fetchUserData = async () => {
            if (session) {
                const { data, error } = await supabase.from("users").select("*").eq("id", session.user.id).single();

                if (error) {
                    console.error("사용자 데이터 가져오기 오류:", error);
                } else {
                    setUserData(data);
                    setInputValue(data.username); //초기값
                }
            }
        };

        fetchUserData();
    }, [session, supabase]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleNicknameChange = async () => {
        if (!session) return;

        if (inputValue.trim() === "") {
            setErrorMessage("닉네임을 입력해주세요.");
            return;
        }

        const { error } = await supabase.from("users").update({ username: inputValue }).eq("id", session.user.id);

        if (error) {
            console.error("닉네임 변경 오류:", error);
            setErrorMessage("닉네임 변경에 실패했습니다.");
        } else {
            setErrorMessage("");
            setUserData((prevData) => (prevData ? { ...prevData, username: inputValue } : prevData));
        }
    };

    if (!session) {
        return <>오류</>;
    }

    const handleToggle = async (field: keyof User) => {
        if (!userData) return;

        const updatedValue = !userData[field]; // 현재 값을 반전
        const { error } = await supabase
            .from("users")
            .update({ [field]: updatedValue })
            .eq("id", session.user.id);

        if (error) {
            console.error(`${field} 업데이트 오류:`, error);
        } else {
            setUserData((prevData) => (prevData ? { ...prevData, [field]: updatedValue } : prevData));
        }
    };

    return (
        <>
            <section className="mt-10 pb-5 border-b-[1px] border-textDark">
                <div className="flex justify-between">
                    <p className="text-[28px] font-bold tracking-tight">
                        {userData ? <span className="text-primary">{userData.username}</span> : "오류"}님 안녕하세요
                    </p>
                    <button
                        type="button"
                        className="font-bold"
                        onClick={() => {
                            /* 로그아웃 처리 */
                        }}
                    >
                        로그아웃
                    </button>
                </div>
                <p>
                    {session.user.app_metadata.provider === "google" ? (
                        <>
                            <Image
                                src={googleLogo}
                                alt="Google Logo"
                                width={16}
                                height={16}
                                className="inline-block mr-1"
                            />
                            {`${session.user.app_metadata.provider} 로그인 중`}
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
                            {`${session.user.app_metadata.provider} 로그인 중`}
                        </>
                    )}
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
                        value={userData?.allow_anonymous || false}
                        trueLabel="허용"
                        falseLabel="비허용"
                        onToggle={() => handleToggle("allow_anonymous")}
                    />
                    <ToggleSetting
                        label="받은 편지 개수 전체 공개"
                        value={userData?.count_visibility || false}
                        trueLabel="공개"
                        falseLabel="비공개"
                        onToggle={() => handleToggle("count_visibility")}
                    />
                    <ToggleSetting
                        label="받은 편지 내용"
                        value={userData?.letter_visibility || false}
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
