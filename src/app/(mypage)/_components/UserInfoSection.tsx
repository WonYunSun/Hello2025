"use client";
import { InputForm } from "@/components/common";
import React, { useState } from "react";

const UserInfoSection = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <section className="mt-10 pb-5 border-b-[1px] border-textDark">
                <div className="flex justify-between">
                    <p className="text-[28px] font-bold tracking-tight">
                        <span className="text-primary">홍길동</span>님 안녕하세요
                    </p>
                    <button type="button" className="font-bold">
                        로그아웃
                    </button>
                </div>
                <p>구글로 로그인중</p>
            </section>

            <section className="mt-7 pb-7 border-b-[1px] border-gray-300">
                <div className="mb-3 flex justify-between">
                    <p className="text-[20px] font-bold tracking-tight">닉네임</p>
                    <button type="button" className="font-bold">
                        변경
                    </button>
                </div>
                <InputForm type="text" full={true} value={inputValue} handleChange={handleInputChange} maxLength={8} />
            </section>
        </>
    );
};

export default UserInfoSection;
