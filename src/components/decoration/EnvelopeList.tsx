"use client";
import Image from "next/image";
import redEnvelope from "@/assets/images/red-envelope.svg";
import blueEnvelope from "@/assets/images/blue-envelope.svg";
import greenEnvelope from "@/assets/images/green-envelope.svg";
import pinkEnvelope from "@/assets/images/pink-envelope.svg";
import navyEnvelope from "@/assets/images/navy-envelope.svg";
import Carousel from "../ui/Carousel";
import { useState } from "react";

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
        <div className="flex flex-col justify-center items-center relative ">
            <Image src={selectedEnvelope} width={325} height={200} alt="envelope" />

            <div className="w-[800px] mt-[90px] absolute left-0 top-[160px] overflow-auto">
                <Carousel>
                    {envelopeItems.map((envelope) => (
                        <button type="button" onClick={() => handleClick(envelope.src)} className="px-1">
                            <Image src={envelope.src} alt={envelope.alt} width={156} height={97} />
                        </button>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default EnvelopeList;
