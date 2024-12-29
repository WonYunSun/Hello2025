const Radiobtns = ({
    isOption1,
    onChangeHandler,
    text1,
    text2
}: {
    isOption1: boolean;
    onChangeHandler: React.Dispatch<React.SetStateAction<boolean>>;
    text1: string;
    text2: string;
}) => {
    return (
        <div className="grid gap-[20px]">
            <div>
                <input
                    type="radio"
                    name="signup"
                    id="option1"
                    checked={isOption1}
                    className="peer hidden"
                    onChange={() => onChangeHandler(true)}
                />
                <label
                    htmlFor="option1"
                    className="cursor-pointer block px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] btn-white place-content-center text-center peer-checked:bg-primary peer-checked:bg-opacity-20 peer-checked:text-primary peer-checked:border-primary"
                >
                    {text1}
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    name="signup"
                    id="option2"
                    checked={!isOption1}
                    className="peer hidden"
                    onChange={() => onChangeHandler(false)}
                />
                <label
                    htmlFor="option2"
                    className="cursor-pointer block peer px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] btn-white place-content-center text-center peer-checked:bg-primary peer-checked:bg-opacity-20 peer-checked:text-primary peer-checked:border-primary"
                >
                    {text2}
                </label>
            </div>
        </div>
    );
};

export default Radiobtns;
