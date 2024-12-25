"use client";
import Image from "next/image";
import colorLetter from "@/assets/images/color-letter.svg";
import patternLetter from "@/assets/images/pattern-letter.svg";
import { DecorationData } from "../DecorationForms";

type LetterListProps = {
    selectedLetter: DecorationData["letter"];
    onLetterSelect: (letter: DecorationData["letter"]) => void;
};

// 편지지들
const letterItems = [
    { src: colorLetter, alt: "color-letter" },
    { src: patternLetter, alt: "pattern-letter" }
];

const LetterList = ({ selectedLetter, onLetterSelect }: LetterListProps) => {
    const handleClick = (letter: DecorationData["letter"]) => {
        onLetterSelect(letter);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-20">
            <Image src={selectedLetter} width={225} height={240} alt="letter" />

            <div className="flex flex-start w-full gap-4">
                {letterItems.map((letter, i) => (
                    <button key={i} type="button" onClick={() => handleClick(letter.src)}>
                        <div className="relative w-[156px] h-[97px] overflow-hidden">
                            <div className="absoulte top-0 left-0 w-[312px] h-[194px]">
                                <Image src={letter.src} alt={letter.alt} width={312} height={194} />
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LetterList;
