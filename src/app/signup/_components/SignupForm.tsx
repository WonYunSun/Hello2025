"use client";

import { useState } from "react";

import { useFunnel } from "@/lib/hooks/useFunnel";
import ProgressBar from "@/components/common/ProgressBar";

import Nickname from "./Nickname";
import Writer from "./Writer";
import Viewer from "./Viewer";
import LetterCount from "./LetterCount";
import Complete from "./Complete";
import { createClient } from "@/lib/utils/supabase/client";

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

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(120);

    const supabase = createClient();
    const session = supabase.auth.getSession();
    console.log("session", session);

    return (
        <>
            <ProgressBar start={start} end={end} />
            <Funnel>
                <Step name="닉네임">
                    <Nickname
                        onNext={(data) => {
                            handleNext(data, "작성자");
                            setStart(end);
                            setEnd(240);
                        }}
                    />
                </Step>
                <Step name="작성자">
                    <Writer
                        onNext={(data) => {
                            handleNext(data, "뷰어");
                            setStart(end);
                            setEnd(360);
                        }}
                        onPrev={() => {
                            handlePrev("닉네임");
                            setStart(end);
                            setEnd(120);
                        }}
                    />
                </Step>
                <Step name="뷰어">
                    <Viewer
                        onNext={(data) => {
                            handleNext(data, "편지개수");
                            setStart(end);
                            setEnd(480);
                        }}
                        onPrev={() => {
                            handlePrev("작성자");
                            setStart(end);
                            setEnd(240);
                        }}
                    />
                </Step>
                <Step name="편지개수">
                    <LetterCount
                        onNext={(data) => {
                            handleNext(data, "가입성공");
                            setStart(end);
                            setEnd(600);
                        }}
                        onPrev={() => {
                            handlePrev("뷰어");
                            setStart(end);
                            setEnd(360);
                        }}
                    />
                </Step>
                <Step name="가입성공">
                    <Complete signupData={signupData} />
                </Step>
            </Funnel>
        </>
    );
};

export default SignupForms;
