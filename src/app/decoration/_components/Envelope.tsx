"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/common";
import redEnvelope from "@/assets/images/red-envelope.svg";
import snake from "@/assets/images/snake.svg";
import { DecorationData } from "./DecorationForms";
import EnvelopeList from "./EnvelopeList";

type EnvelopeProps = {
    selectedEnvelope: string;
    onNext: (data: Pick<DecorationData, "envelope">) => void;
};

const Envelope = ({ selectedEnvelope, onNext }: EnvelopeProps) => {
    const [localEnvelope, setLocalEnvelope] = useState<string>(selectedEnvelope);

    const handleNext = () => {
        onNext({
            envelope: localEnvelope || redEnvelope
        });
    };

    return (
        <section className="w-full h-full flex flex-col justify-between">
            <header className="relative">
                <h1 className="title">
                    <span className="text-primary">김철수</span>님 에게 보낼
                    <br />
                    편지 봉투를 골라주세요
                </h1>
                <div className="absolute top-16 right-0">
                    <Image src={snake} width={65} height={70} alt="snake" />
                </div>
            </header>
            <EnvelopeList selectedEnvelope={localEnvelope} onEnvelopeSelect={setLocalEnvelope} />
            <div className="flex gap-5">
                <Link href="/">
                    <Button type="button" color="btn-white" full={false} label="이전" />
                </Link>
                <Button type="button" color="btn-blue" full={true} label="다음으로" handleClick={handleNext} />
            </div>
        </section>
    );
};

export default Envelope;
