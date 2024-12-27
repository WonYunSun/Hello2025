type ToggleSettingProps = {
    label: string;
    value: boolean; // boolean 값
    trueLabel: string; // true일 때 표시할 문자열
    falseLabel: string; // false일 때 표시할 문자열
    onToggle: () => Promise<void>;
};

const ToggleSetting: React.FC<ToggleSettingProps> = ({ label, value, trueLabel, falseLabel, onToggle }) => {
    return (
        <li className="flex justify-between">
            <p className="text-[18px] font-semibold mt-1">{label}</p>
            <button type="button" className="font-semibold text-gray-400" onClick={onToggle}>
                {value ? trueLabel : falseLabel} {/* trueLabel 또는 falseLabel 표시 */}
            </button>
        </li>
    );
};

export default ToggleSetting;
