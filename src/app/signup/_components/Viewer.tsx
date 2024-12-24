"use client";

import { SignupData } from "./SignupForm";

type ViewerProps = {
    onNext: (data: Pick<SignupData, "viewer">) => void;
    onPrev: () => void;
};

const Viewer = ({ onNext, onPrev }: ViewerProps) => {
    const handleClick = () => {
        onNext({ viewer: true });
    };

    return (
        <>
            <h1>뷰어</h1>
            <button onClick={onPrev}>이전</button>
            <button onClick={handleClick}>다음</button>
        </>
    );
};

export default Viewer;
