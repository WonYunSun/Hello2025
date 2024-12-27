type CheckboxInputProps = {
    label: string;
    blueLabel?: string;
    checked?: boolean;
    onChange?: () => void;
    onLabelClick?: () => void;
};

const CheckboxInput = ({ label, blueLabel, checked, onChange, onLabelClick }: CheckboxInputProps) => {
    return (
        <div className="flex place-items-center gap-[11px]">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="appearance-none h-5 w-5 border-[1px] border-beigeLight rounded-[3px] bg-white checked:bg-primary checked:bg-[url('../assets/images/check.svg')] bg-no-repeat bg-[center_top_3px]"
            />
            <div className={`text-[16px] font-semibold`}>
                <span className="text-primary">{blueLabel}</span>
                <span onClick={onLabelClick} className={onLabelClick ? "cursor-pointer underline" : ""}>
                    {label}
                </span>
            </div>
        </div>
    );
};

export default CheckboxInput;
