import Image from "next/image";
import redEnvelope from "@/assets/images/red-envelope.svg";

const EnvelopeSection = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image src={redEnvelope} width={325} height={200} alt="envelope" />
        </div>
    );
};

export default EnvelopeSection;
