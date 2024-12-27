// hooks/useUserData.ts
import { useEffect, useState } from "react";
import { createClient } from "@/lib/utils/supabase/client";
import { Session } from "@supabase/supabase-js";

type User = {
    id: string;
    username: string;
    allow_anonymous: boolean;
    count_visibility: boolean;
    letter_visibility: boolean;
};

const useUserData = (session: Session | null) => {
    const [userData, setUserData] = useState<User | null>(null);
    const supabase = createClient(); // 여기에서 클라이언트 생성

    useEffect(() => {
        const fetchUserData = async () => {
            if (session) {
                const { data, error } = await supabase.from("users").select("*").eq("id", session.user.id).single();

                if (error) {
                    console.error("사용자 데이터 가져오기 오류:", error);
                } else {
                    setUserData(data);
                }
            }
        };

        fetchUserData();
    }, [session, supabase]);

    return { userData, setUserData, supabase }; // supabase 클라이언트를 반환
};

export default useUserData;
