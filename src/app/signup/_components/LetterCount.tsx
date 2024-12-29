"use client";
import { useState } from "react";
import Image from "next/image";
import snake from "@/assets/images/snake.svg";
import type { UserTable } from "@/lib/types/usertable";
import { createClient } from "@/lib/utils/supabase/client";
import Radiobtns from "./Radiobtns";
import { Button } from "../../../components/common";

type LetterCountProps = {
    prevIsCountVisible: boolean;
    onNext: (data: Pick<UserTable, "count_visibility">) => void;
    onPrev: (data: Pick<UserTable, "count_visibility">) => void;
    signupData: UserTable;
};

const LetterCount = ({ prevIsCountVisible, onNext, onPrev, signupData }: LetterCountProps) => {
    const [isCountVisible, setIsCountVisible] = useState(prevIsCountVisible);
    const supabase = createClient();
    const addUserData = async () => {
        const { data, error } = await supabase
            .from("users")
            .update({
                username: signupData.username,
                allow_anonymous: signupData.allow_anonymous,
                count_visibility: isCountVisible,
                letter_visibility: signupData.letter_visibility
            })
            .eq("id", signupData.id)
            .select();
    };

    const handleNext = () => {
        addUserData();
        onNext({ count_visibility: isCountVisible });
    };
    const handlePrev = () => {
        onPrev({ count_visibility: isCountVisible });
    };

    return (
        <>
            <div className="inner">
                <section className="flex flex-col justify-between h-full">
                    <main className="flex flex-col justify-between h-[460px]">
                        <div className="grid gap-[10px] pt-[40px] relative">
                            <h1 className="title">
                                받을 편지 개수
                                <span className="text-primary"> 공개여부</span>
                                <br />
                                <span className="text-primary">설정</span>을 선택하세요
                            </h1>
                            <h3 className="text-[16px] font-semibold">한 번 설정한 내용은 올해 동안 바꿀 수 없어요</h3>
                            <div className="absolute top-32 right-0">
                                <Image width={65} height={70} src={snake} alt="snake" />
                            </div>
                        </div>

                        <Radiobtns
                            isOption1={isCountVisible}
                            onChangeHandler={setIsCountVisible}
                            text1="전체 공개"
                            text2="나만 보기"
                        />
                    </main>

                    <div className="flex gap-[20px]">
                        <Button
                            type="button"
                            color="btn-white"
                            full={false}
                            label="이전"
                            handleClick={() => handlePrev()}
                        />
                        <Button
                            type="button"
                            color="btn-blue"
                            full
                            label="다음으로"
                            handleClick={() => {
                                handleNext();
                            }}
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default LetterCount;
