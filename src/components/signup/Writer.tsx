"use client";
import React from "react";
import { SignupData } from "./SignupForm";
import ProgressBar from "../common/ProgressBar";
import Image from "next/image";
import { Button, InputForm } from "../common";
import snake from "@/assets/images/snake.svg";
import CheckboxInput from "./CheckboxInput";

type WriterProps = {
    onNext: (data: Pick<SignupData, "writer">) => void;
    onPrev: () => void;
};

const Writer = ({ onNext, onPrev }: WriterProps) => {
    const handleNext = () => {
        onNext({ writer: true });
    };

    return (
        <>
            <ProgressBar />
            <div className="inner">
                <section className="flex flex-col justify-between h-full">
                    <main className="flex flex-col justify-between h-[540px]">
                        <div className="grid gap-[24px] pt-[40px]">
                            <h1 className="title">
                                내 편지함에
                                <span className="text-primary"> 메세지를</span>
                                <br />
                                <span className="text-primary">남길 수 있는 사람</span>을 설정하세요
                            </h1>
                            한 번 설정한 내용은 올해 동안 바꿀 수 없어요
                            <div className="flex justify-end">
                                <Image width={65} height={70} src={snake} alt="snake" />
                            </div>
                        </div>

                        <div className="grid gap-[12px]">
                            <div>
                                <input type="radio" name="writerCheck" />
                                <label>누구나 메시지를 남길 수 있어요</label>
                            </div>
                            <div>
                                <input type="radio" name="writerCheck" />
                                <label>로그인 한 사람에게만 받을게요</label>
                            </div>
                        </div>
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

export default Writer;
