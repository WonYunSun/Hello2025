"use client";
import React, { useEffect } from "react";
import UserInfoSection from "./UserInfoSection";
import Link from "next/link";
import iconForward from "@/assets/images/icon-forward.svg";
import Image from "next/image";
import { useUserStore } from "@/stores/userStore";
import { Session } from "@supabase/supabase-js";
import Loading from "@/components/ui/Loading";

type UserSettingsProps = {
    session: Session;
};

const UserSettings: React.FC<UserSettingsProps> = ({ session }) => {
    const { userTable, fetchUserData } = useUserStore();

    useEffect(() => {
        if (session) {
            fetchUserData(session.user.id); // 데이터 가져오기
        }
    }, [session, fetchUserData]);

    if (!userTable) {
        return <Loading />; // 사용자 데이터가 없을 때 로딩 메시지
    }

    return (
        <>
            <UserInfoSection session={session} userTable={userTable} />

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
        </>
    );
};

export default UserSettings;
