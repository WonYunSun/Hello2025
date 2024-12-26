import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/lib/utils/supabase/client";
import { Decoration } from "@/lib/types/decoration";

export const sendMessage = async (decorationData: Decoration, messageData: Decoration["message"]) => {
    try {
        const supabase = await createClient();
        const session = await supabase.auth.getSession();

        const userId = session.data.session?.user.id || "뭘로하지?"; // TODO : 익명 사용자 ID 처리
        const envelope_type = decorationData.envelope.src.split("/").pop()?.split(".")[0];
        const paper_type = decorationData.letter.src.split("/").pop()?.split(".")[0];

        const payload = {
            id: uuidv4(),
            recipient_id: "9a993022-9bd9-427c-a371-9b8135377070", // TODO : 임시값 변경
            sender_id: userId,
            content: messageData.text,
            envelope_type,
            paper_type,
            is_private: messageData.isPrivate,
            sendername: messageData.name
        };

        const res = await fetch("/api/decoration", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            console.error("Failed to send data");
            throw new Error("Failed to send data");
        }
    } catch (error) {
        console.error("Error in sendMessage:", error);
        throw error;
    }
};
