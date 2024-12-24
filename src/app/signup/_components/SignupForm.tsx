"use client";

import { useState } from "react";

import { useFunnel } from "@/lib/hooks/useFunnel";
import Nickname from "./Nickname";
import Writer from "./Writer";
import Viewer from "./Viewer";
import LetterCount from "./LetterCount";
import Complete from "./Complete";

export type SignupData = {
    nickname: string;
    writer: boolean;
    viewer: boolean;
    letterCount: boolean;
};

const SignupForms = () => {
    const { Funnel, Step, next, prev, currentStep } = useFunnel("닉네임");
    const [signupData, setSignupData] = useState<SignupData>({
        nickname: "",
        writer: true,
        viewer: true,
        letterCount: true
    });

    const handleNext = (data: Partial<SignupData>, nextStep: string): void => {
        setSignupData((prev) => ({ ...prev, ...data }));
        next(nextStep);
    };

    const handlePrev = (prevStep: string): void => {
        prev(prevStep);
    };

    return (
        <Funnel>
            <Step name="닉네임">
                <Nickname onNext={(data) => handleNext(data, "작성자")} />
            </Step>
            <Step name="작성자">
                <Writer onNext={(data) => handleNext(data, "뷰어")} onPrev={() => handlePrev("닉네임")} />
            </Step>
            <Step name="뷰어">
                <Viewer onNext={(data) => handleNext(data, "편지개수")} onPrev={() => handlePrev("작성자")} />
            </Step>
            <Step name="편지개수">
                <LetterCount onNext={(data) => handleNext(data, "가입성공")} onPrev={() => handlePrev("뷰어")} />
            </Step>
            <Step name="가입성공">
                <Complete signupData={signupData} />
            </Step>
        </Funnel>
    );
};

export default SignupForms;
