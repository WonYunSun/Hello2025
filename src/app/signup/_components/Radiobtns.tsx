const Radiobtns = ({ text1, text2 }: { text1: string; text2: string }) => {
    return (
        <div className="grid gap-[20px]">
            <div>
                <input type="radio" name="signup" id="option1" defaultChecked className="peer hidden" />
                <label
                    htmlFor="option1"
                    className="cursor-pointer block px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] btn-white place-content-center text-center peer-checked:bg-primary peer-checked:bg-opacity-20 peer-checked:text-primary peer-checked:border-primary"
                >
                    {text1}
                </label>
            </div>
            <div>
                <input type="radio" name="signup" id="option2" className="peer hidden" />
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
