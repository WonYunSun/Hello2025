type ToggleSettingProps = {
    label: string;
    value: boolean;
    trueLabel: string;
    falseLabel: string;
    onToggle: () => Promise<void>;
};

const ToggleSetting: React.FC<ToggleSettingProps> = ({ label, value, trueLabel, falseLabel, onToggle }) => {
    return (
        <li className="flex justify-between">
            <p className="text-[18px] font-semibold mt-1">{label}</p>
            <button type="button" className="font-semibold text-gray-400" onClick={onToggle}>
                {value ? trueLabel : falseLabel}
            </button>
        </li>
    );
};

export default ToggleSetting;
