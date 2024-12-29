import { ClipLoader } from "react-spinners";

type LoadingProps = {
    size?: number;
    color?: string;
};

const Loading = ({ size = 60, color = "#d4c4b3" }: LoadingProps) => {
    return (
        <div className="w-full h-full absolute left-0 top-0 flex items-center justify-center">
            <ClipLoader size={size} color={color} loading={true} />
        </div>
    );
};

export default Loading;
