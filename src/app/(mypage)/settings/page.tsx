import SmallButton from "@/components/ui/SmallButton";
import React from "react";
import UserInfoSection from "../_components/UserInfoSection";
import Link from "next/link";
import iconForward from "@/assets/images/icon-forward.svg";
import Image from "next/image";
import { createClient } from "@/lib/utils/supabase/server";

const SettingsPage = async () => {
    const supabase = await createClient();
    const {
        data: { session }
    } = await supabase.auth.getSession();

    return (
        <>
            <div className="inner">
                <section className="flex justify-between relative">
                    <h1 className="title">계정설정</h1>
                    <SmallButton icon="icon-back.svg" to={"/"} />
                </section>
                <UserInfoSection session={session} />
                {/* <MailboxSettingSection /> */}
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
