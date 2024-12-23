"use client";
import { Button, InputForm } from "@/components/common";
import React, { useState } from "react";

const page = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value); // 입력값 업데이트
    };

    return (
        <>
            <p className="title">가나다라</p>
            <Button type="button" color="btn-blue" full={true} label="다음으로" />
            <InputForm
                type="text"
                full={true}
                placeholder=""
                value={inputValue}
                handleChange={handleInputChange}
                maxLength={8}
            />
        </>
    );
};

export default page;
