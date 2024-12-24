"use client";
import { InputForm } from "@/components/common";
import React, { useState } from "react";

const NicknameEditSection = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <section className="mt-7 pb-7 border-b-[1px] border-gray-300">
            <div className="mb-3 flex justify-between">
                <p className="text-[20px] font-bold tracking-tight">닉네임</p>
                <button type="button" className="font-bold">
                    변경
                </button>
            </div>
            <InputForm type="text" full={true} value={inputValue} handleChange={handleInputChange} maxLength={8} />
        </section>
    );
};

export default NicknameEditSection;
