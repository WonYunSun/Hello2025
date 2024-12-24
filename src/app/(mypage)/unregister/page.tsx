import SmallButton from "@/components/ui/SmallButton";
import Image from "next/image";
import cryingSnake from "@/assets/images/crying-snake.svg";
import React from "react";
import { Button, CheckboxInput } from "@/components/common";

const Unregister = () => {
    return (
        <div className="inner">
            <section className="flex justify-between relative">
                <h1 className="title">회원 탈퇴</h1>
                <SmallButton icon="icon-back.svg" to={"/settings"} />
            </section>
            <p className="mt-8 text-[20px] font-semibold">
                회원 탈퇴 후에는 <span className="text-warning">편지함과 메시지가 삭제되며</span>
                <br />
                절대 되돌릴 수 없어요
            </p>
            <div className="mt-[50px] flex justify-center">
                <Image src={cryingSnake} alt="" width={140} height={150} />
            </div>

            <div className="mt-10">
                <CheckboxInput label="모든 데이터를 삭제하고 탈퇴하는 것에 동의합니다." />
            </div>
            <div className="mt-20">
                <Button type="button" color="btn-red" full={true} label="회원 탈퇴" />
            </div>
        </div>
    );
};

export default Unregister;
