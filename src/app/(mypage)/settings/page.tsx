"use client";

import SmallButton from "@/components/ui/SmallButton";
import React, { useEffect } from "react";
import NicknameEditSection from "../_component/NicknameEditSection";
import MailboxSettingSection from "../_component/MailboxSettingSection";
import Link from "next/link";
import iconForward from "@/assets/images/icon-forward.svg";
import Image from "next/image";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";

const SettingsPage = () => {
    const { user, isLogin, fetchUser, signOut } = useUserStore();
    const router = useRouter();

    useEffect(() => {
        fetchUser();
    }, [])

    console.log(user)
    console.log(isLogin)
    
    const handleSignOut = async () => {
        await signOut();
        router.push("/");
    };

    return (
        <>
            <div className="inner">
                <section className="flex justify-between relative">
                    <h1 className="title">계정설정</h1>
                    <SmallButton icon="icon-back.svg" to={"/"} />
                </section>

                <section className="mt-10 pb-5 border-b-[1px] border-textDark">
                    <div className="flex justify-between">
                        <p className="text-[28px] font-bold tracking-tight">
                            <span className="text-primary">홍길동</span>님 안녕하세요
                        </p>
                        <button type="button" className="font-bold" onClick={handleSignOut}>
                            로그아웃
                        </button>
                    </div>
                    <p>구글로 로그인중</p>
                </section>

                <NicknameEditSection />
                <MailboxSettingSection />

                <Link
                    href="/mymessages"
                    className="flex justify-between items-center border-t-[1px] border-b-[1px] border-gray-300 mb-20"
                >
                    <p className="h-[70px] leading-[70px] text-[20px] font-bold tracking-tight">내가 작성한 편지</p>
                    <Image src={iconForward} alt="" width={9} height={16} />
                </Link>

                <Link href="/unregister" className="text-warning">
                    회원 탈퇴
                </Link>
            </div>
        </>
    );
};

export default SettingsPage;
