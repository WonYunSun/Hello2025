"use client";

import Image from "next/image";
import ProgressBar from "../../../components/common/ProgressBar";
import { SignupData } from "./SignupForm";
import { Button, InputForm } from "../../../components/common";
import snake from "@/assets/images/snake.svg";
import CheckboxInput from "./CheckboxInput";

type NicknameProps = {
    onNext: (data: Pick<SignupData, "nickname">) => void;
};

const Nickname = ({ onNext }: NicknameProps) => {
    const handleNext = () => {
        onNext({ nickname: "test-nickname" });
    };

    return (
        <>
            <ProgressBar />
            <div className="inner">
                <section className="flex flex-col justify-between h-full">
                    <main className="flex flex-col justify-between h-[500px]">
                        <div className="grid pt-[40px] relative">
                            <h1 className="title">
                                <span className="text-primary">어떤 이름</span>으로
                                <br />
                                편지함을 만드시겠어요?
                            </h1>
                            <div className="absolute top-32 right-0">
                                <Image width={65} height={70} src={snake} alt="snake" />
                            </div>
                        </div>

                        <div className="grid gap-[50px]">
                            <div className="grid gap-[12px]">
                                <div className="text-[20px] font-semibold">닉네임</div>
                                <InputForm
                                    type="text"
                                    full={true}
                                    value=""
                                    handleChange={() => console.log("Input Changed!")}
                                    maxLength={8}
                                />
                            </div>

                            <div className="grid gap-[24px]">
                                <CheckboxInput label="전체 동의" />
                                <hr className="border-1 border-textDark" />
                                <div className="grid gap-[16px]">
                                    <CheckboxInput blueLabel="(필수)" label="만 14세 이상이에요" />
                                    <CheckboxInput blueLabel="(필수)" label="이용약관 및 개인정보수집이용 동의" />
                                </div>
                            </div>
                        </div>
                    </main>

                    <div className="flex gap-[20px]">
                        <Button type="button" color="btn-blue" full label="다음으로" handleClick={() => handleNext()} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Nickname;
