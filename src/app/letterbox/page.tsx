import { Button } from "@/components/common";
import React from "react";

const LetterBox = () => {
    return (
        <div className="inner">
            <div className="title">
                <span className="text-primary">user</span>님의 편지함입니다.
                <h3 className="text-[16px] font-semibold">
                    총 <span className="text-primary font-semibold">5</span>개의 편지가 도착했습니다.
                </h3>
            </div>
            <Button type="button" color="btn-blue" full label="내 편지함 가기" handleClick={() => {}} />
        </div>
    );
};

export default LetterBox;
