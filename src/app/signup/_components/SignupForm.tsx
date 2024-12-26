"use client";

import { useState } from "react";

import { useFunnel } from "@/lib/hooks/useFunnel";
import { SignupData } from "@/lib/types/signup";
import ProgressBar from "@/components/common/ProgressBar";

import Nickname from "./Nickname";
import Writer from "./Writer";
import Viewer from "./Viewer";
import LetterCount from "./LetterCount";
import Complete from "./Complete";

const steps = ["닉네임", "작성자", "뷰어", "편지개수", "가입성공"];

const SignupForms = () => {
    const { Funnel, Step, next, prev, currentStep } = useFunnel(steps[0]);
    const [signupData, setSignupData] = useState<SignupData>({
        nickname: "",
        isAnonymous: true,
        isLetterVisible: true,
        isCountVisible: true
    });

    const handleNext = (data: Partial<SignupData>, nextStep: string): void => {
        setSignupData((prev) => ({ ...prev, ...data }));
        next(nextStep);
    };

    const handlePrev = (data: Partial<SignupData>, prevStep: string): void => {
        setSignupData((prev) => ({ ...prev, ...data }));
        prev(prevStep);
    };

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(120);

    return (
        <>
            <ProgressBar start={start} end={end} />
            <Funnel>
                <Step name={steps[0]}>
                    <Nickname
                        prevNickname={signupData.nickname}
                        onNext={(data) => {
                            handleNext(data, steps[1]);
                            setStart(end);
                            setEnd(240);
                        }}
                    />
                </Step>
                <Step name={steps[1]}>
                    <Writer
                        prevIsAnonymous={signupData.isAnonymous}
                        onNext={(data) => {
                            handleNext(data, steps[2]);
                            setStart(end);
                            setEnd(360);
                        }}
                        onPrev={(data) => {
                            handlePrev(data, steps[0]);
                            setStart(end);
                            setEnd(120);
                        }}
                    />
                </Step>
                <Step name={steps[2]}>
                    <Viewer
                        prevIsLetterVisible={signupData.isLetterVisible}
                        onNext={(data) => {
                            handleNext(data, steps[3]);
                            setStart(end);
                            setEnd(480);
                        }}
                        onPrev={(data) => {
                            handlePrev(data, steps[1]);
                            setStart(end);
                            setEnd(240);
                        }}
                    />
                </Step>
                <Step name={steps[3]}>
                    <LetterCount
                        prevIsCountVisible={signupData.isCountVisible}
                        onNext={(data) => {
                            handleNext(data, steps[4]);
                            setStart(end);
                            setEnd(600);
                        }}
                        onPrev={(data) => {
                            handlePrev(data, steps[2]);
                            setStart(end);
                            setEnd(360);
                        }}
                    />
                </Step>
                <Step name={steps[4]}>
                    <Complete signupData={signupData} />
                </Step>
            </Funnel>
        </>
    );
};

export default SignupForms;
