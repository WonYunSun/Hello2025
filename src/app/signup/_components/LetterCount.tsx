"use client";

import { SignupData } from "./SignupForm";

type LetterCountProps = {
    signupData: SignupData;
    onPrev: () => void;
};

const LetterCount = ({ signupData, onPrev }: LetterCountProps) => {
    const handleClick = () => {
        const finalData = { ...signupData, letterCount: true };
        console.log(finalData);
    };
    return (
        <>
            <h1>편지 개수</h1>
            <button onClick={onPrev}>이전</button>
            <button onClick={handleClick}>다음</button>
        </>
    );
};

export default LetterCount;
