"use client";
import { useState } from "react";
import { useFunnel } from "@/lib/hooks/useFunnel";
import Envelope from "./Envelope";
import Letter from "./Letter";
import Message from "./Message";

export type DecorationData = {
    envelope: string;
    letter: string;
    message: string;
};

const steps = ["편지봉투", "편지지", "메세지"];

export default function DecorationForms() {
    const { Funnel, Step, next, prev, currentStep } = useFunnel(steps[0]);
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
            <Step name={steps[0]}>
                <Envelope
                    prevSelectedEnvelope={decorationData.envelope}
                    onNext={(data) => handleNext(data, steps[1])}
                />
            </Step>
            <Step name={steps[1]}>
                <Letter onNext={(data) => handleNext(data, steps[2])} onPrev={() => handlePrev(steps[0])} />
            </Step>
            <Step name={steps[2]}>
                <Message decorationData={decorationData} onPrev={() => handlePrev(steps[1])} />
            </Step>
        </Funnel>
    );
}
