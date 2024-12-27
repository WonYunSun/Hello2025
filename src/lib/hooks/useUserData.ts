// import { useEffect, useState } from "react";
// import { createClient } from "@/lib/utils/supabase/client";
// import { Session } from "@supabase/supabase-js";
// import { UserTable } from "../types/usertable";

// const useUserData = (session: Session | null) => {
//     const [userData, setUserData] = useState<UserTable | null>(null);
//     const supabase = createClient();

//     useEffect(() => {
//         const fetchUserData = async () => {
//             if (session) {
//                 const { data, error } = await supabase.from("users").select("*").eq("id", session.user.id).single();

//                 if (error) {
//                     console.error("사용자 데이터 가져오기 오류:", error);
//                 } else {
//                     setUserData(data);
//                 }
//             }
//         };

//         fetchUserData();
//     }, [session, supabase]);

//     return { userData, setUserData, supabase };
// };

// export default useUserData;
