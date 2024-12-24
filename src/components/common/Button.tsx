type ButtonProps = {
    type: "submit" | "button" | "reset";
    color: "btn-blue" | "btn-white" | "btn-red";
    full: boolean;
    label: string;
    handleClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type = "button", color = "btn-blue", full = true, label, handleClick }) => {
    return (
        <button
            type={type}
            className={`${
                full ? "w-full" : ""
            } min-w-[100px] px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] ${color}`}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;
