interface AlertModalProps {
    message: string; // 알림 메시지
    show: boolean; // 표시 여부
}

const AlertModal = ({ message, show }: AlertModalProps) => {
    if (!show) return null;

    return (
        <div
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded shadow-lg transition-all duration-500 opacity-100"
            style={{ transition: "opacity 1s ease-in-out, transform 1s ease" }}
        >
            {message}
        </div>
    );
};

export default AlertModal;
