"use client";
import Image from "next/image";
import blueEnvelope from "@/assets/images/blue-envelope.svg";
import greenEnvelope from "@/assets/images/green-envelope.svg";
import navyEnvelope from "@/assets/images/navy-envelope.svg";
import pinkEnvelope from "@/assets/images/pink-envelope.svg";
import redEnvelope from "@/assets/images/red-envelope.svg";
import { Carousel } from "@/components/common";
import type { Decoration } from "@/lib/types/decoration";

type EnvelopeListProps = {
    prevSelectedEnvelope: Decoration["envelope"];
    selectedEnvelope: Decoration["envelope"];
    onEnvelopeSelect: (envelope: Decoration["envelope"]) => void;
};

// 편지 봉투들
const envelopeItems = [
    { src: redEnvelope, alt: "red-envelope" },
    { src: greenEnvelope, alt: "green-envelope" },
    { src: blueEnvelope, alt: "blue-envelope" },
    { src: pinkEnvelope, alt: "pink-envelope" },
    { src: navyEnvelope, alt: "navy-envelope" }
];

const EnvelopeList = ({ prevSelectedEnvelope, selectedEnvelope, onEnvelopeSelect }: EnvelopeListProps) => {
    const slideIndex = envelopeItems.findIndex((item) => item.src === prevSelectedEnvelope); // 이전에 선택된 봉투를 기반으로 현재 슬라이드 인덱스 결정

    const handleClick = (envelope: Decoration["envelope"]) => {
        onEnvelopeSelect(envelope);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-16">
            <Image src={selectedEnvelope} width={325} height={200} alt="envelope" />

            <div className="w-[650px] ml-40">
                <Carousel initialSlideIndex={slideIndex >= 0 ? slideIndex : 0}>
                    {envelopeItems.map((envelope, i) => (
                        <button key={i} type="button" onClick={() => handleClick(envelope.src)} className="px-1">
                            <Image src={envelope.src} alt={envelope.alt} width={156} height={97} />
                        </button>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default EnvelopeList;
