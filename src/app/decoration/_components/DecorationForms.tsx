"use client";
import { useFunnel } from "@/lib/hooks/useFunnel";
import { useState } from "react";
import Envelope from "./Envelope";
import Letter from "./Letter";
import Message from "./Message";

export type DecorationData = {
    envelope: string;
    letter: string;
    message: string;
};

export default function DecorationForms() {
    const { Funnel, Step, next, prev, currentStep } = useFunnel("편지봉투");
    const [decorationData, setDecorationData] = useState<DecorationData>({
        envelope: "",
        letter: "",
        message: ""
    });

    const handleNext = (data: Partial<DecorationData>, nextStep: string): void => {
        setDecorationData((prev) => ({ ...prev, ...data }));
        next(nextStep);
    };

    const handlePrev = (prevStep: string): void => {
        prev(prevStep);
    };

    return (
        <Funnel>
            <Step name="편지봉투">
                <Envelope selectedEnvelope={decorationData.envelope} onNext={(data) => handleNext(data, "편지지")} />
            </Step>
            <Step name="편지지">
                <Letter onNext={(data) => handleNext(data, "메세지")} onPrev={() => handlePrev("편지봉투")} />
            </Step>
            <Step name="메세지">
                <Message decorationData={decorationData} onPrev={() => handlePrev("편지지")} />
            </Step>
        </Funnel>
    );
}
