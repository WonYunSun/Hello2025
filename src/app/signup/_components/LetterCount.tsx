"use client";

import Image from "next/image";

import snake from "@/assets/images/snake.svg";
import { SignupData } from "./SignupForm";
import ProgressBar from "../../../components/common/ProgressBar";
import { Button } from "../../../components/common";
import Radiobtns from "./Radiobtns";

type LetterCountProps = {
    onNext: (data: Pick<SignupData, "letterCount">) => void;
    onPrev: () => void;
};

const LetterCount = ({ onNext, onPrev }: LetterCountProps) => {
    const handleNext = () => {
        onNext({ letterCount: true });
    };
    return (
        <>
            <ProgressBar />
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

                        <Radiobtns text1="전체 공개" text2="나만 보기" />
                    </main>

                    <div className="flex gap-[20px]">
                        <Button
                            type="button"
                            color="btn-white"
                            full={false}
                            label="이전"
                            handleClick={() => onPrev()}
                        />
                        <Button type="button" color="btn-blue" full label="다음으로" handleClick={() => handleNext()} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default LetterCount;
