const Radiobtns = ({ text1, text2 }: { text1: string; text2: string }) => {
    return (
        <div className="grid gap-[20px]">
            <div>
                <input type="radio" name="signup" id="option1" defaultChecked className="peer hidden" />
                <div className="px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] btn-white place-content-center text-center peer-checked:bg-primary peer-checked:bg-opacity-20 peer-checked:text-primary peer-checked:border-primary">
                    <label htmlFor="option1">{text1}</label>
                </div>
            </div>
            <div>
                <input type="radio" name="signup" id="option2" className="peer hidden" />
                <div className="peer px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] btn-white place-content-center text-center peer-checked:bg-primary peer-checked:bg-opacity-20 peer-checked:text-primary peer-checked:border-primary">
                    <label htmlFor="option2">{text2}</label>
                </div>
            </div>
        </div>
    );
};

export default Radiobtns;
