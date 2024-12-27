"use client";

import { useEffect, useState } from "react";

import { useFunnel } from "@/lib/hooks/useFunnel";
import { User } from "@/lib/types/user";
import { useUserStore } from "@/stores/userStore";

import Nickname from "./Nickname";
import Writer from "./Writer";
import Viewer from "./Viewer";
import LetterCount from "./LetterCount";
import Complete from "./Complete";
import dynamic from "next/dynamic";

const steps = ["닉네임", "작성자", "뷰어", "편지개수", "가입성공"];
const ProgressBar = dynamic(() => import("@/components/common/ProgressBar"), { ssr: false });

const SignupForms = () => {
    const { Funnel, Step, next, prev, currentStep } = useFunnel(steps[0]);
    //supabase 로그인한 유저 정보 가져오기
    const { user } = useUserStore();

    //signup data session storage 저장
    const sessionSignupData = typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("signupData")) : null;
    const initialSignupData = sessionSignupData?.signupData || {
        id: "",
        username: "",
        allow_anonymous: true,
        letter_visibility: true,
        count_visibility: true
    };
    const [signupData, setSignupData] = useState<User>(initialSignupData);

    useEffect(() => {
        setSignupData((prev) => ({ ...prev, id: user?.id }));
    }, [user]);

    const handleNext = (data: Partial<User>, nextStep: string): void => {
        setSignupData((prev) => ({ ...prev, ...data }));
        next(nextStep);
        sessionStorage.setItem("signupData", JSON.stringify(signupData));
    };

    const handlePrev = (data: Partial<User>, prevStep: string): void => {
        setSignupData((prev) => ({ ...prev, ...data }));
        prev(prevStep);
        sessionStorage.setItem("signupData", JSON.stringify(signupData));
    };

    //progressbar session storage 저장
    const session = typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("pgBarLevel")) : null;
    const initialStart = session?.start || 0;
    const initialEnd = session?.end || 120;
    const [start, setStart] = useState(initialStart);
    const [end, setEnd] = useState(initialEnd);

    const onPgBarHandler = (start, end) => {
        setStart(start);
        setEnd(end);
        sessionStorage.setItem("pgBarLevel", JSON.stringify({ start: start, end: end }));
    };

    return (
        <>
            <ProgressBar start={start} end={end} />
            <Funnel>
                <Step name={steps[0]}>
                    <Nickname
                        prevNickname={signupData.username}
                        onNext={(data) => {
                            handleNext(data, steps[1]);
                            onPgBarHandler(end, 240);
                        }}
                    />
                </Step>
                <Step name={steps[1]}>
                    <Writer
                        prevIsAnonymous={signupData.allow_anonymous}
                        onNext={(data) => {
                            handleNext(data, steps[2]);
                            onPgBarHandler(end, 360);
                        }}
                        onPrev={(data) => {
                            handlePrev(data, steps[0]);
                            onPgBarHandler(end, 120);
                        }}
                    />
                </Step>
                <Step name={steps[2]}>
                    <Viewer
                        prevIsLetterVisible={signupData.letter_visibility}
                        onNext={(data) => {
                            handleNext(data, steps[3]);
                            onPgBarHandler(end, 480);
                        }}
                        onPrev={(data) => {
                            handlePrev(data, steps[1]);
                            onPgBarHandler(end, 240);
                        }}
                    />
                </Step>
                <Step name={steps[3]}>
                    <LetterCount
                        prevIsCountVisible={signupData.count_visibility}
                        onNext={(data) => {
                            handleNext(data, steps[4]);
                            onPgBarHandler(end, 600);
                        }}
                        onPrev={(data) => {
                            handlePrev(data, steps[2]);
                            onPgBarHandler(end, 360);
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
