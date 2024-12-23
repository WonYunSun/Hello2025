"use client";
import React from "react";
import { DecorationData } from "./DecorationForms";
import Image from "next/image";
import Link from "next/link";
import snake from "@/assets/images/snake.svg";
import redEnvelope from "@/assets/images/red-envelope.svg";

type EnvelopeProps = {
    onNext: (data: Pick<DecorationData, "envelope">) => void;
};

const Envelope = ({ onNext }: EnvelopeProps) => {
    const handleNext = () => {
        onNext({ envelope: "test-envelope" });
    };

    return (
        <section className="w-full h-full flex flex-col justify-between">
            <header className="relative">
                <h1 className="title">
                    <span className="text-primary">김철수</span>님 에게 보낼
                    <br />
                    <span className="mt-1 inline-block">편지 봉투를 골라주세요</span>
                </h1>
                <div className="absolute top-16 right-0">
                    <Image src={snake} width={65} height={70} alt="snake" />
                </div>
            </header>

            <div className="flex flex-col justify-center items-center">
                <Image src={redEnvelope} width={325} height={200} alt="envelope" />
                {/* NOTO : 편지봉투 이미지 리스트들 만들기*/}
            </div>

            <div className="flex justify-between">
                <Link href="/">
                    <button
                        type="button"
                        className="px-8 h-[60px] bg-white font-bold text-lg border-[1px] rounded-[10px] border-beige"
                    >
                        이전
                    </button>
                </Link>
                <button
                    onClick={handleNext}
                    className="px-40 h-[60px] text-white bg-primary font-bold text-lg rounded-[10px]"
                >
                    다음으로
                </button>
            </div>
        </section>
    );
};

export default Envelope;
