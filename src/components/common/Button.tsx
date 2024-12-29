type ButtonProps = {
    type: "submit" | "button" | "reset";
    color: "btn-blue" | "btn-white" | "btn-red" | "transparent";
    full: boolean;
    label: string;
    handleClick?: () => void;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    type = "button",
    color = "btn-blue",
    full = true,
    label,
    handleClick,
    disabled
}) => {
    return (
        <button
            type={type}
            className={`${
                full ? "w-full" : ""
            } min-w-[100px] px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] ${color} ${
                disabled ? "opacity-50" : ""
            }`}
            onClick={handleClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
