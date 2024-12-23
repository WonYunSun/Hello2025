import React from "react";

type ButtonProps = {
    type?: "submit" | "button" | "reset";
    color?: "blue" | "white" | "red";
    label: string;
    handleClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type = "button", color = "blue", label, handleClick }) => {
    return (
        <button type={type} className={`btn-${color}`} onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;
