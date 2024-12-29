type ToggleSettingProps = {
    label: string;
    value: boolean;
    trueLabel: string;
    falseLabel: string;
    onToggle: () => Promise<void>;
};

const ToggleSetting: React.FC<ToggleSettingProps> = ({ label, value, trueLabel, falseLabel, onToggle }) => {
    return (
        <li className="flex items-center justify-between py-1">
            <p className="text-[18px] font-semibold">{label}</p>
            <div
                className={`relative flex w-[100px] h-7 rounded-full select-none transition duration-200 ease-in text-white ${
                    value ? "bg-beige" : "bg-gray-300"
                }`}
            >
                <p className={`z-40 w-1/2 leading-7 text-center text-[12px] ${value ? "text-textDark" : "text-white"}`}>
                    {trueLabel}
                </p>
                <p className={`z-40 w-1/2 leading-7 text-center text-[12px] ${value ? "text-white" : "text-textDark"}`}>
                    {falseLabel}
                </p>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={onToggle}
                    className="toggle-checkbox absolute left-0 top-0 w-full h-full z-50 opacity-0"
                />

                <div
                    className={`absolute left-0 top-0 w-[50px] h-7 rounded-full bg-white border-2 transition-transform duration-300 ease-in-out ${
                        value ? "" : "transform translate-x-full"
                    }`}
                />
            </div>
        </li>
    );
};

export default ToggleSetting;
