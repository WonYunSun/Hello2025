"use client";
import { useState } from "react";
import { useFunnel } from "@/lib/hooks/useFunnel";
import { Decoration } from "@/lib/types/decoration";
import redEnvelope from "@/assets/images/red-envelope.svg";
import colorLetter from "@/assets/images/color-letter.svg";
import Envelope from "./envelope/Envelope";
import Letter from "./letter/Letter";
import Message from "./message/Message";
import Complete from "./Complete";

const steps = ["편지봉투", "편지지", "메세지", "작성성공"];

export default function DecorationForms() {
    const { Funnel, Step, next, prev, currentStep } = useFunnel(steps[0]);
    const [decorationData, setDecorationData] = useState<Decoration>({
        envelope: redEnvelope,
        letter: colorLetter,
        message: { name: "", text: "", isPrivate: false }
    });

    const handleNext = (data: Partial<Decoration>, nextStep: string) => {
        setDecorationData((prev) => ({ ...prev, ...data }));
        next(nextStep);
    };

    const handlePrev = (prevStep: string, message?: Decoration["message"]) => {
        if (message) {
            setDecorationData((prev) => ({ ...prev, message }));
        }
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
                <Letter
                    prevSelectedLetter={decorationData.letter}
                    onNext={(data) => handleNext(data, steps[2])}
                    onPrev={() => handlePrev(steps[0])}
                />
            </Step>
            <Step name={steps[2]}>
                <Message
                    previousMessage={decorationData.message}
                    onNext={(data) => handleNext(data, steps[3])}
                    onPrev={(message) => handlePrev(steps[1], message)}
                />
            </Step>
            <Step name={steps[3]}>
                <Complete decorationData={decorationData} />
            </Step>
        </Funnel>
    );
}
