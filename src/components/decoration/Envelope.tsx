"use client";
import React, { useState } from "react";
import { DecorationData } from "./DecorationForms";
import Image from "next/image";
import Link from "next/link";
import snake from "@/assets/images/snake.svg";
import Button from "../ui/Button";
import EnvelopeList from "./EnvelopeList";

type EnvelopeProps = {
    onNext: (data: Pick<DecorationData, "envelope">) => void;
};

const Envelope = ({ onNext }: EnvelopeProps) => {
    const [selectedEnvelope, setSelectedEnvelope] = useState<string>("");

    const handleNext = () => {
        if (selectedEnvelope) {
            onNext({ envelope: selectedEnvelope });
        }
    };

    return (
        <section className="w-full h-full flex flex-col justify-between">
            <header className="relative">
                <h1 className="title">
                    <span className="text-primary">김철수</span>님 에게 보낼
                    <br />
                    {/* TODO : mt 없애기 */}
                    <span className="mt-1 inline-block">편지 봉투를 골라주세요</span>
                </h1>
                <div className="absolute top-16 right-0">
                    <Image src={snake} width={65} height={70} alt="snake" />
                </div>
            </header>
            <EnvelopeList selectedEnvelope={selectedEnvelope} onEnvelopeSelect={setSelectedEnvelope} />
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
