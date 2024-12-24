const Radiobtns = ({ text1, text2 }: { text1: string; text2: string }) => {
    return (
        <div className="grid gap-[12px]">
            <div className="min-w-[100px] px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] btn-white">
                <input type="radio" name="writerCheck" defaultChecked className="appearance-none checked:bg-primary" />
                <label>{text1}</label>
            </div>
            <div className="min-w-[100px] px-8 h-[60px] font-bold text-lg border-[1px] rounded-[10px] btn-white">
                <input type="radio" name="writerCheck" className="appearance-none" />
                <label>{text2}</label>
            </div>
        </div>
    );
};

export default Radiobtns;
