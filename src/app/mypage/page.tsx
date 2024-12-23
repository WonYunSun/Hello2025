"use client";
import { Button, InputForm } from "@/components/common";
import SmallButton from "@/components/ui/SmallButton";
import React, { useState } from "react";

const page = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="inner">
            <SmallButton icon="icon-user.svg" />
            <SmallButton icon="icon-back.svg" />
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
        </div>
    );
};

export default page;
