"use client";

import { Button } from "@/components/common";
import LetterList from "./_components/LetterList";

const LetterBox = () => {
    return (
        <div className="inner">
            <div className="title">
                <span className="text-primary">user</span>님의 편지함입니다.
                <h3 className="text-[16px] font-semibold">
                    총 <span className="text-primary font-semibold">5</span>개의 편지가 도착했습니다.
                </h3>
            </div>
            <LetterList></LetterList>
            <Button
                type="button"
                color="btn-blue"
                full
                label="편지 남기기"
                handleClick={() => {
                    console.log("Button clicked");
                }}
            />
            <div className="min-w-[100px] pt-[24px] text-center">
                <button className="font-bold text-lg" onClick={() => {}}>
                    내 편지함으로 돌아가기
                </button>
            </div>
        </div>
    );
};

export default LetterBox;
