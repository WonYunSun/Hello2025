type InputProps = {
    type: "text" | "password" | "email";
    placeholder?: string;
    full: boolean;
    id?: string;
    value: string;
    name?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
};

const InputForm: React.FC<InputProps> = ({
    type = "text",
    placeholder,
    full = true,
    id,
    value,
    name,
    handleChange,
    maxLength
}) => {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                id={id}
                name={name}
                onChange={handleChange}
                className={`${
                    full ? "w-full" : ""
                } h-[50px] pl-5 pr-20 border-[1px] border-beigeLight rounded-[5px] text-lg`}
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
