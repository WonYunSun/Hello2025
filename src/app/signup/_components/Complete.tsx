"use client";

import Image from "next/image";

import snake from "@/assets/images/snake.svg";
import { Button } from "@/components/common";
import ProgressBar from "@/components/common/ProgressBar";
import { SignupData } from "./SignupForm";

const Complete = ({ signupData }: { signupData: SignupData }) => {
    const handleSubmit = () => {
        console.log("최종 데이터:", signupData);
    };
    return (
        <>
            <ProgressBar />
            <div className="inner">
                <section className="flex flex-col justify-between h-full">
                    <main className="flex flex-col justify-between h-[500px]">
                        <div className="grid pt-[100px] text-center place-items-center">
                            <h1 className="font-bold text-[40px]">
                                축하합니다!
                                <br />
                                가입이 <span className="text-primary">완료</span>되었습니다
                            </h1>
                            <h3 className="text-[16px] font-semibold">지금부터 편지함을 이용하실 수 있어요!</h3>

                            <Image width={120} height={120} src={snake} alt="snake" />
                        </div>
                    </main>

                    <Button type="button" color="btn-blue" full label="내 편지함 가기" handleClick={handleSubmit} />
                </section>
            </div>
        </>
    );
};

export default Complete;
