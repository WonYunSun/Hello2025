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
    const { Funnel, Step, next, prev } = useFunnel(steps[0]);
    const [decorationData, setDecorationData] = useState<Decoration>({
        envelope: redEnvelope,
        letter: colorLetter,
        message: { name: "", text: "", isPrivate: false }
    });

    // 현재 단계의 데이터를 업데이트하고 다음 단계로 이동
    const handleNext = (data: Partial<Decoration>, nextStep: string) => {
        setDecorationData((prev) => ({ ...prev, ...data }));
        next(nextStep);
    };

    // 이전 단계로 이동 (message 데이터가 있을 경우에만 업데이트)
    const handlePrev = (prevStep: string, message?: Decoration["message"]) => {
        if (message) {
            setDecorationData((prev) => ({ ...prev, message })); // 메세지 작성 단계의 데이터는 항상 업데이트
        }
        prev(prevStep); // 메세지 작성 단계 외에는 데이터를 업데이트 하지 않고 이전 단계로만 이동
    };

    return (
        <Funnel>
            {/* Step 1: 편지봉투 선택 */}
            <Step name={steps[0]}>
                <Envelope
                    prevSelectedEnvelope={decorationData.envelope}
                    onNext={(data) => handleNext(data, steps[1])}
                />
            </Step>
            {/* Step 2: 편지지 선택 */}
            <Step name={steps[1]}>
                <Letter
                    prevSelectedLetter={decorationData.letter}
                    onNext={(data) => handleNext(data, steps[2])}
                    onPrev={() => handlePrev(steps[0])}
                />
            </Step>
            {/* Step 3: 메세지 작성 */}
            <Step name={steps[2]}>
                <Message
                    decorationData={decorationData}
                    onNext={(data) => handleNext(data, steps[3])}
                    onPrev={(message) => handlePrev(steps[1], message)}
                />
            </Step>
            {/* Step 4: 작성 완료 */}
            <Step name={steps[3]}>
                <Complete />
            </Step>
        </Funnel>
    );
}
