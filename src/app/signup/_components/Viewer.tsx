"use client";

import Image from "next/image";
import { useState } from "react";

import snake from "@/assets/images/snake.svg";
import { User } from "@/lib/types/user";

import { Button } from "../../../components/common";
import Radiobtns from "./Radiobtns";

type ViewerProps = {
    prevIsLetterVisible: User["letter_visibility"];
    onNext: (data: Pick<User, "letter_visibility">) => void;
    onPrev: (data: Pick<User, "letter_visibility">) => void;
};

const Viewer = ({ prevIsLetterVisible, onNext, onPrev }: ViewerProps) => {
    const [isLetterVisible, setIsLetterVisible] = useState(prevIsLetterVisible);
    const handleNext = () => {
        onNext({ letter_visibility: isLetterVisible });
    };
    const handlePrev = () => {
        onPrev({ letter_visibility: isLetterVisible });
    };
    return (
        <>
            <div className="inner">
                <section className="flex flex-col justify-between h-full">
                    <main className="flex flex-col justify-between h-[460px]">
                        <div className="grid gap-[10px] pt-[40px] relative">
                            <h1 className="title">
                                받은
                                <span className="text-primary"> 편지 내용</span>을
                                <br />
                                다른 사람에게도<span className="text-primary"> 공개할까요?</span>
                            </h1>
                            <h3 className="text-[16px] font-semibold">한 번 설정한 내용은 올해 동안 바꿀 수 없어요</h3>
                            <div className="absolute top-32 right-0">
                                <Image width={65} height={70} src={snake} alt="snake" />
                            </div>
                        </div>

                        <Radiobtns
                            isOption1={isLetterVisible}
                            onChangeHandler={setIsLetterVisible}
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
                        <Button type="button" color="btn-blue" full label="다음으로" handleClick={() => handleNext()} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Viewer;
