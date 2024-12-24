"use client";
import React from "react";
import Image from "next/image";
import snake from "@/assets/images/snake.svg";
import { Button } from "@/components/common";
import { DecorationData } from "./DecorationForms";

type LetterProps = {
    onNext: (data: Pick<DecorationData, "letter">) => void;
    onPrev: () => void;
};

const Letter = ({ onNext, onPrev }: LetterProps) => {
    const handleNext = () => {
        onNext({ letter: "letter-envelope" });
    };

    return (
        <>
            <section className="w-full h-full flex flex-col justify-between">
                <header className="relative">
                    <h1 className="title">
                        <span className="text-primary">김철수</span>님 에게 보낼
                        <br />
                        편지지를 골라주세요
                    </h1>
                    <div className="absolute top-16 right-0">
                        <Image src={snake} width={65} height={70} alt="snake" />
                    </div>
                </header>
                {/* <EnvelopeList selectedEnvelope={selectedEnvelope} onEnvelopeSelect={setSelectedEnvelope} /> */}
                <div className="flex gap-5">
                    <Button type="button" color="btn-white" full={false} label="이전" handleClick={onPrev} />
                    <Button type="button" color="btn-blue" full={true} label="다음으로" handleClick={handleNext} />
                </div>
            </section>
        </>
    );
};

export default Letter;
