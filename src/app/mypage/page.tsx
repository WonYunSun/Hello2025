"use client";
import InputForm from "@/components/common/InputForm";
import React, { useState } from "react";

const page = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value); // 입력값 업데이트
    };

    return (
        <>
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
