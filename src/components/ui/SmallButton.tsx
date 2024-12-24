import Image from "next/image";
import { useRouter } from "next/navigation";

type SmallButtonProps = {
    icon: string;
    to?: string;
    onBack?: boolean;
};

const SmallButton: React.FC<SmallButtonProps> = ({ icon, to, onBack }) => {
    const router = useRouter();

    const handleClick = () => {
        if (onBack) {
            router.back();
        } else if (to) {
            router.push(to);
        }
    };

    return (
        <button
            onClick={handleClick}
            className="w-[35px] h-[35px] bg-beige rounded-[5px] flex justify-center items-center"
        >
            <Image src={`${icon}`} alt="" width={23} height={20} />
        </button>
    );
};

export default SmallButton;
