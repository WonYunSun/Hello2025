import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import snake from "@/assets/images/snake.svg";
import { Button } from "@/components/common";

type LayoutProps = {
    children: ReactNode;
    title: string;
    nextButtonLabel?: string;
    onPrev?: () => void;
    handleClick?: () => void;
};

const Layout = ({ children, title, nextButtonLabel = "다음으로", onPrev, handleClick }: LayoutProps) => {
    return (
        <section className="w-full h-full flex flex-col justify-between">
            <header className="relative">
                <h1 className="title">
                    <span className="text-primary">김철수</span>님 에게 보낼
                    <br />
                    {title}
                </h1>
                <div className="absolute top-16 right-0">
                    <Image src={snake} width={65} height={70} alt="snake" />
                </div>
            </header>
            {children}
            <div className="flex gap-5">
                {onPrev ? (
                    <Button type="button" color="btn-white" full={false} label="이전" handleClick={onPrev} />
                ) : (
                    <Link href="/">
                        <Button type="button" color="btn-white" full={false} label="이전" />
                    </Link>
                )}
                <Button type="button" color="btn-blue" full={true} label={nextButtonLabel} handleClick={handleClick} />
            </div>
        </section>
    );
};

export default Layout;
