import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/lib/utils/supabase/client";
import { Decoration } from "@/lib/types/decoration";

export const getUsername = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/decoration`);
        if (!res.ok) {
            throw new Error("Failed to get data");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error("Error get Username");
    }
};

export const sendMessage = async (decorationData: Decoration, messageData: Decoration["message"]) => {
    try {
        const supabase = await createClient();
        const session = await supabase.auth.getSession();

        const userId = session.data.session?.user.id || "anonymous";
        const envelope_type = decorationData.envelope.src.split("/").pop()?.split(".")[0];
        const paper_type = decorationData.letter.src.split("/").pop()?.split(".")[0];

        const payload = {
            id: uuidv4(),
            recipient_id: "ebe62c44-7bec-4762-910f-2f00686504cf", // TODO : 임시값 변경
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
            throw new Error("Failed to send data");
        }
    } catch (error) {
        throw new Error("Error sendMessage");
    }
};
