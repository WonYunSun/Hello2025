"use client";

import Image from "next/image";
import React from "react";
import snake from "@/assets/images/snake.png";
import Button from "@/components/common/Button";
import ProgressBar from "@/components/common/ProgressBar";
import { InputForm } from "@/components/common";

const NewPostbox = () => {
    return (
        <div>
            <ProgressBar />
            <div className="pt-[53px]">
                <div className="title">
                    <span className="text-primary">어떤 이름</span>으로
                    <br />
                    편지함을 만드시겠어요?
                </div>
                <div className="flex justify-end pt-[24px] pb-[34px]">
                    <Image width={65.54} height={71} src={snake} alt="snake" />
                </div>
                <div className="grid">
                    <div className="text-[20px] font-semibold pb-[12px]">닉네임</div>
                    <InputForm
                        type="text"
                        full={true}
                        value=""
                        handleChange={() => console.log("Input Changed!")}
                        maxLength={8}
                    />
                </div>
                <div className="text-[16px]">
                    <div>
                        <input type="checkbox" />
                        전체 동의
                    </div>
                    <hr />
                    <div>
                        <input type="checkbox" />
                        <span className="text-primary">(필수)</span> 만 14세 이상이에요
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span className="text-primary">(필수)</span> 이용약관 및 개인정보수집이용 동의
                    </div>
                </div>
                <div className="flex gap-[20px]">
                    <Button
                        type="button"
                        color="btn-white"
                        full={false}
                        label="이전"
                        handleClick={() => alert("Button clicked!")}
                    />
                    <Button
                        type="button"
                        color="btn-blue"
                        full
                        label="다음으로"
                        handleClick={() => alert("Button clicked!")}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewPostbox;
