type InputProps = {
    type: "text" | "password" | "email";
    placeholder?: string;
    full: boolean;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
};

const InputForm: React.FC<InputProps> = ({
    type = "text",
    placeholder,
    full = true,
    value,
    handleChange,
    maxLength
}) => {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={`${full ? "w-full" : ""} h-[50px] px-5 border-[1px] border-beigeLight rounded-[5px] text-lg`}
                maxLength={maxLength}
            />
            {maxLength && (
                <span className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-[20px]">
                    {value.length}/{maxLength}
                </span>
            )}
        </div>
    );
};
export default InputForm;
