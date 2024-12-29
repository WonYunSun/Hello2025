"use client";
import { useState } from "react";
import Image from "next/image";
import snake from "@/assets/images/snake.svg";
import type { UserTable } from "@/lib/types/usertable";
import CheckboxInput from "../../../components/common/CheckboxInput";
import { Button, InputForm } from "../../../components/common";
import TermsModal from "./TermsModal";

type NicknameProps = {
    prevNickname: UserTable["username"];
    onNext: (data: Pick<UserTable, "username">) => void;
};

const Nickname = ({ prevNickname, onNext }: NicknameProps) => {
    const [nickname, setNickname] = useState(prevNickname);

    const handleNext = () => {
        onNext({ username: nickname });
    };

    const [checkItems, setCheckItems] = useState({ isAdult: false, isAgreed: false });
    const isAllChecked = checkItems.isAdult && checkItems.isAgreed ? true : false;

    const handleAllCheck = () => {
        if (checkItems.isAdult === false || checkItems.isAgreed === false) {
            setCheckItems({ isAdult: true, isAgreed: true });
        } else {
            setCheckItems({ isAdult: !checkItems.isAdult, isAgreed: !checkItems.isAdult });
        }
    };

    const [modalOpen, setModalOpen] = useState(false);

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
                                <CheckboxInput label="전체 동의" checked={isAllChecked} onChange={handleAllCheck} />
                                <hr className="border-1 border-textDark" />
                                <div className="grid gap-[16px]">
                                    <CheckboxInput
                                        blueLabel="(필수)"
                                        label="만 14세 이상이에요"
                                        checked={checkItems.isAdult}
                                        onChange={() => setCheckItems({ ...checkItems, isAdult: !checkItems.isAdult })}
                                    />

                                    <CheckboxInput
                                        blueLabel="(필수)"
                                        label="이용약관 및 개인정보수집이용 동의"
                                        checked={checkItems.isAgreed}
                                        onChange={() => {
                                            setCheckItems({ ...checkItems, isAgreed: !checkItems.isAgreed });
                                            if (!checkItems.isAgreed) {
                                                setModalOpen(true);
                                            }
                                        }}
                                        onLabelClick={() => {
                                            setModalOpen(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </main>

                    <Button
                        disabled={!(isAllChecked && nickname)}
                        type="button"
                        color="btn-blue"
                        full
                        label="다음으로"
                        handleClick={() => handleNext()}
                    />
                </section>

                {modalOpen && <TermsModal setModalOpen={setModalOpen} />}
            </div>
        </>
    );
};

export default Nickname;
