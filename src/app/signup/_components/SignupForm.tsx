"use client";

import { useEffect, useState } from "react";

import { useFunnel } from "@/lib/hooks/useFunnel";
import { UserTable } from "@/lib/types/usertable";
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
    const { Funnel, Step, next, prev } = useFunnel(steps[0]);
    //supabase 로그인한 유저 정보 가져오기
    const { user } = useUserStore();

    //get session storage signup data
    const prevSessionSignupData = typeof window !== "undefined" && sessionStorage.getItem("signupData");
    const sessionSignupData =
        typeof window !== "undefined" && prevSessionSignupData ? JSON.parse(prevSessionSignupData) : null;
    const initialSignupData = sessionSignupData?.signupData || {
        id: "",
        username: "",
        allow_anonymous: true,
        letter_visibility: true,
        count_visibility: true
    };
    console.log("initialSignupData", initialSignupData);
    const [signupData, setSignupData] = useState<UserTable>(initialSignupData);
    useEffect(() => {
        if (user) {
            setSignupData((prev) => ({ ...prev, id: user.id }));
        }
    }, [user]);

    const handleNext = (data: Partial<UserTable>, nextStep: string): void => {
        setSignupData((prev) => ({ ...prev, ...data }));
        next(nextStep);
        sessionStorage.setItem("signupData", JSON.stringify(signupData));
    };

    const handlePrev = (data: Partial<UserTable>, prevStep: string): void => {
        setSignupData((prev) => ({ ...prev, ...data }));
        prev(prevStep);
        sessionStorage.setItem("signupData", JSON.stringify(signupData));
    };

    //progressbar session storage 저장
    const pgBarLevel = typeof window !== "undefined" && sessionStorage.getItem("pgBarLevel");
    type pgBarLeveltype = { start: number; end: number };
    const session: pgBarLeveltype = typeof window !== "undefined" && pgBarLevel ? JSON.parse(pgBarLevel) : null;

    const initialStart = session?.start || 0;
    const initialEnd = session?.end || 120;
    const [start, setStart] = useState(initialStart);
    const [end, setEnd] = useState(initialEnd);

    const onPgBarHandler = (start: number, end: number) => {
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
                        signupData={signupData}
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
                    <Complete />
                </Step>
            </Funnel>
        </>
    );
};

export default SignupForms;
