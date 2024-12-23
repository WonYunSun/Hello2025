"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import snake from "@/assets/images/snake.svg";
import { SignupData } from "./SignupForm";
import CheckboxInput from "../../../components/common/CheckboxInput";
import { Button, InputForm } from "../../../components/common";
import TermsModal from "./TermsModal";

type NicknameProps = {
    onNext: (data: Pick<SignupData, "nickname">) => void;
};

const Nickname = ({ onNext }: NicknameProps) => {
    const handleNext = () => {
        onNext({ nickname: "test-nickname" });
    };

    const [nickname, setNickname] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    return (
        <>
            <div className="inner">
                <section className="flex flex-col justify-between h-full">
                    <main className="flex flex-col justify-between h-[500px]">
                        <div className="grid pt-[40px] relative">
                            <h1 className="title">
                                <span className="text-primary">어떤 이름</span>으로
                                <br />
                                편지함을 만드시겠어요?
                            </h1>
                            <div className="absolute top-32 right-0">
                                <Image width={65} height={70} src={snake} alt="snake" />
                            </div>
                        </div>

                        <div className="grid gap-[50px]">
                            <div className="grid gap-[12px]">
                                <div className="text-[20px] font-semibold">닉네임</div>
                                <InputForm
                                    type="text"
                                    full={true}
                                    value={nickname}
                                    handleChange={(e) => setNickname(e.target.value)}
                                    maxLength={8}
                                />
                            </div>

                            <div className="grid gap-[24px]">
                                <CheckboxInput label="전체 동의" />
                                <hr className="border-1 border-textDark" />
                                <div className="grid gap-[16px]">
                                    <CheckboxInput blueLabel="(필수)" label="만 14세 이상이에요" />
                                    <button
                                        onClick={() => {
                                            setModalOpen(true);
                                        }}
                                    >
                                        <CheckboxInput blueLabel="(필수)" label="이용약관 및 개인정보수집이용 동의" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>

                    <Button type="button" color="btn-blue" full label="다음으로" handleClick={() => handleNext()} />
                </section>

                {modalOpen && <TermsModal modalBackground={modalBackground} setModalOpen={setModalOpen} />}
            </div>
        </>
    );
};

export default Nickname;
