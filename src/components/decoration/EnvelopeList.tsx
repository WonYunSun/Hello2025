"use client";
import blueEnvelope from "@/assets/images/blue-envelope.svg";
import greenEnvelope from "@/assets/images/green-envelope.svg";
import navyEnvelope from "@/assets/images/navy-envelope.svg";
import pinkEnvelope from "@/assets/images/pink-envelope.svg";
import redEnvelope from "@/assets/images/red-envelope.svg";
import Image from "next/image";
import { useState } from "react";
import Carousel from "../ui/Carousel";

// 편지 봉투들
const envelopeItems = [
    { src: redEnvelope, alt: "red-envelope" },
    { src: greenEnvelope, alt: "green-envelope" },
    { src: blueEnvelope, alt: "blue-envelope" },
    { src: pinkEnvelope, alt: "pink-envelope" },
    { src: navyEnvelope, alt: "navy-envelope" }
];

const EnvelopeList = () => {
    const [selectedEnvelope, setSelectedEnvelope] = useState<string>(redEnvelope);

    const handleClick = (envelope: string) => {
        setSelectedEnvelope(envelope);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-[90px]">
            <Image src={selectedEnvelope} width={325} height={200} alt="envelope" />

            <div className="w-[650px] ml-40">
                <Carousel>
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
