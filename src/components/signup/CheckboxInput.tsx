const CheckboxInput = ({ label, blueLabel }: { label: string; blueLabel?: string }) => {
    return (
        <div className="flex place-items-center gap-[11px]">
            <input
                type="checkbox"
                className="appearance-none h-5 w-5 border-[1px] border-beigeLight rounded-[3px] bg-white checked:bg-primary checked:bg-[url('../assets/images/check.svg')] bg-no-repeat bg-center shadow-none"
            />
            <div className="text-[16px] font-semibold">
                <span className="text-primary">{blueLabel}</span> {label}
            </div>
        </div>
    );
};

export default CheckboxInput;
