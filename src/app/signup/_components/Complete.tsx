"use client";

import Image from "next/image";

import snake from "@/assets/images/snake.svg";
import { Button } from "@/components/common";
import { SignupData } from "@/lib/types/signup";

const Complete = ({ signupData }: { signupData: SignupData }) => {
    const handleSubmit = () => {
        console.log("최종 데이터:", signupData);
    };
    return (
        <>
            <div className="inner">
                <section className="flex flex-col justify-between h-full">
                    <main className="flex flex-col justify-between h-[520px] place-items-center">
                        <div className="grid pt-[120px] text-center place-items-center">
                            <h1 className="font-bold text-[40px] leading-tight">
                                축하합니다!
                                <br />
                                가입이 <span className="text-primary">완료</span>되었습니다
                            </h1>
                            <h3 className="text-[16px] font-semibold pt-3">지금부터 편지함을 이용하실 수 있어요!</h3>
                        </div>
                        <Image width={0} height={0} src={snake} alt="snake" className="w-[150px]" />
                    </main>

                    <Button type="button" color="btn-blue" full label="내 편지함 가기" handleClick={handleSubmit} />
                </section>
            </div>
        </>
    );
};

export default Complete;
